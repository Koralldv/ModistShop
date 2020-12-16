import React from 'react';

import Bread from '../components/Bread';

const help = {
    policy: {
        title: 'Политика',
        text: [
            'Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. Lorem Ipsum используют потому, что тот обеспечивает более или менее стандартное заполнение шаблона, а также реальное распределение букв и пробелов в абзацах, которое не получается при простой дубликации "Здесь ваш текст..',
            'Здесь ваш текст.. Здесь ваш текст.." Многие программы электронной вёрстки и редакторы HTML используют Lorem Ipsum в качестве текста по умолчанию, так что поиск по ключевым словам "lorem ipsum" сразу показывает, как много веб-страниц всё ещё дожидаются своего настоящего рождения.',
            'За прошедшие годы текст Lorem Ipsum получил много версий. Некоторые версии появились по ошибке, некоторые - намеренно (например, юмористические варианты).',
        ],
    },
};

const bread = {
    title: help.policy.title,
    link: [`${help.policy.title}`],
};

function Policy({}) {
    return (
        <div>
            <Bread bread={bread} />
            <div className="container">
                <section className="ftco-section ftco-degree-bg">
                    <div className="container">
                        {help.policy.text.map(function (item, i) {
                            return (
                                <div className="row">
                                    <div className="col-lg-8 ftco-animate">
                                        <p key={i}>{item}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </section>
            </div>
        </div>
    );
}

export default Policy;
