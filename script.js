document.getElementById('shiftForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Предотвращаем отправку формы

            // Собираем данные
                const shiftData = {
                        shiftNumber: document.getElementById('shiftNumber').value,
                                date: document.getElementById('date').value,
                                        time: document.getElementById('time').value,
                                                department: document.getElementById('department').value,
                                                        equipment: document.getElementById('equipment').value,
                                                                responsible: document.getElementById('responsible').value,
                                                                        productionPlan: document.getElementById('productionPlan').value,
                                                                                comments: document.getElementById('comments').value,
                                                                                    };

                                                                                        // Валидация данных
                                                                                            if (!shiftData.shiftNumber || !shiftData.date || !shiftData.time || !shiftData.department || 
                                                                                                    !shiftData.equipment || !shiftData.responsible || !shiftData.productionPlan) {
                                                                                                            alert('Пожалуйста, заполните все обязательные поля.');
                                                                                                                    return;
                                                                                                                        }

                                                                                                                            // Выводим данные в формате JSON
                                                                                                                                console.log('Данные смены:', JSON.stringify(shiftData, null, 2));

                                                                                                                                    // Изменение в alert: выводим информацию об успешном открытии смены с краткой информацией
                                                                                                                                        alert('Смена успешно открыта!\n' +
                                                                                                                                                  `Номер смены: ${shiftData.shiftNumber}\n` +
                                                                                                                                                            `Дата: ${shiftData.date}\n` +
                                                                                                                                                                      `Время: ${shiftData.time}\n` +
                                                                                                                                                                                `Отдел: ${shiftData.department}\n` +
                                                                                                                                                                                          `Оборудование: ${shiftData.equipment}\n` +
                                                                                                                                                                                                    `Ответственное лицо: ${shiftData.responsible}\n` +
                                                                                                                                                                                                              `План по производству: ${shiftData.productionPlan}\n` +
                                                                                                                                                                                                                        `Замечания: ${shiftData.comments}`);

                                                                                                                                                                                                                            // Опционально сохраним данные в локальном хранилище
                                                                                                                                                                                                                                localStorage.setItem('shiftData', JSON.stringify(shiftData));
                                                                                                                                                                                                                                });
})