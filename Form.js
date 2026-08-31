export class Form {
    constructor(formId) {
        this.form = document.getElementById(formId);
    }

    // Получить все значения формы (объект)
    getValues() {
        const data = new FormData(this.form);
        return Object.fromEntries(data.entries());
    }

    // Проверить валидность формы
    isValid() {
        return this.form.checkValidity();
    }

    // Сбросить форму
    reset() {
        this.form.reset();
    }
} 