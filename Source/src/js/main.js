import $ from './lib/lib';

$('#first').on('click', () => {
    $('div').eq(1).fadeToggle(800);
});

$('[data-count="second"]').on('click', () => {
    $('div').eq(2).fadeToggle(2000);
});

$('button').eq(2).on('click', () => {
    $('.w-500').fadeToggle(2000);
});

$('.wrap').html(
    `
        <div class="dropdown">
            <button class="btn btn_primary dropdown-toggle" id="dropdownMenuButton">
                Dropdown button
            </button>
            <div class="dropdown-menu" data-toggle-id="dropdownMenuButton">
                <a href="#" class="dropdown-item">Action</a>
                <a href="#" class="dropdown-item">Action #2</a>
                <a href="#" class="dropdown-item">Action #3</a>
            </div>
        </div>
    `
);
$('.dropdown-toggle').dropdown();

$('#trigger').click(() => $('#trigger').createModal({
    text: {
        title: 'Modal title',
        body: 'lorem lorem lorem text text text'
    },
    btns: {
        count: 3,
        settings: [
            [
                'Close', //надпись кнопки
                ['btn_danger', 'mr-10'], //классы 
                true //будет закрывать?
            ],
            [
                'Save changes',
                ['btn_success'],
                false,
                () => {
                    alert('данные сохранены') //что будет делать
                }
            ],
            [
                'Another btn',
                ['btn_warning', 'ml-10'],
                false,
                () => {
                    alert('другая кнопка')
                }
            ]
        ]
    }
}));