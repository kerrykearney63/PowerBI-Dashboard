document.addEventListener("DOMContentLoaded", function () {
    const dashboardContainer = document.getElementById('dashboard-container');

    const defaultCardData = [
        {
            title: "Executive Analysis",
            link: "https://app.powerbi.com/groups/me/apps/869b4d7e-1a73-4277-b51e-ef1962b8adea/reports/de684442-4e37-44f5-b862-555a1b7daf07/ReportSection?experience=power-bi",
            imageUrl: "images/Workspaces/Executive Analysis.png",
            description: "This dashboard delivers key metrics on revenue, backlog status, forecasting, on-time delivery (OTD), workforce headcount, SPAN, ECR tracking, and customer case management.",
            sortOrder: 1,
            reports: [
                {
                    title: "Sales Forecast and Revenue",
                    description: "Delivers key metrics on revenue, forecast, invoices, backlog, projections, rolling averages, and profitability.",
                    link: "https://app.powerbi.com/groups/me/apps/869b4d7e-1a73-4277-b51e-ef1962b8adea/reports/de684442-4e37-44f5-b862-555a1b7daf07/ReportSection?experience=power-bi",
                    thumbnail: "images/Reports/Sales Forecast and Revenue.png",
                },
                {
                    title: "On Time Shipment",
                    description: "Delivers key metrics on workforce headcount, turnover, and hiring status.",
                    link: "https://app.powerbi.com/groups/me/apps/869b4d7e-1a73-4277-b51e-ef1962b8adea/reports/663018f4-a92a-4b12-ae15-8e2301a4cc35/ReportSection?experience=power-bi",
                    thumbnail: "images/Reports/On Time Shipment.png",
                },
                {
                    title: "SPAN OTD",
                    description: "Delivers key metrics on SPAN OTD.",
                    link: "https://app.powerbi.com/groups/me/apps/869b4d7e-1a73-4277-b51e-ef1962b8adea/reports/27c5122d-0829-4f11-9930-ad6398b8719a/8df619df4da9bee9aed1?experience=power-bi",
                    thumbnail: "images/Reports/SPAN OTD.png",
                },
                {
                    title: "Revenue and Earnings",
                    description: "Delivers key metrics on invoiced values by month and quarterly profits.",
                    link: "https://app.powerbi.com/groups/me/apps/869b4d7e-1a73-4277-b51e-ef1962b8adea/reports/2546fc18-d7e6-43ff-ab37-4e5c5fbf3385/ReportSection?experience=power-bi",
                    thumbnail: "images/Reports/Revenue and Earnings.png",
                },
                {
                    title: "Headcount Analysis",
                    description: "Delivers key metrics on company workforce count.",
                    link: "https://app.powerbi.com/groups/me/apps/869b4d7e-1a73-4277-b51e-ef1962b8adea/reports/bb97824a-cde8-4074-8c94-4c2ca346c277/ReportSection2c249b803d38e5786ea0?experience=power-bi",
                    thumbnail: "images/Reports/Headcount Analysis.png",
                },
                {
                    title: "Customer CASE",
                    description: "Delivers key metrics on Customer CASE.",
                    link: "https://app.powerbi.com/groups/me/apps/869b4d7e-1a73-4277-b51e-ef1962b8adea/reports/8216408b-233b-4d98-90c1-c743daf644a9/ReportSection?experience=power-bi",
                    thumbnail: "images/Reports/Customer CASE.png",
                },
                {
                    title: "ECR Tracker",
                    description: "Delivers key metrics on ECR Tracking.",
                    link: "https://app.powerbi.com/groups/me/apps/869b4d7e-1a73-4277-b51e-ef1962b8adea/reports/3572a63e-0fa6-4f31-9e91-7b2d80be6923/ReportSection?experience=power-bi",
                    thumbnail: "images/Reports/ECR Tracker.png",
                }
            ]
        },
        {
            title: "SKU Performance",
            link: "https://app.powerbi.com/groups/me/apps/5071a2fa-882b-4fd6-94ba-f37ef6860dc0/reports/a745b776-7c49-496d-bd2c-c5f0692f8397/fb00cbde036b102e509d?experience=power-bi",
            imageUrl: "images/Workspaces/SKU Performance.png",
            description: "This dashboard delivers key metrics on SKUs.",
            sortOrder: 2,
            reports: [
                {
                    title: "SKU Performance",
                    description: "Delivers key metrics on SKU performance.",
                    link: "https://app.powerbi.com/groups/me/apps/5071a2fa-882b-4fd6-94ba-f37ef6860dc0/reports/a745b776-7c49-496d-bd2c-c5f0692f8397/fb00cbde036b102e509d?experience=power-bi",
                    thumbnail: "images/Reports/SKU Performance.png"
                }
            ]
        
        },
        {
            title: "S&OP Team",
            link: "https://app.powerbi.com/groups/me/apps/50aec4e1-49b6-469d-88b9-e83b995c642b/reports/b08cc5d8-5f50-4f24-aadd-d7ef29e19a34/302e35f4b0c8ed6e3923?experience=power-bi",
            imageUrl: "images/Workspaces/S&OP Team.png",
            description: "This dashboard delivers key metrics on Need By Date tracker and Repromise Reasons.",
            sortOrder: 3,
            reports: [
                {
                    title: "Need By Date Tracker",
                    description: "Delivers key metrics on how early can we pull in jobs to our current month based on early shipments allowed by customers.",
                    link: "https://app.powerbi.com/groups/me/apps/50aec4e1-49b6-469d-88b9-e83b995c642b/reports/b08cc5d8-5f50-4f24-aadd-d7ef29e19a34/302e35f4b0c8ed6e3923?experience=power-bi",
                    thumbnail: "images/Reports/Need By Date Tracker.png",
                },
                {
                    title: "Repromise Reason",
                    description: "Quantifies how much revenue has leaked into future months due to repromise reasons.",
                    link: "https://app.powerbi.com/groups/me/apps/50aec4e1-49b6-469d-88b9-e83b995c642b/reports/ee633d83-7009-44b6-a09e-59d03b420c5a/3d4fbd2516c3a87450e7?experience=power-bi",
                    thumbnail: "images/Reports/Repromise Reason.png",
                },
                {
                    title: "Projected Shortage",
                    description: "Delivers key metrics on projected shortages.",
                    link: "https://app.powerbi.com/groups/me/apps/50aec4e1-49b6-469d-88b9-e83b995c642b/reports/502c45ce-7abf-4b23-9b7e-c5461f3c92ce/8de5754a88492809a18c?experience=power-bi",
                    thumbnail: "images/Reports/Projected Shortage.png",
                },
                {
                    title: "Order Coverage Report",
                    description: "Delivers key metrics on order coverage.",
                    link: "https://app.powerbi.com/groups/me/apps/50aec4e1-49b6-469d-88b9-e83b995c642b/reports/7b8cd822-17e8-46e6-8613-237e78183983/ReportSection?experience=power-bi",
                    thumbnail: "images/Reports/Order Coverage Report.png",
                },
                {
                    title: "S&OP Adjustments",
                    description: "Delivers key metrics on S&OP Adjustments.",
                    link: "https://app.powerbi.com/groups/me/apps/50aec4e1-49b6-469d-88b9-e83b995c642b/reports/91549af8-fea9-4740-8a96-67dd55d2ceab/ReportSection?experience=power-bi",
                    thumbnail: "images/Reports/S&OP Adjustments.png",
                },
            ]
        },
        {
            title: "HR Dashboard",
            link: "https://app.powerbi.com/groups/me/apps/5be9ab2c-830f-4fb5-bfa0-d903e639937c/reports/67130523-1252-49a1-81ef-f90cfd7018c5/ReportSection?experience=power-bi",
            imageUrl: "images/Workspaces/HR Dashboard.png",
            description: "This dashboard delivers key metrics on workforce count, labor hours, and all pay hours.",
            sortOrder: 4,
            reports: [
                {
                    title: "Employee Hours",
                    description: "Delivers key metrics on how each employee utilizes their time.",
                    link: "https://app.powerbi.com/groups/me/apps/5be9ab2c-830f-4fb5-bfa0-d903e639937c/reports/67130523-1252-49a1-81ef-f90cfd7018c5/ReportSection?experience=power-bi",
                    thumbnail: "images/Reports/Employee Hours.png",
                },
                {
                    title: "Headcount Analysis",
                    description: "Quantifies how many employees in each facility.",
                    link: "https://app.powerbi.com/groups/me/apps/5be9ab2c-830f-4fb5-bfa0-d903e639937c/reports/251c6743-1a35-44a2-b1fa-7a424259fee1/ReportSection2c249b803d38e5786ea0?experience=power-bi",
                    thumbnail: "images/Reports/Headcount Analysis.png",
                }
            ]
        },
        {
            title: "Operations Team",
            link: "https://app.powerbi.com/groups/me/apps/2c05b482-252d-4ce2-b6af-c7570d81304e/reports/e5ca8eac-ca0c-49e9-a7a5-f5a44af8a510/ReportSection?experience=power-bi",
            imageUrl: "images/Workspaces/Operations Team.png",
            description: "This dashboard delivers key metrics on Below Yields, resource group outputs, DMRs, On-Time Delivery, Workload, PO Job Overview, and Operation Order analysis.",
            sortOrder: 5,
            reports: [
                {
                    title: "Below Yield Metrics",
                    description: "Delivers key metrics on Below Yields.",
                    link: "https://app.powerbi.com/groups/me/apps/2c05b482-252d-4ce2-b6af-c7570d81304e/reports/e5ca8eac-ca0c-49e9-a7a5-f5a44af8a510/ReportSection?experience=power-bi",
                    thumbnail: "images/Reports/Below Yield Metrics.png",
                },
                {
                    title: "RG Output",
                    description: "Delivers key metrics on resource group output throughout time.",
                    link: "https://app.powerbi.com/groups/me/apps/2c05b482-252d-4ce2-b6af-c7570d81304e/reports/effb49fd-9ab8-4fd6-971b-c00e49741243/ReportSection?experience=power-bi",
                    thumbnail: "images/Reports/RG Output.png",
                },
                {
                    title: "DMR Metrics",
                    description: "Delivers key metrics on DMRs.",
                    link: "https://app.powerbi.com/groups/me/apps/2c05b482-252d-4ce2-b6af-c7570d81304e/reports/695132db-4b19-4c9a-80f4-519f4420ada2/ReportSection314f67289c69400e1991?experience=power-bi",
                    thumbnail: "images/Reports/DMR Metrics.png",
                },
                {
                    title: "On-Time Delivery",
                    description: "Delivers key metrics on On-Time Deliveries.",
                    link: "https://app.powerbi.com/groups/me/apps/2c05b482-252d-4ce2-b6af-c7570d81304e/reports/092f5328-01e7-468a-a507-e570d4395078/ReportSection?experience=power-bi",
                    thumbnail: "images/Reports/On-Time Delivery.png",
                },
                {
                    title: "Workload",
                    description: "Delivers key metrics across departments & facilities.",
                    link: "https://app.powerbi.com/groups/me/apps/2c05b482-252d-4ce2-b6af-c7570d81304e/reports/a6443e22-6688-4208-857b-56b0b7c7fb50/ReportSection?experience=power-bi",
                    thumbnail: "images/Reports/Workload.png",
                },
                {
                    title: "PO Job Overview",
                    description: "Delivers key metrics on Purchase Orders of jobs.",
                    link: "https://app.powerbi.com/groups/me/apps/2c05b482-252d-4ce2-b6af-c7570d81304e/reports/bc403aeb-e6c6-4d04-abe3-c2a773ac5c94/ReportSection?experience=power-bi",
                    thumbnail: "images/Reports/PO Job Overview.png",
                },
                {
                    title: "Operation Order Analysis",
                    description: "Delivers key metrics on the order of job operations.",
                    link: "https://app.powerbi.com/groups/me/apps/2c05b482-252d-4ce2-b6af-c7570d81304e/reports/0f753bf7-633e-4583-bed8-9bc40983439b/ReportSection?experience=power-bi",
                    thumbnail: "images/Reports/Operation Order Analysis.png",
                },
            ]
        },
        {
            title: "Engineering",
            link: "https://app.powerbi.com/groups/me/apps/34b3990f-2aaa-48a4-bf1b-8f4bd597a283/reports/cb815ab9-82ec-4a4a-9091-2e526652dbd8/ReportSection?experience=power-bi",
            imageUrl: "images/Workspaces/Engineering.png",
            description: "This dashboard delivers key metrics on Need By Date tracker and Repromise Reasons",
            sortOrder: 6,
            reports: [
                {
                    title: "First Article Jobs Metrics",
                    description: "Deliver key metrics on First Articles jobs.",
                    link: "https://app.powerbi.com/groups/me/apps/34b3990f-2aaa-48a4-bf1b-8f4bd597a283/reports/cb815ab9-82ec-4a4a-9091-2e526652dbd8/ReportSection?experience=power-bi",
                    thumbnail: "images/Reports/First Article Job Metrics.png"
                },
                {
                    title: "Yield Compare",
                    description: "Delivers key Yield Analysis across time.",
                    link: "https://app.powerbi.com/groups/me/apps/34b3990f-2aaa-48a4-bf1b-8f4bd597a283/reports/c495ea9f-4d40-43af-9bbd-24f9d765aa4f/ReportSection?experience=power-bi",
                    thumbnail: "images/Reports/Yield Compare.png"
                },
                {
                    title: "Conductivity",
                    description: "Delivers key metrics on plant water conductivity.",
                    link: "https://app.powerbi.com/groups/me/apps/34b3990f-2aaa-48a4-bf1b-8f4bd597a283/reports/e477de37-0d1e-4082-a50d-4445e6a6afbe/ReportSection?experience=power-bi",
                    thumbnail: "images/Reports/Conductivity.png"
                },
            ]
        },
        {
            title: "Buyer Metrics",
            link: "https://app.powerbi.com/groups/me/apps/7f4bdc09-2945-4106-811a-df170a865a28/reports/ae026dfa-39da-4858-ab2c-29c892eced72/ReportSection?experience=power-bi",
            imageUrl: "images/Workspaces/Buyer.png",
            description: "This dashboard delivers key purchasing metrics such as top suppliers, supplier OTD, and tools for buyers.",
            sortOrder: 7,
            reports: [
                {
                    title: "Buyer",
                    description: "Delivers key metrics on POs.",
                    link: "https://app.powerbi.com/groups/me/apps/7f4bdc09-2945-4106-811a-df170a865a28/reports/ae026dfa-39da-4858-ab2c-29c892eced72/ReportSection?experience=power-bi",
                    thumbnail: "images/Reports/Buyer.png"
                },
                {
                    title: "Top Supplier",
                    description: "Quantifies TE's spend per supplier.",
                    link: "https://app.powerbi.com/groups/me/apps/7f4bdc09-2945-4106-811a-df170a865a28/reports/367f50dd-da8a-4541-a0e0-ab7e496f7d30/ReportSectionc662bf31f12cd721aa18?experience=power-bi",
                    thumbnail: "images/Reports/Top Supplier.png"
                },
                {
                    title: "Supplier OTD",
                    description: "Delivers key metrics on supplier OTD.",
                    link: "https://app.powerbi.com/groups/me/apps/7f4bdc09-2945-4106-811a-df170a865a28/reports/f4894776-b889-43c5-a047-6a339e946435/ReportSectionc662bf31f12cd721aa18?experience=power-bi",
                    thumbnail: "images/Reports/Supplier OTD.png"
                }
            ]
        },
        {
            title: "Production Control",
            link: "https://app.powerbi.com/groups/me/apps/657a3899-73d1-43a8-800c-8974fef9fecc/reports/9072d9aa-ec45-4b98-9779-1996a73d4a3f/5fc5f2280100db04421d?experience=power-bi",
            imageUrl: "images/Workspaces/Production Control.png",
            description: "This dashboard delivers key metrics on job critical ratio data.",
            sortOrder: 8,
            reports: [
                {
                    title: "Job Critical Ratio",
                    description: "Delivers key metrics on job critical ratio data.",
                    link: "https://app.powerbi.com/groups/me/apps/657a3899-73d1-43a8-800c-8974fef9fecc/reports/9072d9aa-ec45-4b98-9779-1996a73d4a3f/5fc5f2280100db04421d?experience=power-bi",
                    thumbnail: "images/Reports/Job Critical Ratio.png"
                }
            ]
        },
        {
            title: "Safety",
            link: "https://app.powerbi.com/groups/me/apps/86914d4b-26a9-4534-b4ac-485aadd6d222/reports/0f3ec05a-a2b4-4cff-b238-7b78140be41e/ReportSection?experience=power-bi",
            imageUrl: "images/Workspaces/Safety.png",
            description: "This dashboard delivers key metrics on safety incidents and near misses.",
            sortOrder: 9,
            reports: [
                {
                    title: "Incident Report",
                    description: "Delivers key metrics on safety incidents.",
                    link: "https://app.powerbi.com/groups/me/apps/86914d4b-26a9-4534-b4ac-485aadd6d222/reports/0f3ec05a-a2b4-4cff-b238-7b78140be41e/ReportSection?experience=power-bi",
                    thumbnail: "images/Reports/Incident Report.png"
                }
            ]
        },
        {
            title: "Steven's Workspace",
            link: "https://app.powerbi.com/groups/me/list?experience=power-bi",
            imageUrl: "images/Workspaces/Untitled Workspace.png",
            description: "This dashboard contains unpublished reports developed by Steven Sousa.",
            sortOrder: 10,
            reports: [
                {
                    title: "Conductivity",
                    description: "Delivers key metrics on plant water conductivity.",
                    link: "https://app.powerbi.com/groups/me/reports/69c21966-bd2a-4524-813f-f20e733e3977/ReportSection?experience=power-bi",
                    thumbnail: "images/Reports/Conductivity.png"
                },
                {
                    title: "SKU Performance TEST",
                    description: "Beta version of the SKU Performance report containing upcoming features.",
                    link: "https://app.powerbi.com/groups/cff6874c-6d2f-44a1-8f5c-560a81a3da50/reports/cc97846a-e295-4dce-8ddd-a67c0224a763/fb00cbde036b102e509d?experience=power-bi",
                    thumbnail: "images/Reports/SKU Performance.png"
                }
            ]
        },
        {
            title: "Tech Etch Sales Reports",
            link: "https://app.powerbi.com/groups/me/apps/50b70cb2-648c-42e6-bb82-cbedc2a36192/reports/78dc7c69-56c3-4a84-b4df-ae29b5f063df/ReportSectiond94ff6feff66f7139adc?ctid=747fc93b-f564-43a9-86af-7837267d71db&experience=power-bi",
            imageUrl: "images/Workspaces/Tech Etch Sales Reports.png",
            description: "This dashboard contains reports related to Sales",
            sortOrder: 11,
            reports: [
                {
                    title: "Sales Budget and Projections",
                    description: "Delivers key insights on Projects, Revenue, Budget over time.",
                    link: "https://app.powerbi.com/groups/me/apps/50b70cb2-648c-42e6-bb82-cbedc2a36192/reports/78dc7c69-56c3-4a84-b4df-ae29b5f063df/ReportSectiond94ff6feff66f7139adc?ctid=747fc93b-f564-43a9-86af-7837267d71db&experience=power-bi",
                    thumbnail: "images/Reports/Sales Budget and Projections.png"
                }
            ]
        }
    ];

    // Load card data from local storage or use the default data
    function loadCardData() {
        const storedData = localStorage.getItem('cardData');
        let data = storedData ? JSON.parse(storedData) : defaultCardData;

        // Ensure every card has a unique cardID, even in default data
        data = data.map(card => {
            if (!card.cardID) {
                card.cardID = 'card-' + Math.random().toString(36).substr(2, 9); // Generate an ID if missing
            }
            return card;
        });
        return data;
    }

    // Save card data to local storage
    function saveCardData() {
        localStorage.setItem('cardData', JSON.stringify(cardData));
    }

    // Swap the sortOrder of two cards
    function swapSortOrder(card1, card2) {
        if (card1.sortOrder !== card2.sortOrder) {
            const tempOrder = card1.sortOrder;
            card1.sortOrder = card2.sortOrder;
            card2.sortOrder = tempOrder;
            saveCardData();
        }
    }

    // Generate random ID for collapseID needed in createdCard below.
    function generateRandomId(length = 8) {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let result = '';
        for (let i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        return result;
    }

    // Create HTML for a card
    function createCard(data) {
        // Replace any special characters (including apostrophes) with hyphens and remove extra spaces
        const accordionId = `accordion-${data.title.toLowerCase().replace(/[^a-z0-9\s-]/g, '').replace(/\s+/g, '-')}`;
        const cardHTML = `
    <div class="col-lg-4 col-md-6 card-container" draggable="true" data-card-id="${data.cardID}">
        <div class="card workspace">
            <a href="${data.link}" target="_blank">
                <img src="${data.imageUrl}" class="card-img-top" alt="${data.title} Image">
            </a>
            <div class="card-body">
                <h5 class="card-title">
                    <a href="${data.link}" target="_blank" class="no-underline">${data.title}</a>
                </h5>
                <p class="card-text">${data.description}</p>
                <div class="accordion" id="${accordionId}">
                    ${data.reports.map((report) => {
            const collapseId = `${data.cardID}-collapse-${generateRandomId()}`;
            return `
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="${collapseId}-header">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" 
                                            data-bs-target="#${collapseId}" 
                                            aria-expanded="false" 
                                            aria-controls="${collapseId}">
                                        ${report.title}
                                    </button>
                                </h2>
                                <div id="${collapseId}" class="accordion-collapse collapse" 
                                     aria-labelledby="${collapseId}-header" 
                                     data-bs-parent="#${accordionId}">
                                    <div class="accordion-body border-dark">
                                        <a href="${report.link}" target="_blank">
                                            <img src="${report.thumbnail}" alt="No Picture" class='thumbnail'>
                                        </a>
                                        <p>${report.description}</p>
                                        <a href="${report.link}" target="_blank" class="no-underline"><i class="fa-solid fa-arrow-up-right-from-square"></i></a>
                                    </div>
                                </div>
                            </div>
                        `;
        }).join('')}
                </div>
            </div>
        </div>
    </div>
`;
        return cardHTML;
    }

    // Render the cards based on sortOrder
    function renderCards() {
        const dashboardContainer = document.getElementById('dashboard-container');
        cardData.sort((a, b) => a.sortOrder - b.sortOrder);
        dashboardContainer.innerHTML = cardData.map(createCard).join('');
        initDragAndDrop(); // Reinitialize drag-and-drop functionality
    }

    // Function to initialize drag-and-drop functionality
    function initDragAndDrop() {
        const cardContainers = document.querySelectorAll('.card-container');
        let draggedCard;
        let scrollInterval;
        const SCROLL_THRESHOLD = 100; // Distance from the edge to start scrolling
        const SCROLL_SPEED = 300; // Scroll speed in pixels per frame

        // Helper function to stop auto-scrolling
        function stopAutoScroll() {
            if (scrollInterval) {
                clearInterval(scrollInterval);
                scrollInterval = null;
            }
        }

        // Helper function to handle auto-scrolling
        function handleAutoScroll(e) {
            const viewportHeight = window.innerHeight;
            const mouseY = e.clientY;

            // Check if we need to scroll up
            if (mouseY < SCROLL_THRESHOLD) {
                if (!scrollInterval) {
                    scrollInterval = setInterval(() => {
                        window.scrollBy(0, -SCROLL_SPEED);
                    }, 16); // ~60 frames per second
                }
            }
            // Check if we need to scroll down
            else if (mouseY > viewportHeight - SCROLL_THRESHOLD) {
                if (!scrollInterval) {
                    scrollInterval = setInterval(() => {
                        window.scrollBy(0, SCROLL_SPEED);
                    }, 16); // ~60 frames per second
                }
            } else {
                // Stop scrolling if the mouse is not near the edges
                stopAutoScroll();
            }
        }

        cardContainers.forEach(container => {
            container.addEventListener('dragstart', (e) => {
                draggedCard = cardData.find(card => card.cardID === container.dataset.cardId);
                container.classList.add('dragging');
                console.log('Started dragging:', draggedCard.title);
            });

            container.addEventListener('dragover', (e) => {
                e.preventDefault(); // Necessary to allow dropping
                handleAutoScroll(e); // Handle auto-scroll during drag
            });

            container.addEventListener('dragleave', (e) => {
                stopAutoScroll(); // Stop scrolling when dragging leaves the container
            });

            container.addEventListener('drop', (e) => {
                e.preventDefault();
                stopAutoScroll(); // Stop scrolling when drop occurs
                const targetCard = cardData.find(card => card.cardID === container.dataset.cardId);
                if (draggedCard && draggedCard !== targetCard) {
                    swapSortOrder(draggedCard, targetCard);
                    renderCards();
                }
                container.classList.remove('dragging');
            });

            container.addEventListener('dragend', () => {
                container.classList.remove('dragging');
                stopAutoScroll(); // Stop scrolling when drag ends
            });
        });

        // Handle scroll when the dragging card leaves the viewport
        document.addEventListener('dragover', handleAutoScroll);
        document.addEventListener('drop', stopAutoScroll); // Stop scroll on drop
        document.addEventListener('dragend', stopAutoScroll); // Stop scroll on drag end
    }

    let cardData = loadCardData();
    renderCards();

    // Add scroll-to-visible logic for collapsible elements
    document.querySelectorAll('[data-bs-toggle="collapse"]').forEach(button => {
        button.addEventListener('click', function () {
            const targetId = this.getAttribute('data-bs-target');
            const target = document.querySelector(targetId);
            const workspace = this.closest('.workspace'); // Select the nearest workspace element

            if (target) {
                // Wait for the collapse transition to finish before checking scroll
                target.addEventListener('shown.bs.collapse', function () {
                    const rect = target.getBoundingClientRect();
                    const workspaceRect = workspace.getBoundingClientRect(); // Get the workspace's position

                    // Calculate the target's position relative to the workspace
                    const targetTopInWorkspace = rect.top - workspaceRect.top + workspace.scrollTop; // Adjust with current scroll

                    // Check if the element is fully visible within the workspace
                    const isFullyVisible = targetTopInWorkspace >= workspace.scrollTop &&
                        (targetTopInWorkspace + rect.height) <= (workspace.scrollTop + workspace.clientHeight);

                    // Only scroll if the element is not fully in view
                    if (!isFullyVisible) {
                        // Scroll the workspace to bring the expanded section into view
                        workspace.scrollTo({
                            top: targetTopInWorkspace,
                            behavior: 'smooth'
                        });
                    }
                }, { once: true });
            }
        });
    });

    // Implement webpage dimming while searching
    function dimPage() {
        const searchBar = document.getElementById('search-bar');
        const dimOverlay = document.getElementById('dim-overlay');
        const resultsContainer = document.getElementById('resultsContainer');
        const body = document.body;

        // When the user clicks in the search box
        searchBar.addEventListener('focus', () => {
            dimOverlay.classList.add('active');
            body.classList.add('no-scroll');

            // If the search box is not empty, display resultsContainer
            if (searchBar.value.trim() !== '') {
                resultsContainer.classList.remove('results-container-hidden');
            }
        });

        // If the user clicks in the dimmed area
        dimOverlay.addEventListener('click', () => {
            dimOverlay.classList.remove('active');
            body.classList.remove('no-scroll');
            resultsContainer.classList.add('results-container-hidden');
            searchBar.blur(); // Remove focus from search bar
        });

        // When the search bar loses focus
        searchBar.addEventListener('blur', () => {
            setTimeout(() => { // Timeout to allow click events to register
                if (!resultsContainer.contains(document.activeElement)) {
                    dimOverlay.classList.remove('active');
                    body.classList.remove('no-scroll');
                    resultsContainer.classList.add('results-container-hidden');
                }
            }, 150); // Adjust the timeout duration as needed
        });
    }

    // Call the function
    dimPage();

    // Search bar algorithm
    const resultsContainer = document.getElementById('resultsContainer');
    const searchBar = document.getElementById('search-bar');

    function renderResults(data, searchQuery) {
        // Clear previous results
        resultsContainer.innerHTML = '';

        if (data.length === 0) {
            resultsContainer.innerHTML = "<p>No results found.</p>";
            resultsContainer.classList.remove('results-container-hidden');
            return;
        }

        data.forEach(card => {
            // Filter reports inside the card that match the search query
            const matchingReports = card.reports.filter(report =>
                report.title.toLowerCase().includes(searchQuery) ||
                report.description.toLowerCase().includes(searchQuery)
            );

            // Create individual div for each matching report
            matchingReports.forEach(report => {
                const reportElement = document.createElement('div');
                reportElement.classList.add('report-item');
                reportElement.innerHTML = `
                <a href="${report.link}" target="_blank"
                    <h3>${report.title}</h3>
                    <p>${report.description}</p>
                </a>
            `;

                // Append each report to the container individually
                resultsContainer.appendChild(reportElement);
            });
        });

        // If no matching reports are found after filtering
        if (resultsContainer.innerHTML === '') {
            resultsContainer.innerHTML = "<p>No results found.</p>";
        }

        resultsContainer.classList.remove('results-container-hidden');
    }

    searchBar.addEventListener("input", (e) => {
        const searchQuery = searchBar.value.toLowerCase();

        // If the search query is empty, clear results and hide the container
        if (!searchQuery) {
            resultsContainer.innerHTML = '';
            resultsContainer.classList.remove('visible');
            resultsContainer.classList.add('results-container-hidden');
            return;
        }

        // Filter cards that contain at least one matching report
        const filteredData = cardData.filter(card =>
            card.reports.some(report =>
                report.title.toLowerCase().includes(searchQuery) ||
                report.description.toLowerCase().includes(searchQuery)
            )
        );

        // Render only the matching reports
        renderResults(filteredData, searchQuery);
    });
});