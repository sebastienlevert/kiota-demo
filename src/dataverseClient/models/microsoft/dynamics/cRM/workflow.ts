import {createAnnotationFromDiscriminatorValue} from './createAnnotationFromDiscriminatorValue';
import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createBooleanManagedPropertyFromDiscriminatorValue} from './createBooleanManagedPropertyFromDiscriminatorValue';
import {createBotcomponentFromDiscriminatorValue} from './createBotcomponentFromDiscriminatorValue';
import {createBusinessunitFromDiscriminatorValue} from './createBusinessunitFromDiscriminatorValue';
import {createCatalogassignmentFromDiscriminatorValue} from './createCatalogassignmentFromDiscriminatorValue';
import {createExpiredprocessFromDiscriminatorValue} from './createExpiredprocessFromDiscriminatorValue';
import {createFlowsessionFromDiscriminatorValue} from './createFlowsessionFromDiscriminatorValue';
import {createLeadtoopportunitysalesprocessFromDiscriminatorValue} from './createLeadtoopportunitysalesprocessFromDiscriminatorValue';
import {createMsdyn_aimodelFromDiscriminatorValue} from './createMsdyn_aimodelFromDiscriminatorValue';
import {createMsdyn_bpf_2c5fe86acc8b414b8322ae571000c799FromDiscriminatorValue} from './createMsdyn_bpf_2c5fe86acc8b414b8322ae571000c799FromDiscriminatorValue';
import {createMsdyn_bpf_477c16f59170487b8b4dc895c5dcd09bFromDiscriminatorValue} from './createMsdyn_bpf_477c16f59170487b8b4dc895c5dcd09bFromDiscriminatorValue';
import {createMsdyn_bpf_665e73aa18c247d886bfc50499c73b82FromDiscriminatorValue} from './createMsdyn_bpf_665e73aa18c247d886bfc50499c73b82FromDiscriminatorValue';
import {createMsdyn_bpf_989e9b1857e24af18787d5143b67523bFromDiscriminatorValue} from './createMsdyn_bpf_989e9b1857e24af18787d5143b67523bFromDiscriminatorValue';
import {createMsdyn_bpf_baa0a411a239410cb8bded8b5fdd88e3FromDiscriminatorValue} from './createMsdyn_bpf_baa0a411a239410cb8bded8b5fdd88e3FromDiscriminatorValue';
import {createMsdyn_bpf_d3d97bac8c294105840e99e37a9d1c39FromDiscriminatorValue} from './createMsdyn_bpf_d3d97bac8c294105840e99e37a9d1c39FromDiscriminatorValue';
import {createMsdyn_bpf_d8f9dc7f099f44db9d641dd81fbd470dFromDiscriminatorValue} from './createMsdyn_bpf_d8f9dc7f099f44db9d641dd81fbd470dFromDiscriminatorValue';
import {createMsdyn_entityroutingconfigurationFromDiscriminatorValue} from './createMsdyn_entityroutingconfigurationFromDiscriminatorValue';
import {createMsdyn_iottocaseprocessFromDiscriminatorValue} from './createMsdyn_iottocaseprocessFromDiscriminatorValue';
import {createMsdyn_macrosessionFromDiscriminatorValue} from './createMsdyn_macrosessionFromDiscriminatorValue';
import {createMsdyn_pmrecordingFromDiscriminatorValue} from './createMsdyn_pmrecordingFromDiscriminatorValue';
import {createMsdyn_productivityagentscriptstepFromDiscriminatorValue} from './createMsdyn_productivityagentscriptstepFromDiscriminatorValue';
import {createMsdyn_solutionhealthruleFromDiscriminatorValue} from './createMsdyn_solutionhealthruleFromDiscriminatorValue';
import {createNewprocessFromDiscriminatorValue} from './createNewprocessFromDiscriminatorValue';
import {createOpportunitysalesprocessFromDiscriminatorValue} from './createOpportunitysalesprocessFromDiscriminatorValue';
import {createPhonetocaseprocessFromDiscriminatorValue} from './createPhonetocaseprocessFromDiscriminatorValue';
import {createPrincipalFromDiscriminatorValue} from './createPrincipalFromDiscriminatorValue';
import {createProcesssessionFromDiscriminatorValue} from './createProcesssessionFromDiscriminatorValue';
import {createProcessstageFromDiscriminatorValue} from './createProcessstageFromDiscriminatorValue';
import {createProcesstriggerFromDiscriminatorValue} from './createProcesstriggerFromDiscriminatorValue';
import {createSlaFromDiscriminatorValue} from './createSlaFromDiscriminatorValue';
import {createSlaitemFromDiscriminatorValue} from './createSlaitemFromDiscriminatorValue';
import {createSyncerrorFromDiscriminatorValue} from './createSyncerrorFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {createTeamFromDiscriminatorValue} from './createTeamFromDiscriminatorValue';
import {createTranslationprocessFromDiscriminatorValue} from './createTranslationprocessFromDiscriminatorValue';
import {createWorkflowbinaryFromDiscriminatorValue} from './createWorkflowbinaryFromDiscriminatorValue';
import {createWorkflowFromDiscriminatorValue} from './createWorkflowFromDiscriminatorValue';
import {Annotation, Asyncoperation, BooleanManagedProperty, Botcomponent, Businessunit, Catalogassignment, Crmbaseentity, Expiredprocess, Flowsession, Leadtoopportunitysalesprocess, Msdyn_aimodel, Msdyn_bpf_2c5fe86acc8b414b8322ae571000c799, Msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b, Msdyn_bpf_665e73aa18c247d886bfc50499c73b82, Msdyn_bpf_989e9b1857e24af18787d5143b67523b, Msdyn_bpf_baa0a411a239410cb8bded8b5fdd88e3, Msdyn_bpf_d3d97bac8c294105840e99e37a9d1c39, Msdyn_bpf_d8f9dc7f099f44db9d641dd81fbd470d, Msdyn_entityroutingconfiguration, Msdyn_iottocaseprocess, Msdyn_macrosession, Msdyn_pmrecording, Msdyn_productivityagentscriptstep, Msdyn_solutionhealthrule, Newprocess, Opportunitysalesprocess, Phonetocaseprocess, Principal, Processsession, Processstage, Processtrigger, Sla, Slaitem, Syncerror, Systemuser, Team, Translationprocess, Workflowbinary} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Workflow extends Crmbaseentity implements Parsable {
    private __activeworkflowid_value?: string | undefined;
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private __ownerid_value?: string | undefined;
    private __owningbusinessunit_value?: string | undefined;
    private __owningteam_value?: string | undefined;
    private __owninguser_value?: string | undefined;
    private __parentworkflowid_value?: string | undefined;
    private __plugintypeid_value?: string | undefined;
    private __sdkmessageid_value?: string | undefined;
    private _activeworkflowid?: Workflow | undefined;
    private _asyncautodelete?: boolean | undefined;
    private _botcomponent_workflow?: Botcomponent[] | undefined;
    private _businessprocesstype?: number | undefined;
    private _catalogAssignments?: Catalogassignment[] | undefined;
    private _category?: number | undefined;
    private _clientdata?: string | undefined;
    private _componentstate?: number | undefined;
    private _createdby?: Systemuser | undefined;
    private _createdon?: Date | undefined;
    private _createdonbehalfby?: Systemuser | undefined;
    private _createstage?: number | undefined;
    private _deletestage?: number | undefined;
    private _description?: string | undefined;
    private _entityimage?: string | undefined;
    private _entityimage_timestamp?: number | undefined;
    private _entityimage_url?: string | undefined;
    private _entityimageid?: string | undefined;
    private _formid?: string | undefined;
    private _inputparameters?: string | undefined;
    private _introducedversion?: string | undefined;
    private _iscrmuiworkflow?: boolean | undefined;
    private _iscustomizable?: BooleanManagedProperty | undefined;
    private _iscustomprocessingstepallowedforotherpublishers?: BooleanManagedProperty | undefined;
    private _ismanaged?: boolean | undefined;
    private _istransacted?: boolean | undefined;
    private _languagecode?: number | undefined;
    private _lk_asyncoperation_workflowactivationid?: Asyncoperation[] | undefined;
    private _lk_msdyn_bpf_2c5fe86acc8b414b8322ae571000c799_processid?: Msdyn_bpf_2c5fe86acc8b414b8322ae571000c799[] | undefined;
    private _lk_msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b_processid?: Msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b[] | undefined;
    private _lk_msdyn_bpf_665e73aa18c247d886bfc50499c73b82_processid?: Msdyn_bpf_665e73aa18c247d886bfc50499c73b82[] | undefined;
    private _lk_msdyn_bpf_989e9b1857e24af18787d5143b67523b_processid?: Msdyn_bpf_989e9b1857e24af18787d5143b67523b[] | undefined;
    private _lk_msdyn_bpf_baa0a411a239410cb8bded8b5fdd88e3_processid?: Msdyn_bpf_baa0a411a239410cb8bded8b5fdd88e3[] | undefined;
    private _lk_msdyn_bpf_d3d97bac8c294105840e99e37a9d1c39_processid?: Msdyn_bpf_d3d97bac8c294105840e99e37a9d1c39[] | undefined;
    private _lk_msdyn_bpf_d8f9dc7f099f44db9d641dd81fbd470d_processid?: Msdyn_bpf_d8f9dc7f099f44db9d641dd81fbd470d[] | undefined;
    private _lk_msdyn_iottocaseprocess_processid?: Msdyn_iottocaseprocess[] | undefined;
    private _lk_processsession_processid?: Processsession[] | undefined;
    private _mode?: number | undefined;
    private _modifiedby?: Systemuser | undefined;
    private _modifiedon?: Date | undefined;
    private _modifiedonbehalfby?: Systemuser | undefined;
    private _msdyn_retrainworkflow_msdyn_toaimodel?: Msdyn_aimodel[] | undefined;
    private _msdyn_scheduleinferenceworkflow_msdyn_toaimodel?: Msdyn_aimodel[] | undefined;
    private _msdyn_workflow_msdyn_entityroutingconfiguration_DeroutingProcess?: Msdyn_entityroutingconfiguration[] | undefined;
    private _msdyn_workflow_msdyn_entityroutingconfiguration_RoutingProcess?: Msdyn_entityroutingconfiguration[] | undefined;
    private _msdyn_workflow_msdyn_macrosession_macroname?: Msdyn_macrosession[] | undefined;
    private _msdyn_workflow_msdyn_pmrecording?: Msdyn_pmrecording[] | undefined;
    private _msdyn_workflow_msdyn_prod_agentscriptstep_macroactionid?: Msdyn_productivityagentscriptstep[] | undefined;
    private _msdyn_workflow_msdyn_solutionhealthrule_resolutionaction?: Msdyn_solutionhealthrule[] | undefined;
    private _msdyn_workflow_msdyn_solutionhealthrule_Workflow?: Msdyn_solutionhealthrule[] | undefined;
    private _name?: string | undefined;
    private _ondemand?: boolean | undefined;
    private _overwritetime?: Date | undefined;
    private _ownerid?: Principal | undefined;
    private _owningbusinessunit?: Businessunit | undefined;
    private _owningteam?: Team | undefined;
    private _owninguser?: Systemuser | undefined;
    private _parentworkflowid?: Workflow | undefined;
    private _primaryentity?: string | undefined;
    private _process_processstage?: Processstage[] | undefined;
    private _process_processtrigger?: Processtrigger[] | undefined;
    private _processorder?: number | undefined;
    private _processroleassignment?: string | undefined;
    private _processtriggerformid?: string | undefined;
    private _processtriggerscope?: number | undefined;
    private _rank?: number | undefined;
    private _regardingobjectid_process?: Flowsession[] | undefined;
    private _rendererobjecttypecode?: string | undefined;
    private _runas?: number | undefined;
    private _scope?: number | undefined;
    private _slabase_workflowid?: Sla[] | undefined;
    private _slaitembase_workflowid?: Slaitem[] | undefined;
    private _solutionid?: string | undefined;
    private _statecode?: number | undefined;
    private _statuscode?: number | undefined;
    private _subprocess?: boolean | undefined;
    private _syncworkflowlogonfailure?: boolean | undefined;
    private _triggeroncreate?: boolean | undefined;
    private _triggerondelete?: boolean | undefined;
    private _triggeronupdateattributelist?: string | undefined;
    private _trustedaccess?: boolean | undefined;
    private _type?: number | undefined;
    private _uidata?: string | undefined;
    private _uiflowtype?: number | undefined;
    private _uniquename?: string | undefined;
    private _updatestage?: number | undefined;
    private _versionnumber?: number | undefined;
    private _workflow_active_workflow?: Workflow[] | undefined;
    private _workflow_Annotation?: Annotation[] | undefined;
    private _workflow_expiredprocess?: Expiredprocess[] | undefined;
    private _workflow_leadtoopportunitysalesprocess?: Leadtoopportunitysalesprocess[] | undefined;
    private _workflow_newprocess?: Newprocess[] | undefined;
    private _workflow_opportunitysalesprocess?: Opportunitysalesprocess[] | undefined;
    private _workflow_parent_workflow?: Workflow[] | undefined;
    private _workflow_phonetocaseprocess?: Phonetocaseprocess[] | undefined;
    private _workflow_SyncErrors?: Syncerror[] | undefined;
    private _workflow_translationprocess?: Translationprocess[] | undefined;
    private _workflow_workflowbinary_Process?: Workflowbinary[] | undefined;
    private _workflowid?: string | undefined;
    private _workflowidunique?: string | undefined;
    private _xaml?: string | undefined;
    /**
     * Gets the _activeworkflowid_value property value. 
     * @returns a string
     */
    public get _activeworkflowid_value() {
        return this.__activeworkflowid_value;
    };
    /**
     * Sets the _activeworkflowid_value property value. 
     * @param value Value to set for the _activeworkflowid_value property.
     */
    public set _activeworkflowid_value(value: string | undefined) {
        this.__activeworkflowid_value = value;
    };
    /**
     * Gets the _createdby_value property value. 
     * @returns a string
     */
    public get _createdby_value() {
        return this.__createdby_value;
    };
    /**
     * Sets the _createdby_value property value. 
     * @param value Value to set for the _createdby_value property.
     */
    public set _createdby_value(value: string | undefined) {
        this.__createdby_value = value;
    };
    /**
     * Gets the _createdonbehalfby_value property value. 
     * @returns a string
     */
    public get _createdonbehalfby_value() {
        return this.__createdonbehalfby_value;
    };
    /**
     * Sets the _createdonbehalfby_value property value. 
     * @param value Value to set for the _createdonbehalfby_value property.
     */
    public set _createdonbehalfby_value(value: string | undefined) {
        this.__createdonbehalfby_value = value;
    };
    /**
     * Gets the _modifiedby_value property value. 
     * @returns a string
     */
    public get _modifiedby_value() {
        return this.__modifiedby_value;
    };
    /**
     * Sets the _modifiedby_value property value. 
     * @param value Value to set for the _modifiedby_value property.
     */
    public set _modifiedby_value(value: string | undefined) {
        this.__modifiedby_value = value;
    };
    /**
     * Gets the _modifiedonbehalfby_value property value. 
     * @returns a string
     */
    public get _modifiedonbehalfby_value() {
        return this.__modifiedonbehalfby_value;
    };
    /**
     * Sets the _modifiedonbehalfby_value property value. 
     * @param value Value to set for the _modifiedonbehalfby_value property.
     */
    public set _modifiedonbehalfby_value(value: string | undefined) {
        this.__modifiedonbehalfby_value = value;
    };
    /**
     * Gets the _ownerid_value property value. 
     * @returns a string
     */
    public get _ownerid_value() {
        return this.__ownerid_value;
    };
    /**
     * Sets the _ownerid_value property value. 
     * @param value Value to set for the _ownerid_value property.
     */
    public set _ownerid_value(value: string | undefined) {
        this.__ownerid_value = value;
    };
    /**
     * Gets the _owningbusinessunit_value property value. 
     * @returns a string
     */
    public get _owningbusinessunit_value() {
        return this.__owningbusinessunit_value;
    };
    /**
     * Sets the _owningbusinessunit_value property value. 
     * @param value Value to set for the _owningbusinessunit_value property.
     */
    public set _owningbusinessunit_value(value: string | undefined) {
        this.__owningbusinessunit_value = value;
    };
    /**
     * Gets the _owningteam_value property value. 
     * @returns a string
     */
    public get _owningteam_value() {
        return this.__owningteam_value;
    };
    /**
     * Sets the _owningteam_value property value. 
     * @param value Value to set for the _owningteam_value property.
     */
    public set _owningteam_value(value: string | undefined) {
        this.__owningteam_value = value;
    };
    /**
     * Gets the _owninguser_value property value. 
     * @returns a string
     */
    public get _owninguser_value() {
        return this.__owninguser_value;
    };
    /**
     * Sets the _owninguser_value property value. 
     * @param value Value to set for the _owninguser_value property.
     */
    public set _owninguser_value(value: string | undefined) {
        this.__owninguser_value = value;
    };
    /**
     * Gets the _parentworkflowid_value property value. 
     * @returns a string
     */
    public get _parentworkflowid_value() {
        return this.__parentworkflowid_value;
    };
    /**
     * Sets the _parentworkflowid_value property value. 
     * @param value Value to set for the _parentworkflowid_value property.
     */
    public set _parentworkflowid_value(value: string | undefined) {
        this.__parentworkflowid_value = value;
    };
    /**
     * Gets the _plugintypeid_value property value. 
     * @returns a string
     */
    public get _plugintypeid_value() {
        return this.__plugintypeid_value;
    };
    /**
     * Sets the _plugintypeid_value property value. 
     * @param value Value to set for the _plugintypeid_value property.
     */
    public set _plugintypeid_value(value: string | undefined) {
        this.__plugintypeid_value = value;
    };
    /**
     * Gets the _sdkmessageid_value property value. 
     * @returns a string
     */
    public get _sdkmessageid_value() {
        return this.__sdkmessageid_value;
    };
    /**
     * Sets the _sdkmessageid_value property value. 
     * @param value Value to set for the _sdkmessageid_value property.
     */
    public set _sdkmessageid_value(value: string | undefined) {
        this.__sdkmessageid_value = value;
    };
    /**
     * Gets the activeworkflowid property value. 
     * @returns a workflow
     */
    public get activeworkflowid() {
        return this._activeworkflowid;
    };
    /**
     * Sets the activeworkflowid property value. 
     * @param value Value to set for the activeworkflowid property.
     */
    public set activeworkflowid(value: Workflow | undefined) {
        this._activeworkflowid = value;
    };
    /**
     * Gets the asyncautodelete property value. 
     * @returns a boolean
     */
    public get asyncautodelete() {
        return this._asyncautodelete;
    };
    /**
     * Sets the asyncautodelete property value. 
     * @param value Value to set for the asyncautodelete property.
     */
    public set asyncautodelete(value: boolean | undefined) {
        this._asyncautodelete = value;
    };
    /**
     * Gets the botcomponent_workflow property value. 
     * @returns a botcomponent
     */
    public get botcomponent_workflow() {
        return this._botcomponent_workflow;
    };
    /**
     * Sets the botcomponent_workflow property value. 
     * @param value Value to set for the botcomponent_workflow property.
     */
    public set botcomponent_workflow(value: Botcomponent[] | undefined) {
        this._botcomponent_workflow = value;
    };
    /**
     * Gets the businessprocesstype property value. 
     * @returns a integer
     */
    public get businessprocesstype() {
        return this._businessprocesstype;
    };
    /**
     * Sets the businessprocesstype property value. 
     * @param value Value to set for the businessprocesstype property.
     */
    public set businessprocesstype(value: number | undefined) {
        this._businessprocesstype = value;
    };
    /**
     * Gets the catalogAssignments property value. 
     * @returns a catalogassignment
     */
    public get catalogAssignments() {
        return this._catalogAssignments;
    };
    /**
     * Sets the catalogAssignments property value. 
     * @param value Value to set for the CatalogAssignments property.
     */
    public set catalogAssignments(value: Catalogassignment[] | undefined) {
        this._catalogAssignments = value;
    };
    /**
     * Gets the category property value. 
     * @returns a integer
     */
    public get category() {
        return this._category;
    };
    /**
     * Sets the category property value. 
     * @param value Value to set for the category property.
     */
    public set category(value: number | undefined) {
        this._category = value;
    };
    /**
     * Gets the clientdata property value. 
     * @returns a string
     */
    public get clientdata() {
        return this._clientdata;
    };
    /**
     * Sets the clientdata property value. 
     * @param value Value to set for the clientdata property.
     */
    public set clientdata(value: string | undefined) {
        this._clientdata = value;
    };
    /**
     * Gets the componentstate property value. 
     * @returns a integer
     */
    public get componentstate() {
        return this._componentstate;
    };
    /**
     * Sets the componentstate property value. 
     * @param value Value to set for the componentstate property.
     */
    public set componentstate(value: number | undefined) {
        this._componentstate = value;
    };
    /**
     * Instantiates a new workflow and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the createdby property value. 
     * @returns a systemuser
     */
    public get createdby() {
        return this._createdby;
    };
    /**
     * Sets the createdby property value. 
     * @param value Value to set for the createdby property.
     */
    public set createdby(value: Systemuser | undefined) {
        this._createdby = value;
    };
    /**
     * Gets the createdon property value. 
     * @returns a Date
     */
    public get createdon() {
        return this._createdon;
    };
    /**
     * Sets the createdon property value. 
     * @param value Value to set for the createdon property.
     */
    public set createdon(value: Date | undefined) {
        this._createdon = value;
    };
    /**
     * Gets the createdonbehalfby property value. 
     * @returns a systemuser
     */
    public get createdonbehalfby() {
        return this._createdonbehalfby;
    };
    /**
     * Sets the createdonbehalfby property value. 
     * @param value Value to set for the createdonbehalfby property.
     */
    public set createdonbehalfby(value: Systemuser | undefined) {
        this._createdonbehalfby = value;
    };
    /**
     * Gets the createstage property value. 
     * @returns a integer
     */
    public get createstage() {
        return this._createstage;
    };
    /**
     * Sets the createstage property value. 
     * @param value Value to set for the createstage property.
     */
    public set createstage(value: number | undefined) {
        this._createstage = value;
    };
    /**
     * Gets the deletestage property value. 
     * @returns a integer
     */
    public get deletestage() {
        return this._deletestage;
    };
    /**
     * Sets the deletestage property value. 
     * @param value Value to set for the deletestage property.
     */
    public set deletestage(value: number | undefined) {
        this._deletestage = value;
    };
    /**
     * Gets the description property value. 
     * @returns a string
     */
    public get description() {
        return this._description;
    };
    /**
     * Sets the description property value. 
     * @param value Value to set for the description property.
     */
    public set description(value: string | undefined) {
        this._description = value;
    };
    /**
     * Gets the entityimage property value. 
     * @returns a binary
     */
    public get entityimage() {
        return this._entityimage;
    };
    /**
     * Sets the entityimage property value. 
     * @param value Value to set for the entityimage property.
     */
    public set entityimage(value: string | undefined) {
        this._entityimage = value;
    };
    /**
     * Gets the entityimage_timestamp property value. 
     * @returns a int64
     */
    public get entityimage_timestamp() {
        return this._entityimage_timestamp;
    };
    /**
     * Sets the entityimage_timestamp property value. 
     * @param value Value to set for the entityimage_timestamp property.
     */
    public set entityimage_timestamp(value: number | undefined) {
        this._entityimage_timestamp = value;
    };
    /**
     * Gets the entityimage_url property value. 
     * @returns a string
     */
    public get entityimage_url() {
        return this._entityimage_url;
    };
    /**
     * Sets the entityimage_url property value. 
     * @param value Value to set for the entityimage_url property.
     */
    public set entityimage_url(value: string | undefined) {
        this._entityimage_url = value;
    };
    /**
     * Gets the entityimageid property value. 
     * @returns a string
     */
    public get entityimageid() {
        return this._entityimageid;
    };
    /**
     * Sets the entityimageid property value. 
     * @param value Value to set for the entityimageid property.
     */
    public set entityimageid(value: string | undefined) {
        this._entityimageid = value;
    };
    /**
     * Gets the formid property value. 
     * @returns a string
     */
    public get formid() {
        return this._formid;
    };
    /**
     * Sets the formid property value. 
     * @param value Value to set for the formid property.
     */
    public set formid(value: string | undefined) {
        this._formid = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Record<string, (item: T, node: ParseNode) => void> {
        return {...super.getFieldDeserializers<T>(),
            "_activeworkflowid_value": (o, n) => { (o as unknown as Workflow)._activeworkflowid_value = n.getStringValue(); },
            "_createdby_value": (o, n) => { (o as unknown as Workflow)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Workflow)._createdonbehalfby_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Workflow)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Workflow)._modifiedonbehalfby_value = n.getStringValue(); },
            "_ownerid_value": (o, n) => { (o as unknown as Workflow)._ownerid_value = n.getStringValue(); },
            "_owningbusinessunit_value": (o, n) => { (o as unknown as Workflow)._owningbusinessunit_value = n.getStringValue(); },
            "_owningteam_value": (o, n) => { (o as unknown as Workflow)._owningteam_value = n.getStringValue(); },
            "_owninguser_value": (o, n) => { (o as unknown as Workflow)._owninguser_value = n.getStringValue(); },
            "_parentworkflowid_value": (o, n) => { (o as unknown as Workflow)._parentworkflowid_value = n.getStringValue(); },
            "_plugintypeid_value": (o, n) => { (o as unknown as Workflow)._plugintypeid_value = n.getStringValue(); },
            "_sdkmessageid_value": (o, n) => { (o as unknown as Workflow)._sdkmessageid_value = n.getStringValue(); },
            "activeworkflowid": (o, n) => { (o as unknown as Workflow).activeworkflowid = n.getObjectValue<Workflow>(createWorkflowFromDiscriminatorValue); },
            "asyncautodelete": (o, n) => { (o as unknown as Workflow).asyncautodelete = n.getBooleanValue(); },
            "botcomponent_workflow": (o, n) => { (o as unknown as Workflow).botcomponent_workflow = n.getCollectionOfObjectValues<Botcomponent>(createBotcomponentFromDiscriminatorValue); },
            "businessprocesstype": (o, n) => { (o as unknown as Workflow).businessprocesstype = n.getNumberValue(); },
            "catalogAssignments": (o, n) => { (o as unknown as Workflow).catalogAssignments = n.getCollectionOfObjectValues<Catalogassignment>(createCatalogassignmentFromDiscriminatorValue); },
            "category": (o, n) => { (o as unknown as Workflow).category = n.getNumberValue(); },
            "clientdata": (o, n) => { (o as unknown as Workflow).clientdata = n.getStringValue(); },
            "componentstate": (o, n) => { (o as unknown as Workflow).componentstate = n.getNumberValue(); },
            "createdby": (o, n) => { (o as unknown as Workflow).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Workflow).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Workflow).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createstage": (o, n) => { (o as unknown as Workflow).createstage = n.getNumberValue(); },
            "deletestage": (o, n) => { (o as unknown as Workflow).deletestage = n.getNumberValue(); },
            "description": (o, n) => { (o as unknown as Workflow).description = n.getStringValue(); },
            "entityimage": (o, n) => { (o as unknown as Workflow).entityimage = n.getStringValue(); },
            "entityimage_timestamp": (o, n) => { (o as unknown as Workflow).entityimage_timestamp = n.getNumberValue(); },
            "entityimage_url": (o, n) => { (o as unknown as Workflow).entityimage_url = n.getStringValue(); },
            "entityimageid": (o, n) => { (o as unknown as Workflow).entityimageid = n.getStringValue(); },
            "formid": (o, n) => { (o as unknown as Workflow).formid = n.getStringValue(); },
            "inputparameters": (o, n) => { (o as unknown as Workflow).inputparameters = n.getStringValue(); },
            "introducedversion": (o, n) => { (o as unknown as Workflow).introducedversion = n.getStringValue(); },
            "iscrmuiworkflow": (o, n) => { (o as unknown as Workflow).iscrmuiworkflow = n.getBooleanValue(); },
            "iscustomizable": (o, n) => { (o as unknown as Workflow).iscustomizable = n.getObjectValue<BooleanManagedProperty>(createBooleanManagedPropertyFromDiscriminatorValue); },
            "iscustomprocessingstepallowedforotherpublishers": (o, n) => { (o as unknown as Workflow).iscustomprocessingstepallowedforotherpublishers = n.getObjectValue<BooleanManagedProperty>(createBooleanManagedPropertyFromDiscriminatorValue); },
            "ismanaged": (o, n) => { (o as unknown as Workflow).ismanaged = n.getBooleanValue(); },
            "istransacted": (o, n) => { (o as unknown as Workflow).istransacted = n.getBooleanValue(); },
            "languagecode": (o, n) => { (o as unknown as Workflow).languagecode = n.getNumberValue(); },
            "lk_asyncoperation_workflowactivationid": (o, n) => { (o as unknown as Workflow).lk_asyncoperation_workflowactivationid = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "lk_msdyn_bpf_2c5fe86acc8b414b8322ae571000c799_processid": (o, n) => { (o as unknown as Workflow).lk_msdyn_bpf_2c5fe86acc8b414b8322ae571000c799_processid = n.getCollectionOfObjectValues<Msdyn_bpf_2c5fe86acc8b414b8322ae571000c799>(createMsdyn_bpf_2c5fe86acc8b414b8322ae571000c799FromDiscriminatorValue); },
            "lk_msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b_processid": (o, n) => { (o as unknown as Workflow).lk_msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b_processid = n.getCollectionOfObjectValues<Msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b>(createMsdyn_bpf_477c16f59170487b8b4dc895c5dcd09bFromDiscriminatorValue); },
            "lk_msdyn_bpf_665e73aa18c247d886bfc50499c73b82_processid": (o, n) => { (o as unknown as Workflow).lk_msdyn_bpf_665e73aa18c247d886bfc50499c73b82_processid = n.getCollectionOfObjectValues<Msdyn_bpf_665e73aa18c247d886bfc50499c73b82>(createMsdyn_bpf_665e73aa18c247d886bfc50499c73b82FromDiscriminatorValue); },
            "lk_msdyn_bpf_989e9b1857e24af18787d5143b67523b_processid": (o, n) => { (o as unknown as Workflow).lk_msdyn_bpf_989e9b1857e24af18787d5143b67523b_processid = n.getCollectionOfObjectValues<Msdyn_bpf_989e9b1857e24af18787d5143b67523b>(createMsdyn_bpf_989e9b1857e24af18787d5143b67523bFromDiscriminatorValue); },
            "lk_msdyn_bpf_baa0a411a239410cb8bded8b5fdd88e3_processid": (o, n) => { (o as unknown as Workflow).lk_msdyn_bpf_baa0a411a239410cb8bded8b5fdd88e3_processid = n.getCollectionOfObjectValues<Msdyn_bpf_baa0a411a239410cb8bded8b5fdd88e3>(createMsdyn_bpf_baa0a411a239410cb8bded8b5fdd88e3FromDiscriminatorValue); },
            "lk_msdyn_bpf_d3d97bac8c294105840e99e37a9d1c39_processid": (o, n) => { (o as unknown as Workflow).lk_msdyn_bpf_d3d97bac8c294105840e99e37a9d1c39_processid = n.getCollectionOfObjectValues<Msdyn_bpf_d3d97bac8c294105840e99e37a9d1c39>(createMsdyn_bpf_d3d97bac8c294105840e99e37a9d1c39FromDiscriminatorValue); },
            "lk_msdyn_bpf_d8f9dc7f099f44db9d641dd81fbd470d_processid": (o, n) => { (o as unknown as Workflow).lk_msdyn_bpf_d8f9dc7f099f44db9d641dd81fbd470d_processid = n.getCollectionOfObjectValues<Msdyn_bpf_d8f9dc7f099f44db9d641dd81fbd470d>(createMsdyn_bpf_d8f9dc7f099f44db9d641dd81fbd470dFromDiscriminatorValue); },
            "lk_msdyn_iottocaseprocess_processid": (o, n) => { (o as unknown as Workflow).lk_msdyn_iottocaseprocess_processid = n.getCollectionOfObjectValues<Msdyn_iottocaseprocess>(createMsdyn_iottocaseprocessFromDiscriminatorValue); },
            "lk_processsession_processid": (o, n) => { (o as unknown as Workflow).lk_processsession_processid = n.getCollectionOfObjectValues<Processsession>(createProcesssessionFromDiscriminatorValue); },
            "mode": (o, n) => { (o as unknown as Workflow).mode = n.getNumberValue(); },
            "modifiedby": (o, n) => { (o as unknown as Workflow).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Workflow).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Workflow).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "msdyn_retrainworkflow_msdyn_toaimodel": (o, n) => { (o as unknown as Workflow).msdyn_retrainworkflow_msdyn_toaimodel = n.getCollectionOfObjectValues<Msdyn_aimodel>(createMsdyn_aimodelFromDiscriminatorValue); },
            "msdyn_scheduleinferenceworkflow_msdyn_toaimodel": (o, n) => { (o as unknown as Workflow).msdyn_scheduleinferenceworkflow_msdyn_toaimodel = n.getCollectionOfObjectValues<Msdyn_aimodel>(createMsdyn_aimodelFromDiscriminatorValue); },
            "msdyn_workflow_msdyn_entityroutingconfiguration_DeroutingProcess": (o, n) => { (o as unknown as Workflow).msdyn_workflow_msdyn_entityroutingconfiguration_DeroutingProcess = n.getCollectionOfObjectValues<Msdyn_entityroutingconfiguration>(createMsdyn_entityroutingconfigurationFromDiscriminatorValue); },
            "msdyn_workflow_msdyn_entityroutingconfiguration_RoutingProcess": (o, n) => { (o as unknown as Workflow).msdyn_workflow_msdyn_entityroutingconfiguration_RoutingProcess = n.getCollectionOfObjectValues<Msdyn_entityroutingconfiguration>(createMsdyn_entityroutingconfigurationFromDiscriminatorValue); },
            "msdyn_workflow_msdyn_macrosession_macroname": (o, n) => { (o as unknown as Workflow).msdyn_workflow_msdyn_macrosession_macroname = n.getCollectionOfObjectValues<Msdyn_macrosession>(createMsdyn_macrosessionFromDiscriminatorValue); },
            "msdyn_workflow_msdyn_pmrecording": (o, n) => { (o as unknown as Workflow).msdyn_workflow_msdyn_pmrecording = n.getCollectionOfObjectValues<Msdyn_pmrecording>(createMsdyn_pmrecordingFromDiscriminatorValue); },
            "msdyn_workflow_msdyn_prod_agentscriptstep_macroactionid": (o, n) => { (o as unknown as Workflow).msdyn_workflow_msdyn_prod_agentscriptstep_macroactionid = n.getCollectionOfObjectValues<Msdyn_productivityagentscriptstep>(createMsdyn_productivityagentscriptstepFromDiscriminatorValue); },
            "msdyn_workflow_msdyn_solutionhealthrule_resolutionaction": (o, n) => { (o as unknown as Workflow).msdyn_workflow_msdyn_solutionhealthrule_resolutionaction = n.getCollectionOfObjectValues<Msdyn_solutionhealthrule>(createMsdyn_solutionhealthruleFromDiscriminatorValue); },
            "msdyn_workflow_msdyn_solutionhealthrule_Workflow": (o, n) => { (o as unknown as Workflow).msdyn_workflow_msdyn_solutionhealthrule_Workflow = n.getCollectionOfObjectValues<Msdyn_solutionhealthrule>(createMsdyn_solutionhealthruleFromDiscriminatorValue); },
            "name": (o, n) => { (o as unknown as Workflow).name = n.getStringValue(); },
            "ondemand": (o, n) => { (o as unknown as Workflow).ondemand = n.getBooleanValue(); },
            "overwritetime": (o, n) => { (o as unknown as Workflow).overwritetime = n.getDateValue(); },
            "ownerid": (o, n) => { (o as unknown as Workflow).ownerid = n.getObjectValue<Principal>(createPrincipalFromDiscriminatorValue); },
            "owningbusinessunit": (o, n) => { (o as unknown as Workflow).owningbusinessunit = n.getObjectValue<Businessunit>(createBusinessunitFromDiscriminatorValue); },
            "owningteam": (o, n) => { (o as unknown as Workflow).owningteam = n.getObjectValue<Team>(createTeamFromDiscriminatorValue); },
            "owninguser": (o, n) => { (o as unknown as Workflow).owninguser = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "parentworkflowid": (o, n) => { (o as unknown as Workflow).parentworkflowid = n.getObjectValue<Workflow>(createWorkflowFromDiscriminatorValue); },
            "primaryentity": (o, n) => { (o as unknown as Workflow).primaryentity = n.getStringValue(); },
            "process_processstage": (o, n) => { (o as unknown as Workflow).process_processstage = n.getCollectionOfObjectValues<Processstage>(createProcessstageFromDiscriminatorValue); },
            "process_processtrigger": (o, n) => { (o as unknown as Workflow).process_processtrigger = n.getCollectionOfObjectValues<Processtrigger>(createProcesstriggerFromDiscriminatorValue); },
            "processorder": (o, n) => { (o as unknown as Workflow).processorder = n.getNumberValue(); },
            "processroleassignment": (o, n) => { (o as unknown as Workflow).processroleassignment = n.getStringValue(); },
            "processtriggerformid": (o, n) => { (o as unknown as Workflow).processtriggerformid = n.getStringValue(); },
            "processtriggerscope": (o, n) => { (o as unknown as Workflow).processtriggerscope = n.getNumberValue(); },
            "rank": (o, n) => { (o as unknown as Workflow).rank = n.getNumberValue(); },
            "regardingobjectid_process": (o, n) => { (o as unknown as Workflow).regardingobjectid_process = n.getCollectionOfObjectValues<Flowsession>(createFlowsessionFromDiscriminatorValue); },
            "rendererobjecttypecode": (o, n) => { (o as unknown as Workflow).rendererobjecttypecode = n.getStringValue(); },
            "runas": (o, n) => { (o as unknown as Workflow).runas = n.getNumberValue(); },
            "scope": (o, n) => { (o as unknown as Workflow).scope = n.getNumberValue(); },
            "slabase_workflowid": (o, n) => { (o as unknown as Workflow).slabase_workflowid = n.getCollectionOfObjectValues<Sla>(createSlaFromDiscriminatorValue); },
            "slaitembase_workflowid": (o, n) => { (o as unknown as Workflow).slaitembase_workflowid = n.getCollectionOfObjectValues<Slaitem>(createSlaitemFromDiscriminatorValue); },
            "solutionid": (o, n) => { (o as unknown as Workflow).solutionid = n.getStringValue(); },
            "statecode": (o, n) => { (o as unknown as Workflow).statecode = n.getNumberValue(); },
            "statuscode": (o, n) => { (o as unknown as Workflow).statuscode = n.getNumberValue(); },
            "subprocess": (o, n) => { (o as unknown as Workflow).subprocess = n.getBooleanValue(); },
            "syncworkflowlogonfailure": (o, n) => { (o as unknown as Workflow).syncworkflowlogonfailure = n.getBooleanValue(); },
            "triggeroncreate": (o, n) => { (o as unknown as Workflow).triggeroncreate = n.getBooleanValue(); },
            "triggerondelete": (o, n) => { (o as unknown as Workflow).triggerondelete = n.getBooleanValue(); },
            "triggeronupdateattributelist": (o, n) => { (o as unknown as Workflow).triggeronupdateattributelist = n.getStringValue(); },
            "trustedaccess": (o, n) => { (o as unknown as Workflow).trustedaccess = n.getBooleanValue(); },
            "type": (o, n) => { (o as unknown as Workflow).type = n.getNumberValue(); },
            "uidata": (o, n) => { (o as unknown as Workflow).uidata = n.getStringValue(); },
            "uiflowtype": (o, n) => { (o as unknown as Workflow).uiflowtype = n.getNumberValue(); },
            "uniquename": (o, n) => { (o as unknown as Workflow).uniquename = n.getStringValue(); },
            "updatestage": (o, n) => { (o as unknown as Workflow).updatestage = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as Workflow).versionnumber = n.getNumberValue(); },
            "workflow_active_workflow": (o, n) => { (o as unknown as Workflow).workflow_active_workflow = n.getCollectionOfObjectValues<Workflow>(createWorkflowFromDiscriminatorValue); },
            "workflow_Annotation": (o, n) => { (o as unknown as Workflow).workflow_Annotation = n.getCollectionOfObjectValues<Annotation>(createAnnotationFromDiscriminatorValue); },
            "workflow_expiredprocess": (o, n) => { (o as unknown as Workflow).workflow_expiredprocess = n.getCollectionOfObjectValues<Expiredprocess>(createExpiredprocessFromDiscriminatorValue); },
            "workflow_leadtoopportunitysalesprocess": (o, n) => { (o as unknown as Workflow).workflow_leadtoopportunitysalesprocess = n.getCollectionOfObjectValues<Leadtoopportunitysalesprocess>(createLeadtoopportunitysalesprocessFromDiscriminatorValue); },
            "workflow_newprocess": (o, n) => { (o as unknown as Workflow).workflow_newprocess = n.getCollectionOfObjectValues<Newprocess>(createNewprocessFromDiscriminatorValue); },
            "workflow_opportunitysalesprocess": (o, n) => { (o as unknown as Workflow).workflow_opportunitysalesprocess = n.getCollectionOfObjectValues<Opportunitysalesprocess>(createOpportunitysalesprocessFromDiscriminatorValue); },
            "workflow_parent_workflow": (o, n) => { (o as unknown as Workflow).workflow_parent_workflow = n.getCollectionOfObjectValues<Workflow>(createWorkflowFromDiscriminatorValue); },
            "workflow_phonetocaseprocess": (o, n) => { (o as unknown as Workflow).workflow_phonetocaseprocess = n.getCollectionOfObjectValues<Phonetocaseprocess>(createPhonetocaseprocessFromDiscriminatorValue); },
            "workflow_SyncErrors": (o, n) => { (o as unknown as Workflow).workflow_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "workflow_translationprocess": (o, n) => { (o as unknown as Workflow).workflow_translationprocess = n.getCollectionOfObjectValues<Translationprocess>(createTranslationprocessFromDiscriminatorValue); },
            "workflow_workflowbinary_Process": (o, n) => { (o as unknown as Workflow).workflow_workflowbinary_Process = n.getCollectionOfObjectValues<Workflowbinary>(createWorkflowbinaryFromDiscriminatorValue); },
            "workflowid": (o, n) => { (o as unknown as Workflow).workflowid = n.getStringValue(); },
            "workflowidunique": (o, n) => { (o as unknown as Workflow).workflowidunique = n.getStringValue(); },
            "xaml": (o, n) => { (o as unknown as Workflow).xaml = n.getStringValue(); },
        };
    };
    /**
     * Gets the inputparameters property value. 
     * @returns a string
     */
    public get inputparameters() {
        return this._inputparameters;
    };
    /**
     * Sets the inputparameters property value. 
     * @param value Value to set for the inputparameters property.
     */
    public set inputparameters(value: string | undefined) {
        this._inputparameters = value;
    };
    /**
     * Gets the introducedversion property value. 
     * @returns a string
     */
    public get introducedversion() {
        return this._introducedversion;
    };
    /**
     * Sets the introducedversion property value. 
     * @param value Value to set for the introducedversion property.
     */
    public set introducedversion(value: string | undefined) {
        this._introducedversion = value;
    };
    /**
     * Gets the iscrmuiworkflow property value. 
     * @returns a boolean
     */
    public get iscrmuiworkflow() {
        return this._iscrmuiworkflow;
    };
    /**
     * Sets the iscrmuiworkflow property value. 
     * @param value Value to set for the iscrmuiworkflow property.
     */
    public set iscrmuiworkflow(value: boolean | undefined) {
        this._iscrmuiworkflow = value;
    };
    /**
     * Gets the iscustomizable property value. 
     * @returns a BooleanManagedProperty
     */
    public get iscustomizable() {
        return this._iscustomizable;
    };
    /**
     * Sets the iscustomizable property value. 
     * @param value Value to set for the iscustomizable property.
     */
    public set iscustomizable(value: BooleanManagedProperty | undefined) {
        this._iscustomizable = value;
    };
    /**
     * Gets the iscustomprocessingstepallowedforotherpublishers property value. 
     * @returns a BooleanManagedProperty
     */
    public get iscustomprocessingstepallowedforotherpublishers() {
        return this._iscustomprocessingstepallowedforotherpublishers;
    };
    /**
     * Sets the iscustomprocessingstepallowedforotherpublishers property value. 
     * @param value Value to set for the iscustomprocessingstepallowedforotherpublishers property.
     */
    public set iscustomprocessingstepallowedforotherpublishers(value: BooleanManagedProperty | undefined) {
        this._iscustomprocessingstepallowedforotherpublishers = value;
    };
    /**
     * Gets the ismanaged property value. 
     * @returns a boolean
     */
    public get ismanaged() {
        return this._ismanaged;
    };
    /**
     * Sets the ismanaged property value. 
     * @param value Value to set for the ismanaged property.
     */
    public set ismanaged(value: boolean | undefined) {
        this._ismanaged = value;
    };
    /**
     * Gets the istransacted property value. 
     * @returns a boolean
     */
    public get istransacted() {
        return this._istransacted;
    };
    /**
     * Sets the istransacted property value. 
     * @param value Value to set for the istransacted property.
     */
    public set istransacted(value: boolean | undefined) {
        this._istransacted = value;
    };
    /**
     * Gets the languagecode property value. 
     * @returns a integer
     */
    public get languagecode() {
        return this._languagecode;
    };
    /**
     * Sets the languagecode property value. 
     * @param value Value to set for the languagecode property.
     */
    public set languagecode(value: number | undefined) {
        this._languagecode = value;
    };
    /**
     * Gets the lk_asyncoperation_workflowactivationid property value. 
     * @returns a asyncoperation
     */
    public get lk_asyncoperation_workflowactivationid() {
        return this._lk_asyncoperation_workflowactivationid;
    };
    /**
     * Sets the lk_asyncoperation_workflowactivationid property value. 
     * @param value Value to set for the lk_asyncoperation_workflowactivationid property.
     */
    public set lk_asyncoperation_workflowactivationid(value: Asyncoperation[] | undefined) {
        this._lk_asyncoperation_workflowactivationid = value;
    };
    /**
     * Gets the lk_msdyn_bpf_2c5fe86acc8b414b8322ae571000c799_processid property value. 
     * @returns a msdyn_bpf_2c5fe86acc8b414b8322ae571000c799
     */
    public get lk_msdyn_bpf_2c5fe86acc8b414b8322ae571000c799_processid() {
        return this._lk_msdyn_bpf_2c5fe86acc8b414b8322ae571000c799_processid;
    };
    /**
     * Sets the lk_msdyn_bpf_2c5fe86acc8b414b8322ae571000c799_processid property value. 
     * @param value Value to set for the lk_msdyn_bpf_2c5fe86acc8b414b8322ae571000c799_processid property.
     */
    public set lk_msdyn_bpf_2c5fe86acc8b414b8322ae571000c799_processid(value: Msdyn_bpf_2c5fe86acc8b414b8322ae571000c799[] | undefined) {
        this._lk_msdyn_bpf_2c5fe86acc8b414b8322ae571000c799_processid = value;
    };
    /**
     * Gets the lk_msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b_processid property value. 
     * @returns a msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b
     */
    public get lk_msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b_processid() {
        return this._lk_msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b_processid;
    };
    /**
     * Sets the lk_msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b_processid property value. 
     * @param value Value to set for the lk_msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b_processid property.
     */
    public set lk_msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b_processid(value: Msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b[] | undefined) {
        this._lk_msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b_processid = value;
    };
    /**
     * Gets the lk_msdyn_bpf_665e73aa18c247d886bfc50499c73b82_processid property value. 
     * @returns a msdyn_bpf_665e73aa18c247d886bfc50499c73b82
     */
    public get lk_msdyn_bpf_665e73aa18c247d886bfc50499c73b82_processid() {
        return this._lk_msdyn_bpf_665e73aa18c247d886bfc50499c73b82_processid;
    };
    /**
     * Sets the lk_msdyn_bpf_665e73aa18c247d886bfc50499c73b82_processid property value. 
     * @param value Value to set for the lk_msdyn_bpf_665e73aa18c247d886bfc50499c73b82_processid property.
     */
    public set lk_msdyn_bpf_665e73aa18c247d886bfc50499c73b82_processid(value: Msdyn_bpf_665e73aa18c247d886bfc50499c73b82[] | undefined) {
        this._lk_msdyn_bpf_665e73aa18c247d886bfc50499c73b82_processid = value;
    };
    /**
     * Gets the lk_msdyn_bpf_989e9b1857e24af18787d5143b67523b_processid property value. 
     * @returns a msdyn_bpf_989e9b1857e24af18787d5143b67523b
     */
    public get lk_msdyn_bpf_989e9b1857e24af18787d5143b67523b_processid() {
        return this._lk_msdyn_bpf_989e9b1857e24af18787d5143b67523b_processid;
    };
    /**
     * Sets the lk_msdyn_bpf_989e9b1857e24af18787d5143b67523b_processid property value. 
     * @param value Value to set for the lk_msdyn_bpf_989e9b1857e24af18787d5143b67523b_processid property.
     */
    public set lk_msdyn_bpf_989e9b1857e24af18787d5143b67523b_processid(value: Msdyn_bpf_989e9b1857e24af18787d5143b67523b[] | undefined) {
        this._lk_msdyn_bpf_989e9b1857e24af18787d5143b67523b_processid = value;
    };
    /**
     * Gets the lk_msdyn_bpf_baa0a411a239410cb8bded8b5fdd88e3_processid property value. 
     * @returns a msdyn_bpf_baa0a411a239410cb8bded8b5fdd88e3
     */
    public get lk_msdyn_bpf_baa0a411a239410cb8bded8b5fdd88e3_processid() {
        return this._lk_msdyn_bpf_baa0a411a239410cb8bded8b5fdd88e3_processid;
    };
    /**
     * Sets the lk_msdyn_bpf_baa0a411a239410cb8bded8b5fdd88e3_processid property value. 
     * @param value Value to set for the lk_msdyn_bpf_baa0a411a239410cb8bded8b5fdd88e3_processid property.
     */
    public set lk_msdyn_bpf_baa0a411a239410cb8bded8b5fdd88e3_processid(value: Msdyn_bpf_baa0a411a239410cb8bded8b5fdd88e3[] | undefined) {
        this._lk_msdyn_bpf_baa0a411a239410cb8bded8b5fdd88e3_processid = value;
    };
    /**
     * Gets the lk_msdyn_bpf_d3d97bac8c294105840e99e37a9d1c39_processid property value. 
     * @returns a msdyn_bpf_d3d97bac8c294105840e99e37a9d1c39
     */
    public get lk_msdyn_bpf_d3d97bac8c294105840e99e37a9d1c39_processid() {
        return this._lk_msdyn_bpf_d3d97bac8c294105840e99e37a9d1c39_processid;
    };
    /**
     * Sets the lk_msdyn_bpf_d3d97bac8c294105840e99e37a9d1c39_processid property value. 
     * @param value Value to set for the lk_msdyn_bpf_d3d97bac8c294105840e99e37a9d1c39_processid property.
     */
    public set lk_msdyn_bpf_d3d97bac8c294105840e99e37a9d1c39_processid(value: Msdyn_bpf_d3d97bac8c294105840e99e37a9d1c39[] | undefined) {
        this._lk_msdyn_bpf_d3d97bac8c294105840e99e37a9d1c39_processid = value;
    };
    /**
     * Gets the lk_msdyn_bpf_d8f9dc7f099f44db9d641dd81fbd470d_processid property value. 
     * @returns a msdyn_bpf_d8f9dc7f099f44db9d641dd81fbd470d
     */
    public get lk_msdyn_bpf_d8f9dc7f099f44db9d641dd81fbd470d_processid() {
        return this._lk_msdyn_bpf_d8f9dc7f099f44db9d641dd81fbd470d_processid;
    };
    /**
     * Sets the lk_msdyn_bpf_d8f9dc7f099f44db9d641dd81fbd470d_processid property value. 
     * @param value Value to set for the lk_msdyn_bpf_d8f9dc7f099f44db9d641dd81fbd470d_processid property.
     */
    public set lk_msdyn_bpf_d8f9dc7f099f44db9d641dd81fbd470d_processid(value: Msdyn_bpf_d8f9dc7f099f44db9d641dd81fbd470d[] | undefined) {
        this._lk_msdyn_bpf_d8f9dc7f099f44db9d641dd81fbd470d_processid = value;
    };
    /**
     * Gets the lk_msdyn_iottocaseprocess_processid property value. 
     * @returns a msdyn_iottocaseprocess
     */
    public get lk_msdyn_iottocaseprocess_processid() {
        return this._lk_msdyn_iottocaseprocess_processid;
    };
    /**
     * Sets the lk_msdyn_iottocaseprocess_processid property value. 
     * @param value Value to set for the lk_msdyn_iottocaseprocess_processid property.
     */
    public set lk_msdyn_iottocaseprocess_processid(value: Msdyn_iottocaseprocess[] | undefined) {
        this._lk_msdyn_iottocaseprocess_processid = value;
    };
    /**
     * Gets the lk_processsession_processid property value. 
     * @returns a processsession
     */
    public get lk_processsession_processid() {
        return this._lk_processsession_processid;
    };
    /**
     * Sets the lk_processsession_processid property value. 
     * @param value Value to set for the lk_processsession_processid property.
     */
    public set lk_processsession_processid(value: Processsession[] | undefined) {
        this._lk_processsession_processid = value;
    };
    /**
     * Gets the mode property value. 
     * @returns a integer
     */
    public get mode() {
        return this._mode;
    };
    /**
     * Sets the mode property value. 
     * @param value Value to set for the mode property.
     */
    public set mode(value: number | undefined) {
        this._mode = value;
    };
    /**
     * Gets the modifiedby property value. 
     * @returns a systemuser
     */
    public get modifiedby() {
        return this._modifiedby;
    };
    /**
     * Sets the modifiedby property value. 
     * @param value Value to set for the modifiedby property.
     */
    public set modifiedby(value: Systemuser | undefined) {
        this._modifiedby = value;
    };
    /**
     * Gets the modifiedon property value. 
     * @returns a Date
     */
    public get modifiedon() {
        return this._modifiedon;
    };
    /**
     * Sets the modifiedon property value. 
     * @param value Value to set for the modifiedon property.
     */
    public set modifiedon(value: Date | undefined) {
        this._modifiedon = value;
    };
    /**
     * Gets the modifiedonbehalfby property value. 
     * @returns a systemuser
     */
    public get modifiedonbehalfby() {
        return this._modifiedonbehalfby;
    };
    /**
     * Sets the modifiedonbehalfby property value. 
     * @param value Value to set for the modifiedonbehalfby property.
     */
    public set modifiedonbehalfby(value: Systemuser | undefined) {
        this._modifiedonbehalfby = value;
    };
    /**
     * Gets the msdyn_retrainworkflow_msdyn_toaimodel property value. 
     * @returns a msdyn_aimodel
     */
    public get msdyn_retrainworkflow_msdyn_toaimodel() {
        return this._msdyn_retrainworkflow_msdyn_toaimodel;
    };
    /**
     * Sets the msdyn_retrainworkflow_msdyn_toaimodel property value. 
     * @param value Value to set for the msdyn_retrainworkflow_msdyn_toaimodel property.
     */
    public set msdyn_retrainworkflow_msdyn_toaimodel(value: Msdyn_aimodel[] | undefined) {
        this._msdyn_retrainworkflow_msdyn_toaimodel = value;
    };
    /**
     * Gets the msdyn_scheduleinferenceworkflow_msdyn_toaimodel property value. 
     * @returns a msdyn_aimodel
     */
    public get msdyn_scheduleinferenceworkflow_msdyn_toaimodel() {
        return this._msdyn_scheduleinferenceworkflow_msdyn_toaimodel;
    };
    /**
     * Sets the msdyn_scheduleinferenceworkflow_msdyn_toaimodel property value. 
     * @param value Value to set for the msdyn_scheduleinferenceworkflow_msdyn_toaimodel property.
     */
    public set msdyn_scheduleinferenceworkflow_msdyn_toaimodel(value: Msdyn_aimodel[] | undefined) {
        this._msdyn_scheduleinferenceworkflow_msdyn_toaimodel = value;
    };
    /**
     * Gets the msdyn_workflow_msdyn_entityroutingconfiguration_DeroutingProcess property value. 
     * @returns a msdyn_entityroutingconfiguration
     */
    public get msdyn_workflow_msdyn_entityroutingconfiguration_DeroutingProcess() {
        return this._msdyn_workflow_msdyn_entityroutingconfiguration_DeroutingProcess;
    };
    /**
     * Sets the msdyn_workflow_msdyn_entityroutingconfiguration_DeroutingProcess property value. 
     * @param value Value to set for the msdyn_workflow_msdyn_entityroutingconfiguration_DeroutingProcess property.
     */
    public set msdyn_workflow_msdyn_entityroutingconfiguration_DeroutingProcess(value: Msdyn_entityroutingconfiguration[] | undefined) {
        this._msdyn_workflow_msdyn_entityroutingconfiguration_DeroutingProcess = value;
    };
    /**
     * Gets the msdyn_workflow_msdyn_entityroutingconfiguration_RoutingProcess property value. 
     * @returns a msdyn_entityroutingconfiguration
     */
    public get msdyn_workflow_msdyn_entityroutingconfiguration_RoutingProcess() {
        return this._msdyn_workflow_msdyn_entityroutingconfiguration_RoutingProcess;
    };
    /**
     * Sets the msdyn_workflow_msdyn_entityroutingconfiguration_RoutingProcess property value. 
     * @param value Value to set for the msdyn_workflow_msdyn_entityroutingconfiguration_RoutingProcess property.
     */
    public set msdyn_workflow_msdyn_entityroutingconfiguration_RoutingProcess(value: Msdyn_entityroutingconfiguration[] | undefined) {
        this._msdyn_workflow_msdyn_entityroutingconfiguration_RoutingProcess = value;
    };
    /**
     * Gets the msdyn_workflow_msdyn_macrosession_macroname property value. 
     * @returns a msdyn_macrosession
     */
    public get msdyn_workflow_msdyn_macrosession_macroname() {
        return this._msdyn_workflow_msdyn_macrosession_macroname;
    };
    /**
     * Sets the msdyn_workflow_msdyn_macrosession_macroname property value. 
     * @param value Value to set for the msdyn_workflow_msdyn_macrosession_macroname property.
     */
    public set msdyn_workflow_msdyn_macrosession_macroname(value: Msdyn_macrosession[] | undefined) {
        this._msdyn_workflow_msdyn_macrosession_macroname = value;
    };
    /**
     * Gets the msdyn_workflow_msdyn_pmrecording property value. 
     * @returns a msdyn_pmrecording
     */
    public get msdyn_workflow_msdyn_pmrecording() {
        return this._msdyn_workflow_msdyn_pmrecording;
    };
    /**
     * Sets the msdyn_workflow_msdyn_pmrecording property value. 
     * @param value Value to set for the msdyn_workflow_msdyn_pmrecording property.
     */
    public set msdyn_workflow_msdyn_pmrecording(value: Msdyn_pmrecording[] | undefined) {
        this._msdyn_workflow_msdyn_pmrecording = value;
    };
    /**
     * Gets the msdyn_workflow_msdyn_prod_agentscriptstep_macroactionid property value. 
     * @returns a msdyn_productivityagentscriptstep
     */
    public get msdyn_workflow_msdyn_prod_agentscriptstep_macroactionid() {
        return this._msdyn_workflow_msdyn_prod_agentscriptstep_macroactionid;
    };
    /**
     * Sets the msdyn_workflow_msdyn_prod_agentscriptstep_macroactionid property value. 
     * @param value Value to set for the msdyn_workflow_msdyn_prod_agentscriptstep_macroactionid property.
     */
    public set msdyn_workflow_msdyn_prod_agentscriptstep_macroactionid(value: Msdyn_productivityagentscriptstep[] | undefined) {
        this._msdyn_workflow_msdyn_prod_agentscriptstep_macroactionid = value;
    };
    /**
     * Gets the msdyn_workflow_msdyn_solutionhealthrule_resolutionaction property value. 
     * @returns a msdyn_solutionhealthrule
     */
    public get msdyn_workflow_msdyn_solutionhealthrule_resolutionaction() {
        return this._msdyn_workflow_msdyn_solutionhealthrule_resolutionaction;
    };
    /**
     * Sets the msdyn_workflow_msdyn_solutionhealthrule_resolutionaction property value. 
     * @param value Value to set for the msdyn_workflow_msdyn_solutionhealthrule_resolutionaction property.
     */
    public set msdyn_workflow_msdyn_solutionhealthrule_resolutionaction(value: Msdyn_solutionhealthrule[] | undefined) {
        this._msdyn_workflow_msdyn_solutionhealthrule_resolutionaction = value;
    };
    /**
     * Gets the msdyn_workflow_msdyn_solutionhealthrule_Workflow property value. 
     * @returns a msdyn_solutionhealthrule
     */
    public get msdyn_workflow_msdyn_solutionhealthrule_Workflow() {
        return this._msdyn_workflow_msdyn_solutionhealthrule_Workflow;
    };
    /**
     * Sets the msdyn_workflow_msdyn_solutionhealthrule_Workflow property value. 
     * @param value Value to set for the msdyn_workflow_msdyn_solutionhealthrule_Workflow property.
     */
    public set msdyn_workflow_msdyn_solutionhealthrule_Workflow(value: Msdyn_solutionhealthrule[] | undefined) {
        this._msdyn_workflow_msdyn_solutionhealthrule_Workflow = value;
    };
    /**
     * Gets the name property value. 
     * @returns a string
     */
    public get name() {
        return this._name;
    };
    /**
     * Sets the name property value. 
     * @param value Value to set for the name property.
     */
    public set name(value: string | undefined) {
        this._name = value;
    };
    /**
     * Gets the ondemand property value. 
     * @returns a boolean
     */
    public get ondemand() {
        return this._ondemand;
    };
    /**
     * Sets the ondemand property value. 
     * @param value Value to set for the ondemand property.
     */
    public set ondemand(value: boolean | undefined) {
        this._ondemand = value;
    };
    /**
     * Gets the overwritetime property value. 
     * @returns a Date
     */
    public get overwritetime() {
        return this._overwritetime;
    };
    /**
     * Sets the overwritetime property value. 
     * @param value Value to set for the overwritetime property.
     */
    public set overwritetime(value: Date | undefined) {
        this._overwritetime = value;
    };
    /**
     * Gets the ownerid property value. 
     * @returns a principal
     */
    public get ownerid() {
        return this._ownerid;
    };
    /**
     * Sets the ownerid property value. 
     * @param value Value to set for the ownerid property.
     */
    public set ownerid(value: Principal | undefined) {
        this._ownerid = value;
    };
    /**
     * Gets the owningbusinessunit property value. 
     * @returns a businessunit
     */
    public get owningbusinessunit() {
        return this._owningbusinessunit;
    };
    /**
     * Sets the owningbusinessunit property value. 
     * @param value Value to set for the owningbusinessunit property.
     */
    public set owningbusinessunit(value: Businessunit | undefined) {
        this._owningbusinessunit = value;
    };
    /**
     * Gets the owningteam property value. 
     * @returns a team
     */
    public get owningteam() {
        return this._owningteam;
    };
    /**
     * Sets the owningteam property value. 
     * @param value Value to set for the owningteam property.
     */
    public set owningteam(value: Team | undefined) {
        this._owningteam = value;
    };
    /**
     * Gets the owninguser property value. 
     * @returns a systemuser
     */
    public get owninguser() {
        return this._owninguser;
    };
    /**
     * Sets the owninguser property value. 
     * @param value Value to set for the owninguser property.
     */
    public set owninguser(value: Systemuser | undefined) {
        this._owninguser = value;
    };
    /**
     * Gets the parentworkflowid property value. 
     * @returns a workflow
     */
    public get parentworkflowid() {
        return this._parentworkflowid;
    };
    /**
     * Sets the parentworkflowid property value. 
     * @param value Value to set for the parentworkflowid property.
     */
    public set parentworkflowid(value: Workflow | undefined) {
        this._parentworkflowid = value;
    };
    /**
     * Gets the primaryentity property value. 
     * @returns a string
     */
    public get primaryentity() {
        return this._primaryentity;
    };
    /**
     * Sets the primaryentity property value. 
     * @param value Value to set for the primaryentity property.
     */
    public set primaryentity(value: string | undefined) {
        this._primaryentity = value;
    };
    /**
     * Gets the process_processstage property value. 
     * @returns a processstage
     */
    public get process_processstage() {
        return this._process_processstage;
    };
    /**
     * Sets the process_processstage property value. 
     * @param value Value to set for the process_processstage property.
     */
    public set process_processstage(value: Processstage[] | undefined) {
        this._process_processstage = value;
    };
    /**
     * Gets the process_processtrigger property value. 
     * @returns a processtrigger
     */
    public get process_processtrigger() {
        return this._process_processtrigger;
    };
    /**
     * Sets the process_processtrigger property value. 
     * @param value Value to set for the process_processtrigger property.
     */
    public set process_processtrigger(value: Processtrigger[] | undefined) {
        this._process_processtrigger = value;
    };
    /**
     * Gets the processorder property value. 
     * @returns a integer
     */
    public get processorder() {
        return this._processorder;
    };
    /**
     * Sets the processorder property value. 
     * @param value Value to set for the processorder property.
     */
    public set processorder(value: number | undefined) {
        this._processorder = value;
    };
    /**
     * Gets the processroleassignment property value. 
     * @returns a string
     */
    public get processroleassignment() {
        return this._processroleassignment;
    };
    /**
     * Sets the processroleassignment property value. 
     * @param value Value to set for the processroleassignment property.
     */
    public set processroleassignment(value: string | undefined) {
        this._processroleassignment = value;
    };
    /**
     * Gets the processtriggerformid property value. 
     * @returns a string
     */
    public get processtriggerformid() {
        return this._processtriggerformid;
    };
    /**
     * Sets the processtriggerformid property value. 
     * @param value Value to set for the processtriggerformid property.
     */
    public set processtriggerformid(value: string | undefined) {
        this._processtriggerformid = value;
    };
    /**
     * Gets the processtriggerscope property value. 
     * @returns a integer
     */
    public get processtriggerscope() {
        return this._processtriggerscope;
    };
    /**
     * Sets the processtriggerscope property value. 
     * @param value Value to set for the processtriggerscope property.
     */
    public set processtriggerscope(value: number | undefined) {
        this._processtriggerscope = value;
    };
    /**
     * Gets the rank property value. 
     * @returns a integer
     */
    public get rank() {
        return this._rank;
    };
    /**
     * Sets the rank property value. 
     * @param value Value to set for the rank property.
     */
    public set rank(value: number | undefined) {
        this._rank = value;
    };
    /**
     * Gets the regardingobjectid_process property value. 
     * @returns a flowsession
     */
    public get regardingobjectid_process() {
        return this._regardingobjectid_process;
    };
    /**
     * Sets the regardingobjectid_process property value. 
     * @param value Value to set for the regardingobjectid_process property.
     */
    public set regardingobjectid_process(value: Flowsession[] | undefined) {
        this._regardingobjectid_process = value;
    };
    /**
     * Gets the rendererobjecttypecode property value. 
     * @returns a string
     */
    public get rendererobjecttypecode() {
        return this._rendererobjecttypecode;
    };
    /**
     * Sets the rendererobjecttypecode property value. 
     * @param value Value to set for the rendererobjecttypecode property.
     */
    public set rendererobjecttypecode(value: string | undefined) {
        this._rendererobjecttypecode = value;
    };
    /**
     * Gets the runas property value. 
     * @returns a integer
     */
    public get runas() {
        return this._runas;
    };
    /**
     * Sets the runas property value. 
     * @param value Value to set for the runas property.
     */
    public set runas(value: number | undefined) {
        this._runas = value;
    };
    /**
     * Gets the scope property value. 
     * @returns a integer
     */
    public get scope() {
        return this._scope;
    };
    /**
     * Sets the scope property value. 
     * @param value Value to set for the scope property.
     */
    public set scope(value: number | undefined) {
        this._scope = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeStringValue("_activeworkflowid_value", this._activeworkflowid_value);
        writer.writeStringValue("_createdby_value", this._createdby_value);
        writer.writeStringValue("_createdonbehalfby_value", this._createdonbehalfby_value);
        writer.writeStringValue("_modifiedby_value", this._modifiedby_value);
        writer.writeStringValue("_modifiedonbehalfby_value", this._modifiedonbehalfby_value);
        writer.writeStringValue("_ownerid_value", this._ownerid_value);
        writer.writeStringValue("_owningbusinessunit_value", this._owningbusinessunit_value);
        writer.writeStringValue("_owningteam_value", this._owningteam_value);
        writer.writeStringValue("_owninguser_value", this._owninguser_value);
        writer.writeStringValue("_parentworkflowid_value", this._parentworkflowid_value);
        writer.writeStringValue("_plugintypeid_value", this._plugintypeid_value);
        writer.writeStringValue("_sdkmessageid_value", this._sdkmessageid_value);
        writer.writeObjectValue<Workflow>("activeworkflowid", this.activeworkflowid);
        writer.writeBooleanValue("asyncautodelete", this.asyncautodelete);
        writer.writeCollectionOfObjectValues<Botcomponent>("botcomponent_workflow", this.botcomponent_workflow);
        writer.writeNumberValue("businessprocesstype", this.businessprocesstype);
        writer.writeCollectionOfObjectValues<Catalogassignment>("catalogAssignments", this.catalogAssignments);
        writer.writeNumberValue("category", this.category);
        writer.writeStringValue("clientdata", this.clientdata);
        writer.writeNumberValue("componentstate", this.componentstate);
        writer.writeObjectValue<Systemuser>("createdby", this.createdby);
        writer.writeDateValue("createdon", this.createdon);
        writer.writeObjectValue<Systemuser>("createdonbehalfby", this.createdonbehalfby);
        writer.writeNumberValue("createstage", this.createstage);
        writer.writeNumberValue("deletestage", this.deletestage);
        writer.writeStringValue("description", this.description);
        writer.writeStringValue("entityimage", this.entityimage);
        writer.writeNumberValue("entityimage_timestamp", this.entityimage_timestamp);
        writer.writeStringValue("entityimage_url", this.entityimage_url);
        writer.writeStringValue("entityimageid", this.entityimageid);
        writer.writeStringValue("formid", this.formid);
        writer.writeStringValue("inputparameters", this.inputparameters);
        writer.writeStringValue("introducedversion", this.introducedversion);
        writer.writeBooleanValue("iscrmuiworkflow", this.iscrmuiworkflow);
        writer.writeObjectValue<BooleanManagedProperty>("iscustomizable", this.iscustomizable);
        writer.writeObjectValue<BooleanManagedProperty>("iscustomprocessingstepallowedforotherpublishers", this.iscustomprocessingstepallowedforotherpublishers);
        writer.writeBooleanValue("ismanaged", this.ismanaged);
        writer.writeBooleanValue("istransacted", this.istransacted);
        writer.writeNumberValue("languagecode", this.languagecode);
        writer.writeCollectionOfObjectValues<Asyncoperation>("lk_asyncoperation_workflowactivationid", this.lk_asyncoperation_workflowactivationid);
        writer.writeCollectionOfObjectValues<Msdyn_bpf_2c5fe86acc8b414b8322ae571000c799>("lk_msdyn_bpf_2c5fe86acc8b414b8322ae571000c799_processid", this.lk_msdyn_bpf_2c5fe86acc8b414b8322ae571000c799_processid);
        writer.writeCollectionOfObjectValues<Msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b>("lk_msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b_processid", this.lk_msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b_processid);
        writer.writeCollectionOfObjectValues<Msdyn_bpf_665e73aa18c247d886bfc50499c73b82>("lk_msdyn_bpf_665e73aa18c247d886bfc50499c73b82_processid", this.lk_msdyn_bpf_665e73aa18c247d886bfc50499c73b82_processid);
        writer.writeCollectionOfObjectValues<Msdyn_bpf_989e9b1857e24af18787d5143b67523b>("lk_msdyn_bpf_989e9b1857e24af18787d5143b67523b_processid", this.lk_msdyn_bpf_989e9b1857e24af18787d5143b67523b_processid);
        writer.writeCollectionOfObjectValues<Msdyn_bpf_baa0a411a239410cb8bded8b5fdd88e3>("lk_msdyn_bpf_baa0a411a239410cb8bded8b5fdd88e3_processid", this.lk_msdyn_bpf_baa0a411a239410cb8bded8b5fdd88e3_processid);
        writer.writeCollectionOfObjectValues<Msdyn_bpf_d3d97bac8c294105840e99e37a9d1c39>("lk_msdyn_bpf_d3d97bac8c294105840e99e37a9d1c39_processid", this.lk_msdyn_bpf_d3d97bac8c294105840e99e37a9d1c39_processid);
        writer.writeCollectionOfObjectValues<Msdyn_bpf_d8f9dc7f099f44db9d641dd81fbd470d>("lk_msdyn_bpf_d8f9dc7f099f44db9d641dd81fbd470d_processid", this.lk_msdyn_bpf_d8f9dc7f099f44db9d641dd81fbd470d_processid);
        writer.writeCollectionOfObjectValues<Msdyn_iottocaseprocess>("lk_msdyn_iottocaseprocess_processid", this.lk_msdyn_iottocaseprocess_processid);
        writer.writeCollectionOfObjectValues<Processsession>("lk_processsession_processid", this.lk_processsession_processid);
        writer.writeNumberValue("mode", this.mode);
        writer.writeObjectValue<Systemuser>("modifiedby", this.modifiedby);
        writer.writeDateValue("modifiedon", this.modifiedon);
        writer.writeObjectValue<Systemuser>("modifiedonbehalfby", this.modifiedonbehalfby);
        writer.writeCollectionOfObjectValues<Msdyn_aimodel>("msdyn_retrainworkflow_msdyn_toaimodel", this.msdyn_retrainworkflow_msdyn_toaimodel);
        writer.writeCollectionOfObjectValues<Msdyn_aimodel>("msdyn_scheduleinferenceworkflow_msdyn_toaimodel", this.msdyn_scheduleinferenceworkflow_msdyn_toaimodel);
        writer.writeCollectionOfObjectValues<Msdyn_entityroutingconfiguration>("msdyn_workflow_msdyn_entityroutingconfiguration_DeroutingProcess", this.msdyn_workflow_msdyn_entityroutingconfiguration_DeroutingProcess);
        writer.writeCollectionOfObjectValues<Msdyn_entityroutingconfiguration>("msdyn_workflow_msdyn_entityroutingconfiguration_RoutingProcess", this.msdyn_workflow_msdyn_entityroutingconfiguration_RoutingProcess);
        writer.writeCollectionOfObjectValues<Msdyn_macrosession>("msdyn_workflow_msdyn_macrosession_macroname", this.msdyn_workflow_msdyn_macrosession_macroname);
        writer.writeCollectionOfObjectValues<Msdyn_pmrecording>("msdyn_workflow_msdyn_pmrecording", this.msdyn_workflow_msdyn_pmrecording);
        writer.writeCollectionOfObjectValues<Msdyn_productivityagentscriptstep>("msdyn_workflow_msdyn_prod_agentscriptstep_macroactionid", this.msdyn_workflow_msdyn_prod_agentscriptstep_macroactionid);
        writer.writeCollectionOfObjectValues<Msdyn_solutionhealthrule>("msdyn_workflow_msdyn_solutionhealthrule_resolutionaction", this.msdyn_workflow_msdyn_solutionhealthrule_resolutionaction);
        writer.writeCollectionOfObjectValues<Msdyn_solutionhealthrule>("msdyn_workflow_msdyn_solutionhealthrule_Workflow", this.msdyn_workflow_msdyn_solutionhealthrule_Workflow);
        writer.writeStringValue("name", this.name);
        writer.writeBooleanValue("ondemand", this.ondemand);
        writer.writeDateValue("overwritetime", this.overwritetime);
        writer.writeObjectValue<Principal>("ownerid", this.ownerid);
        writer.writeObjectValue<Businessunit>("owningbusinessunit", this.owningbusinessunit);
        writer.writeObjectValue<Team>("owningteam", this.owningteam);
        writer.writeObjectValue<Systemuser>("owninguser", this.owninguser);
        writer.writeObjectValue<Workflow>("parentworkflowid", this.parentworkflowid);
        writer.writeStringValue("primaryentity", this.primaryentity);
        writer.writeCollectionOfObjectValues<Processstage>("process_processstage", this.process_processstage);
        writer.writeCollectionOfObjectValues<Processtrigger>("process_processtrigger", this.process_processtrigger);
        writer.writeNumberValue("processorder", this.processorder);
        writer.writeStringValue("processroleassignment", this.processroleassignment);
        writer.writeStringValue("processtriggerformid", this.processtriggerformid);
        writer.writeNumberValue("processtriggerscope", this.processtriggerscope);
        writer.writeNumberValue("rank", this.rank);
        writer.writeCollectionOfObjectValues<Flowsession>("regardingobjectid_process", this.regardingobjectid_process);
        writer.writeStringValue("rendererobjecttypecode", this.rendererobjecttypecode);
        writer.writeNumberValue("runas", this.runas);
        writer.writeNumberValue("scope", this.scope);
        writer.writeCollectionOfObjectValues<Sla>("slabase_workflowid", this.slabase_workflowid);
        writer.writeCollectionOfObjectValues<Slaitem>("slaitembase_workflowid", this.slaitembase_workflowid);
        writer.writeStringValue("solutionid", this.solutionid);
        writer.writeNumberValue("statecode", this.statecode);
        writer.writeNumberValue("statuscode", this.statuscode);
        writer.writeBooleanValue("subprocess", this.subprocess);
        writer.writeBooleanValue("syncworkflowlogonfailure", this.syncworkflowlogonfailure);
        writer.writeBooleanValue("triggeroncreate", this.triggeroncreate);
        writer.writeBooleanValue("triggerondelete", this.triggerondelete);
        writer.writeStringValue("triggeronupdateattributelist", this.triggeronupdateattributelist);
        writer.writeBooleanValue("trustedaccess", this.trustedaccess);
        writer.writeNumberValue("type", this.type);
        writer.writeStringValue("uidata", this.uidata);
        writer.writeNumberValue("uiflowtype", this.uiflowtype);
        writer.writeStringValue("uniquename", this.uniquename);
        writer.writeNumberValue("updatestage", this.updatestage);
        writer.writeNumberValue("versionnumber", this.versionnumber);
        writer.writeCollectionOfObjectValues<Workflow>("workflow_active_workflow", this.workflow_active_workflow);
        writer.writeCollectionOfObjectValues<Annotation>("workflow_Annotation", this.workflow_Annotation);
        writer.writeCollectionOfObjectValues<Expiredprocess>("workflow_expiredprocess", this.workflow_expiredprocess);
        writer.writeCollectionOfObjectValues<Leadtoopportunitysalesprocess>("workflow_leadtoopportunitysalesprocess", this.workflow_leadtoopportunitysalesprocess);
        writer.writeCollectionOfObjectValues<Newprocess>("workflow_newprocess", this.workflow_newprocess);
        writer.writeCollectionOfObjectValues<Opportunitysalesprocess>("workflow_opportunitysalesprocess", this.workflow_opportunitysalesprocess);
        writer.writeCollectionOfObjectValues<Workflow>("workflow_parent_workflow", this.workflow_parent_workflow);
        writer.writeCollectionOfObjectValues<Phonetocaseprocess>("workflow_phonetocaseprocess", this.workflow_phonetocaseprocess);
        writer.writeCollectionOfObjectValues<Syncerror>("workflow_SyncErrors", this.workflow_SyncErrors);
        writer.writeCollectionOfObjectValues<Translationprocess>("workflow_translationprocess", this.workflow_translationprocess);
        writer.writeCollectionOfObjectValues<Workflowbinary>("workflow_workflowbinary_Process", this.workflow_workflowbinary_Process);
        writer.writeStringValue("workflowid", this.workflowid);
        writer.writeStringValue("workflowidunique", this.workflowidunique);
        writer.writeStringValue("xaml", this.xaml);
    };
    /**
     * Gets the slabase_workflowid property value. 
     * @returns a sla
     */
    public get slabase_workflowid() {
        return this._slabase_workflowid;
    };
    /**
     * Sets the slabase_workflowid property value. 
     * @param value Value to set for the slabase_workflowid property.
     */
    public set slabase_workflowid(value: Sla[] | undefined) {
        this._slabase_workflowid = value;
    };
    /**
     * Gets the slaitembase_workflowid property value. 
     * @returns a slaitem
     */
    public get slaitembase_workflowid() {
        return this._slaitembase_workflowid;
    };
    /**
     * Sets the slaitembase_workflowid property value. 
     * @param value Value to set for the slaitembase_workflowid property.
     */
    public set slaitembase_workflowid(value: Slaitem[] | undefined) {
        this._slaitembase_workflowid = value;
    };
    /**
     * Gets the solutionid property value. 
     * @returns a string
     */
    public get solutionid() {
        return this._solutionid;
    };
    /**
     * Sets the solutionid property value. 
     * @param value Value to set for the solutionid property.
     */
    public set solutionid(value: string | undefined) {
        this._solutionid = value;
    };
    /**
     * Gets the statecode property value. 
     * @returns a integer
     */
    public get statecode() {
        return this._statecode;
    };
    /**
     * Sets the statecode property value. 
     * @param value Value to set for the statecode property.
     */
    public set statecode(value: number | undefined) {
        this._statecode = value;
    };
    /**
     * Gets the statuscode property value. 
     * @returns a integer
     */
    public get statuscode() {
        return this._statuscode;
    };
    /**
     * Sets the statuscode property value. 
     * @param value Value to set for the statuscode property.
     */
    public set statuscode(value: number | undefined) {
        this._statuscode = value;
    };
    /**
     * Gets the subprocess property value. 
     * @returns a boolean
     */
    public get subprocess() {
        return this._subprocess;
    };
    /**
     * Sets the subprocess property value. 
     * @param value Value to set for the subprocess property.
     */
    public set subprocess(value: boolean | undefined) {
        this._subprocess = value;
    };
    /**
     * Gets the syncworkflowlogonfailure property value. 
     * @returns a boolean
     */
    public get syncworkflowlogonfailure() {
        return this._syncworkflowlogonfailure;
    };
    /**
     * Sets the syncworkflowlogonfailure property value. 
     * @param value Value to set for the syncworkflowlogonfailure property.
     */
    public set syncworkflowlogonfailure(value: boolean | undefined) {
        this._syncworkflowlogonfailure = value;
    };
    /**
     * Gets the triggeroncreate property value. 
     * @returns a boolean
     */
    public get triggeroncreate() {
        return this._triggeroncreate;
    };
    /**
     * Sets the triggeroncreate property value. 
     * @param value Value to set for the triggeroncreate property.
     */
    public set triggeroncreate(value: boolean | undefined) {
        this._triggeroncreate = value;
    };
    /**
     * Gets the triggerondelete property value. 
     * @returns a boolean
     */
    public get triggerondelete() {
        return this._triggerondelete;
    };
    /**
     * Sets the triggerondelete property value. 
     * @param value Value to set for the triggerondelete property.
     */
    public set triggerondelete(value: boolean | undefined) {
        this._triggerondelete = value;
    };
    /**
     * Gets the triggeronupdateattributelist property value. 
     * @returns a string
     */
    public get triggeronupdateattributelist() {
        return this._triggeronupdateattributelist;
    };
    /**
     * Sets the triggeronupdateattributelist property value. 
     * @param value Value to set for the triggeronupdateattributelist property.
     */
    public set triggeronupdateattributelist(value: string | undefined) {
        this._triggeronupdateattributelist = value;
    };
    /**
     * Gets the trustedaccess property value. 
     * @returns a boolean
     */
    public get trustedaccess() {
        return this._trustedaccess;
    };
    /**
     * Sets the trustedaccess property value. 
     * @param value Value to set for the trustedaccess property.
     */
    public set trustedaccess(value: boolean | undefined) {
        this._trustedaccess = value;
    };
    /**
     * Gets the type property value. 
     * @returns a integer
     */
    public get type() {
        return this._type;
    };
    /**
     * Sets the type property value. 
     * @param value Value to set for the type property.
     */
    public set type(value: number | undefined) {
        this._type = value;
    };
    /**
     * Gets the uidata property value. 
     * @returns a string
     */
    public get uidata() {
        return this._uidata;
    };
    /**
     * Sets the uidata property value. 
     * @param value Value to set for the uidata property.
     */
    public set uidata(value: string | undefined) {
        this._uidata = value;
    };
    /**
     * Gets the uiflowtype property value. 
     * @returns a integer
     */
    public get uiflowtype() {
        return this._uiflowtype;
    };
    /**
     * Sets the uiflowtype property value. 
     * @param value Value to set for the uiflowtype property.
     */
    public set uiflowtype(value: number | undefined) {
        this._uiflowtype = value;
    };
    /**
     * Gets the uniquename property value. 
     * @returns a string
     */
    public get uniquename() {
        return this._uniquename;
    };
    /**
     * Sets the uniquename property value. 
     * @param value Value to set for the uniquename property.
     */
    public set uniquename(value: string | undefined) {
        this._uniquename = value;
    };
    /**
     * Gets the updatestage property value. 
     * @returns a integer
     */
    public get updatestage() {
        return this._updatestage;
    };
    /**
     * Sets the updatestage property value. 
     * @param value Value to set for the updatestage property.
     */
    public set updatestage(value: number | undefined) {
        this._updatestage = value;
    };
    /**
     * Gets the versionnumber property value. 
     * @returns a int64
     */
    public get versionnumber() {
        return this._versionnumber;
    };
    /**
     * Sets the versionnumber property value. 
     * @param value Value to set for the versionnumber property.
     */
    public set versionnumber(value: number | undefined) {
        this._versionnumber = value;
    };
    /**
     * Gets the workflow_active_workflow property value. 
     * @returns a workflow
     */
    public get workflow_active_workflow() {
        return this._workflow_active_workflow;
    };
    /**
     * Sets the workflow_active_workflow property value. 
     * @param value Value to set for the workflow_active_workflow property.
     */
    public set workflow_active_workflow(value: Workflow[] | undefined) {
        this._workflow_active_workflow = value;
    };
    /**
     * Gets the workflow_Annotation property value. 
     * @returns a annotation
     */
    public get workflow_Annotation() {
        return this._workflow_Annotation;
    };
    /**
     * Sets the workflow_Annotation property value. 
     * @param value Value to set for the Workflow_Annotation property.
     */
    public set workflow_Annotation(value: Annotation[] | undefined) {
        this._workflow_Annotation = value;
    };
    /**
     * Gets the workflow_expiredprocess property value. 
     * @returns a expiredprocess
     */
    public get workflow_expiredprocess() {
        return this._workflow_expiredprocess;
    };
    /**
     * Sets the workflow_expiredprocess property value. 
     * @param value Value to set for the workflow_expiredprocess property.
     */
    public set workflow_expiredprocess(value: Expiredprocess[] | undefined) {
        this._workflow_expiredprocess = value;
    };
    /**
     * Gets the workflow_leadtoopportunitysalesprocess property value. 
     * @returns a leadtoopportunitysalesprocess
     */
    public get workflow_leadtoopportunitysalesprocess() {
        return this._workflow_leadtoopportunitysalesprocess;
    };
    /**
     * Sets the workflow_leadtoopportunitysalesprocess property value. 
     * @param value Value to set for the workflow_leadtoopportunitysalesprocess property.
     */
    public set workflow_leadtoopportunitysalesprocess(value: Leadtoopportunitysalesprocess[] | undefined) {
        this._workflow_leadtoopportunitysalesprocess = value;
    };
    /**
     * Gets the workflow_newprocess property value. 
     * @returns a newprocess
     */
    public get workflow_newprocess() {
        return this._workflow_newprocess;
    };
    /**
     * Sets the workflow_newprocess property value. 
     * @param value Value to set for the workflow_newprocess property.
     */
    public set workflow_newprocess(value: Newprocess[] | undefined) {
        this._workflow_newprocess = value;
    };
    /**
     * Gets the workflow_opportunitysalesprocess property value. 
     * @returns a opportunitysalesprocess
     */
    public get workflow_opportunitysalesprocess() {
        return this._workflow_opportunitysalesprocess;
    };
    /**
     * Sets the workflow_opportunitysalesprocess property value. 
     * @param value Value to set for the workflow_opportunitysalesprocess property.
     */
    public set workflow_opportunitysalesprocess(value: Opportunitysalesprocess[] | undefined) {
        this._workflow_opportunitysalesprocess = value;
    };
    /**
     * Gets the workflow_parent_workflow property value. 
     * @returns a workflow
     */
    public get workflow_parent_workflow() {
        return this._workflow_parent_workflow;
    };
    /**
     * Sets the workflow_parent_workflow property value. 
     * @param value Value to set for the workflow_parent_workflow property.
     */
    public set workflow_parent_workflow(value: Workflow[] | undefined) {
        this._workflow_parent_workflow = value;
    };
    /**
     * Gets the workflow_phonetocaseprocess property value. 
     * @returns a phonetocaseprocess
     */
    public get workflow_phonetocaseprocess() {
        return this._workflow_phonetocaseprocess;
    };
    /**
     * Sets the workflow_phonetocaseprocess property value. 
     * @param value Value to set for the workflow_phonetocaseprocess property.
     */
    public set workflow_phonetocaseprocess(value: Phonetocaseprocess[] | undefined) {
        this._workflow_phonetocaseprocess = value;
    };
    /**
     * Gets the workflow_SyncErrors property value. 
     * @returns a syncerror
     */
    public get workflow_SyncErrors() {
        return this._workflow_SyncErrors;
    };
    /**
     * Sets the workflow_SyncErrors property value. 
     * @param value Value to set for the Workflow_SyncErrors property.
     */
    public set workflow_SyncErrors(value: Syncerror[] | undefined) {
        this._workflow_SyncErrors = value;
    };
    /**
     * Gets the workflow_translationprocess property value. 
     * @returns a translationprocess
     */
    public get workflow_translationprocess() {
        return this._workflow_translationprocess;
    };
    /**
     * Sets the workflow_translationprocess property value. 
     * @param value Value to set for the workflow_translationprocess property.
     */
    public set workflow_translationprocess(value: Translationprocess[] | undefined) {
        this._workflow_translationprocess = value;
    };
    /**
     * Gets the workflow_workflowbinary_Process property value. 
     * @returns a workflowbinary
     */
    public get workflow_workflowbinary_Process() {
        return this._workflow_workflowbinary_Process;
    };
    /**
     * Sets the workflow_workflowbinary_Process property value. 
     * @param value Value to set for the workflow_workflowbinary_Process property.
     */
    public set workflow_workflowbinary_Process(value: Workflowbinary[] | undefined) {
        this._workflow_workflowbinary_Process = value;
    };
    /**
     * Gets the workflowid property value. 
     * @returns a string
     */
    public get workflowid() {
        return this._workflowid;
    };
    /**
     * Sets the workflowid property value. 
     * @param value Value to set for the workflowid property.
     */
    public set workflowid(value: string | undefined) {
        this._workflowid = value;
    };
    /**
     * Gets the workflowidunique property value. 
     * @returns a string
     */
    public get workflowidunique() {
        return this._workflowidunique;
    };
    /**
     * Sets the workflowidunique property value. 
     * @param value Value to set for the workflowidunique property.
     */
    public set workflowidunique(value: string | undefined) {
        this._workflowidunique = value;
    };
    /**
     * Gets the xaml property value. 
     * @returns a string
     */
    public get xaml() {
        return this._xaml;
    };
    /**
     * Sets the xaml property value. 
     * @param value Value to set for the xaml property.
     */
    public set xaml(value: string | undefined) {
        this._xaml = value;
    };
}
