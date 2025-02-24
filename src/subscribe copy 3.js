let plans = [];
let isCapsuleSelected = false; // Variable global para controlar si "capsule" ha sido seleccionado
let isClick = false;
const optionsHow = document.querySelectorAll('.option__how');
const optionType = document.querySelectorAll(".option__type");
const optionWeight = document.querySelectorAll(".option__weight");
const optionsSensory = document.querySelectorAll(".option__sensory");
const optionTime = document.querySelectorAll(".option__time");
const step2 = document.querySelector("#step2");
const accordionContents = document.querySelectorAll('.accordion-content');

const step3 = document.querySelector("#step3");
const step4 = document.querySelector("#step4");
const step5 = document.querySelector("#step5");
const accordionContent = document.querySelectorAll(".accordion-content");

const accordionContent3 = step3.querySelector('.accordion-content');
const accordionContent4 = step4.querySelector('.accordion-content');
const accordionContent5 = step5.querySelector('.accordion-content');
const capsuleTrue = document.querySelectorAll(".capsuleTrue");

const btnPlan = document.querySelector(".btn__plan");
const errorPlan = document.querySelector("#errorPlan");
const planText = document.querySelector(".plan__text");
const spanContent = document.querySelector(".span__content");
const spanOrder = document.querySelector(".span__order");
let pElement = null;  // Definir pElement fuera de cualquier función, para que sea accesible globalmente
let price =0;
let lineCircle =false; 
const step =document.querySelectorAll(".step");
const circles = document.querySelectorAll('.step_circle');
const line = document.querySelector('.line');
const option = document.querySelectorAll(".option");

const menuItems = document.querySelectorAll('.menuPlan');


