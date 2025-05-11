
# 📦 JavaScript Sorting: Algoritma Dasar & `sort()` Method

Dokumentasi ini membahas beberapa algoritma sorting dasar yaitu **Bubble Sort**, **Selection Sort**, dan **Insertion Sort**, serta penggunaan bawaan JavaScript yaitu **`Array.prototype.sort()`**.

---

## 🧮 Bubble Sort

Bubble Sort membandingkan dua elemen berdekatan dan menukarnya jika urutannya salah. Proses ini diulang sampai array terurut.

### Ciri-ciri:
- Sederhana, tapi lambat untuk data besar
- Kompleksitas waktu: **O(n²)**

### Contoh:
```javascript
function bubbleSort(arr) {
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}
```

---

## 🟨 Selection Sort

Selection Sort memilih elemen terkecil dari array dan menukarnya dengan elemen pertama, lalu kedua, dst.

### Ciri-ciri:
- Tidak efisien untuk array besar
- Kompleksitas waktu: **O(n²)**

### Contoh:
```javascript
function selectionSort(arr) {
  let n = arr.length;
  for (let i = 0; i < n; i++) {
    let minIdx = i;
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIdx]) {
        minIdx = j;
      }
    }
    [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]];
  }
  return arr;
}
```

---

## 🟩 Insertion Sort

Insertion Sort bekerja seperti menyusun kartu, elemen dimasukkan ke posisi yang tepat satu per satu.

### Ciri-ciri:
- Cepat untuk array kecil atau hampir terurut
- Kompleksitas waktu: **O(n²)**

### Contoh:
```javascript
function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let current = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > current) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = current;
  }
  return arr;
}
```

---

## ⚙️ `sort()` Method (Built-in JavaScript)

`sort()` adalah metode bawaan JavaScript untuk mengurutkan array.

### Penting:
- Secara default, mengurutkan elemen sebagai **string** (bukan angka).
- Untuk angka, gunakan **compare function**.

### Contoh tanpa compare function:
```javascript
[10, 5, 2, 100].sort(); // [10, 100, 2, 5] → Salah untuk angka
```

### Contoh dengan compare function:
```javascript
[10, 5, 2, 100].sort((a, b) => a - b); // [2, 5, 10, 100]
```

---

## 🧠 Perbandingan Singkat

| Algoritma      | Kecepatan Terbaik | Kecepatan Terburuk | Stabil? | Cocok Untuk              |
|----------------|-------------------|---------------------|---------|---------------------------|
| Bubble Sort    | O(n)              | O(n²)               | Ya      | Data kecil/sudah hampir urut |
| Selection Sort | O(n²)             | O(n²)               | Tidak   | Belajar konsep dasar      |
| Insertion Sort | O(n)              | O(n²)               | Ya      | Data hampir terurut       |
| `sort()`       | O(n log n)        | O(n log n)          | Ya*     | Penggunaan sehari-hari    |

---

## 📌 Kesimpulan

- Gunakan algoritma manual seperti Bubble/Selection/Insertion untuk belajar logika sorting.
- Gunakan `sort()` dengan compare function saat bekerja dengan angka di JavaScript.
