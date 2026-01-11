const { detectFraud } = require('./fraudAI');

const testCases = [
    { input: "user@gmail.com", expectedLabel: "SAFE", desc: "Valid Email" },
    { input: "https://google.com", expectedLabel: "SAFE", desc: "Whitelisted HTTPS URL" },
    { input: "www.google.com", expectedLabel: "SAFE", desc: "Plain Whitelisted URL" },
    { input: "google.com", expectedLabel: "SAFE", desc: "Domain only" },
    { input: "www.amazon.com", expectedLabel: "SAFE", desc: "Plain Whitelisted URL (Amazon)" },
    { input: "hello", expectedLabel: "SPAM / UNSAFE", desc: "Plain Text (Spam)" },
    { input: "www.fake-site.com", expectedLabel: "SPAM / UNSAFE", desc: "Untrusted Plain URL" }
];

console.log("=== SAFENET ULTIMATE STRICT LOGIC VERIFICATION ===");
let passed = 0;

testCases.forEach((test, index) => {
    const result = detectFraud(test.input);
    const isPass = result.label === test.expectedLabel;
    if (isPass) passed++;

    console.log(`\nTest #${index + 1}: ${test.desc}`);
    console.log(`Input:    "${test.input}"`);
    console.log(`Expected: ${test.expectedLabel}`);
    console.log(`Actual:   ${result.label} (Risk: ${result.riskScore})`);
    console.log(`Result:   ${isPass ? "✅ PASS" : "❌ FAIL"}`);
});

console.log(`\nFinal Result: ${passed}/${testCases.length} Tests Passed.`);