console.log(isClick);
// Función para manejar los clics en los elementos de 'option__how'
const handleHowClick = () => {

    optionsHow.forEach(option =>
        option.addEventListener('click', () => {

            // Actualiza el array de planes con la opción seleccionada
            const existingOption = plans.find(plan => plan.Option);
            if (existingOption) {
                existingOption.Option = option.id; // Actualizamos el Type
            } else {
                plans.push({ Option: option.id }); // Si no existe, lo agregamos
            }
            console.log(plans);

            // Maneja el estado de isCapsuleSelected
            isCapsuleSelected = (option.id === "capsule");
            console.log("¿Capsule seleccionado?:", isCapsuleSelected);

            // Elimina la clase 'active' de todas las opciones
            optionsHow.forEach(opt => {
                opt.classList.remove('active', 'bg-Dark-Cyan', 'text-Very-light-button');
                opt.classList.add('bg-Box-Cream', 'text-Very-Dark-Cyan', 'hover:bg-Pale-Orange');
            });

            // Añade la clase 'active' y estilos al elemento seleccionado
            option.classList.add('active', 'bg-Dark-Cyan', 'text-Very-light-button');
            option.classList.remove('bg-Box-Cream', 'text-Very-Dark-Cyan', 'hover:bg-Pale-Orange');

            const accordionContent = step2.querySelector('.accordion-content');
            const narrow = step2.querySelector(".narrow");
            if (narrow) {
                narrow.classList.remove(".rotate-0");
                narrow.classList.add("rotate-180");
            }
            if (accordionContent) {
                accordionContent.classList.remove('max-h-0');
                accordionContent.classList.add('h-auto');
            }
            if (isCapsuleSelected) {

                plans = [plans[0]];
                console.log('Array de planes borrados:', plans);
                isClick = true;
                rotateIconsExceptFirstTwoSteps();
                accordionContents.forEach((accordionContent, index) => {
                if (index > 1) { 
                    accordionContent.classList.remove("max-h-full");
                    accordionContent.classList.add("max-h-0");
                } else {
                    accordionContent.classList.replace('max-h-0','h-auto');
                }
                circles.forEach((circle, index) => {
                    if (index !== 0) { // Segundo círculo
                 
                        
                        circle.classList.remove("opacity-100");
                        circle.classList.add("opacity-0");
                        line.style.width = 0;
                    }
                });
            });

                optionType.forEach(option => {
                    option.classList.remove('active', 'bg-Dark-Cyan', 'text-Very-light-button');
                    option.classList.add('bg-Box-Cream', 'text-Very-Dark-Cyan', 'hover:bg-Pale-Orange');
                });
                optionWeight.forEach(option => {
                    option.classList.remove('active', 'bg-Dark-Cyan', 'text-Very-light-button');
                    option.classList.add('bg-Box-Cream', 'text-Very-Dark-Cyan', 'hover:bg-Pale-Orange');
                });
                optionsSensory.forEach(option => {
                    option.classList.remove('active', 'bg-Dark-Cyan', 'text-Very-light-button');
                    option.classList.add('bg-Box-Cream', 'text-Very-Dark-Cyan', 'hover:bg-Pale-Orange');
                });
                optionTime.forEach(option => changeClassOption(option));


            }
            if (isClick && !isCapsuleSelected) {
                isClick = false;
                plans = [plans[0]];
                console.log('Array de planes borrados:', plans);
                rotateIconsExceptFirstTwoSteps();
                accordionContents.forEach((accordion, index) => {
                    if (index > 1) { 
                        accordion.classList.remove("max-h-full");
                        accordion.classList.add("max-h-0");
                    } 
                });
                circles.forEach((circle, index) => {
                    if (index !== 0) { // Segundo círculo
                 
                        
                        circle.classList.remove("opacity-100");
                        circle.classList.add("opacity-0");
                        line.style.width = 0;
                    }
                });
                optionType.forEach(option => changeClassOption(option));
                optionWeight.forEach(option => changeClassOption(option));
                optionsSensory.forEach(option => changeClassOption(option));
                optionTime.forEach(option => changeClassOption(option));


            }

            console.log(isClick)

        })
    );
};
const changeClassOption = (option) => {
    // 1. Resetear las clases del elemento seleccionado
    option.classList.remove('active', 'bg-Dark-Cyan', 'text-Very-light-button');
    option.classList.add('bg-Box-Cream', 'text-Very-Dark-Cyan', 'hover:bg-Pale-Orange');

    // 2. Rotar todos los íconos a 0 grados a partir del step 2
    const steps = document.querySelectorAll('.step');
    steps.forEach((step, index) => {
        if (index >= 2) {
            const narrowIcon = step.querySelector('.narrow');
            if (narrowIcon) {
                narrowIcon.classList.remove('rotate-180');
                narrowIcon.classList.add('rotate-0');
                console.log(`Ícono en step ${index + 1} reseteado a 0 grados`);
            }
        }
    });

    // 3. Resetear los colores de los <li> del menú a partir del índice 2
    menuItems.forEach((item, index) => {
        if (index >= 1) {
            item.classList.remove('text-Dark-Cyan');
            item.classList.add('text-Very-Dark-Cyan');
            console.log(`Color reseteado para el menú en el índice: ${index}`);
        }
    });
};


