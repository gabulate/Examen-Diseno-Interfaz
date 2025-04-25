        // Funciones para manejar la navegación entre pantallas
        function login() {
            document.getElementById('login-screen').style.display = 'none';
            document.getElementById('main-menu').style.display = 'block';
            document.querySelector('.menu-container').style.display = 'block';
        }
        
        function logout() {
            document.getElementById('login-screen').style.display = 'block';
            document.getElementById('main-menu').style.display = 'none';
            // Ocultar todos los módulos
            document.querySelectorAll('.module-container').forEach(module => {
                module.style.display = 'none';
            });
        }
        
        function showMainMenu() {
            document.querySelector('.menu-container').style.display = 'block';
            // Ocultar todos los módulos
            document.querySelectorAll('.module-container').forEach(module => {
                module.style.display = 'none';
            });
        }
        
        function showModule(moduleName) {
            document.querySelector('.menu-container').style.display = 'none';
            document.getElementById(`${moduleName}-module`).style.display = 'block';
        }
        
        // Funciones para el módulo de empleados
        function showEmployeeForm() {
            document.getElementById('employee-form').style.display = 'block';
        }
        
        function hideEmployeeForm() {
            document.getElementById('employee-form').style.display = 'none';
        }
        
        // Funciones para el módulo de clientes
        function showClientForm() {
            document.getElementById('client-form').style.display = 'block';
        }
        
        function hideClientForm() {
            document.getElementById('client-form').style.display = 'none';
        }
        
        // Funciones para el módulo de reservas
        function addPerson() {
            const container = document.getElementById('personas-container');
            const count = container.children.length + 1;
            
            const newPerson = document.createElement('div');
            newPerson.className = 'person-item';
            newPerson.innerHTML = `
                <div class="person-header">
                    <h5>Persona #${count}</h5>
                    <button class="remove-person" onclick="this.parentNode.parentNode.remove()"><i class="fas fa-times"></i></button>
                </div>
                <div class="form-row">
                    <div class="form-col">
                        <div class="form-group">
                            <label for="persona${count}-nombre">Nombre</label>
                            <input type="text" id="persona${count}-nombre" placeholder="Nombre completo">
                        </div>
                        <div class="form-group">
                            <label for="persona${count}-tipo">Tipo de Corte</label>
                            <select id="persona${count}-tipo">
                                <option value="hombre">Caballero (30 min)</option>
                                <option value="mujer">Dama (1 hora)</option>
                            </select>
                        </div>
                    </div>
                    <div class="form-col">
                        <div class="form-group">
                            <label for="persona${count}-edad">Condición</label>
                            <select id="persona${count}-edad">
                                <option value="adulto">Adulto (Precio completo)</option>
                                <option value="niño">Niño (50% descuento)</option>
                                <option value="mayor">Adulto mayor (50% descuento)</option>
                            </select>
                        </div>
                    </div>
                </div>
            `;
            
            container.appendChild(newPerson);
        }
        
        // Funciones para el módulo de facturación
        function generateInvoice() {
            document.getElementById('invoice-preview').style.display = 'block';
        }
        
        // Funciones para el módulo de informes
        function generateReport() {
            document.getElementById('report-results').style.display = 'block';
        }
        
        // Selección de horarios
        document.querySelectorAll('.time-slot:not(.unavailable)').forEach(slot => {
            slot.addEventListener('click', function() {
                document.querySelectorAll('.time-slot').forEach(s => s.classList.remove('selected'));
                this.classList.add('selected');
            });
        });