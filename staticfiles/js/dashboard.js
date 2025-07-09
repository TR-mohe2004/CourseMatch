// تفعيل القائمة الجانبية للهواتف
document.addEventListener("DOMContentLoaded", function () {
  const sidebar = document.querySelector(".sidebar");
  const toggleSidebarBtn = document.querySelector(".toggle-sidebar-btn");
  const mobileToggleBtn = document.querySelector(".mobile-toggle");
  const mainContent = document.querySelector(".main-content");

  if (toggleSidebarBtn) {
    toggleSidebarBtn.addEventListener("click", function () {
      sidebar.classList.toggle("collapsed");
      mainContent.classList.toggle("sidebar-collapsed");
    });
  }

  if (mobileToggleBtn) {
    mobileToggleBtn.addEventListener("click", function () {
      sidebar.classList.toggle("show");
    });
  }

  // إغلاق الشريط الجانبي عند النقر خارجيا في وضع الجوال
  mainContent.addEventListener("click", function (event) {
    if (
      sidebar.classList.contains("show") &&
      !sidebar.contains(event.target) &&
      !mobileToggleBtn.contains(event.target)
    ) {
      sidebar.classList.remove("show");
    }
  });

  // تفعيل قائمة الإشعارات المنسدلة
  const notificationIcon = document.querySelector(".notification-icon");
  const notificationDropdown = document.querySelector(".notification-dropdown");

  if (notificationIcon) {
    notificationIcon.addEventListener("click", function (event) {
      notificationDropdown.classList.toggle("show");
      event.stopPropagation(); // منع إغلاق القائمة عند النقر عليها
    });
  }

  // إغلاق قائمة الإشعارات عند النقر خارجيا
  document.addEventListener("click", function (event) {
    if (
      notificationDropdown &&
      notificationDropdown.classList.contains("show") &&
      !notificationDropdown.contains(event.target) &&
      !notificationIcon.contains(event.target)
    ) {
      notificationDropdown.classList.remove("show");
    }
  });

  // تفعيل قائمة الملف الشخصي المنسدلة
  const userProfileDropdown = document.querySelector(".user-profile-dropdown");
  const profileDropdownContent = document.querySelector(
    ".profile-dropdown-content",
  );

  if (userProfileDropdown) {
    userProfileDropdown.addEventListener("click", function (event) {
      profileDropdownContent.classList.toggle("show");
      event.stopPropagation();
    });
  }

  // إغلاق قائمة الملف الشخصي عند النقر خارجيا
  document.addEventListener("click", function (event) {
    if (
      profileDropdownContent &&
      profileDropdownContent.classList.contains("show") &&
      !profileDropdownContent.contains(event.target) &&
      !userProfileDropdown.contains(event.target)
    ) {
      profileDropdownContent.classList.remove("show");
    }
  });

  // الرسوم البيانية (Chart.js)
  const geographicCtx = document.getElementById("geographicChart");
  const monthlyPerformanceCtx = document.getElementById(
    "monthlyPerformanceChart",
  );

  // بيانات وهمية للرسوم البيانية
  const geographicData = {
    labels: ["الرياض", "جدة", "الدمام"],
    datasets: [
      {
        data: [300, 200, 150],
        backgroundColor: ["#10b981", "#3b82f6", "#f59e0b"],
        hoverOffset: 4,
      },
    ],
  };

  const monthlyPerformanceData = {
    labels: ["يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو", "يوليو"],
    datasets: [
      {
        label: "المبيعات",
        data: [65, 59, 80, 81, 56, 55, 40],
        backgroundColor: "#3b82f6",
        borderColor: "#3b82f6",
        borderWidth: 1, // <-- التصحيح هنا
      },
      {
        label: "الزيارات",
        data: [28, 48, 40, 19, 86, 27, 90],
        backgroundColor: "#10b981",
        borderColor: "#10b981",
        borderWidth: 1, // <-- التصحيح هنا
      },
    ],
  };

  // رسم بياني دائري
  if (geographicCtx) {
    new Chart(geographicCtx, {
      type: "doughnut",
      data: geographicData,
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false,
          },
        },
      },
    });
  }

  // رسم بياني عمودي
  if (monthlyPerformanceCtx) {
    new Chart(monthlyPerformanceCtx, {
      type: "bar",
      data: monthlyPerformanceData,
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false,
          },
        },
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  }

  // تحديثات وهمية للبيانات في الوقت الفعلي (للتجربة فقط)
  function startRealTimeUpdates() {
    setInterval(() => {
      // تحديث الإحصائيات
      const statChanges = document.querySelectorAll(".stat-change");
      statChanges.forEach((change) => {
        const isPositive = Math.random() > 0.5;
        const value = (Math.random() * 20).toFixed(1);

        change.className = `stat-change ${isPositive ? "positive" : "negative"}`;
        change.innerHTML = `
                    <i class="fas fa-arrow-${isPositive ? "up" : "down"}"></i>
                    <span>${isPositive ? "+" : "-"}${value}%</span>
                `;
      });

      // تحديث شارة الإشعارات
      const badge = document.querySelector(".notification-badge");
      if (badge) {
        const count = Math.floor(Math.random() * 9) + 1;
        badge.textContent = count;
      }
    }, 60000); // كل دقيقة
  }

  // بدء التحديثات في الوقت الفعلي
  startRealTimeUpdates();
});
