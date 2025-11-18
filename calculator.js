function calcDogAge(dobStr) {
  const dob = new Date(dobStr);
  if (isNaN(dob)) return null;
  const today = new Date();
  let age = (today - dob) / (1000 * 60 * 60 * 24 * 365.2425);
  if (age < 0) return null;
  age = Math.round(age * 100) / 100;

  let humanAge;
  if (age > 0) {
    humanAge = 16 * Math.log(age) + 31;
    humanAge = Math.round(humanAge * 10) / 10;
  } else {
    humanAge = 0;
  }
  return { age, humanAge };
}

// 封裝渲染結果，並記錄localStorage
function renderResult(dobStr, result) {
  const resultDiv = document.getElementById("result");
  if (!result) {
    resultDiv.innerHTML = "<span id='error'>請選擇正確的狗狗出生日期</span>";
    // 清空儲存, 只保留日期
    localStorage.setItem("dog-dob", dobStr || "");
    localStorage.removeItem("dog-result");
    return;
  }
  const html =
    `🐶 狗狗年齡：<b>${result.age}</b> 歲<br>` +
    `👤 換算人類年齡：約 <b>${result.humanAge}</b> 歲`;
  resultDiv.innerHTML = html;
  // 儲存結果到localStorage
  localStorage.setItem("dog-dob", dobStr);
  localStorage.setItem("dog-result", html);
}

window.onload = function() {
  const dobInput = document.getElementById("dob");
  const resultDiv = document.getElementById("result");

  // 頁面載入時讀取localStorage結果
  const savedDob = localStorage.getItem("dog-dob") || "";
  const savedResult = localStorage.getItem("dog-result");

  if (savedDob) {
    dobInput.value = savedDob;
  }
  if (savedDob && savedResult) {
    resultDiv.innerHTML = savedResult;
  }

  document.getElementById("calcBtn").onclick = function () {
    const dobStr = dobInput.value;
    const result = calcDogAge(dobStr);
    renderResult(dobStr, result);
  };
};