const handleTypeSection = () => {
    handleHowClick();

    optionType.forEach(option => {
        option.addEventListener("click", () => {
            const existingType = plans.find(plan => plan.Type);
            if (existingType) {
                existingType.Type = option.id; // Actualizamos el Type
            } else {
                plans.push({ Type: option.id }); // Si no existe, lo agregamos
            }
            console.log(plans);
            optionType.forEach(opt => {
                opt.classList.remove('active', 'bg-Dark-Cyan', 'text-Very-light-button');
                opt.classList.add('bg-Box-Cream', 'text-Very-Dark-Cyan', 'hover:bg-Pale-Orange');
            });
            option.classList.add('active', 'bg-Dark-Cyan', 'text-Very-light-button');
            option.classList.remove('bg-Box-Cream', 'text-Very-Dark-Cyan', 'hover:bg-Pale-Orange');
            const currentStepIndex = getCurrentStepIndex(option);

            if (isCapsuleSelected) {
                accordionContent5.classList.replace("max-h-0","h-auto");
                accordionContent4.classList.replace("h-auto","max-h-0");
                accordionContent3.classList.replace("h-auto","max-h-0");
                plans.push({Weight: "no"});
                plans.push({Sensory: "no"});
                rotateMenuItemInLastStep(currentStepIndex);
                rotateNarrowIconInLastStep();
            } else {
                accordionContent3.classList.replace("max-h-0","h-auto");
                rotateNarrowIcon(currentStepIndex);
                rotateMenuItemInLastStep(currentStepIndex);

            }
            
        });

    })
}
const handleWeight = () => {
    optionWeight.forEach(option => {
        option.addEventListener("click", () => {
            const existingWeight = plans.find(plan => plan.Weight);
            if (existingWeight) {
                existingWeight.Weight = option.id;
            } else {
                plans.push({ Weight: option.id });
            }
            console.log(plans);
            optionWeight.forEach(opt => {
                opt.classList.remove('active', 'bg-Dark-Cyan', 'text-Very-light-button');
                opt.classList.add('bg-Box-Cream', 'text-Very-Dark-Cyan', 'hover:bg-Pale-Orange');
            });
            option.classList.add('active', 'bg-Dark-Cyan', 'text-Very-light-button');
            option.classList.remove('bg-Box-Cream', 'text-Very-Dark-Cyan', 'hover:bg-Pale-Orange');

            if (isCapsuleSelected) {
                accordionContent5.classList.replace("max-h-0","h-auto");
            } else {
                accordionContent4.classList.replace("max-h-0","h-auto");
            }
            const currentStepIndex = getCurrentStepIndex(option);
            rotateNarrowIcon(currentStepIndex);
            rotateMenuItemInLastStep(currentStepIndex);
        })
    });

}
const handleSensory = () => {
    optionsSensory.forEach(option => {
        option.addEventListener("click", () => {
            const existingSensory = plans.find(plan => plan.Sensory);
            if (existingSensory) {
                existingSensory.Sensory = option.id;
            } else {
                plans.push({ Sensory: option.id });
            }
            console.log(plans);
            optionsSensory.forEach(opt => {
                opt.classList.remove('active', 'bg-Dark-Cyan', 'text-Very-light-button');
                opt.classList.add('bg-Box-Cream', 'text-Very-Dark-Cyan', 'hover:bg-Pale-Orange');
            });
            option.classList.add('active', 'bg-Dark-Cyan', 'text-Very-light-button');
            option.classList.remove('bg-Box-Cream', 'text-Very-Dark-Cyan', 'hover:bg-Pale-Orange');


            accordionContent5.classList.replace("max-h-0","h-auto");
            const currentStepIndex = getCurrentStepIndex(option);
            rotateNarrowIcon(currentStepIndex);
            rotateMenuItemInLastStep(currentStepIndex);

        });
    });
}
const handleTime = () => {
    optionTime.forEach(option => {
        option.addEventListener("click", () => {
            const existingTime = plans.find(plan => plan.Time);
            if (existingTime) {
                existingTime.Time = option.id;
            } else {
                plans.push({ Time: option.id });
            }
            console.log(plans);
            optionTime.forEach(opt => {
                opt.classList.remove('active', 'bg-Dark-Cyan', 'text-Very-light-button');
                opt.classList.add('bg-Box-Cream', 'text-Very-Dark-Cyan', 'hover:bg-Pale-Orange');
            });
            option.classList.add('active', 'bg-Dark-Cyan', 'text-Very-light-button');
            option.classList.remove('bg-Box-Cream', 'text-Very-Dark-Cyan', 'hover:bg-Pale-Orange');
            const currentStepIndex = getCurrentStepIndex(option);

                rotateMenuItemInLastStep(currentStepIndex);
            // checkActiveOptions();
            circles.forEach((circle, index) => {
                if (index === 1) { // Segundo círculo
                    const lineStart = circles[0].getBoundingClientRect().left;
                    const targetPosition = circle.getBoundingClientRect().left;
                    
                    const newLineWidth = targetPosition - lineStart;
                    circle.classList.remove("opacity-0");
                    circle.classList.add("opacity-100");
                    line.style.width = `${newLineWidth}px`;
                    console.log(`Línea ajustada a ${newLineWidth}px de ancho`);
                    

                }
            });
        });
    });
    

}

