const firstTask = {
    listItems: [
        'Заголовок 1 уровня',
        'Заголовок 2 уровня',
        'Параграф',
        'Маркированный список',
        'Элемент списка'
    ],
    title: '1. React: Component',
    description: 'Задание: Написать 5 своих компонент, классовых и функциональных. Показать, что ты умеешь их переиспользовать.',
    text: 'Были использованны:'
}

const secondTask = {
    title: '2. React: props',
    description: 'Задание: написать компонент с 4-мя props разного типа (число,строка,функция, объект)',
    text: 'Нажмите кнопку чтобы увидеть alert()',
    fn(){
        alert('Эта функция передана через props')
    },
    object: {
        ...firstTask
    }
    
}

export {
    firstTask,
    secondTask
}