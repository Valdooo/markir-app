# 🔐 DAFTAR AKUN TESTING MARKIR E-PARKING

**Dibuat:** 15 November 2025  
**Developer:** Valdo Muhammad  
**Purpose:** Testing sebelum integrasi database

---

## 🎯 CARA MENGGUNAKAN

1. **Buka aplikasi:** http://localhost:8081
2. **Pilih akun** dari list di bawah
3. **Login manual:** Masukkan email & password, klik "Login"
4. **Login Google:** Klik "Login dengan Google" (auto-generate user baru)
5. **Test fitur:** Navigasi, logout, balance, membership, dll.

---

## 👨‍💼 ADMIN ACCOUNTS (2 AKUN)

### 1️⃣ Admin Utama
```
📧 Email    : admin@markir.com
🔑 Password : admin123
👤 Nama     : Admin MARKIR
📱 Phone    : 081234567890
🎭 Role     : admin
💰 Balance  : Rp 0
⭐ Member   : ACTIVE
🆔 ID       : ADM001
```
**Akses:** AdminHomeScreen → Dashboard stats, Penagihan NFC, Registrasi Motor

---

### 2️⃣ Super Admin
```
📧 Email    : superadmin@markir.com
🔑 Password : super123
👤 Nama     : Super Admin
📱 Phone    : 081234567891
🎭 Role     : admin
💰 Balance  : Rp 0
⭐ Member   : ACTIVE
🆔 ID       : ADM002
```
**Akses:** Sama seperti Admin Utama (testing multiple admin accounts)

---

## 👤 USER ACCOUNTS (10 AKUN)

### 👨‍💻 DEVELOPER ACCOUNT

#### 1️⃣ Valdo Muhammad
```
📧 Email    : valdo@markir.com
🔑 Password : valdo123
👤 Nama     : Valdo Muhammad
📱 Phone    : 081234567890
🎭 Role     : user
💰 Balance  : Rp 500,000
⭐ Member   : ACTIVE (Premium)
🆔 ID       : USR001
```
**Status:** Developer account dengan saldo tinggi & membership premium

---

### 🧪 TESTING ACCOUNTS (Generic)

#### 2️⃣ User Test 1
```
📧 Email    : user1@test.com
🔑 Password : user123
👤 Nama     : User Test 1
📱 Phone    : 081111111111
🎭 Role     : user
💰 Balance  : Rp 100,000
⭐ Member   : INACTIVE (Free)
🆔 ID       : USR002
```

#### 3️⃣ User Test 2
```
📧 Email    : user2@test.com
🔑 Password : user123
👤 Nama     : User Test 2
📱 Phone    : 081222222222
🎭 Role     : user
💰 Balance  : Rp 250,000
⭐ Member   : INACTIVE (Free)
🆔 ID       : USR003
```

#### 4️⃣ User Test 3
```
📧 Email    : user3@test.com
🔑 Password : user123
👤 Nama     : User Test 3
📱 Phone    : 081333333333
🎭 Role     : user
💰 Balance  : Rp 75,000
⭐ Member   : INACTIVE (Free)
🆔 ID       : USR004
```

---

### 🧑‍🤝‍🧑 REALISTIC USER ACCOUNTS

#### 5️⃣ Budi Santoso
```
📧 Email    : budi@gmail.com
🔑 Password : budi123
👤 Nama     : Budi Santoso
📱 Phone    : 081444444444
🎭 Role     : user
💰 Balance  : Rp 150,000
⭐ Member   : ACTIVE (Premium)
🆔 ID       : USR005
```

#### 6️⃣ Siti Nurhaliza
```
📧 Email    : siti@gmail.com
🔑 Password : siti123
👤 Nama     : Siti Nurhaliza
📱 Phone    : 081555555555
🎭 Role     : user
💰 Balance  : Rp 300,000
⭐ Member   : INACTIVE (Free)
🆔 ID       : USR006
```

#### 7️⃣ Andi Wijaya
```
📧 Email    : andi@gmail.com
🔑 Password : andi123
👤 Nama     : Andi Wijaya
📱 Phone    : 081666666666
🎭 Role     : user
💰 Balance  : Rp 200,000
⭐ Member   : ACTIVE (Premium)
🆔 ID       : USR007
```

#### 8️⃣ Dewi Lestari
```
📧 Email    : dewi@gmail.com
🔑 Password : dewi123
👤 Nama     : Dewi Lestari
📱 Phone    : 081777777777
🎭 Role     : user
💰 Balance  : Rp 450,000
⭐ Member   : ACTIVE (Premium)
🆔 ID       : USR008
```

#### 9️⃣ Rudi Hermawan
```
📧 Email    : rudi@gmail.com
🔑 Password : rudi123
👤 Nama     : Rudi Hermawan
📱 Phone    : 081888888888
🎭 Role     : user
💰 Balance  : Rp 50,000
⭐ Member   : INACTIVE (Free)
🆔 ID       : USR009
```

#### 🔟 Maya Safitri
```
📧 Email    : maya@gmail.com
🔑 Password : maya123
👤 Nama     : Maya Safitri
📱 Phone    : 081999999999
🎭 Role     : user
💰 Balance  : Rp 350,000
⭐ Member   : ACTIVE (Premium)
🆔 ID       : USR010
```

#### 1️⃣1️⃣ Agus Salim
```
📧 Email    : agus@gmail.com
🔑 Password : agus123
👤 Nama     : Agus Salim
📱 Phone    : 082111111111
🎭 Role     : user
💰 Balance  : Rp 125,000
⭐ Member   : INACTIVE (Free)
🆔 ID       : USR011
```