const createPlan = () => {

    
    const priceText = document.querySelector(".price__text");
    // const closeSpan = document.querySelector(".close__span");
    let optionPrice =0;
    let shipmentPrice =0;
    let typePrice=0;
    let weightPrice=0;
    btnPlan.addEventListener("click", () => {
        const requiredFields = ["Option", "Type", "Weight", "Sensory", "Time"];
        let missingFields = [];
        let selectedPlan = {};

        
        
        requiredFields.forEach(field => {
            const plan = plans.find(plan => plan[field]);
            if (plan) {
                selectedPlan[field] = plan[field]; 
            } else {
                missingFields.push(field); 
            }
        });
        if (selectedPlan.Option) {
            if (selectedPlan.Option.toLowerCase() === "capsule") {
                optionPrice = 5.40;
            } else if (selectedPlan.Option.toLowerCase() === "filter") {
                optionPrice = 6.20;
            } else if (selectedPlan.Option.toLowerCase() === "espresso") {
                optionPrice = 7.00;
            }
        }

        // Asignar precio de tipo
        if (selectedPlan.Type) {
            if (selectedPlan.Type.toLowerCase() === "premium") {
                typePrice = 12.00;
            } else if (selectedPlan.Type.toLowerCase() === "decaf") {
                typePrice = 7.00;
            } else if (selectedPlan.Type.toLowerCase() === "normal") {
                typePrice = 8.00;
            }
        }

        // Asignar precio según el peso y calcular el costo mensual de envío
        if (selectedPlan.Weight) {
            if (selectedPlan.Weight === "small") {
                if (selectedPlan.Time === "weekly") {
                    shipmentPrice = 7.20 * 4;  // Se multiplica por 4 para obtener el precio mensual
                } else if (selectedPlan.Time === "two__weeks") {
                    shipmentPrice = 9.60 * 2;  // Se multiplica por 2
                } else if (selectedPlan.Time === "monthly") {
                    shipmentPrice = 12.00;    // Precio mensual sin multiplicar
                }
            } else if (selectedPlan.Weight === "medium") {
                if (selectedPlan.Time === "weekly") {
                    shipmentPrice = 13.00 * 4;  // Se multiplica por 4 para obtener el precio mensual
                } else if (selectedPlan.Time === "two__weeks") {
                    shipmentPrice = 17.50 * 2;  // Se multiplica por 2
                } else if (selectedPlan.Time === "monthly") {
                    shipmentPrice = 22.00;     // Precio mensual sin multiplicar
                }
            } else if (selectedPlan.Weight === "large") {
                if (selectedPlan.Time === "weekly") {
                    shipmentPrice = 22.00 * 4;  // Se multiplica por 4 para obtener el precio mensual
                } else if (selectedPlan.Time === "two__weeks") {
                    shipmentPrice = 32.00 * 2;  // Se multiplica por 2
                } else if (selectedPlan.Time === "monthly") {
                    shipmentPrice = 42.00;     // Precio mensual sin multiplicar
                }
            }else if (selectedPlan.Weight === "no") {
                if (selectedPlan.Time === "weekly") {
                    shipmentPrice = 16.00 * 4;  // Se multiplica por 4 para obtener el precio mensual
                } else if (selectedPlan.Time === "two__weeks") {
                    shipmentPrice = 30.00 * 2;  // Se multiplica por 2
                } else if (selectedPlan.Time === "monthly") {
                    shipmentPrice = 55.00;     // Precio mensual sin multiplicar
                }
            }
        }

        // Calcular el precio final
        let totalPrice = (optionPrice + typePrice) * weightPrice + shipmentPrice;
        priceText.innerHTML = `$${totalPrice.toFixed(2)}`;
        if(!isCapsuleSelected){
        if (missingFields.length === 0) {
            console.log("El plan está completo:", selectedPlan);
            errorPlan.innerHTML="";
            errorPlan.classList.replace("h-12","max-h-0");
            // errorPlan.classList.replace("max-h-0","h-12");
            planText.classList.remove("max-h-0", "p-0");
            planText.classList.add("p-10");
            spanOrder.classList.replace("hidden","flex");
            pElement = document.createElement('p');
            pElement.className = "text-pretty font-fraunces text-2xl/10 font-black";
            pElement.innerHTML = `
                                “I drink my coffee as
                                <span class="how__result text-Dark-Cyan">${selectedPlan.Option}</span>, with a
                                <span class="type__result text-Dark-Cyan">${selectedPlan.Type}</span> type of bean.
                                <span class="weight__result text-Dark-Cyan">${selectedPlan.Weight}</span> ground ala
                                <span class="sensory__result text-Dark-Cyan">${selectedPlan.Sensory}</span>, sent to me
                                <span class="time__result text-Dark-Cyan">${selectedPlan.Time}</span>.”
                            `;
            
            spanContent.prepend(pElement);
            planText.innerHTML = `
            <article class="flex flex-col w-full">
                <div class="flex w-full">
                    <span class="uppercase opacity-50 text-white text-start">Order Summary</span>
                </div>
                <div class="mt-2 text-white">
                    <p class="text-pretty font-fraunces text-2xl/10 font-black">
                        “I drink my coffee as 
                        <span class="how__result text-Dark-Cyan">${selectedPlan.Option}</span>, 
                        with a <span class="type__result text-Dark-Cyan">${selectedPlan.Type}</span> 
                        type of bean. 
                        <span class="weight__result text-Dark-Cyan">${selectedPlan.Weight}</span> ground ala 
                        <span class="sensory__result text-Dark-Cyan">${selectedPlan.Sensory}</span>, 
                        sent to me <span class="time__result text-Dark-Cyan">${selectedPlan.Time}</span>.”
                    </p>
                </div>
            </article>
            `;
            
        } 
    }else if(isCapsuleSelected){
        if (missingFields.length === 0) {
            console.log("El plan está completo:", selectedPlan);
            errorPlan.innerHTML="";
            errorPlan.classList.replace("h-12","max-h-0");
            // errorPlan.classList.replace("max-h-0","h-12");
            planText.classList.remove("max-h-0", "p-0");
            planText.classList.add("p-10");
            spanOrder.classList.replace("hidden","flex");
            
            pElement = document.createElement('p');
            pElement.className = "text-pretty font-fraunces text-2xl/10 font-black";
            pElement.innerHTML = `
                                "I drink my coffee using 
                                <span class="how__result text-Dark-Cyan">${selectedPlan.Option}</span>, with a
                                <span class="type__result text-Dark-Cyan">${selectedPlan.Type}</span> type of bean. And sent to me
                                
                                <span class="time__result text-Dark-Cyan">${selectedPlan.Time}</span>.”
                            `;
            
            spanContent.prepend(pElement);
            planText.innerHTML = `
            <article class="flex flex-col w-full">
                <div class="flex w-full">
                    <span class="uppercase opacity-50 text-white text-start">Order Summary</span>
                </div>
                <div class="mt-2 text-white">
                    <p class="text-pretty font-fraunces text-2xl/10 font-black">
                        “I drink my coffee as 
                        <span class="how__result text-Dark-Cyan">${selectedPlan.Option}</span>, 
                        with a <span class="type__result text-Dark-Cyan">${selectedPlan.Type}</span> 
                        type of bean. 
                        <span class="weight__result text-Dark-Cyan">${selectedPlan.Weight}</span> ground ala 
                        <span class="sensory__result text-Dark-Cyan">${selectedPlan.Sensory}</span>, 
                        sent to me <span class="time__result text-Dark-Cyan">${selectedPlan.Time}</span>.”
                    </p>
                </div>
            </article>
            `;
            
        } 

    }
        if(missingFields.length !==0) {
            console.log("Faltan opciones en el plan:", missingFields);
            errorPlan.innerHTML = `<span class="text-Light-Cream font-bold text-lg">
                Debes elegir las siguientes opciones: ${missingFields.join(", ")}
            </span>`;
            errorPlan.classList.replace("max-h-0","h-12");
        }
    });
    


};
const closePlan = () => {
    const btnCheckout = document.querySelector(".btn__checkout");


    btnCheckout.addEventListener("click", () => {
        spanOrder.classList.add("hidden");
        btnPlan.disabled = true; 
        accordionContents.forEach(aco =>{
            aco.classList.replace("h-auto","max-h-0");
        })
        circles.forEach((circle, index) => {
            if (index === 2) { // Segundo círculo
                const lineStart = circles[0].getBoundingClientRect().left;
                const targetPosition = circle.getBoundingClientRect().left;
                
                const newLineWidth = targetPosition - lineStart;
                line.style.width = `${newLineWidth}px`;
                circle.classList.remove("opacity-0");
                circle.classList.add("opacity-100");
                console.log(`Línea ajustada a ${newLineWidth}px de ancho`);
            }
        });
    });
    
};
const deletePlan = ()=>{
    const closeSpan = document.querySelector(".close__span");

    closeSpan.addEventListener("click", () => {
        spanOrder.classList.replace("flex","hidden");
        planText.innerHTML="";
        planText.classList.remove("p-10");
        planText.classList.add("max-h-0", "p-0");
        plans=[];
        console.log(plans);
        spanContent.removeChild(pElement);
        console.log("pElement ha sido removido.");

        const optionAll = document.querySelectorAll(".option");
        optionAll.forEach(opt => {
            opt.classList.remove('active', 'bg-Dark-Cyan', 'text-Very-light-button');
            opt.classList.add('bg-Box-Cream', 'text-Very-Dark-Cyan', 'hover:bg-Pale-Orange');
        });
        accordionContents.forEach((aco, index) => {
        if (index !== 0) { 
            aco.classList.remove("h-auto");
            aco.classList.add("max-h-0");
        }
        
    });
           
    });
}



