window.onload = function() {
    var generateButton = document.getElementById("generateButton");
    generateButton.addEventListener("click", function() {
        // 按钮和标题向上移动
        generateButton.classList.add("hide");
        var title = document.querySelector(".title");
        title.classList.add("hide");
        // 读取并随机排序default.json中的值
        fetch("./lib/default.json")
            .then(response => response.json())
            .then(data => {
                var sortedData = data.sort(() => Math.random() - 0.5);
                // 输出到页面中
                var output = document.createElement("div");
                output.classList.add("output");
                for (var i = 0; i < sortedData.length; i++) {
                    var seat = document.createElement("p");
                    seat.innerText = (i + 1) + ". " + sortedData[i];
                    output.appendChild(seat);
                }
                document.body.appendChild(output);
            });
    });
}
