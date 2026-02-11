function MMA() {
    var n = parseInt(prompt("Nhập n (1-50):"));
    if (n <= 0 || n > 50 || isNaN(n)) {
        return "n không hợp lệ";
    }
    var arr = [];
    for (var i = 0; i < n; i++) {
        arr.push(parseInt(prompt("Nhập phần tử thứ " + i)));
    }
    console.log("Mảng đã nhập:", arr);
    var sum = 0;
    var count = 0;
    for (var i = 0; i < arr.length; i++) {
        if (i % 2 === 0 && arr[i] % 2 !== 0) {
            sum = sum + arr[i];
            count++;
        }
    }
    var tbc = count > 0 ? sum / count : 0;
    console.log("Trung bình cộng là: " + tbc);
    return tbc;
}