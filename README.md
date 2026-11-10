TASKFLOW - Görev ve proje yönetim sisteemi API

1. Proje Hakkında
TaskFlow, kullancıların görevlerini yönetebilmesini sağlayan bir REST API projesidir.

proje kapsamınds kullanıcılar yeni görevler oluşturabilir, mevcut görevleri listleyebilir, görev detaylarını görüntüleyebilir, görevleri güncelleyebilir ve silebilir.

2. Kullanılan Teknolojiler

Node.js: JavaScript çalışma ortamı.
Express.Js: REST API geliştirmek için kullanılan web framework.
JavaScript
Postman: API endpoıntlerini test etmek için kullanılan araç.

3. Projeyi Kurma

Projeyi bilgisayrınıza indirdikten sonra terminal üzerinden proje klasörüne gidin:

cd TaskFlow

Gerekli paketleri yükleyin:

npm install

4. Projeyi Çalıştırma

Sunucuyu başlatmak için aşağıdaki lomutu kullanın:

npm start

 Sunucu varsayılan olarak 3000 portunda çalışır.

(http://localhost:3000)

7. Veri Saklama

Projenin mevcut sürümünde görevler JavaScript dizisi içerisinde tutulmaktadır. Bu nedenle sunucu yeniden başlatıldığında oluşturulan, güncellenen veya silinen görev değişiklikleri kalıcı olarak saklanmaz.

8. Proje Durumu
TaskFlow, temel REST API ve CRUD işlemlerini gerçekleştirmek amacıyla geliştitilmiştir.