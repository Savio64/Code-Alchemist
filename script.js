document.addEventListener('DOMContentLoaded', () => {

    // --- Tabs Logic ---
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons and contents
            tabBtns.forEach(b => b.classList.remove('active'));
            tabContents.forEach(c => c.classList.remove('active'));

            // Add active class to clicked button and target content
            btn.classList.add('active');
            const targetId = btn.getAttribute('data-target');
            document.getElementById(targetId).classList.add('active');
        });
    });

    // --- Scam Detector Logic ---
    const analyzeBtn = document.getElementById('analyzeBtn');
    const scamInput = document.getElementById('scamInput');
    const resultArea = document.getElementById('resultArea');
    const resultTitle = document.getElementById('resultTitle');
    const resultDescription = document.getElementById('resultDescription');
    const resultIcon = document.getElementById('resultIcon');
    const riskFactorsList = document.getElementById('riskFactors');

    // Simple keyword database for demonstration
    const scamKeywords = [
        { word: 'urgent', type: 'Pressure Tactic' },
        { word: 'immediately', type: 'Pressure Tactic' },
        { word: 'password', type: 'Sensitive Info Request' },
        { word: 'bank account', type: 'Sensitive Info Request' },
        { word: 'verify your account', type: 'Phishing Pattern' },
        { word: 'won a lottery', type: 'Too Good To Be True' },
        { word: 'inheritance', type: 'Advance Fee Fraud' },
        { word: 'gift card', type: 'Payment Method (Red Flag)' },
        { word: 'western union', type: 'Payment Method (Red Flag)' },
        { word: 'wire transfer', type: 'Payment Method (Red Flag)' },
        { word: 'click here', type: 'Suspicious Link' },
        { word: 'act now', type: 'Pressure Tactic' },
        { word: 'irs', type: 'Authority Impersonation' },
        { word: 'tax refund', type: 'Lure' },
        { word: 'suspicious activity', type: 'Fear Tactic' }
    ];

    analyzeBtn.addEventListener('click', () => {
        const text = scamInput.value.toLowerCase();

        if (!text.trim()) {
            alert('Please paste some text to analyze first.');
            return;
        }

        // Simulate processing time
        analyzeBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Analyzing...';

        setTimeout(() => {
            const foundRisks = [];
            let score = 0;

            scamKeywords.forEach(item => {
                if (text.includes(item.word)) {
                    foundRisks.push(`Found "${item.word}" (${item.type})`);
                    score++;
                }
            });

            // Basic Heuristics
            if (foundRisks.length === 0) {
                showResult('safe');
            } else if (score < 3) {
                showResult('suspicious', foundRisks);
            } else {
                showResult('danger', foundRisks);
            }

            analyzeBtn.innerHTML = '<i class="fa-solid fa-bolt"></i> Analyze Now';
        }, 1500);
    });

    function showResult(status, risks = []) {
        resultArea.classList.remove('hidden', 'visible');

        // Trigger reflow for animation
        void resultArea.offsetWidth;

        resultArea.className = 'result-area visible'; // Reset base classes
        riskFactorsList.innerHTML = '';

        if (status === 'safe') {
            resultArea.style.borderLeftColor = 'var(--risk-safe)';
            resultTitle.textContent = 'Likely Safe';
            resultTitle.style.color = 'var(--risk-safe)';
            resultDescription.textContent = "We didn't find any obvious scam keywords. However, always be cautious with unknown senders.";
            resultIcon.className = 'fa-solid fa-circle-check';
            resultIcon.style.color = 'var(--risk-safe)';
        } else if (status === 'suspicious') {
            resultArea.style.borderLeftColor = 'var(--risk-medium)';
            resultTitle.textContent = 'Suspicious Patterns Detected';
            resultTitle.style.color = 'var(--risk-medium)';
            resultDescription.textContent = "This message contains some energetic or specific language often used in scams. Proceed with caution.";
            resultIcon.className = 'fa-solid fa-triangle-exclamation';
            resultIcon.style.color = 'var(--risk-medium)';
        } else {
            resultArea.style.borderLeftColor = 'var(--risk-high)';
            resultTitle.textContent = 'High Risk - Likely a Scam!';
            resultTitle.style.color = 'var(--risk-high)';
            resultDescription.textContent = "This message contains multiple strong indicators of a scam. Do not reply, click links, or send money.";
            resultIcon.className = 'fa-solid fa-ban';
            resultIcon.style.color = 'var(--risk-high)';
        }

        if (risks.length > 0) {
            risks.forEach(risk => {
                const li = document.createElement('li');
                li.innerHTML = `<i class="fa-solid fa-caret-right"></i> ${risk}`;
                riskFactorsList.appendChild(li);
            });
        }
    }
});
