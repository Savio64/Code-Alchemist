// fraudAI.js - Safenet Ultimate Strict Engine

// Trusted Domains (Allowlist)
const TRUSTED_DOMAINS = [
    "google.com", "yahoo.com", "bing.com", "facebook.com", "twitter.com",
    "instagram.com", "linkedin.com", "youtube.com", "netflix.com",
    "amazon.com", "microsoft.com", "apple.com", "kerala.gov.in", "india.gov.in"
];

function detectFraud(text) {
    if (!text) return { riskScore: 0, label: "SAFE", reasons: [] };

    const trimmedText = text.trim();
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const linkRegex = /(https?:\/\/[^\s]+)/g;
    const links = trimmedText.match(linkRegex);

    let isSafe = false;
    let reasons = [];

    // --- CHECK 1: Is it a valid Email? ---
    if (emailRegex.test(trimmedText)) {
        isSafe = true;
        reasons.push("Verified Email Format.");
    }

    // --- CHECK 2: Is it a Plain Whitelisted URL (e.g. www.google.com)? ---
    if (!isSafe) {
        const plainDomain = trimmedText.replace('www.', '').toLowerCase();
        if (TRUSTED_DOMAINS.includes(plainDomain)) {
            isSafe = true;
            reasons.push("Verified Trusted Domain (Plain URL).");
        }
    }

    // --- CHECK 3: Is it a valid Whitelisted HTTPS Link? ---
    if (!isSafe && links) {
        let allLinksTrusted = true;
        links.forEach(link => {
            try {
                const urlObj = new URL(link);
                const domain = urlObj.hostname.replace('www.', '');
                const isTrusted = TRUSTED_DOMAINS.some(d => domain === d || domain.endsWith('.' + d));
                const isSecure = urlObj.protocol === 'https:';

                if (!isTrusted || !isSecure) {
                    allLinksTrusted = false;
                    reasons.push(`Untrusted or Insecure link: ${domain}`);
                }
            } catch (e) {
                allLinksTrusted = false;
                reasons.push("Malformed URL detected.");
            }
        });

        if (allLinksTrusted && links.length > 0) {
            isSafe = true;
            reasons.push("Verified Trusted Domain (Secure Link).");
        }
    }

    // --- SET FINAL SCORE ---
    let score = isSafe ? 0 : 100;
    let label = isSafe ? "SAFE" : "SPAM / UNSAFE";
    let advice = isSafe
        ? "This content matches safe technical criteria (Verified Email/URL)."
        : "CRITICAL: Only verified Emails and whitelisted URLs are permitted. All other text/data is blocked.";

    if (!isSafe && reasons.length === 0) {
        reasons.push("Content is neither a verified Email nor a whitelisted URL.");
    }

    return {
        riskScore: score,
        label: label,
        reasons: reasons,
        advice: advice
    };
}

module.exports = { detectFraud };
