// Array global para guardar los valores de los ids clicados
let plans = [];
let isCapsuleSelected = false; // Variable global para controlar si "capsule" ha sido seleccionado
const optionsHow = document.querySelectorAll('.option__how');

// Función para manejar el cambio de clases
const updateClasses = (options, selectedOption) => {
    options.forEach(opt => {
        opt.classList.remove('active');
        opt.classList.remove('bg-Dark-Cyan', 'text-Very-light-button');
        opt.classList.add('bg-Box-Cream', 'text-Very-Dark-Cyan', 'hover:bg-Pale-Orange');
    });

    selectedOption.classList.add('active');
    selectedOption.classList.remove('bg-Box-Cream', 'text-Very-Dark-Cyan', 'hover:bg-Pale-Orange');
    selectedOption.classList.add('bg-Dark-Cyan', 'text-Very-light-button');
};

// Función para cerrar todos los pasos abiertos (excepto step1 y step2 cuando se selecciona 'capsule')
const closeAllSteps = () => {
    const allSteps = document.querySelectorAll('.accordion-content');
    allSteps.forEach(step => {
        if (!step.closest('#step1') && !(step.closest('#step2') && isCapsuleSelected)) {
            step.classList.remove('max-h-full');
            step.classList.add('max-h-0');
        }
    });
};

// Función para manejar los clics en los elementos de 'option__how'
const handleHowClick = () => {
    optionsHow.forEach(option => 
        option.addEventListener('click', () => {
            updateClasses(optionsHow, option);

            let existingPlanIndex = plans.findIndex(plan => plan.Plan);
            if (existingPlanIndex !== -1) {
                plans[existingPlanIndex] = { Plan: option.id };
            } else {
                plans.push({ Plan: option.id });
            }

            console.log('Último Plan clicado:', plans);

            if (option.id === 'capsule') {
                isCapsuleSelected = true;
                closeAllSteps(); 

                // Mantener solo el primer elemento en el array plans
                plans = plans.slice(0, 1);
                console.log('Array de planes después de seleccionar capsule:', plans);
            } else {
                isCapsuleSelected = false;
                closeAllSteps(); 
            }

            const nextStep = document.getElementById('step2');
            const accordionContent = nextStep.querySelector('.accordion-content');
            if (accordionContent) {
                accordionContent.classList.remove('max-h-0');
                accordionContent.classList.add('max-h-full');
            }
        })
    );
};

// Función para manejar los clics en los elementos de 'option__type'
const handleTypeClick = () => {
    const optionsType = document.querySelectorAll('.option__type');

    optionsType.forEach(option => 
        option.addEventListener('click', () => {
            updateClasses(optionsType, option);

            let existingTypeIndex = plans.findIndex(plan => plan.Type);
            if (existingTypeIndex !== -1) {
                plans[existingTypeIndex] = { Type: option.id };
            } else {
                plans.push({ Type: option.id });
            }

            console.log('Valor de Type clicado:', option.id);
            console.log('Array de planes actualizados:', plans);

            if (isCapsuleSelected) {
                closeAllSteps(); 
                const step5 = document.getElementById('step5');
                const accordionContent5 = step5.querySelector('.accordion-content');
                if (accordionContent5) {
                    accordionContent5.classList.remove('max-h-0');
                    accordionContent5.classList.add('max-h-full');
                }
            } else {
                const nextStep = document.getElementById('step3');
                const accordionContent = nextStep.querySelector('.accordion-content');
                if (accordionContent) {
                    accordionContent.classList.remove('max-h-0');
                    accordionContent.classList.add('max-h-full');
                }
            }
        })
    );
};

// Función para manejar los clics en los elementos de 'option__weight'
const handleWeightClick = () => {
    const optionsWeight = document.querySelectorAll('.option__weight');

    optionsWeight.forEach(option => 
        option.addEventListener('click', () => {
            updateClasses(optionsWeight, option);

            let existingWeightIndex = plans.findIndex(plan => plan.Weight);
            if (existingWeightIndex !== -1) {
                plans[existingWeightIndex] = { Weight: option.id };
            } else {
                plans.push({ Weight: option.id });
            }

            console.log('Valor de Weight clicado:', option.id);
            console.log('Array de planes actualizados:', plans);

            const nextStep = document.getElementById('step4');
            const accordionContent = nextStep.querySelector('.accordion-content');
            
            if (accordionContent) {
                accordionContent.classList.remove('max-h-0');
                accordionContent.classList.add('max-h-full');
            }
        })
    );
};

// Función para manejar los clics en los elementos de 'option__sensory'
const handleSensoryClick = () => {
    const optionsSensory = document.querySelectorAll('.option__sensory');

    optionsSensory.forEach(option => 
        option.addEventListener('click', () => {
            updateClasses(optionsSensory, option);

            let existingSensoryIndex = plans.findIndex(plan => plan.Sensory);
            if (existingSensoryIndex !== -1) {
                plans[existingSensoryIndex] = { Sensory: option.id };
            } else {
                plans.push({ Sensory: option.id });
            }

            console.log('Valor de Sensory clicado:', option.id);
            console.log('Array de planes actualizados:', plans);

            const nextStep = document.getElementById('step5');
            const accordionContent = nextStep.querySelector('.accordion-content');
            if (accordionContent) {
                accordionContent.classList.remove('max-h-0');
                accordionContent.classList.add('max-h-full');
            }
        })
    );
};

// Función para manejar los clics en los elementos de 'option__time'
const handleTimeClick = () => {
    const optionsTime = document.querySelectorAll('.option__time');

    optionsTime.forEach(option => 
        option.addEventListener('click', () => {
            updateClasses(optionsTime, option);

            let existingTimeIndex = plans.findIndex(plan => plan.Time);
            if (existingTimeIndex !== -1) {
                plans[existingTimeIndex] = { Time: option.id };
            } else {
                plans.push({ Time: option.id });
            }

            console.log('Valor de Time clicado:', option.id);
            console.log('Array de planes actualizados:', plans);
        })
    );
};

// Inicializamos todas las funciones
handleHowClick();
handleTypeClick();
handleWeightClick();
handleSensoryClick();
handleTimeClick();
