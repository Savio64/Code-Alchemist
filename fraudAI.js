// fraudAI.js - Safenet AI Detection Logic

// Suspicious keywords with weighted severity
const KEYWORDS = [
    { word: "investment", weight: 20 },
    { word: "crypto", weight: 20 },
    { word: "bitcoin", weight: 20 },
    { word: "wire transfer", weight: 30 },
    { word: "gift card", weight: 30 },
    { word: "urgent", weight: 15 },
    { word: "act now", weight: 15 },
    { word: "suspended", weight: 25 },
    { word: "verify your account", weight: 25 },
    { word: "winner", weight: 20 },
    { word: "lottery", weight: 20 },
    { word: "password", weight: 30 },
    { word: "social security", weight: 40 },
    { word: "irs", weight: 30 },
    { word: "inheritance", weight: 25 },
    { word: "prince", weight: 20 },
    { word: "bank account", weight: 25 }
];

function detectFraud(text) {
    if (!text) return { riskScore: 0, label: "SAFE", reasons: [] };

    const lowerText = text.toLowerCase();
    let score = 0;
    let reasons = [];

    // 1. Keyword Analysis
    KEYWORDS.forEach(item => {
        if (lowerText.includes(item.word)) {
            score += item.weight;
            reasons.push(`Suspicious keyword found: "${item.word}"`);
        }
    });

    // 2. Link Analysis
    const linkRegex = /(https?:\/\/[^\s]+)/g;
    const links = lowerText.match(linkRegex);
    if (links) {
        links.forEach(link => {
            if (link.includes("ngrok") || link.includes("bit.ly") || link.includes("tinyurl")) {
                score += 30;
                reasons.push("Hidden/Shortened URL detected (often used in scams)");
            } else if (!link.startsWith("https")) {
                score += 20;
                reasons.push("Insecure (HTTP) link detected");
            } else {
                // Just having a link adds a small risk in this context if combined with other words
                score += 5;
            }
        });
    }

    // 3. Pattern Analysis (Urgency + Money)
    if (lowerText.includes("urgent") && (lowerText.includes("pay") || lowerText.includes("money"))) {
        score += 20;
        reasons.push("Combination of urgency and financial demand detected");
    }

    // Normalize Score (Cap at 100)
    score = Math.min(score, 100);

    // Determine Label
    let label = "SAFE";
    let advice = "No obvious threats detected. Stay vigilant.";

    if (score >= 75) {
        label = "DANGEROUS";
        advice = "High risk of fraud! Do not click links or reply. Block sender.";
    } else if (score >= 40) {
        label = "SUSPICIOUS";
        advice = "Potential scam. Verify the source independently.";
    }

    return {
        riskScore: score,
        label: label,
        reasons: reasons,
        advice: advice
    };
}

module.exports = { detectFraud };
