ngAfterViewInit(): void {
    this.objetosGerenciaveis = this.obj;

    if (this.botoesService.botoes.F12.default) {
      const componentSelector = this._domService.GetSelectorOfLastActiveForm();

      setTimeout(() => {
        this.botoesService.botoes.F12 = {
          funcao: () => this._domService.FecharTela(componentSelector),
          habilitado: true,
          titulo: 'Sair',
        }
      }, 500);
    }
  }


  //

  Sair() {
    this._serviceDom.FecharTela(this['selector']);
  }
  
  // Vinicius Andrade Lopes

  this.configPanel.botoes.F12 = {
    funcao: () => this.Sair(),
    habilitado: true,
    titulo: 'Sair'
  };

  this.configPanel.botoes.F12 = {
    funcao: () => this.Sair(),
    habilitado: true,
    titulo: 'Sair'
  };

  // Nova função para Sair //

  export class BarraBotoesComponent implements OnInit, AfterViewInit {
    @Input() funcoes: Object;
    public botoes: Botoes;
  
    public BOTOES = ['F1', 'F2', 'F3', 'F4', 'F5', 'F6', 'F7', 'F8', 'F9', 'F10', 'F11', 'F12'];
    @ViewChildren(ObjetoGerenciavelDirective) obj: QueryList<ObjetoGerenciavelDirective>;
    public objetosGerenciaveis: QueryList<ObjetoGerenciavelDirective>;
    constructor(public botoesService: BotoesService,
      public _domService: DomService) {
    }
  
    ngOnInit() {
      this.botoes = this.botoesService.botoes;
    }
    ngAfterViewInit(): void {
      this.objetosGerenciaveis = this.obj;
  
      if (this.botoesService.botoes.F12.default) {
        const componentSelector = this._domService.GetSelectorOfLastActiveForm();
  
        setTimeout(() => {
          this.botoesService.botoes.F12 = {
            funcao: () => this._domService.FecharTela(componentSelector),
            habilitado: true,
            titulo: 'Sair',
          }
        }, 500);
      }
    }
  }


  /// Modificação para Data
    <div class="col-md-6">
      <div class="form-group">
       <label for="PAR_DATA_REFER">Data:</label>
        <div class="input-group">
          <input type="text" 
            name="PAR_DATA_REFER" class="form-control col-md-8" 
         [imask]="{mask: '00/00/0000'}" 
         [disabled]="vm.disabled.PAR_DATA_REFER"
         [(ngModel)]="vm.PXICN217.Parametro.PAR_DATA_REFER">
         <input type="text" 
         name="HORA_REFER" class="form-control col-md-4" [disabled]="true"
         [imask]="{mask: '00:00:00'}" 
         [(ngModel)]="vm.HORA_REFER">
      </div>
   </div>

                    /* Teste */
                    <div class="form-group">
                <label for="PAR_DTH_FIM">Data/Hora:</label>
                <div class="input-group">

                  <!-- Alteração Vinicius -->
                  <input type="text" 
                  name="PAR_DTH_FIM" class="form-control col-md-8" 
                  [imask]="{mask: '00/00/0000'}"
                  placeholder="DD/MM/AAAA HH:MM:SS" 
                  [disabled]="vm.disabled.PAR_DTH_FIM"
                  [(ngModel)]="vm.Parametros.PAR_DTH_FIM">

                  <!--<input class="form-control input-sm col-md-8" placeholder="DD/MM/AAAA" name="PAR_DTH_FIM" [(ngModel)]="vm.Parametros.PAR_DTH_FIM" ngbDatepicker #dtFim="ngbDatepicker">
                  <button class="btn btn-outline-secondary btnDatePicker" (click)="dtFim.toggle()" type="button">
                    <fa name="calendar"></fa>
                  </button>-->

                  <input type="text" class="form-control input-sm col-md-5" name="PAR_DTH_FIM_MIN" placeholder="MM:HH:SS" [imask]="{mask: '00:00:00'}" [unmask]="true" [(ngModel)]="vm.Parametros.PAR_DTH_FIM_MIN">
                </div>
              </div>

                // OU

                <input class="form-control input-sm col-md" placeholder="DD/MM/AAAA"
                name="DTH_ABERT_RNC" [(ngModel)]="vm.Registros.DTH_ABERT_RNC" [disabled]="true"
                ngbDatepicker #dAbert="ngbDatepicker">

              /* DomService */
              private _serviceDom: DomService,


              <input type="text" name="PAR_DTH_INIC" class="form-control col-md-8"
                          [imask]="{mask: '00/00/0000'}" placeholder="DD/MM/AAAA"
                          [disabled]="vm.disabled.PAR_DTH_FIM" [(ngModel)]="vm.Parametros.PAR_DTH_INIC">


Sair() {
    this._serviceDom.FecharTela(this['selector']);
  }
  
  // Vinicius Andrade Lopes

  private _serviceDom: DomService,


  nivel1.push(new MenuItem(true, '00', 'mnuProgramaProducaoFEA2', 'Programa Produção', 'itmEquipamentoFea2-0',
            false, true, null, null, null, 'ProgramaProducao', 'mnuProgramaProducaoFea2', 'button', true));

  Pesquisa calendário: <button class="btn btn-outline-secondary btnDatePicker"

  (ngModelChange)="Limpar()"