const rotateNarrowIcon = (currentStepIndex) => {
    const steps = document.querySelectorAll(".step");
    
    if (currentStepIndex < steps.length - 1) {
        const nextStep = steps[currentStepIndex + 1];
        const narrowIcon = nextStep.querySelector('.narrow');
        
        if (narrowIcon) {
            narrowIcon.classList.remove('rotate-0');
            narrowIcon.classList.add('rotate-180');
            console.log(`Ícono del step ${currentStepIndex + 2} rotado a 0 grados`);
        }
    }
};
const rotateMenuItemInLastStep = (currentStepIndex) => {

    menuItems.forEach((item, index) => {
        // Cambiar color y rotar solo si el índice del paso es mayor que 1
        if (currentStepIndex > 0) {
            if (index === currentStepIndex) {
                // Cambiar el color del texto de acuerdo con el índice del paso
                item.classList.add('text-Dark-Cyan');  // Color para el paso actual
                item.classList.remove('text-Very-Dark-Cyan');  // Restablecer a color neutral
            } 

            
        }
    });
};



const rotateNarrowIconInLastStep = () => {
    const lastStep = document.querySelector("#step5");
    const narrowIcon = lastStep?.querySelector('.narrow');
    if (narrowIcon) {
        narrowIcon.classList.remove('rotate-0'); // Aseguramos que no tenga la rotación anterior
        narrowIcon.classList.add('rotate-180'); // Rotamos a 0 grados
        console.log('Ícono rotado a 0 grados en el último paso');
    }
};
const rotateIconsExceptFirstTwoSteps = () => {
    // Seleccionamos todos los íconos narrow dentro de los pasos
    const narrowIcons = document.querySelectorAll('.step .narrow');
    
    // Recorremos todos los íconos
    narrowIcons.forEach((icon, index) => {
        // Si el paso no es el primero ni el segundo (índices 0 y 1), rotamos el ícono
        if (index > 1) {
            icon.classList.remove('rotate-180'); // Aseguramos que no tenga la rotación por defecto
            icon.classList.add('rotate-0'); // Rotamos el ícono a 180 grados
            console.log(`Ícono en el paso ${index + 1} rotado a 180 grados`);
        }
    });
};

const getCurrentStepIndex = (option) => {
    const currentStep = option.closest('.step');
    
    const index = Array.from(document.querySelectorAll('.step')).indexOf(currentStep);
    console.log('Índice del step actual:', index);
    return index;
};
handleHowClick();
handleTypeSection();
handleWeight();
handleSensory();
handleTime();
createPlan();
closePlan();
deletePlan();
