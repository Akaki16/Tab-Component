'use strict';

const btns = document.querySelectorAll('button');
const tabBodyText = document.querySelector('.tab-body-text');

// create tabs map
const tabs = [
    {
        "label": "Description",
        "content": "The worlds fastest fidget spinner"
    },
    {
        "label": "Specs",
        "content": "Slime green, low friction ball bearings, with dual finger grips"
    },
    {
        "label": "Reviews",
        "content": "I have one. It's pretty good."
    }
];

// Time complexity of this function is O(n^2) *(two nested loops) but it's ok because we are dealing with relatively small dataset
const displayTabs = () => {
    btns.forEach((btn) => {
        btn.addEventListener('click', e => {
            tabs.forEach((tab) => {
                const label = e.target.dataset.value;
                if (label === tab.label) {
                    tabBodyText.textContent = tab.content;
                }
            });
        });
    });
}

displayTabs();