#### 1️⃣2️⃣ Rina Wulandari
```
📧 Email    : rina@gmail.com
🔑 Password : rina123
👤 Nama     : Rina Wulandari
📱 Phone    : 082222222222
🎭 Role     : user
💰 Balance  : Rp 275,000
⭐ Member   : ACTIVE (Premium)
🆔 ID       : USR012
```

---

## 🔵 GOOGLE SIGN-IN (AUTO-GENERATE)

```
🔘 Klik    : "Login dengan Google" (tombol putih)
⏱️ Delay   : 1.5 detik (simulasi OAuth)
🎲 Data    : Random generate
   - Email : user[XXXX]@gmail.com
   - Nama  : User [XXXX]
   - ID    : USER[XXXX]
   - Role  : user
   - Balance : Rp 50,000
   - Member  : INACTIVE (Free)
```

---

## 📊 STATISTIK AKUN

| Kategori | Jumlah |
|----------|--------|
| **Total Accounts** | 12 manual + ∞ Google |
| **Admin** | 2 akun |
| **User** | 10 akun |
| **Premium Member** | 5 user |
| **Free Member** | 5 user |
| **Total Balance** | Rp 2,825,000 |

---

## 🧪 TESTING SCENARIOS

### ✅ Test Case 1: Admin Login
```
1. Login dengan: admin@markir.com / admin123
2. Verify: Masuk ke AdminHomeScreen
3. Check: Dashboard stats tampil (Transaksi, Lunas, Tertunggak, Member)
4. Test: Navigasi ke Penagihan, Registrasi Motor, Tentang
5. Test: Logout → kembali ke LoginScreen
```

### ✅ Test Case 2: User Premium
```
1. Login dengan: dewi@gmail.com / dewi123
2. Verify: Balance Rp 450,000, Badge "Member Premium"
3. Check: 8 features tampil (Scan, Find, History, dll)
4. Test: Navigasi ke Wallet, Account, About
5. Test: Logout
```

### ✅ Test Case 3: User Free
```
1. Login dengan: rudi@gmail.com / rudi123
2. Verify: Balance Rp 50,000, Badge "Member Free"
3. Check: Semua fitur tetap accessible
4. Test: Membership status di AccountScreen
```

### ✅ Test Case 4: Google Sign-In
```
1. Klik "Login dengan Google"
2. Wait 1.5s
3. Verify: Auto-generate user dengan random data
4. Check: Balance Rp 50,000, Free Member
5. Test: All user features working
```

### ✅ Test Case 5: Invalid Login
```
1. Email: wrong@test.com, Password: wrong123
2. Verify: Alert error "Email atau password salah!"
3. Check: Tetap di LoginScreen
```

### ✅ Test Case 6: Multiple Admin
```
1. Login admin@markir.com → Verify AdminStack
2. Logout
3. Login superadmin@markir.com → Verify AdminStack
4. Check: Same dashboard & features
```

---

## 🔒 SECURITY NOTES

⚠️ **PENTING - UNTUK TESTING SAJA!**

- Password **TIDAK** di-hash (plaintext)
- Token adalah mock string
- Tidak ada validasi email format
- Tidak ada rate limiting
- Tidak ada session management
- Tidak ada password recovery

**❌ JANGAN digunakan di production!**

---

## 🚀 NEXT STEPS BEFORE DATABASE

### 1️⃣ Test Semua Akun
- [ ] Test login 2 admin accounts
- [ ] Test login 10 user accounts
- [ ] Test Google Sign-In (3x untuk random data)
- [ ] Test invalid credentials
- [ ] Test logout dari admin & user

### 2️⃣ Test Navigation Flows
- [ ] Admin → Dashboard → Penagihan → Registrasi → About → Logout
- [ ] User → Home → Wallet → Account → About → Logout
- [ ] User → Home → 8 Features (Scan, Find, History, etc)

### 3️⃣ Test UI/UX
- [ ] Verify 85/15 white/blue color ratio
- [ ] Check responsive layout (resize browser)
- [ ] Test all buttons & touchable elements
- [ ] Verify loading states (1s admin, 1.5s user)

### 4️⃣ Database Migration Prep
```
📋 Data yang perlu dimigrate:
- users table (id, name, email, password_hash, phone, role)
- memberships table (user_id, status, start_date, end_date)
- wallets table (user_id, balance)
- vehicles table (user_id, plate_number, vehicle_type)
- transactions table (user_id, amount, type, status, timestamp)
- nfc_tags table (tag_id, user_id, vehicle_id, status)
```

---

## 📞 SUPPORT

**Developer:** Valdo Muhammad  
**Email:** valdo@markir.com  
**Instagram:** @valdomuhammadd  
**University:** UIGM - Sistem Komputer  

---

## 📝 CHANGELOG

### v1.0.0 - 15 November 2025
- ✅ Created 2 admin accounts
- ✅ Created 10 user accounts (1 developer + 3 test + 6 realistic)
- ✅ Implemented mock database in authSlice
- ✅ Added Google Sign-In auto-generate
- ✅ Balance variations: Rp 50k - Rp 500k
- ✅ Membership mix: 5 Premium + 5 Free
- ✅ Error handling: Invalid credentials alert

---

**🎉 READY FOR TESTING! Open http://localhost:8081 and start testing!**
