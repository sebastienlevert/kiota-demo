import {createAnnotationFromDiscriminatorValue} from './createAnnotationFromDiscriminatorValue';
import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createBookableresourcecategoryFromDiscriminatorValue} from './createBookableresourcecategoryFromDiscriminatorValue';
import {createBulkdeletefailureFromDiscriminatorValue} from './createBulkdeletefailureFromDiscriminatorValue';
import {createBusinessunitFromDiscriminatorValue} from './createBusinessunitFromDiscriminatorValue';
import {createDuplicaterecordFromDiscriminatorValue} from './createDuplicaterecordFromDiscriminatorValue';
import {createMailboxtrackingfolderFromDiscriminatorValue} from './createMailboxtrackingfolderFromDiscriminatorValue';
import {createMsdyn_actualFromDiscriminatorValue} from './createMsdyn_actualFromDiscriminatorValue';
import {createMsdyn_contractlinescheduleofvalueFromDiscriminatorValue} from './createMsdyn_contractlinescheduleofvalueFromDiscriminatorValue';
import {createMsdyn_estimatelineFromDiscriminatorValue} from './createMsdyn_estimatelineFromDiscriminatorValue';
import {createMsdyn_factFromDiscriminatorValue} from './createMsdyn_factFromDiscriminatorValue';
import {createMsdyn_invoicelinetransactionFromDiscriminatorValue} from './createMsdyn_invoicelinetransactionFromDiscriminatorValue';
import {createMsdyn_journalFromDiscriminatorValue} from './createMsdyn_journalFromDiscriminatorValue';
import {createMsdyn_journallineFromDiscriminatorValue} from './createMsdyn_journallineFromDiscriminatorValue';
import {createMsdyn_opportunitylinetransactionFromDiscriminatorValue} from './createMsdyn_opportunitylinetransactionFromDiscriminatorValue';
import {createMsdyn_orderlinetransactionFromDiscriminatorValue} from './createMsdyn_orderlinetransactionFromDiscriminatorValue';
import {createMsdyn_organizationalunitFromDiscriminatorValue} from './createMsdyn_organizationalunitFromDiscriminatorValue';
import {createMsdyn_projectapprovalFromDiscriminatorValue} from './createMsdyn_projectapprovalFromDiscriminatorValue';
import {createMsdyn_projectFromDiscriminatorValue} from './createMsdyn_projectFromDiscriminatorValue';
import {createMsdyn_projecttaskdependencyFromDiscriminatorValue} from './createMsdyn_projecttaskdependencyFromDiscriminatorValue';
import {createMsdyn_projecttaskFromDiscriminatorValue} from './createMsdyn_projecttaskFromDiscriminatorValue';
import {createMsdyn_projecttaskstatususerFromDiscriminatorValue} from './createMsdyn_projecttaskstatususerFromDiscriminatorValue';
import {createMsdyn_projectteamFromDiscriminatorValue} from './createMsdyn_projectteamFromDiscriminatorValue';
import {createMsdyn_quotelinescheduleofvalueFromDiscriminatorValue} from './createMsdyn_quotelinescheduleofvalueFromDiscriminatorValue';
import {createMsdyn_quotelinetransactionFromDiscriminatorValue} from './createMsdyn_quotelinetransactionFromDiscriminatorValue';
import {createMsdyn_resourceassignmentFromDiscriminatorValue} from './createMsdyn_resourceassignmentFromDiscriminatorValue';
import {createMsdyn_timeentryFromDiscriminatorValue} from './createMsdyn_timeentryFromDiscriminatorValue';
import {createMsdyn_transactioncategoryFromDiscriminatorValue} from './createMsdyn_transactioncategoryFromDiscriminatorValue';
import {createPrincipalFromDiscriminatorValue} from './createPrincipalFromDiscriminatorValue';
import {createPrincipalobjectattributeaccessFromDiscriminatorValue} from './createPrincipalobjectattributeaccessFromDiscriminatorValue';
import {createProcesssessionFromDiscriminatorValue} from './createProcesssessionFromDiscriminatorValue';
import {createQueueitemFromDiscriminatorValue} from './createQueueitemFromDiscriminatorValue';
import {createSyncerrorFromDiscriminatorValue} from './createSyncerrorFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {createTeamFromDiscriminatorValue} from './createTeamFromDiscriminatorValue';
import {createTransactioncurrencyFromDiscriminatorValue} from './createTransactioncurrencyFromDiscriminatorValue';
import {Annotation, Asyncoperation, Bookableresourcecategory, Bulkdeletefailure, Businessunit, Crmbaseentity, Duplicaterecord, Mailboxtrackingfolder, Msdyn_actual, Msdyn_contractlinescheduleofvalue, Msdyn_estimateline, Msdyn_fact, Msdyn_invoicelinetransaction, Msdyn_journal, Msdyn_journalline, Msdyn_opportunitylinetransaction, Msdyn_orderlinetransaction, Msdyn_organizationalunit, Msdyn_project, Msdyn_projectapproval, Msdyn_projecttaskdependency, Msdyn_projecttaskstatususer, Msdyn_projectteam, Msdyn_quotelinescheduleofvalue, Msdyn_quotelinetransaction, Msdyn_resourceassignment, Msdyn_timeentry, Msdyn_transactioncategory, Principal, Principalobjectattributeaccess, Processsession, Queueitem, Syncerror, Systemuser, Team, Transactioncurrency} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Msdyn_projecttask extends Crmbaseentity implements Parsable {
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private __msdyn_assignedteammembers_value?: string | undefined;
    private __msdyn_organizationalunitpricingdimension_value?: string | undefined;
    private __msdyn_parenttask_value?: string | undefined;
    private __msdyn_project_value?: string | undefined;
    private __msdyn_resourcecategory_value?: string | undefined;
    private __msdyn_resourcecategorypricingdimension_value?: string | undefined;
    private __msdyn_resourceorganizationalunitid_value?: string | undefined;
    private __msdyn_transactioncategory_value?: string | undefined;
    private __ownerid_value?: string | undefined;
    private __owningbusinessunit_value?: string | undefined;
    private __owningteam_value?: string | undefined;
    private __owninguser_value?: string | undefined;
    private __transactioncurrencyid_value?: string | undefined;
    private _createdby?: Systemuser | undefined;
    private _createdon?: Date | undefined;
    private _createdonbehalfby?: Systemuser | undefined;
    private _exchangerate?: number | undefined;
    private _importsequencenumber?: number | undefined;
    private _modifiedby?: Systemuser | undefined;
    private _modifiedon?: Date | undefined;
    private _modifiedonbehalfby?: Systemuser | undefined;
    private _msdyn_actualcost?: number | undefined;
    private _msdyn_actualcost_base?: number | undefined;
    private _msdyn_actualdurationminutes?: number | undefined;
    private _msdyn_actualeffort?: number | undefined;
    private _msdyn_actualend?: Date | undefined;
    private _msdyn_actualsales?: number | undefined;
    private _msdyn_actualsales_base?: number | undefined;
    private _msdyn_actualstart?: Date | undefined;
    private _msdyn_aggregationdirection?: number | undefined;
    private _msdyn_assignedresources?: string | undefined;
    private _msdyn_AssignedTeamMembers?: Msdyn_projectteam | undefined;
    private _msdyn_autoscheduling?: boolean | undefined;
    private _msdyn_costatcompleteestimate?: number | undefined;
    private _msdyn_costatcompleteestimate_base?: number | undefined;
    private _msdyn_costconsumptionpercentage?: number | undefined;
    private _msdyn_costestimatecontour?: string | undefined;
    private _msdyn_description?: string | undefined;
    private _msdyn_duration?: number | undefined;
    private _msdyn_effort?: number | undefined;
    private _msdyn_effortcontour?: string | undefined;
    private _msdyn_effortestimateatcomplete?: number | undefined;
    private _msdyn_islinetask?: boolean | undefined;
    private _msdyn_ismilestone?: boolean | undefined;
    private _msdyn_msdyn_projecttask_msdyn_actual_Task?: Msdyn_actual[] | undefined;
    private _msdyn_msdyn_projecttask_msdyn_contractlinescheduleofvalue_projecttask?: Msdyn_contractlinescheduleofvalue[] | undefined;
    private _msdyn_msdyn_projecttask_msdyn_estimateline_Task?: Msdyn_estimateline[] | undefined;
    private _msdyn_msdyn_projecttask_msdyn_fact_Task?: Msdyn_fact[] | undefined;
    private _msdyn_msdyn_projecttask_msdyn_invoicelinetransaction_Task?: Msdyn_invoicelinetransaction[] | undefined;
    private _msdyn_msdyn_projecttask_msdyn_journal_ProjectTask?: Msdyn_journal[] | undefined;
    private _msdyn_msdyn_projecttask_msdyn_journalline_Task?: Msdyn_journalline[] | undefined;
    private _msdyn_msdyn_projecttask_msdyn_opportunitylinetransaction_Task?: Msdyn_opportunitylinetransaction[] | undefined;
    private _msdyn_msdyn_projecttask_msdyn_orderlinetransaction_Task?: Msdyn_orderlinetransaction[] | undefined;
    private _msdyn_msdyn_projecttask_msdyn_projectapproval_ProjectTask?: Msdyn_projectapproval[] | undefined;
    private _msdyn_msdyn_projecttask_msdyn_projecttask_parenttask?: Msdyn_projecttask[] | undefined;
    private _msdyn_msdyn_projecttask_msdyn_projecttaskdependency_PredecessorTask?: Msdyn_projecttaskdependency[] | undefined;
    private _msdyn_msdyn_projecttask_msdyn_projecttaskdependency_SuccessorTask?: Msdyn_projecttaskdependency[] | undefined;
    private _msdyn_msdyn_projecttask_msdyn_projecttaskstatususer?: Msdyn_projecttaskstatususer[] | undefined;
    private _msdyn_msdyn_projecttask_msdyn_quotelinescheduleofvalue_projecttask?: Msdyn_quotelinescheduleofvalue[] | undefined;
    private _msdyn_msdyn_projecttask_msdyn_quotelinetransaction_Task?: Msdyn_quotelinetransaction[] | undefined;
    private _msdyn_msdyn_projecttask_msdyn_resourceassignment_taskid?: Msdyn_resourceassignment[] | undefined;
    private _msdyn_msdyn_projecttask_msdyn_timeentry_projectTask?: Msdyn_timeentry[] | undefined;
    private _msdyn_msprojectclientid?: string | undefined;
    private _msdyn_numberofresources?: number | undefined;
    private _msdyn_OrganizationalUnitPricingDimension?: Msdyn_organizationalunit | undefined;
    private _msdyn_parenttask?: Msdyn_projecttask | undefined;
    private _msdyn_plannedcost?: number | undefined;
    private _msdyn_plannedcost_base?: number | undefined;
    private _msdyn_plannedsales?: number | undefined;
    private _msdyn_plannedsales_base?: number | undefined;
    private _msdyn_pluginprocessingdata?: number | undefined;
    private _msdyn_progress?: number | undefined;
    private _msdyn_project?: Msdyn_project | undefined;
    private _msdyn_projecttask_Annotations?: Annotation[] | undefined;
    private _msdyn_projecttask_AsyncOperations?: Asyncoperation[] | undefined;
    private _msdyn_projecttask_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _msdyn_projecttask_DuplicateBaseRecord?: Duplicaterecord[] | undefined;
    private _msdyn_projecttask_DuplicateMatchingRecord?: Duplicaterecord[] | undefined;
    private _msdyn_projecttask_MailboxTrackingFolders?: Mailboxtrackingfolder[] | undefined;
    private _msdyn_projecttask_PrincipalObjectAttributeAccesses?: Principalobjectattributeaccess[] | undefined;
    private _msdyn_projecttask_ProcessSession?: Processsession[] | undefined;
    private _msdyn_projecttask_QueueItems?: Queueitem[] | undefined;
    private _msdyn_projecttask_SyncErrors?: Syncerror[] | undefined;
    private _msdyn_projecttaskid?: string | undefined;
    private _msdyn_remainingcost?: number | undefined;
    private _msdyn_remainingcost_base?: number | undefined;
    private _msdyn_remaininghours?: number | undefined;
    private _msdyn_remainingsales?: number | undefined;
    private _msdyn_remainingsales_base?: number | undefined;
    private _msdyn_requestedhours?: number | undefined;
    private _msdyn_resourcecategory?: Bookableresourcecategory | undefined;
    private _msdyn_ResourceCategoryPricingDimension?: Bookableresourcecategory | undefined;
    private _msdyn_ResourceOrganizationalUnitId?: Msdyn_organizationalunit | undefined;
    private _msdyn_resourceutilization?: number | undefined;
    private _msdyn_salesconsumptionpercentage?: number | undefined;
    private _msdyn_salesestimateatcomplete?: number | undefined;
    private _msdyn_salesestimateatcomplete_base?: number | undefined;
    private _msdyn_salesestimatecontour?: string | undefined;
    private _msdyn_salesvariance?: number | undefined;
    private _msdyn_salesvariance_base?: number | undefined;
    private _msdyn_scheduleddurationminutes?: number | undefined;
    private _msdyn_scheduledend?: Date | undefined;
    private _msdyn_scheduledhours?: number | undefined;
    private _msdyn_scheduledstart?: Date | undefined;
    private _msdyn_schedulevariance?: number | undefined;
    private _msdyn_skipupdateestimateline?: boolean | undefined;
    private _msdyn_subject?: string | undefined;
    private _msdyn_transactioncategory?: Msdyn_transactioncategory | undefined;
    private _msdyn_varianceofcost?: number | undefined;
    private _msdyn_varianceofcost_base?: number | undefined;
    private _msdyn_wbsid?: string | undefined;
    private _overriddencreatedon?: Date | undefined;
    private _ownerid?: Principal | undefined;
    private _owningbusinessunit?: Businessunit | undefined;
    private _owningteam?: Team | undefined;
    private _owninguser?: Systemuser | undefined;
    private _processid?: string | undefined;
    private _stageid?: string | undefined;
    private _statecode?: number | undefined;
    private _statuscode?: number | undefined;
    private _timezoneruleversionnumber?: number | undefined;
    private _transactioncurrencyid?: Transactioncurrency | undefined;
    private _traversedpath?: string | undefined;
    private _utcconversiontimezonecode?: number | undefined;
    private _versionnumber?: number | undefined;
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
     * Gets the _msdyn_assignedteammembers_value property value. 
     * @returns a string
     */
    public get _msdyn_assignedteammembers_value() {
        return this.__msdyn_assignedteammembers_value;
    };
    /**
     * Sets the _msdyn_assignedteammembers_value property value. 
     * @param value Value to set for the _msdyn_assignedteammembers_value property.
     */
    public set _msdyn_assignedteammembers_value(value: string | undefined) {
        this.__msdyn_assignedteammembers_value = value;
    };
    /**
     * Gets the _msdyn_organizationalunitpricingdimension_value property value. 
     * @returns a string
     */
    public get _msdyn_organizationalunitpricingdimension_value() {
        return this.__msdyn_organizationalunitpricingdimension_value;
    };
    /**
     * Sets the _msdyn_organizationalunitpricingdimension_value property value. 
     * @param value Value to set for the _msdyn_organizationalunitpricingdimension_value property.
     */
    public set _msdyn_organizationalunitpricingdimension_value(value: string | undefined) {
        this.__msdyn_organizationalunitpricingdimension_value = value;
    };
    /**
     * Gets the _msdyn_parenttask_value property value. 
     * @returns a string
     */
    public get _msdyn_parenttask_value() {
        return this.__msdyn_parenttask_value;
    };
    /**
     * Sets the _msdyn_parenttask_value property value. 
     * @param value Value to set for the _msdyn_parenttask_value property.
     */
    public set _msdyn_parenttask_value(value: string | undefined) {
        this.__msdyn_parenttask_value = value;
    };
    /**
     * Gets the _msdyn_project_value property value. 
     * @returns a string
     */
    public get _msdyn_project_value() {
        return this.__msdyn_project_value;
    };
    /**
     * Sets the _msdyn_project_value property value. 
     * @param value Value to set for the _msdyn_project_value property.
     */
    public set _msdyn_project_value(value: string | undefined) {
        this.__msdyn_project_value = value;
    };
    /**
     * Gets the _msdyn_resourcecategory_value property value. 
     * @returns a string
     */
    public get _msdyn_resourcecategory_value() {
        return this.__msdyn_resourcecategory_value;
    };
    /**
     * Sets the _msdyn_resourcecategory_value property value. 
     * @param value Value to set for the _msdyn_resourcecategory_value property.
     */
    public set _msdyn_resourcecategory_value(value: string | undefined) {
        this.__msdyn_resourcecategory_value = value;
    };
    /**
     * Gets the _msdyn_resourcecategorypricingdimension_value property value. 
     * @returns a string
     */
    public get _msdyn_resourcecategorypricingdimension_value() {
        return this.__msdyn_resourcecategorypricingdimension_value;
    };
    /**
     * Sets the _msdyn_resourcecategorypricingdimension_value property value. 
     * @param value Value to set for the _msdyn_resourcecategorypricingdimension_value property.
     */
    public set _msdyn_resourcecategorypricingdimension_value(value: string | undefined) {
        this.__msdyn_resourcecategorypricingdimension_value = value;
    };
    /**
     * Gets the _msdyn_resourceorganizationalunitid_value property value. 
     * @returns a string
     */
    public get _msdyn_resourceorganizationalunitid_value() {
        return this.__msdyn_resourceorganizationalunitid_value;
    };
    /**
     * Sets the _msdyn_resourceorganizationalunitid_value property value. 
     * @param value Value to set for the _msdyn_resourceorganizationalunitid_value property.
     */
    public set _msdyn_resourceorganizationalunitid_value(value: string | undefined) {
        this.__msdyn_resourceorganizationalunitid_value = value;
    };
    /**
     * Gets the _msdyn_transactioncategory_value property value. 
     * @returns a string
     */
    public get _msdyn_transactioncategory_value() {
        return this.__msdyn_transactioncategory_value;
    };
    /**
     * Sets the _msdyn_transactioncategory_value property value. 
     * @param value Value to set for the _msdyn_transactioncategory_value property.
     */
    public set _msdyn_transactioncategory_value(value: string | undefined) {
        this.__msdyn_transactioncategory_value = value;
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
     * Gets the _transactioncurrencyid_value property value. 
     * @returns a string
     */
    public get _transactioncurrencyid_value() {
        return this.__transactioncurrencyid_value;
    };
    /**
     * Sets the _transactioncurrencyid_value property value. 
     * @param value Value to set for the _transactioncurrencyid_value property.
     */
    public set _transactioncurrencyid_value(value: string | undefined) {
        this.__transactioncurrencyid_value = value;
    };
    /**
     * Instantiates a new msdyn_projecttask and sets the default values.
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
     * Gets the exchangerate property value. 
     * @returns a int64
     */
    public get exchangerate() {
        return this._exchangerate;
    };
    /**
     * Sets the exchangerate property value. 
     * @param value Value to set for the exchangerate property.
     */
    public set exchangerate(value: number | undefined) {
        this._exchangerate = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Record<string, (item: T, node: ParseNode) => void> {
        return {...super.getFieldDeserializers<T>(),
            "_createdby_value": (o, n) => { (o as unknown as Msdyn_projecttask)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Msdyn_projecttask)._createdonbehalfby_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Msdyn_projecttask)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Msdyn_projecttask)._modifiedonbehalfby_value = n.getStringValue(); },
            "_msdyn_assignedteammembers_value": (o, n) => { (o as unknown as Msdyn_projecttask)._msdyn_assignedteammembers_value = n.getStringValue(); },
            "_msdyn_organizationalunitpricingdimension_value": (o, n) => { (o as unknown as Msdyn_projecttask)._msdyn_organizationalunitpricingdimension_value = n.getStringValue(); },
            "_msdyn_parenttask_value": (o, n) => { (o as unknown as Msdyn_projecttask)._msdyn_parenttask_value = n.getStringValue(); },
            "_msdyn_project_value": (o, n) => { (o as unknown as Msdyn_projecttask)._msdyn_project_value = n.getStringValue(); },
            "_msdyn_resourcecategory_value": (o, n) => { (o as unknown as Msdyn_projecttask)._msdyn_resourcecategory_value = n.getStringValue(); },
            "_msdyn_resourcecategorypricingdimension_value": (o, n) => { (o as unknown as Msdyn_projecttask)._msdyn_resourcecategorypricingdimension_value = n.getStringValue(); },
            "_msdyn_resourceorganizationalunitid_value": (o, n) => { (o as unknown as Msdyn_projecttask)._msdyn_resourceorganizationalunitid_value = n.getStringValue(); },
            "_msdyn_transactioncategory_value": (o, n) => { (o as unknown as Msdyn_projecttask)._msdyn_transactioncategory_value = n.getStringValue(); },
            "_ownerid_value": (o, n) => { (o as unknown as Msdyn_projecttask)._ownerid_value = n.getStringValue(); },
            "_owningbusinessunit_value": (o, n) => { (o as unknown as Msdyn_projecttask)._owningbusinessunit_value = n.getStringValue(); },
            "_owningteam_value": (o, n) => { (o as unknown as Msdyn_projecttask)._owningteam_value = n.getStringValue(); },
            "_owninguser_value": (o, n) => { (o as unknown as Msdyn_projecttask)._owninguser_value = n.getStringValue(); },
            "_transactioncurrencyid_value": (o, n) => { (o as unknown as Msdyn_projecttask)._transactioncurrencyid_value = n.getStringValue(); },
            "createdby": (o, n) => { (o as unknown as Msdyn_projecttask).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Msdyn_projecttask).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Msdyn_projecttask).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "exchangerate": (o, n) => { (o as unknown as Msdyn_projecttask).exchangerate = n.getNumberValue(); },
            "importsequencenumber": (o, n) => { (o as unknown as Msdyn_projecttask).importsequencenumber = n.getNumberValue(); },
            "modifiedby": (o, n) => { (o as unknown as Msdyn_projecttask).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Msdyn_projecttask).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Msdyn_projecttask).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "msdyn_actualcost": (o, n) => { (o as unknown as Msdyn_projecttask).msdyn_actualcost = n.getNumberValue(); },
            "msdyn_actualcost_base": (o, n) => { (o as unknown as Msdyn_projecttask).msdyn_actualcost_base = n.getNumberValue(); },
            "msdyn_actualdurationminutes": (o, n) => { (o as unknown as Msdyn_projecttask).msdyn_actualdurationminutes = n.getNumberValue(); },
            "msdyn_actualeffort": (o, n) => { (o as unknown as Msdyn_projecttask).msdyn_actualeffort = n.getNumberValue(); },
            "msdyn_actualend": (o, n) => { (o as unknown as Msdyn_projecttask).msdyn_actualend = n.getDateValue(); },
            "msdyn_actualsales": (o, n) => { (o as unknown as Msdyn_projecttask).msdyn_actualsales = n.getNumberValue(); },
            "msdyn_actualsales_base": (o, n) => { (o as unknown as Msdyn_projecttask).msdyn_actualsales_base = n.getNumberValue(); },
            "msdyn_actualstart": (o, n) => { (o as unknown as Msdyn_projecttask).msdyn_actualstart = n.getDateValue(); },
            "msdyn_aggregationdirection": (o, n) => { (o as unknown as Msdyn_projecttask).msdyn_aggregationdirection = n.getNumberValue(); },
            "msdyn_assignedresources": (o, n) => { (o as unknown as Msdyn_projecttask).msdyn_assignedresources = n.getStringValue(); },
            "msdyn_AssignedTeamMembers": (o, n) => { (o as unknown as Msdyn_projecttask).msdyn_AssignedTeamMembers = n.getObjectValue<Msdyn_projectteam>(createMsdyn_projectteamFromDiscriminatorValue); },
            "msdyn_autoscheduling": (o, n) => { (o as unknown as Msdyn_projecttask).msdyn_autoscheduling = n.getBooleanValue(); },
            "msdyn_costatcompleteestimate": (o, n) => { (o as unknown as Msdyn_projecttask).msdyn_costatcompleteestimate = n.getNumberValue(); },
            "msdyn_costatcompleteestimate_base": (o, n) => { (o as unknown as Msdyn_projecttask).msdyn_costatcompleteestimate_base = n.getNumberValue(); },
            "msdyn_costconsumptionpercentage": (o, n) => { (o as unknown as Msdyn_projecttask).msdyn_costconsumptionpercentage = n.getNumberValue(); },
            "msdyn_costestimatecontour": (o, n) => { (o as unknown as Msdyn_projecttask).msdyn_costestimatecontour = n.getStringValue(); },
            "msdyn_description": (o, n) => { (o as unknown as Msdyn_projecttask).msdyn_description = n.getStringValue(); },
            "msdyn_duration": (o, n) => { (o as unknown as Msdyn_projecttask).msdyn_duration = n.getNumberValue(); },
            "msdyn_effort": (o, n) => { (o as unknown as Msdyn_projecttask).msdyn_effort = n.getNumberValue(); },
            "msdyn_effortcontour": (o, n) => { (o as unknown as Msdyn_projecttask).msdyn_effortcontour = n.getStringValue(); },
            "msdyn_effortestimateatcomplete": (o, n) => { (o as unknown as Msdyn_projecttask).msdyn_effortestimateatcomplete = n.getNumberValue(); },
            "msdyn_islinetask": (o, n) => { (o as unknown as Msdyn_projecttask).msdyn_islinetask = n.getBooleanValue(); },
            "msdyn_ismilestone": (o, n) => { (o as unknown as Msdyn_projecttask).msdyn_ismilestone = n.getBooleanValue(); },
            "msdyn_msdyn_projecttask_msdyn_actual_Task": (o, n) => { (o as unknown as Msdyn_projecttask).msdyn_msdyn_projecttask_msdyn_actual_Task = n.getCollectionOfObjectValues<Msdyn_actual>(createMsdyn_actualFromDiscriminatorValue); },
            "msdyn_msdyn_projecttask_msdyn_contractlinescheduleofvalue_projecttask": (o, n) => { (o as unknown as Msdyn_projecttask).msdyn_msdyn_projecttask_msdyn_contractlinescheduleofvalue_projecttask = n.getCollectionOfObjectValues<Msdyn_contractlinescheduleofvalue>(createMsdyn_contractlinescheduleofvalueFromDiscriminatorValue); },
            "msdyn_msdyn_projecttask_msdyn_estimateline_Task": (o, n) => { (o as unknown as Msdyn_projecttask).msdyn_msdyn_projecttask_msdyn_estimateline_Task = n.getCollectionOfObjectValues<Msdyn_estimateline>(createMsdyn_estimatelineFromDiscriminatorValue); },
            "msdyn_msdyn_projecttask_msdyn_fact_Task": (o, n) => { (o as unknown as Msdyn_projecttask).msdyn_msdyn_projecttask_msdyn_fact_Task = n.getCollectionOfObjectValues<Msdyn_fact>(createMsdyn_factFromDiscriminatorValue); },
            "msdyn_msdyn_projecttask_msdyn_invoicelinetransaction_Task": (o, n) => { (o as unknown as Msdyn_projecttask).msdyn_msdyn_projecttask_msdyn_invoicelinetransaction_Task = n.getCollectionOfObjectValues<Msdyn_invoicelinetransaction>(createMsdyn_invoicelinetransactionFromDiscriminatorValue); },
            "msdyn_msdyn_projecttask_msdyn_journal_ProjectTask": (o, n) => { (o as unknown as Msdyn_projecttask).msdyn_msdyn_projecttask_msdyn_journal_ProjectTask = n.getCollectionOfObjectValues<Msdyn_journal>(createMsdyn_journalFromDiscriminatorValue); },
            "msdyn_msdyn_projecttask_msdyn_journalline_Task": (o, n) => { (o as unknown as Msdyn_projecttask).msdyn_msdyn_projecttask_msdyn_journalline_Task = n.getCollectionOfObjectValues<Msdyn_journalline>(createMsdyn_journallineFromDiscriminatorValue); },
            "msdyn_msdyn_projecttask_msdyn_opportunitylinetransaction_Task": (o, n) => { (o as unknown as Msdyn_projecttask).msdyn_msdyn_projecttask_msdyn_opportunitylinetransaction_Task = n.getCollectionOfObjectValues<Msdyn_opportunitylinetransaction>(createMsdyn_opportunitylinetransactionFromDiscriminatorValue); },
            "msdyn_msdyn_projecttask_msdyn_orderlinetransaction_Task": (o, n) => { (o as unknown as Msdyn_projecttask).msdyn_msdyn_projecttask_msdyn_orderlinetransaction_Task = n.getCollectionOfObjectValues<Msdyn_orderlinetransaction>(createMsdyn_orderlinetransactionFromDiscriminatorValue); },
            "msdyn_msdyn_projecttask_msdyn_projectapproval_ProjectTask": (o, n) => { (o as unknown as Msdyn_projecttask).msdyn_msdyn_projecttask_msdyn_projectapproval_ProjectTask = n.getCollectionOfObjectValues<Msdyn_projectapproval>(createMsdyn_projectapprovalFromDiscriminatorValue); },
            "msdyn_msdyn_projecttask_msdyn_projecttask_parenttask": (o, n) => { (o as unknown as Msdyn_projecttask).msdyn_msdyn_projecttask_msdyn_projecttask_parenttask = n.getCollectionOfObjectValues<Msdyn_projecttask>(createMsdyn_projecttaskFromDiscriminatorValue); },
            "msdyn_msdyn_projecttask_msdyn_projecttaskdependency_PredecessorTask": (o, n) => { (o as unknown as Msdyn_projecttask).msdyn_msdyn_projecttask_msdyn_projecttaskdependency_PredecessorTask = n.getCollectionOfObjectValues<Msdyn_projecttaskdependency>(createMsdyn_projecttaskdependencyFromDiscriminatorValue); },
            "msdyn_msdyn_projecttask_msdyn_projecttaskdependency_SuccessorTask": (o, n) => { (o as unknown as Msdyn_projecttask).msdyn_msdyn_projecttask_msdyn_projecttaskdependency_SuccessorTask = n.getCollectionOfObjectValues<Msdyn_projecttaskdependency>(createMsdyn_projecttaskdependencyFromDiscriminatorValue); },
            "msdyn_msdyn_projecttask_msdyn_projecttaskstatususer": (o, n) => { (o as unknown as Msdyn_projecttask).msdyn_msdyn_projecttask_msdyn_projecttaskstatususer = n.getCollectionOfObjectValues<Msdyn_projecttaskstatususer>(createMsdyn_projecttaskstatususerFromDiscriminatorValue); },
            "msdyn_msdyn_projecttask_msdyn_quotelinescheduleofvalue_projecttask": (o, n) => { (o as unknown as Msdyn_projecttask).msdyn_msdyn_projecttask_msdyn_quotelinescheduleofvalue_projecttask = n.getCollectionOfObjectValues<Msdyn_quotelinescheduleofvalue>(createMsdyn_quotelinescheduleofvalueFromDiscriminatorValue); },
            "msdyn_msdyn_projecttask_msdyn_quotelinetransaction_Task": (o, n) => { (o as unknown as Msdyn_projecttask).msdyn_msdyn_projecttask_msdyn_quotelinetransaction_Task = n.getCollectionOfObjectValues<Msdyn_quotelinetransaction>(createMsdyn_quotelinetransactionFromDiscriminatorValue); },
            "msdyn_msdyn_projecttask_msdyn_resourceassignment_taskid": (o, n) => { (o as unknown as Msdyn_projecttask).msdyn_msdyn_projecttask_msdyn_resourceassignment_taskid = n.getCollectionOfObjectValues<Msdyn_resourceassignment>(createMsdyn_resourceassignmentFromDiscriminatorValue); },
            "msdyn_msdyn_projecttask_msdyn_timeentry_projectTask": (o, n) => { (o as unknown as Msdyn_projecttask).msdyn_msdyn_projecttask_msdyn_timeentry_projectTask = n.getCollectionOfObjectValues<Msdyn_timeentry>(createMsdyn_timeentryFromDiscriminatorValue); },
            "msdyn_msprojectclientid": (o, n) => { (o as unknown as Msdyn_projecttask).msdyn_msprojectclientid = n.getStringValue(); },
            "msdyn_numberofresources": (o, n) => { (o as unknown as Msdyn_projecttask).msdyn_numberofresources = n.getNumberValue(); },
            "msdyn_OrganizationalUnitPricingDimension": (o, n) => { (o as unknown as Msdyn_projecttask).msdyn_OrganizationalUnitPricingDimension = n.getObjectValue<Msdyn_organizationalunit>(createMsdyn_organizationalunitFromDiscriminatorValue); },
            "msdyn_parenttask": (o, n) => { (o as unknown as Msdyn_projecttask).msdyn_parenttask = n.getObjectValue<Msdyn_projecttask>(createMsdyn_projecttaskFromDiscriminatorValue); },
            "msdyn_plannedcost": (o, n) => { (o as unknown as Msdyn_projecttask).msdyn_plannedcost = n.getNumberValue(); },
            "msdyn_plannedcost_base": (o, n) => { (o as unknown as Msdyn_projecttask).msdyn_plannedcost_base = n.getNumberValue(); },
            "msdyn_plannedsales": (o, n) => { (o as unknown as Msdyn_projecttask).msdyn_plannedsales = n.getNumberValue(); },
            "msdyn_plannedsales_base": (o, n) => { (o as unknown as Msdyn_projecttask).msdyn_plannedsales_base = n.getNumberValue(); },
            "msdyn_pluginprocessingdata": (o, n) => { (o as unknown as Msdyn_projecttask).msdyn_pluginprocessingdata = n.getNumberValue(); },
            "msdyn_progress": (o, n) => { (o as unknown as Msdyn_projecttask).msdyn_progress = n.getNumberValue(); },
            "msdyn_project": (o, n) => { (o as unknown as Msdyn_projecttask).msdyn_project = n.getObjectValue<Msdyn_project>(createMsdyn_projectFromDiscriminatorValue); },
            "msdyn_projecttask_Annotations": (o, n) => { (o as unknown as Msdyn_projecttask).msdyn_projecttask_Annotations = n.getCollectionOfObjectValues<Annotation>(createAnnotationFromDiscriminatorValue); },
            "msdyn_projecttask_AsyncOperations": (o, n) => { (o as unknown as Msdyn_projecttask).msdyn_projecttask_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "msdyn_projecttask_BulkDeleteFailures": (o, n) => { (o as unknown as Msdyn_projecttask).msdyn_projecttask_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "msdyn_projecttask_DuplicateBaseRecord": (o, n) => { (o as unknown as Msdyn_projecttask).msdyn_projecttask_DuplicateBaseRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "msdyn_projecttask_DuplicateMatchingRecord": (o, n) => { (o as unknown as Msdyn_projecttask).msdyn_projecttask_DuplicateMatchingRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "msdyn_projecttask_MailboxTrackingFolders": (o, n) => { (o as unknown as Msdyn_projecttask).msdyn_projecttask_MailboxTrackingFolders = n.getCollectionOfObjectValues<Mailboxtrackingfolder>(createMailboxtrackingfolderFromDiscriminatorValue); },
            "msdyn_projecttask_PrincipalObjectAttributeAccesses": (o, n) => { (o as unknown as Msdyn_projecttask).msdyn_projecttask_PrincipalObjectAttributeAccesses = n.getCollectionOfObjectValues<Principalobjectattributeaccess>(createPrincipalobjectattributeaccessFromDiscriminatorValue); },
            "msdyn_projecttask_ProcessSession": (o, n) => { (o as unknown as Msdyn_projecttask).msdyn_projecttask_ProcessSession = n.getCollectionOfObjectValues<Processsession>(createProcesssessionFromDiscriminatorValue); },
            "msdyn_projecttask_QueueItems": (o, n) => { (o as unknown as Msdyn_projecttask).msdyn_projecttask_QueueItems = n.getCollectionOfObjectValues<Queueitem>(createQueueitemFromDiscriminatorValue); },
            "msdyn_projecttask_SyncErrors": (o, n) => { (o as unknown as Msdyn_projecttask).msdyn_projecttask_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "msdyn_projecttaskid": (o, n) => { (o as unknown as Msdyn_projecttask).msdyn_projecttaskid = n.getStringValue(); },
            "msdyn_remainingcost": (o, n) => { (o as unknown as Msdyn_projecttask).msdyn_remainingcost = n.getNumberValue(); },
            "msdyn_remainingcost_base": (o, n) => { (o as unknown as Msdyn_projecttask).msdyn_remainingcost_base = n.getNumberValue(); },
            "msdyn_remaininghours": (o, n) => { (o as unknown as Msdyn_projecttask).msdyn_remaininghours = n.getNumberValue(); },
            "msdyn_remainingsales": (o, n) => { (o as unknown as Msdyn_projecttask).msdyn_remainingsales = n.getNumberValue(); },
            "msdyn_remainingsales_base": (o, n) => { (o as unknown as Msdyn_projecttask).msdyn_remainingsales_base = n.getNumberValue(); },
            "msdyn_requestedhours": (o, n) => { (o as unknown as Msdyn_projecttask).msdyn_requestedhours = n.getNumberValue(); },
            "msdyn_resourcecategory": (o, n) => { (o as unknown as Msdyn_projecttask).msdyn_resourcecategory = n.getObjectValue<Bookableresourcecategory>(createBookableresourcecategoryFromDiscriminatorValue); },
            "msdyn_ResourceCategoryPricingDimension": (o, n) => { (o as unknown as Msdyn_projecttask).msdyn_ResourceCategoryPricingDimension = n.getObjectValue<Bookableresourcecategory>(createBookableresourcecategoryFromDiscriminatorValue); },
            "msdyn_ResourceOrganizationalUnitId": (o, n) => { (o as unknown as Msdyn_projecttask).msdyn_ResourceOrganizationalUnitId = n.getObjectValue<Msdyn_organizationalunit>(createMsdyn_organizationalunitFromDiscriminatorValue); },
            "msdyn_resourceutilization": (o, n) => { (o as unknown as Msdyn_projecttask).msdyn_resourceutilization = n.getNumberValue(); },
            "msdyn_salesconsumptionpercentage": (o, n) => { (o as unknown as Msdyn_projecttask).msdyn_salesconsumptionpercentage = n.getNumberValue(); },
            "msdyn_salesestimateatcomplete": (o, n) => { (o as unknown as Msdyn_projecttask).msdyn_salesestimateatcomplete = n.getNumberValue(); },
            "msdyn_salesestimateatcomplete_base": (o, n) => { (o as unknown as Msdyn_projecttask).msdyn_salesestimateatcomplete_base = n.getNumberValue(); },
            "msdyn_salesestimatecontour": (o, n) => { (o as unknown as Msdyn_projecttask).msdyn_salesestimatecontour = n.getStringValue(); },
            "msdyn_salesvariance": (o, n) => { (o as unknown as Msdyn_projecttask).msdyn_salesvariance = n.getNumberValue(); },
            "msdyn_salesvariance_base": (o, n) => { (o as unknown as Msdyn_projecttask).msdyn_salesvariance_base = n.getNumberValue(); },
            "msdyn_scheduleddurationminutes": (o, n) => { (o as unknown as Msdyn_projecttask).msdyn_scheduleddurationminutes = n.getNumberValue(); },
            "msdyn_scheduledend": (o, n) => { (o as unknown as Msdyn_projecttask).msdyn_scheduledend = n.getDateValue(); },
            "msdyn_scheduledhours": (o, n) => { (o as unknown as Msdyn_projecttask).msdyn_scheduledhours = n.getNumberValue(); },
            "msdyn_scheduledstart": (o, n) => { (o as unknown as Msdyn_projecttask).msdyn_scheduledstart = n.getDateValue(); },
            "msdyn_schedulevariance": (o, n) => { (o as unknown as Msdyn_projecttask).msdyn_schedulevariance = n.getNumberValue(); },
            "msdyn_skipupdateestimateline": (o, n) => { (o as unknown as Msdyn_projecttask).msdyn_skipupdateestimateline = n.getBooleanValue(); },
            "msdyn_subject": (o, n) => { (o as unknown as Msdyn_projecttask).msdyn_subject = n.getStringValue(); },
            "msdyn_transactioncategory": (o, n) => { (o as unknown as Msdyn_projecttask).msdyn_transactioncategory = n.getObjectValue<Msdyn_transactioncategory>(createMsdyn_transactioncategoryFromDiscriminatorValue); },
            "msdyn_varianceofcost": (o, n) => { (o as unknown as Msdyn_projecttask).msdyn_varianceofcost = n.getNumberValue(); },
            "msdyn_varianceofcost_base": (o, n) => { (o as unknown as Msdyn_projecttask).msdyn_varianceofcost_base = n.getNumberValue(); },
            "msdyn_wbsid": (o, n) => { (o as unknown as Msdyn_projecttask).msdyn_wbsid = n.getStringValue(); },
            "overriddencreatedon": (o, n) => { (o as unknown as Msdyn_projecttask).overriddencreatedon = n.getDateValue(); },
            "ownerid": (o, n) => { (o as unknown as Msdyn_projecttask).ownerid = n.getObjectValue<Principal>(createPrincipalFromDiscriminatorValue); },
            "owningbusinessunit": (o, n) => { (o as unknown as Msdyn_projecttask).owningbusinessunit = n.getObjectValue<Businessunit>(createBusinessunitFromDiscriminatorValue); },
            "owningteam": (o, n) => { (o as unknown as Msdyn_projecttask).owningteam = n.getObjectValue<Team>(createTeamFromDiscriminatorValue); },
            "owninguser": (o, n) => { (o as unknown as Msdyn_projecttask).owninguser = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "processid": (o, n) => { (o as unknown as Msdyn_projecttask).processid = n.getStringValue(); },
            "stageid": (o, n) => { (o as unknown as Msdyn_projecttask).stageid = n.getStringValue(); },
            "statecode": (o, n) => { (o as unknown as Msdyn_projecttask).statecode = n.getNumberValue(); },
            "statuscode": (o, n) => { (o as unknown as Msdyn_projecttask).statuscode = n.getNumberValue(); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Msdyn_projecttask).timezoneruleversionnumber = n.getNumberValue(); },
            "transactioncurrencyid": (o, n) => { (o as unknown as Msdyn_projecttask).transactioncurrencyid = n.getObjectValue<Transactioncurrency>(createTransactioncurrencyFromDiscriminatorValue); },
            "traversedpath": (o, n) => { (o as unknown as Msdyn_projecttask).traversedpath = n.getStringValue(); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Msdyn_projecttask).utcconversiontimezonecode = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as Msdyn_projecttask).versionnumber = n.getNumberValue(); },
        };
    };
    /**
     * Gets the importsequencenumber property value. 
     * @returns a integer
     */
    public get importsequencenumber() {
        return this._importsequencenumber;
    };
    /**
     * Sets the importsequencenumber property value. 
     * @param value Value to set for the importsequencenumber property.
     */
    public set importsequencenumber(value: number | undefined) {
        this._importsequencenumber = value;
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
     * Gets the msdyn_actualcost property value. 
     * @returns a int64
     */
    public get msdyn_actualcost() {
        return this._msdyn_actualcost;
    };
    /**
     * Sets the msdyn_actualcost property value. 
     * @param value Value to set for the msdyn_actualcost property.
     */
    public set msdyn_actualcost(value: number | undefined) {
        this._msdyn_actualcost = value;
    };
    /**
     * Gets the msdyn_actualcost_base property value. 
     * @returns a int64
     */
    public get msdyn_actualcost_base() {
        return this._msdyn_actualcost_base;
    };
    /**
     * Sets the msdyn_actualcost_base property value. 
     * @param value Value to set for the msdyn_actualcost_base property.
     */
    public set msdyn_actualcost_base(value: number | undefined) {
        this._msdyn_actualcost_base = value;
    };
    /**
     * Gets the msdyn_actualdurationminutes property value. 
     * @returns a integer
     */
    public get msdyn_actualdurationminutes() {
        return this._msdyn_actualdurationminutes;
    };
    /**
     * Sets the msdyn_actualdurationminutes property value. 
     * @param value Value to set for the msdyn_actualdurationminutes property.
     */
    public set msdyn_actualdurationminutes(value: number | undefined) {
        this._msdyn_actualdurationminutes = value;
    };
    /**
     * Gets the msdyn_actualeffort property value. 
     * @returns a double
     */
    public get msdyn_actualeffort() {
        return this._msdyn_actualeffort;
    };
    /**
     * Sets the msdyn_actualeffort property value. 
     * @param value Value to set for the msdyn_actualeffort property.
     */
    public set msdyn_actualeffort(value: number | undefined) {
        this._msdyn_actualeffort = value;
    };
    /**
     * Gets the msdyn_actualend property value. 
     * @returns a Date
     */
    public get msdyn_actualend() {
        return this._msdyn_actualend;
    };
    /**
     * Sets the msdyn_actualend property value. 
     * @param value Value to set for the msdyn_actualend property.
     */
    public set msdyn_actualend(value: Date | undefined) {
        this._msdyn_actualend = value;
    };
    /**
     * Gets the msdyn_actualsales property value. 
     * @returns a int64
     */
    public get msdyn_actualsales() {
        return this._msdyn_actualsales;
    };
    /**
     * Sets the msdyn_actualsales property value. 
     * @param value Value to set for the msdyn_actualsales property.
     */
    public set msdyn_actualsales(value: number | undefined) {
        this._msdyn_actualsales = value;
    };
    /**
     * Gets the msdyn_actualsales_base property value. 
     * @returns a int64
     */
    public get msdyn_actualsales_base() {
        return this._msdyn_actualsales_base;
    };
    /**
     * Sets the msdyn_actualsales_base property value. 
     * @param value Value to set for the msdyn_actualsales_base property.
     */
    public set msdyn_actualsales_base(value: number | undefined) {
        this._msdyn_actualsales_base = value;
    };
    /**
     * Gets the msdyn_actualstart property value. 
     * @returns a Date
     */
    public get msdyn_actualstart() {
        return this._msdyn_actualstart;
    };
    /**
     * Sets the msdyn_actualstart property value. 
     * @param value Value to set for the msdyn_actualstart property.
     */
    public set msdyn_actualstart(value: Date | undefined) {
        this._msdyn_actualstart = value;
    };
    /**
     * Gets the msdyn_aggregationdirection property value. 
     * @returns a integer
     */
    public get msdyn_aggregationdirection() {
        return this._msdyn_aggregationdirection;
    };
    /**
     * Sets the msdyn_aggregationdirection property value. 
     * @param value Value to set for the msdyn_aggregationdirection property.
     */
    public set msdyn_aggregationdirection(value: number | undefined) {
        this._msdyn_aggregationdirection = value;
    };
    /**
     * Gets the msdyn_assignedresources property value. 
     * @returns a string
     */
    public get msdyn_assignedresources() {
        return this._msdyn_assignedresources;
    };
    /**
     * Sets the msdyn_assignedresources property value. 
     * @param value Value to set for the msdyn_assignedresources property.
     */
    public set msdyn_assignedresources(value: string | undefined) {
        this._msdyn_assignedresources = value;
    };
    /**
     * Gets the msdyn_AssignedTeamMembers property value. 
     * @returns a msdyn_projectteam
     */
    public get msdyn_AssignedTeamMembers() {
        return this._msdyn_AssignedTeamMembers;
    };
    /**
     * Sets the msdyn_AssignedTeamMembers property value. 
     * @param value Value to set for the msdyn_AssignedTeamMembers property.
     */
    public set msdyn_AssignedTeamMembers(value: Msdyn_projectteam | undefined) {
        this._msdyn_AssignedTeamMembers = value;
    };
    /**
     * Gets the msdyn_autoscheduling property value. 
     * @returns a boolean
     */
    public get msdyn_autoscheduling() {
        return this._msdyn_autoscheduling;
    };
    /**
     * Sets the msdyn_autoscheduling property value. 
     * @param value Value to set for the msdyn_autoscheduling property.
     */
    public set msdyn_autoscheduling(value: boolean | undefined) {
        this._msdyn_autoscheduling = value;
    };
    /**
     * Gets the msdyn_costatcompleteestimate property value. 
     * @returns a int64
     */
    public get msdyn_costatcompleteestimate() {
        return this._msdyn_costatcompleteestimate;
    };
    /**
     * Sets the msdyn_costatcompleteestimate property value. 
     * @param value Value to set for the msdyn_costatcompleteestimate property.
     */
    public set msdyn_costatcompleteestimate(value: number | undefined) {
        this._msdyn_costatcompleteestimate = value;
    };
    /**
     * Gets the msdyn_costatcompleteestimate_base property value. 
     * @returns a int64
     */
    public get msdyn_costatcompleteestimate_base() {
        return this._msdyn_costatcompleteestimate_base;
    };
    /**
     * Sets the msdyn_costatcompleteestimate_base property value. 
     * @param value Value to set for the msdyn_costatcompleteestimate_base property.
     */
    public set msdyn_costatcompleteestimate_base(value: number | undefined) {
        this._msdyn_costatcompleteestimate_base = value;
    };
    /**
     * Gets the msdyn_costconsumptionpercentage property value. 
     * @returns a int64
     */
    public get msdyn_costconsumptionpercentage() {
        return this._msdyn_costconsumptionpercentage;
    };
    /**
     * Sets the msdyn_costconsumptionpercentage property value. 
     * @param value Value to set for the msdyn_costconsumptionpercentage property.
     */
    public set msdyn_costconsumptionpercentage(value: number | undefined) {
        this._msdyn_costconsumptionpercentage = value;
    };
    /**
     * Gets the msdyn_costestimatecontour property value. 
     * @returns a string
     */
    public get msdyn_costestimatecontour() {
        return this._msdyn_costestimatecontour;
    };
    /**
     * Sets the msdyn_costestimatecontour property value. 
     * @param value Value to set for the msdyn_costestimatecontour property.
     */
    public set msdyn_costestimatecontour(value: string | undefined) {
        this._msdyn_costestimatecontour = value;
    };
    /**
     * Gets the msdyn_description property value. 
     * @returns a string
     */
    public get msdyn_description() {
        return this._msdyn_description;
    };
    /**
     * Sets the msdyn_description property value. 
     * @param value Value to set for the msdyn_description property.
     */
    public set msdyn_description(value: string | undefined) {
        this._msdyn_description = value;
    };
    /**
     * Gets the msdyn_duration property value. 
     * @returns a double
     */
    public get msdyn_duration() {
        return this._msdyn_duration;
    };
    /**
     * Sets the msdyn_duration property value. 
     * @param value Value to set for the msdyn_duration property.
     */
    public set msdyn_duration(value: number | undefined) {
        this._msdyn_duration = value;
    };
    /**
     * Gets the msdyn_effort property value. 
     * @returns a double
     */
    public get msdyn_effort() {
        return this._msdyn_effort;
    };
    /**
     * Sets the msdyn_effort property value. 
     * @param value Value to set for the msdyn_effort property.
     */
    public set msdyn_effort(value: number | undefined) {
        this._msdyn_effort = value;
    };
    /**
     * Gets the msdyn_effortcontour property value. 
     * @returns a string
     */
    public get msdyn_effortcontour() {
        return this._msdyn_effortcontour;
    };
    /**
     * Sets the msdyn_effortcontour property value. 
     * @param value Value to set for the msdyn_effortcontour property.
     */
    public set msdyn_effortcontour(value: string | undefined) {
        this._msdyn_effortcontour = value;
    };
    /**
     * Gets the msdyn_effortestimateatcomplete property value. 
     * @returns a double
     */
    public get msdyn_effortestimateatcomplete() {
        return this._msdyn_effortestimateatcomplete;
    };
    /**
     * Sets the msdyn_effortestimateatcomplete property value. 
     * @param value Value to set for the msdyn_effortestimateatcomplete property.
     */
    public set msdyn_effortestimateatcomplete(value: number | undefined) {
        this._msdyn_effortestimateatcomplete = value;
    };
    /**
     * Gets the msdyn_islinetask property value. 
     * @returns a boolean
     */
    public get msdyn_islinetask() {
        return this._msdyn_islinetask;
    };
    /**
     * Sets the msdyn_islinetask property value. 
     * @param value Value to set for the msdyn_islinetask property.
     */
    public set msdyn_islinetask(value: boolean | undefined) {
        this._msdyn_islinetask = value;
    };
    /**
     * Gets the msdyn_ismilestone property value. 
     * @returns a boolean
     */
    public get msdyn_ismilestone() {
        return this._msdyn_ismilestone;
    };
    /**
     * Sets the msdyn_ismilestone property value. 
     * @param value Value to set for the msdyn_ismilestone property.
     */
    public set msdyn_ismilestone(value: boolean | undefined) {
        this._msdyn_ismilestone = value;
    };
    /**
     * Gets the msdyn_msdyn_projecttask_msdyn_actual_Task property value. 
     * @returns a msdyn_actual
     */
    public get msdyn_msdyn_projecttask_msdyn_actual_Task() {
        return this._msdyn_msdyn_projecttask_msdyn_actual_Task;
    };
    /**
     * Sets the msdyn_msdyn_projecttask_msdyn_actual_Task property value. 
     * @param value Value to set for the msdyn_msdyn_projecttask_msdyn_actual_Task property.
     */
    public set msdyn_msdyn_projecttask_msdyn_actual_Task(value: Msdyn_actual[] | undefined) {
        this._msdyn_msdyn_projecttask_msdyn_actual_Task = value;
    };
    /**
     * Gets the msdyn_msdyn_projecttask_msdyn_contractlinescheduleofvalue_projecttask property value. 
     * @returns a msdyn_contractlinescheduleofvalue
     */
    public get msdyn_msdyn_projecttask_msdyn_contractlinescheduleofvalue_projecttask() {
        return this._msdyn_msdyn_projecttask_msdyn_contractlinescheduleofvalue_projecttask;
    };
    /**
     * Sets the msdyn_msdyn_projecttask_msdyn_contractlinescheduleofvalue_projecttask property value. 
     * @param value Value to set for the msdyn_msdyn_projecttask_msdyn_contractlinescheduleofvalue_projecttask property.
     */
    public set msdyn_msdyn_projecttask_msdyn_contractlinescheduleofvalue_projecttask(value: Msdyn_contractlinescheduleofvalue[] | undefined) {
        this._msdyn_msdyn_projecttask_msdyn_contractlinescheduleofvalue_projecttask = value;
    };
    /**
     * Gets the msdyn_msdyn_projecttask_msdyn_estimateline_Task property value. 
     * @returns a msdyn_estimateline
     */
    public get msdyn_msdyn_projecttask_msdyn_estimateline_Task() {
        return this._msdyn_msdyn_projecttask_msdyn_estimateline_Task;
    };
    /**
     * Sets the msdyn_msdyn_projecttask_msdyn_estimateline_Task property value. 
     * @param value Value to set for the msdyn_msdyn_projecttask_msdyn_estimateline_Task property.
     */
    public set msdyn_msdyn_projecttask_msdyn_estimateline_Task(value: Msdyn_estimateline[] | undefined) {
        this._msdyn_msdyn_projecttask_msdyn_estimateline_Task = value;
    };
    /**
     * Gets the msdyn_msdyn_projecttask_msdyn_fact_Task property value. 
     * @returns a msdyn_fact
     */
    public get msdyn_msdyn_projecttask_msdyn_fact_Task() {
        return this._msdyn_msdyn_projecttask_msdyn_fact_Task;
    };
    /**
     * Sets the msdyn_msdyn_projecttask_msdyn_fact_Task property value. 
     * @param value Value to set for the msdyn_msdyn_projecttask_msdyn_fact_Task property.
     */
    public set msdyn_msdyn_projecttask_msdyn_fact_Task(value: Msdyn_fact[] | undefined) {
        this._msdyn_msdyn_projecttask_msdyn_fact_Task = value;
    };
    /**
     * Gets the msdyn_msdyn_projecttask_msdyn_invoicelinetransaction_Task property value. 
     * @returns a msdyn_invoicelinetransaction
     */
    public get msdyn_msdyn_projecttask_msdyn_invoicelinetransaction_Task() {
        return this._msdyn_msdyn_projecttask_msdyn_invoicelinetransaction_Task;
    };
    /**
     * Sets the msdyn_msdyn_projecttask_msdyn_invoicelinetransaction_Task property value. 
     * @param value Value to set for the msdyn_msdyn_projecttask_msdyn_invoicelinetransaction_Task property.
     */
    public set msdyn_msdyn_projecttask_msdyn_invoicelinetransaction_Task(value: Msdyn_invoicelinetransaction[] | undefined) {
        this._msdyn_msdyn_projecttask_msdyn_invoicelinetransaction_Task = value;
    };
    /**
     * Gets the msdyn_msdyn_projecttask_msdyn_journal_ProjectTask property value. 
     * @returns a msdyn_journal
     */
    public get msdyn_msdyn_projecttask_msdyn_journal_ProjectTask() {
        return this._msdyn_msdyn_projecttask_msdyn_journal_ProjectTask;
    };
    /**
     * Sets the msdyn_msdyn_projecttask_msdyn_journal_ProjectTask property value. 
     * @param value Value to set for the msdyn_msdyn_projecttask_msdyn_journal_ProjectTask property.
     */
    public set msdyn_msdyn_projecttask_msdyn_journal_ProjectTask(value: Msdyn_journal[] | undefined) {
        this._msdyn_msdyn_projecttask_msdyn_journal_ProjectTask = value;
    };
    /**
     * Gets the msdyn_msdyn_projecttask_msdyn_journalline_Task property value. 
     * @returns a msdyn_journalline
     */
    public get msdyn_msdyn_projecttask_msdyn_journalline_Task() {
        return this._msdyn_msdyn_projecttask_msdyn_journalline_Task;
    };
    /**
     * Sets the msdyn_msdyn_projecttask_msdyn_journalline_Task property value. 
     * @param value Value to set for the msdyn_msdyn_projecttask_msdyn_journalline_Task property.
     */
    public set msdyn_msdyn_projecttask_msdyn_journalline_Task(value: Msdyn_journalline[] | undefined) {
        this._msdyn_msdyn_projecttask_msdyn_journalline_Task = value;
    };
    /**
     * Gets the msdyn_msdyn_projecttask_msdyn_opportunitylinetransaction_Task property value. 
     * @returns a msdyn_opportunitylinetransaction
     */
    public get msdyn_msdyn_projecttask_msdyn_opportunitylinetransaction_Task() {
        return this._msdyn_msdyn_projecttask_msdyn_opportunitylinetransaction_Task;
    };
    /**
     * Sets the msdyn_msdyn_projecttask_msdyn_opportunitylinetransaction_Task property value. 
     * @param value Value to set for the msdyn_msdyn_projecttask_msdyn_opportunitylinetransaction_Task property.
     */
    public set msdyn_msdyn_projecttask_msdyn_opportunitylinetransaction_Task(value: Msdyn_opportunitylinetransaction[] | undefined) {
        this._msdyn_msdyn_projecttask_msdyn_opportunitylinetransaction_Task = value;
    };
    /**
     * Gets the msdyn_msdyn_projecttask_msdyn_orderlinetransaction_Task property value. 
     * @returns a msdyn_orderlinetransaction
     */
    public get msdyn_msdyn_projecttask_msdyn_orderlinetransaction_Task() {
        return this._msdyn_msdyn_projecttask_msdyn_orderlinetransaction_Task;
    };
    /**
     * Sets the msdyn_msdyn_projecttask_msdyn_orderlinetransaction_Task property value. 
     * @param value Value to set for the msdyn_msdyn_projecttask_msdyn_orderlinetransaction_Task property.
     */
    public set msdyn_msdyn_projecttask_msdyn_orderlinetransaction_Task(value: Msdyn_orderlinetransaction[] | undefined) {
        this._msdyn_msdyn_projecttask_msdyn_orderlinetransaction_Task = value;
    };
    /**
     * Gets the msdyn_msdyn_projecttask_msdyn_projectapproval_ProjectTask property value. 
     * @returns a msdyn_projectapproval
     */
    public get msdyn_msdyn_projecttask_msdyn_projectapproval_ProjectTask() {
        return this._msdyn_msdyn_projecttask_msdyn_projectapproval_ProjectTask;
    };
    /**
     * Sets the msdyn_msdyn_projecttask_msdyn_projectapproval_ProjectTask property value. 
     * @param value Value to set for the msdyn_msdyn_projecttask_msdyn_projectapproval_ProjectTask property.
     */
    public set msdyn_msdyn_projecttask_msdyn_projectapproval_ProjectTask(value: Msdyn_projectapproval[] | undefined) {
        this._msdyn_msdyn_projecttask_msdyn_projectapproval_ProjectTask = value;
    };
    /**
     * Gets the msdyn_msdyn_projecttask_msdyn_projecttask_parenttask property value. 
     * @returns a msdyn_projecttask
     */
    public get msdyn_msdyn_projecttask_msdyn_projecttask_parenttask() {
        return this._msdyn_msdyn_projecttask_msdyn_projecttask_parenttask;
    };
    /**
     * Sets the msdyn_msdyn_projecttask_msdyn_projecttask_parenttask property value. 
     * @param value Value to set for the msdyn_msdyn_projecttask_msdyn_projecttask_parenttask property.
     */
    public set msdyn_msdyn_projecttask_msdyn_projecttask_parenttask(value: Msdyn_projecttask[] | undefined) {
        this._msdyn_msdyn_projecttask_msdyn_projecttask_parenttask = value;
    };
    /**
     * Gets the msdyn_msdyn_projecttask_msdyn_projecttaskdependency_PredecessorTask property value. 
     * @returns a msdyn_projecttaskdependency
     */
    public get msdyn_msdyn_projecttask_msdyn_projecttaskdependency_PredecessorTask() {
        return this._msdyn_msdyn_projecttask_msdyn_projecttaskdependency_PredecessorTask;
    };
    /**
     * Sets the msdyn_msdyn_projecttask_msdyn_projecttaskdependency_PredecessorTask property value. 
     * @param value Value to set for the msdyn_msdyn_projecttask_msdyn_projecttaskdependency_PredecessorTask property.
     */
    public set msdyn_msdyn_projecttask_msdyn_projecttaskdependency_PredecessorTask(value: Msdyn_projecttaskdependency[] | undefined) {
        this._msdyn_msdyn_projecttask_msdyn_projecttaskdependency_PredecessorTask = value;
    };
    /**
     * Gets the msdyn_msdyn_projecttask_msdyn_projecttaskdependency_SuccessorTask property value. 
     * @returns a msdyn_projecttaskdependency
     */
    public get msdyn_msdyn_projecttask_msdyn_projecttaskdependency_SuccessorTask() {
        return this._msdyn_msdyn_projecttask_msdyn_projecttaskdependency_SuccessorTask;
    };
    /**
     * Sets the msdyn_msdyn_projecttask_msdyn_projecttaskdependency_SuccessorTask property value. 
     * @param value Value to set for the msdyn_msdyn_projecttask_msdyn_projecttaskdependency_SuccessorTask property.
     */
    public set msdyn_msdyn_projecttask_msdyn_projecttaskdependency_SuccessorTask(value: Msdyn_projecttaskdependency[] | undefined) {
        this._msdyn_msdyn_projecttask_msdyn_projecttaskdependency_SuccessorTask = value;
    };
    /**
     * Gets the msdyn_msdyn_projecttask_msdyn_projecttaskstatususer property value. 
     * @returns a msdyn_projecttaskstatususer
     */
    public get msdyn_msdyn_projecttask_msdyn_projecttaskstatususer() {
        return this._msdyn_msdyn_projecttask_msdyn_projecttaskstatususer;
    };
    /**
     * Sets the msdyn_msdyn_projecttask_msdyn_projecttaskstatususer property value. 
     * @param value Value to set for the msdyn_msdyn_projecttask_msdyn_projecttaskstatususer property.
     */
    public set msdyn_msdyn_projecttask_msdyn_projecttaskstatususer(value: Msdyn_projecttaskstatususer[] | undefined) {
        this._msdyn_msdyn_projecttask_msdyn_projecttaskstatususer = value;
    };
    /**
     * Gets the msdyn_msdyn_projecttask_msdyn_quotelinescheduleofvalue_projecttask property value. 
     * @returns a msdyn_quotelinescheduleofvalue
     */
    public get msdyn_msdyn_projecttask_msdyn_quotelinescheduleofvalue_projecttask() {
        return this._msdyn_msdyn_projecttask_msdyn_quotelinescheduleofvalue_projecttask;
    };
    /**
     * Sets the msdyn_msdyn_projecttask_msdyn_quotelinescheduleofvalue_projecttask property value. 
     * @param value Value to set for the msdyn_msdyn_projecttask_msdyn_quotelinescheduleofvalue_projecttask property.
     */
    public set msdyn_msdyn_projecttask_msdyn_quotelinescheduleofvalue_projecttask(value: Msdyn_quotelinescheduleofvalue[] | undefined) {
        this._msdyn_msdyn_projecttask_msdyn_quotelinescheduleofvalue_projecttask = value;
    };
    /**
     * Gets the msdyn_msdyn_projecttask_msdyn_quotelinetransaction_Task property value. 
     * @returns a msdyn_quotelinetransaction
     */
    public get msdyn_msdyn_projecttask_msdyn_quotelinetransaction_Task() {
        return this._msdyn_msdyn_projecttask_msdyn_quotelinetransaction_Task;
    };
    /**
     * Sets the msdyn_msdyn_projecttask_msdyn_quotelinetransaction_Task property value. 
     * @param value Value to set for the msdyn_msdyn_projecttask_msdyn_quotelinetransaction_Task property.
     */
    public set msdyn_msdyn_projecttask_msdyn_quotelinetransaction_Task(value: Msdyn_quotelinetransaction[] | undefined) {
        this._msdyn_msdyn_projecttask_msdyn_quotelinetransaction_Task = value;
    };
    /**
     * Gets the msdyn_msdyn_projecttask_msdyn_resourceassignment_taskid property value. 
     * @returns a msdyn_resourceassignment
     */
    public get msdyn_msdyn_projecttask_msdyn_resourceassignment_taskid() {
        return this._msdyn_msdyn_projecttask_msdyn_resourceassignment_taskid;
    };
    /**
     * Sets the msdyn_msdyn_projecttask_msdyn_resourceassignment_taskid property value. 
     * @param value Value to set for the msdyn_msdyn_projecttask_msdyn_resourceassignment_taskid property.
     */
    public set msdyn_msdyn_projecttask_msdyn_resourceassignment_taskid(value: Msdyn_resourceassignment[] | undefined) {
        this._msdyn_msdyn_projecttask_msdyn_resourceassignment_taskid = value;
    };
    /**
     * Gets the msdyn_msdyn_projecttask_msdyn_timeentry_projectTask property value. 
     * @returns a msdyn_timeentry
     */
    public get msdyn_msdyn_projecttask_msdyn_timeentry_projectTask() {
        return this._msdyn_msdyn_projecttask_msdyn_timeentry_projectTask;
    };
    /**
     * Sets the msdyn_msdyn_projecttask_msdyn_timeentry_projectTask property value. 
     * @param value Value to set for the msdyn_msdyn_projecttask_msdyn_timeentry_projectTask property.
     */
    public set msdyn_msdyn_projecttask_msdyn_timeentry_projectTask(value: Msdyn_timeentry[] | undefined) {
        this._msdyn_msdyn_projecttask_msdyn_timeentry_projectTask = value;
    };
    /**
     * Gets the msdyn_msprojectclientid property value. 
     * @returns a string
     */
    public get msdyn_msprojectclientid() {
        return this._msdyn_msprojectclientid;
    };
    /**
     * Sets the msdyn_msprojectclientid property value. 
     * @param value Value to set for the msdyn_msprojectclientid property.
     */
    public set msdyn_msprojectclientid(value: string | undefined) {
        this._msdyn_msprojectclientid = value;
    };
    /**
     * Gets the msdyn_numberofresources property value. 
     * @returns a integer
     */
    public get msdyn_numberofresources() {
        return this._msdyn_numberofresources;
    };
    /**
     * Sets the msdyn_numberofresources property value. 
     * @param value Value to set for the msdyn_numberofresources property.
     */
    public set msdyn_numberofresources(value: number | undefined) {
        this._msdyn_numberofresources = value;
    };
    /**
     * Gets the msdyn_OrganizationalUnitPricingDimension property value. 
     * @returns a msdyn_organizationalunit
     */
    public get msdyn_OrganizationalUnitPricingDimension() {
        return this._msdyn_OrganizationalUnitPricingDimension;
    };
    /**
     * Sets the msdyn_OrganizationalUnitPricingDimension property value. 
     * @param value Value to set for the msdyn_OrganizationalUnitPricingDimension property.
     */
    public set msdyn_OrganizationalUnitPricingDimension(value: Msdyn_organizationalunit | undefined) {
        this._msdyn_OrganizationalUnitPricingDimension = value;
    };
    /**
     * Gets the msdyn_parenttask property value. 
     * @returns a msdyn_projecttask
     */
    public get msdyn_parenttask() {
        return this._msdyn_parenttask;
    };
    /**
     * Sets the msdyn_parenttask property value. 
     * @param value Value to set for the msdyn_parenttask property.
     */
    public set msdyn_parenttask(value: Msdyn_projecttask | undefined) {
        this._msdyn_parenttask = value;
    };
    /**
     * Gets the msdyn_plannedcost property value. 
     * @returns a int64
     */
    public get msdyn_plannedcost() {
        return this._msdyn_plannedcost;
    };
    /**
     * Sets the msdyn_plannedcost property value. 
     * @param value Value to set for the msdyn_plannedcost property.
     */
    public set msdyn_plannedcost(value: number | undefined) {
        this._msdyn_plannedcost = value;
    };
    /**
     * Gets the msdyn_plannedcost_base property value. 
     * @returns a int64
     */
    public get msdyn_plannedcost_base() {
        return this._msdyn_plannedcost_base;
    };
    /**
     * Sets the msdyn_plannedcost_base property value. 
     * @param value Value to set for the msdyn_plannedcost_base property.
     */
    public set msdyn_plannedcost_base(value: number | undefined) {
        this._msdyn_plannedcost_base = value;
    };
    /**
     * Gets the msdyn_plannedsales property value. 
     * @returns a int64
     */
    public get msdyn_plannedsales() {
        return this._msdyn_plannedsales;
    };
    /**
     * Sets the msdyn_plannedsales property value. 
     * @param value Value to set for the msdyn_plannedsales property.
     */
    public set msdyn_plannedsales(value: number | undefined) {
        this._msdyn_plannedsales = value;
    };
    /**
     * Gets the msdyn_plannedsales_base property value. 
     * @returns a int64
     */
    public get msdyn_plannedsales_base() {
        return this._msdyn_plannedsales_base;
    };
    /**
     * Sets the msdyn_plannedsales_base property value. 
     * @param value Value to set for the msdyn_plannedsales_base property.
     */
    public set msdyn_plannedsales_base(value: number | undefined) {
        this._msdyn_plannedsales_base = value;
    };
    /**
     * Gets the msdyn_pluginprocessingdata property value. 
     * @returns a integer
     */
    public get msdyn_pluginprocessingdata() {
        return this._msdyn_pluginprocessingdata;
    };
    /**
     * Sets the msdyn_pluginprocessingdata property value. 
     * @param value Value to set for the msdyn_pluginprocessingdata property.
     */
    public set msdyn_pluginprocessingdata(value: number | undefined) {
        this._msdyn_pluginprocessingdata = value;
    };
    /**
     * Gets the msdyn_progress property value. 
     * @returns a int64
     */
    public get msdyn_progress() {
        return this._msdyn_progress;
    };
    /**
     * Sets the msdyn_progress property value. 
     * @param value Value to set for the msdyn_progress property.
     */
    public set msdyn_progress(value: number | undefined) {
        this._msdyn_progress = value;
    };
    /**
     * Gets the msdyn_project property value. 
     * @returns a msdyn_project
     */
    public get msdyn_project() {
        return this._msdyn_project;
    };
    /**
     * Sets the msdyn_project property value. 
     * @param value Value to set for the msdyn_project property.
     */
    public set msdyn_project(value: Msdyn_project | undefined) {
        this._msdyn_project = value;
    };
    /**
     * Gets the msdyn_projecttask_Annotations property value. 
     * @returns a annotation
     */
    public get msdyn_projecttask_Annotations() {
        return this._msdyn_projecttask_Annotations;
    };
    /**
     * Sets the msdyn_projecttask_Annotations property value. 
     * @param value Value to set for the msdyn_projecttask_Annotations property.
     */
    public set msdyn_projecttask_Annotations(value: Annotation[] | undefined) {
        this._msdyn_projecttask_Annotations = value;
    };
    /**
     * Gets the msdyn_projecttask_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get msdyn_projecttask_AsyncOperations() {
        return this._msdyn_projecttask_AsyncOperations;
    };
    /**
     * Sets the msdyn_projecttask_AsyncOperations property value. 
     * @param value Value to set for the msdyn_projecttask_AsyncOperations property.
     */
    public set msdyn_projecttask_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._msdyn_projecttask_AsyncOperations = value;
    };
    /**
     * Gets the msdyn_projecttask_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get msdyn_projecttask_BulkDeleteFailures() {
        return this._msdyn_projecttask_BulkDeleteFailures;
    };
    /**
     * Sets the msdyn_projecttask_BulkDeleteFailures property value. 
     * @param value Value to set for the msdyn_projecttask_BulkDeleteFailures property.
     */
    public set msdyn_projecttask_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._msdyn_projecttask_BulkDeleteFailures = value;
    };
    /**
     * Gets the msdyn_projecttask_DuplicateBaseRecord property value. 
     * @returns a duplicaterecord
     */
    public get msdyn_projecttask_DuplicateBaseRecord() {
        return this._msdyn_projecttask_DuplicateBaseRecord;
    };
    /**
     * Sets the msdyn_projecttask_DuplicateBaseRecord property value. 
     * @param value Value to set for the msdyn_projecttask_DuplicateBaseRecord property.
     */
    public set msdyn_projecttask_DuplicateBaseRecord(value: Duplicaterecord[] | undefined) {
        this._msdyn_projecttask_DuplicateBaseRecord = value;
    };
    /**
     * Gets the msdyn_projecttask_DuplicateMatchingRecord property value. 
     * @returns a duplicaterecord
     */
    public get msdyn_projecttask_DuplicateMatchingRecord() {
        return this._msdyn_projecttask_DuplicateMatchingRecord;
    };
    /**
     * Sets the msdyn_projecttask_DuplicateMatchingRecord property value. 
     * @param value Value to set for the msdyn_projecttask_DuplicateMatchingRecord property.
     */
    public set msdyn_projecttask_DuplicateMatchingRecord(value: Duplicaterecord[] | undefined) {
        this._msdyn_projecttask_DuplicateMatchingRecord = value;
    };
    /**
     * Gets the msdyn_projecttask_MailboxTrackingFolders property value. 
     * @returns a mailboxtrackingfolder
     */
    public get msdyn_projecttask_MailboxTrackingFolders() {
        return this._msdyn_projecttask_MailboxTrackingFolders;
    };
    /**
     * Sets the msdyn_projecttask_MailboxTrackingFolders property value. 
     * @param value Value to set for the msdyn_projecttask_MailboxTrackingFolders property.
     */
    public set msdyn_projecttask_MailboxTrackingFolders(value: Mailboxtrackingfolder[] | undefined) {
        this._msdyn_projecttask_MailboxTrackingFolders = value;
    };
    /**
     * Gets the msdyn_projecttask_PrincipalObjectAttributeAccesses property value. 
     * @returns a principalobjectattributeaccess
     */
    public get msdyn_projecttask_PrincipalObjectAttributeAccesses() {
        return this._msdyn_projecttask_PrincipalObjectAttributeAccesses;
    };
    /**
     * Sets the msdyn_projecttask_PrincipalObjectAttributeAccesses property value. 
     * @param value Value to set for the msdyn_projecttask_PrincipalObjectAttributeAccesses property.
     */
    public set msdyn_projecttask_PrincipalObjectAttributeAccesses(value: Principalobjectattributeaccess[] | undefined) {
        this._msdyn_projecttask_PrincipalObjectAttributeAccesses = value;
    };
    /**
     * Gets the msdyn_projecttask_ProcessSession property value. 
     * @returns a processsession
     */
    public get msdyn_projecttask_ProcessSession() {
        return this._msdyn_projecttask_ProcessSession;
    };
    /**
     * Sets the msdyn_projecttask_ProcessSession property value. 
     * @param value Value to set for the msdyn_projecttask_ProcessSession property.
     */
    public set msdyn_projecttask_ProcessSession(value: Processsession[] | undefined) {
        this._msdyn_projecttask_ProcessSession = value;
    };
    /**
     * Gets the msdyn_projecttask_QueueItems property value. 
     * @returns a queueitem
     */
    public get msdyn_projecttask_QueueItems() {
        return this._msdyn_projecttask_QueueItems;
    };
    /**
     * Sets the msdyn_projecttask_QueueItems property value. 
     * @param value Value to set for the msdyn_projecttask_QueueItems property.
     */
    public set msdyn_projecttask_QueueItems(value: Queueitem[] | undefined) {
        this._msdyn_projecttask_QueueItems = value;
    };
    /**
     * Gets the msdyn_projecttask_SyncErrors property value. 
     * @returns a syncerror
     */
    public get msdyn_projecttask_SyncErrors() {
        return this._msdyn_projecttask_SyncErrors;
    };
    /**
     * Sets the msdyn_projecttask_SyncErrors property value. 
     * @param value Value to set for the msdyn_projecttask_SyncErrors property.
     */
    public set msdyn_projecttask_SyncErrors(value: Syncerror[] | undefined) {
        this._msdyn_projecttask_SyncErrors = value;
    };
    /**
     * Gets the msdyn_projecttaskid property value. 
     * @returns a string
     */
    public get msdyn_projecttaskid() {
        return this._msdyn_projecttaskid;
    };
    /**
     * Sets the msdyn_projecttaskid property value. 
     * @param value Value to set for the msdyn_projecttaskid property.
     */
    public set msdyn_projecttaskid(value: string | undefined) {
        this._msdyn_projecttaskid = value;
    };
    /**
     * Gets the msdyn_remainingcost property value. 
     * @returns a int64
     */
    public get msdyn_remainingcost() {
        return this._msdyn_remainingcost;
    };
    /**
     * Sets the msdyn_remainingcost property value. 
     * @param value Value to set for the msdyn_remainingcost property.
     */
    public set msdyn_remainingcost(value: number | undefined) {
        this._msdyn_remainingcost = value;
    };
    /**
     * Gets the msdyn_remainingcost_base property value. 
     * @returns a int64
     */
    public get msdyn_remainingcost_base() {
        return this._msdyn_remainingcost_base;
    };
    /**
     * Sets the msdyn_remainingcost_base property value. 
     * @param value Value to set for the msdyn_remainingcost_base property.
     */
    public set msdyn_remainingcost_base(value: number | undefined) {
        this._msdyn_remainingcost_base = value;
    };
    /**
     * Gets the msdyn_remaininghours property value. 
     * @returns a double
     */
    public get msdyn_remaininghours() {
        return this._msdyn_remaininghours;
    };
    /**
     * Sets the msdyn_remaininghours property value. 
     * @param value Value to set for the msdyn_remaininghours property.
     */
    public set msdyn_remaininghours(value: number | undefined) {
        this._msdyn_remaininghours = value;
    };
    /**
     * Gets the msdyn_remainingsales property value. 
     * @returns a int64
     */
    public get msdyn_remainingsales() {
        return this._msdyn_remainingsales;
    };
    /**
     * Sets the msdyn_remainingsales property value. 
     * @param value Value to set for the msdyn_remainingsales property.
     */
    public set msdyn_remainingsales(value: number | undefined) {
        this._msdyn_remainingsales = value;
    };
    /**
     * Gets the msdyn_remainingsales_base property value. 
     * @returns a int64
     */
    public get msdyn_remainingsales_base() {
        return this._msdyn_remainingsales_base;
    };
    /**
     * Sets the msdyn_remainingsales_base property value. 
     * @param value Value to set for the msdyn_remainingsales_base property.
     */
    public set msdyn_remainingsales_base(value: number | undefined) {
        this._msdyn_remainingsales_base = value;
    };
    /**
     * Gets the msdyn_requestedhours property value. 
     * @returns a double
     */
    public get msdyn_requestedhours() {
        return this._msdyn_requestedhours;
    };
    /**
     * Sets the msdyn_requestedhours property value. 
     * @param value Value to set for the msdyn_requestedhours property.
     */
    public set msdyn_requestedhours(value: number | undefined) {
        this._msdyn_requestedhours = value;
    };
    /**
     * Gets the msdyn_resourcecategory property value. 
     * @returns a bookableresourcecategory
     */
    public get msdyn_resourcecategory() {
        return this._msdyn_resourcecategory;
    };
    /**
     * Sets the msdyn_resourcecategory property value. 
     * @param value Value to set for the msdyn_resourcecategory property.
     */
    public set msdyn_resourcecategory(value: Bookableresourcecategory | undefined) {
        this._msdyn_resourcecategory = value;
    };
    /**
     * Gets the msdyn_ResourceCategoryPricingDimension property value. 
     * @returns a bookableresourcecategory
     */
    public get msdyn_ResourceCategoryPricingDimension() {
        return this._msdyn_ResourceCategoryPricingDimension;
    };
    /**
     * Sets the msdyn_ResourceCategoryPricingDimension property value. 
     * @param value Value to set for the msdyn_ResourceCategoryPricingDimension property.
     */
    public set msdyn_ResourceCategoryPricingDimension(value: Bookableresourcecategory | undefined) {
        this._msdyn_ResourceCategoryPricingDimension = value;
    };
    /**
     * Gets the msdyn_ResourceOrganizationalUnitId property value. 
     * @returns a msdyn_organizationalunit
     */
    public get msdyn_ResourceOrganizationalUnitId() {
        return this._msdyn_ResourceOrganizationalUnitId;
    };
    /**
     * Sets the msdyn_ResourceOrganizationalUnitId property value. 
     * @param value Value to set for the msdyn_ResourceOrganizationalUnitId property.
     */
    public set msdyn_ResourceOrganizationalUnitId(value: Msdyn_organizationalunit | undefined) {
        this._msdyn_ResourceOrganizationalUnitId = value;
    };
    /**
     * Gets the msdyn_resourceutilization property value. 
     * @returns a int64
     */
    public get msdyn_resourceutilization() {
        return this._msdyn_resourceutilization;
    };
    /**
     * Sets the msdyn_resourceutilization property value. 
     * @param value Value to set for the msdyn_resourceutilization property.
     */
    public set msdyn_resourceutilization(value: number | undefined) {
        this._msdyn_resourceutilization = value;
    };
    /**
     * Gets the msdyn_salesconsumptionpercentage property value. 
     * @returns a int64
     */
    public get msdyn_salesconsumptionpercentage() {
        return this._msdyn_salesconsumptionpercentage;
    };
    /**
     * Sets the msdyn_salesconsumptionpercentage property value. 
     * @param value Value to set for the msdyn_salesconsumptionpercentage property.
     */
    public set msdyn_salesconsumptionpercentage(value: number | undefined) {
        this._msdyn_salesconsumptionpercentage = value;
    };
    /**
     * Gets the msdyn_salesestimateatcomplete property value. 
     * @returns a int64
     */
    public get msdyn_salesestimateatcomplete() {
        return this._msdyn_salesestimateatcomplete;
    };
    /**
     * Sets the msdyn_salesestimateatcomplete property value. 
     * @param value Value to set for the msdyn_salesestimateatcomplete property.
     */
    public set msdyn_salesestimateatcomplete(value: number | undefined) {
        this._msdyn_salesestimateatcomplete = value;
    };
    /**
     * Gets the msdyn_salesestimateatcomplete_base property value. 
     * @returns a int64
     */
    public get msdyn_salesestimateatcomplete_base() {
        return this._msdyn_salesestimateatcomplete_base;
    };
    /**
     * Sets the msdyn_salesestimateatcomplete_base property value. 
     * @param value Value to set for the msdyn_salesestimateatcomplete_base property.
     */
    public set msdyn_salesestimateatcomplete_base(value: number | undefined) {
        this._msdyn_salesestimateatcomplete_base = value;
    };
    /**
     * Gets the msdyn_salesestimatecontour property value. 
     * @returns a string
     */
    public get msdyn_salesestimatecontour() {
        return this._msdyn_salesestimatecontour;
    };
    /**
     * Sets the msdyn_salesestimatecontour property value. 
     * @param value Value to set for the msdyn_salesestimatecontour property.
     */
    public set msdyn_salesestimatecontour(value: string | undefined) {
        this._msdyn_salesestimatecontour = value;
    };
    /**
     * Gets the msdyn_salesvariance property value. 
     * @returns a int64
     */
    public get msdyn_salesvariance() {
        return this._msdyn_salesvariance;
    };
    /**
     * Sets the msdyn_salesvariance property value. 
     * @param value Value to set for the msdyn_salesvariance property.
     */
    public set msdyn_salesvariance(value: number | undefined) {
        this._msdyn_salesvariance = value;
    };
    /**
     * Gets the msdyn_salesvariance_base property value. 
     * @returns a int64
     */
    public get msdyn_salesvariance_base() {
        return this._msdyn_salesvariance_base;
    };
    /**
     * Sets the msdyn_salesvariance_base property value. 
     * @param value Value to set for the msdyn_salesvariance_base property.
     */
    public set msdyn_salesvariance_base(value: number | undefined) {
        this._msdyn_salesvariance_base = value;
    };
    /**
     * Gets the msdyn_scheduleddurationminutes property value. 
     * @returns a integer
     */
    public get msdyn_scheduleddurationminutes() {
        return this._msdyn_scheduleddurationminutes;
    };
    /**
     * Sets the msdyn_scheduleddurationminutes property value. 
     * @param value Value to set for the msdyn_scheduleddurationminutes property.
     */
    public set msdyn_scheduleddurationminutes(value: number | undefined) {
        this._msdyn_scheduleddurationminutes = value;
    };
    /**
     * Gets the msdyn_scheduledend property value. 
     * @returns a Date
     */
    public get msdyn_scheduledend() {
        return this._msdyn_scheduledend;
    };
    /**
     * Sets the msdyn_scheduledend property value. 
     * @param value Value to set for the msdyn_scheduledend property.
     */
    public set msdyn_scheduledend(value: Date | undefined) {
        this._msdyn_scheduledend = value;
    };
    /**
     * Gets the msdyn_scheduledhours property value. 
     * @returns a double
     */
    public get msdyn_scheduledhours() {
        return this._msdyn_scheduledhours;
    };
    /**
     * Sets the msdyn_scheduledhours property value. 
     * @param value Value to set for the msdyn_scheduledhours property.
     */
    public set msdyn_scheduledhours(value: number | undefined) {
        this._msdyn_scheduledhours = value;
    };
    /**
     * Gets the msdyn_scheduledstart property value. 
     * @returns a Date
     */
    public get msdyn_scheduledstart() {
        return this._msdyn_scheduledstart;
    };
    /**
     * Sets the msdyn_scheduledstart property value. 
     * @param value Value to set for the msdyn_scheduledstart property.
     */
    public set msdyn_scheduledstart(value: Date | undefined) {
        this._msdyn_scheduledstart = value;
    };
    /**
     * Gets the msdyn_schedulevariance property value. 
     * @returns a double
     */
    public get msdyn_schedulevariance() {
        return this._msdyn_schedulevariance;
    };
    /**
     * Sets the msdyn_schedulevariance property value. 
     * @param value Value to set for the msdyn_schedulevariance property.
     */
    public set msdyn_schedulevariance(value: number | undefined) {
        this._msdyn_schedulevariance = value;
    };
    /**
     * Gets the msdyn_skipupdateestimateline property value. 
     * @returns a boolean
     */
    public get msdyn_skipupdateestimateline() {
        return this._msdyn_skipupdateestimateline;
    };
    /**
     * Sets the msdyn_skipupdateestimateline property value. 
     * @param value Value to set for the msdyn_skipupdateestimateline property.
     */
    public set msdyn_skipupdateestimateline(value: boolean | undefined) {
        this._msdyn_skipupdateestimateline = value;
    };
    /**
     * Gets the msdyn_subject property value. 
     * @returns a string
     */
    public get msdyn_subject() {
        return this._msdyn_subject;
    };
    /**
     * Sets the msdyn_subject property value. 
     * @param value Value to set for the msdyn_subject property.
     */
    public set msdyn_subject(value: string | undefined) {
        this._msdyn_subject = value;
    };
    /**
     * Gets the msdyn_transactioncategory property value. 
     * @returns a msdyn_transactioncategory
     */
    public get msdyn_transactioncategory() {
        return this._msdyn_transactioncategory;
    };
    /**
     * Sets the msdyn_transactioncategory property value. 
     * @param value Value to set for the msdyn_transactioncategory property.
     */
    public set msdyn_transactioncategory(value: Msdyn_transactioncategory | undefined) {
        this._msdyn_transactioncategory = value;
    };
    /**
     * Gets the msdyn_varianceofcost property value. 
     * @returns a int64
     */
    public get msdyn_varianceofcost() {
        return this._msdyn_varianceofcost;
    };
    /**
     * Sets the msdyn_varianceofcost property value. 
     * @param value Value to set for the msdyn_varianceofcost property.
     */
    public set msdyn_varianceofcost(value: number | undefined) {
        this._msdyn_varianceofcost = value;
    };
    /**
     * Gets the msdyn_varianceofcost_base property value. 
     * @returns a int64
     */
    public get msdyn_varianceofcost_base() {
        return this._msdyn_varianceofcost_base;
    };
    /**
     * Sets the msdyn_varianceofcost_base property value. 
     * @param value Value to set for the msdyn_varianceofcost_base property.
     */
    public set msdyn_varianceofcost_base(value: number | undefined) {
        this._msdyn_varianceofcost_base = value;
    };
    /**
     * Gets the msdyn_wbsid property value. 
     * @returns a string
     */
    public get msdyn_wbsid() {
        return this._msdyn_wbsid;
    };
    /**
     * Sets the msdyn_wbsid property value. 
     * @param value Value to set for the msdyn_wbsid property.
     */
    public set msdyn_wbsid(value: string | undefined) {
        this._msdyn_wbsid = value;
    };
    /**
     * Gets the overriddencreatedon property value. 
     * @returns a Date
     */
    public get overriddencreatedon() {
        return this._overriddencreatedon;
    };
    /**
     * Sets the overriddencreatedon property value. 
     * @param value Value to set for the overriddencreatedon property.
     */
    public set overriddencreatedon(value: Date | undefined) {
        this._overriddencreatedon = value;
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
     * Gets the processid property value. 
     * @returns a string
     */
    public get processid() {
        return this._processid;
    };
    /**
     * Sets the processid property value. 
     * @param value Value to set for the processid property.
     */
    public set processid(value: string | undefined) {
        this._processid = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeStringValue("_createdby_value", this._createdby_value);
        writer.writeStringValue("_createdonbehalfby_value", this._createdonbehalfby_value);
        writer.writeStringValue("_modifiedby_value", this._modifiedby_value);
        writer.writeStringValue("_modifiedonbehalfby_value", this._modifiedonbehalfby_value);
        writer.writeStringValue("_msdyn_assignedteammembers_value", this._msdyn_assignedteammembers_value);
        writer.writeStringValue("_msdyn_organizationalunitpricingdimension_value", this._msdyn_organizationalunitpricingdimension_value);
        writer.writeStringValue("_msdyn_parenttask_value", this._msdyn_parenttask_value);
        writer.writeStringValue("_msdyn_project_value", this._msdyn_project_value);
        writer.writeStringValue("_msdyn_resourcecategory_value", this._msdyn_resourcecategory_value);
        writer.writeStringValue("_msdyn_resourcecategorypricingdimension_value", this._msdyn_resourcecategorypricingdimension_value);
        writer.writeStringValue("_msdyn_resourceorganizationalunitid_value", this._msdyn_resourceorganizationalunitid_value);
        writer.writeStringValue("_msdyn_transactioncategory_value", this._msdyn_transactioncategory_value);
        writer.writeStringValue("_ownerid_value", this._ownerid_value);
        writer.writeStringValue("_owningbusinessunit_value", this._owningbusinessunit_value);
        writer.writeStringValue("_owningteam_value", this._owningteam_value);
        writer.writeStringValue("_owninguser_value", this._owninguser_value);
        writer.writeStringValue("_transactioncurrencyid_value", this._transactioncurrencyid_value);
        writer.writeObjectValue<Systemuser>("createdby", this.createdby);
        writer.writeDateValue("createdon", this.createdon);
        writer.writeObjectValue<Systemuser>("createdonbehalfby", this.createdonbehalfby);
        writer.writeNumberValue("exchangerate", this.exchangerate);
        writer.writeNumberValue("importsequencenumber", this.importsequencenumber);
        writer.writeObjectValue<Systemuser>("modifiedby", this.modifiedby);
        writer.writeDateValue("modifiedon", this.modifiedon);
        writer.writeObjectValue<Systemuser>("modifiedonbehalfby", this.modifiedonbehalfby);
        writer.writeNumberValue("msdyn_actualcost", this.msdyn_actualcost);
        writer.writeNumberValue("msdyn_actualcost_base", this.msdyn_actualcost_base);
        writer.writeNumberValue("msdyn_actualdurationminutes", this.msdyn_actualdurationminutes);
        writer.writeNumberValue("msdyn_actualeffort", this.msdyn_actualeffort);
        writer.writeDateValue("msdyn_actualend", this.msdyn_actualend);
        writer.writeNumberValue("msdyn_actualsales", this.msdyn_actualsales);
        writer.writeNumberValue("msdyn_actualsales_base", this.msdyn_actualsales_base);
        writer.writeDateValue("msdyn_actualstart", this.msdyn_actualstart);
        writer.writeNumberValue("msdyn_aggregationdirection", this.msdyn_aggregationdirection);
        writer.writeStringValue("msdyn_assignedresources", this.msdyn_assignedresources);
        writer.writeObjectValue<Msdyn_projectteam>("msdyn_AssignedTeamMembers", this.msdyn_AssignedTeamMembers);
        writer.writeBooleanValue("msdyn_autoscheduling", this.msdyn_autoscheduling);
        writer.writeNumberValue("msdyn_costatcompleteestimate", this.msdyn_costatcompleteestimate);
        writer.writeNumberValue("msdyn_costatcompleteestimate_base", this.msdyn_costatcompleteestimate_base);
        writer.writeNumberValue("msdyn_costconsumptionpercentage", this.msdyn_costconsumptionpercentage);
        writer.writeStringValue("msdyn_costestimatecontour", this.msdyn_costestimatecontour);
        writer.writeStringValue("msdyn_description", this.msdyn_description);
        writer.writeNumberValue("msdyn_duration", this.msdyn_duration);
        writer.writeNumberValue("msdyn_effort", this.msdyn_effort);
        writer.writeStringValue("msdyn_effortcontour", this.msdyn_effortcontour);
        writer.writeNumberValue("msdyn_effortestimateatcomplete", this.msdyn_effortestimateatcomplete);
        writer.writeBooleanValue("msdyn_islinetask", this.msdyn_islinetask);
        writer.writeBooleanValue("msdyn_ismilestone", this.msdyn_ismilestone);
        writer.writeCollectionOfObjectValues<Msdyn_actual>("msdyn_msdyn_projecttask_msdyn_actual_Task", this.msdyn_msdyn_projecttask_msdyn_actual_Task);
        writer.writeCollectionOfObjectValues<Msdyn_contractlinescheduleofvalue>("msdyn_msdyn_projecttask_msdyn_contractlinescheduleofvalue_projecttask", this.msdyn_msdyn_projecttask_msdyn_contractlinescheduleofvalue_projecttask);
        writer.writeCollectionOfObjectValues<Msdyn_estimateline>("msdyn_msdyn_projecttask_msdyn_estimateline_Task", this.msdyn_msdyn_projecttask_msdyn_estimateline_Task);
        writer.writeCollectionOfObjectValues<Msdyn_fact>("msdyn_msdyn_projecttask_msdyn_fact_Task", this.msdyn_msdyn_projecttask_msdyn_fact_Task);
        writer.writeCollectionOfObjectValues<Msdyn_invoicelinetransaction>("msdyn_msdyn_projecttask_msdyn_invoicelinetransaction_Task", this.msdyn_msdyn_projecttask_msdyn_invoicelinetransaction_Task);
        writer.writeCollectionOfObjectValues<Msdyn_journal>("msdyn_msdyn_projecttask_msdyn_journal_ProjectTask", this.msdyn_msdyn_projecttask_msdyn_journal_ProjectTask);
        writer.writeCollectionOfObjectValues<Msdyn_journalline>("msdyn_msdyn_projecttask_msdyn_journalline_Task", this.msdyn_msdyn_projecttask_msdyn_journalline_Task);
        writer.writeCollectionOfObjectValues<Msdyn_opportunitylinetransaction>("msdyn_msdyn_projecttask_msdyn_opportunitylinetransaction_Task", this.msdyn_msdyn_projecttask_msdyn_opportunitylinetransaction_Task);
        writer.writeCollectionOfObjectValues<Msdyn_orderlinetransaction>("msdyn_msdyn_projecttask_msdyn_orderlinetransaction_Task", this.msdyn_msdyn_projecttask_msdyn_orderlinetransaction_Task);
        writer.writeCollectionOfObjectValues<Msdyn_projectapproval>("msdyn_msdyn_projecttask_msdyn_projectapproval_ProjectTask", this.msdyn_msdyn_projecttask_msdyn_projectapproval_ProjectTask);
        writer.writeCollectionOfObjectValues<Msdyn_projecttask>("msdyn_msdyn_projecttask_msdyn_projecttask_parenttask", this.msdyn_msdyn_projecttask_msdyn_projecttask_parenttask);
        writer.writeCollectionOfObjectValues<Msdyn_projecttaskdependency>("msdyn_msdyn_projecttask_msdyn_projecttaskdependency_PredecessorTask", this.msdyn_msdyn_projecttask_msdyn_projecttaskdependency_PredecessorTask);
        writer.writeCollectionOfObjectValues<Msdyn_projecttaskdependency>("msdyn_msdyn_projecttask_msdyn_projecttaskdependency_SuccessorTask", this.msdyn_msdyn_projecttask_msdyn_projecttaskdependency_SuccessorTask);
        writer.writeCollectionOfObjectValues<Msdyn_projecttaskstatususer>("msdyn_msdyn_projecttask_msdyn_projecttaskstatususer", this.msdyn_msdyn_projecttask_msdyn_projecttaskstatususer);
        writer.writeCollectionOfObjectValues<Msdyn_quotelinescheduleofvalue>("msdyn_msdyn_projecttask_msdyn_quotelinescheduleofvalue_projecttask", this.msdyn_msdyn_projecttask_msdyn_quotelinescheduleofvalue_projecttask);
        writer.writeCollectionOfObjectValues<Msdyn_quotelinetransaction>("msdyn_msdyn_projecttask_msdyn_quotelinetransaction_Task", this.msdyn_msdyn_projecttask_msdyn_quotelinetransaction_Task);
        writer.writeCollectionOfObjectValues<Msdyn_resourceassignment>("msdyn_msdyn_projecttask_msdyn_resourceassignment_taskid", this.msdyn_msdyn_projecttask_msdyn_resourceassignment_taskid);
        writer.writeCollectionOfObjectValues<Msdyn_timeentry>("msdyn_msdyn_projecttask_msdyn_timeentry_projectTask", this.msdyn_msdyn_projecttask_msdyn_timeentry_projectTask);
        writer.writeStringValue("msdyn_msprojectclientid", this.msdyn_msprojectclientid);
        writer.writeNumberValue("msdyn_numberofresources", this.msdyn_numberofresources);
        writer.writeObjectValue<Msdyn_organizationalunit>("msdyn_OrganizationalUnitPricingDimension", this.msdyn_OrganizationalUnitPricingDimension);
        writer.writeObjectValue<Msdyn_projecttask>("msdyn_parenttask", this.msdyn_parenttask);
        writer.writeNumberValue("msdyn_plannedcost", this.msdyn_plannedcost);
        writer.writeNumberValue("msdyn_plannedcost_base", this.msdyn_plannedcost_base);
        writer.writeNumberValue("msdyn_plannedsales", this.msdyn_plannedsales);
        writer.writeNumberValue("msdyn_plannedsales_base", this.msdyn_plannedsales_base);
        writer.writeNumberValue("msdyn_pluginprocessingdata", this.msdyn_pluginprocessingdata);
        writer.writeNumberValue("msdyn_progress", this.msdyn_progress);
        writer.writeObjectValue<Msdyn_project>("msdyn_project", this.msdyn_project);
        writer.writeCollectionOfObjectValues<Annotation>("msdyn_projecttask_Annotations", this.msdyn_projecttask_Annotations);
        writer.writeCollectionOfObjectValues<Asyncoperation>("msdyn_projecttask_AsyncOperations", this.msdyn_projecttask_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("msdyn_projecttask_BulkDeleteFailures", this.msdyn_projecttask_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("msdyn_projecttask_DuplicateBaseRecord", this.msdyn_projecttask_DuplicateBaseRecord);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("msdyn_projecttask_DuplicateMatchingRecord", this.msdyn_projecttask_DuplicateMatchingRecord);
        writer.writeCollectionOfObjectValues<Mailboxtrackingfolder>("msdyn_projecttask_MailboxTrackingFolders", this.msdyn_projecttask_MailboxTrackingFolders);
        writer.writeCollectionOfObjectValues<Principalobjectattributeaccess>("msdyn_projecttask_PrincipalObjectAttributeAccesses", this.msdyn_projecttask_PrincipalObjectAttributeAccesses);
        writer.writeCollectionOfObjectValues<Processsession>("msdyn_projecttask_ProcessSession", this.msdyn_projecttask_ProcessSession);
        writer.writeCollectionOfObjectValues<Queueitem>("msdyn_projecttask_QueueItems", this.msdyn_projecttask_QueueItems);
        writer.writeCollectionOfObjectValues<Syncerror>("msdyn_projecttask_SyncErrors", this.msdyn_projecttask_SyncErrors);
        writer.writeStringValue("msdyn_projecttaskid", this.msdyn_projecttaskid);
        writer.writeNumberValue("msdyn_remainingcost", this.msdyn_remainingcost);
        writer.writeNumberValue("msdyn_remainingcost_base", this.msdyn_remainingcost_base);
        writer.writeNumberValue("msdyn_remaininghours", this.msdyn_remaininghours);
        writer.writeNumberValue("msdyn_remainingsales", this.msdyn_remainingsales);
        writer.writeNumberValue("msdyn_remainingsales_base", this.msdyn_remainingsales_base);
        writer.writeNumberValue("msdyn_requestedhours", this.msdyn_requestedhours);
        writer.writeObjectValue<Bookableresourcecategory>("msdyn_resourcecategory", this.msdyn_resourcecategory);
        writer.writeObjectValue<Bookableresourcecategory>("msdyn_ResourceCategoryPricingDimension", this.msdyn_ResourceCategoryPricingDimension);
        writer.writeObjectValue<Msdyn_organizationalunit>("msdyn_ResourceOrganizationalUnitId", this.msdyn_ResourceOrganizationalUnitId);
        writer.writeNumberValue("msdyn_resourceutilization", this.msdyn_resourceutilization);
        writer.writeNumberValue("msdyn_salesconsumptionpercentage", this.msdyn_salesconsumptionpercentage);
        writer.writeNumberValue("msdyn_salesestimateatcomplete", this.msdyn_salesestimateatcomplete);
        writer.writeNumberValue("msdyn_salesestimateatcomplete_base", this.msdyn_salesestimateatcomplete_base);
        writer.writeStringValue("msdyn_salesestimatecontour", this.msdyn_salesestimatecontour);
        writer.writeNumberValue("msdyn_salesvariance", this.msdyn_salesvariance);
        writer.writeNumberValue("msdyn_salesvariance_base", this.msdyn_salesvariance_base);
        writer.writeNumberValue("msdyn_scheduleddurationminutes", this.msdyn_scheduleddurationminutes);
        writer.writeDateValue("msdyn_scheduledend", this.msdyn_scheduledend);
        writer.writeNumberValue("msdyn_scheduledhours", this.msdyn_scheduledhours);
        writer.writeDateValue("msdyn_scheduledstart", this.msdyn_scheduledstart);
        writer.writeNumberValue("msdyn_schedulevariance", this.msdyn_schedulevariance);
        writer.writeBooleanValue("msdyn_skipupdateestimateline", this.msdyn_skipupdateestimateline);
        writer.writeStringValue("msdyn_subject", this.msdyn_subject);
        writer.writeObjectValue<Msdyn_transactioncategory>("msdyn_transactioncategory", this.msdyn_transactioncategory);
        writer.writeNumberValue("msdyn_varianceofcost", this.msdyn_varianceofcost);
        writer.writeNumberValue("msdyn_varianceofcost_base", this.msdyn_varianceofcost_base);
        writer.writeStringValue("msdyn_wbsid", this.msdyn_wbsid);
        writer.writeDateValue("overriddencreatedon", this.overriddencreatedon);
        writer.writeObjectValue<Principal>("ownerid", this.ownerid);
        writer.writeObjectValue<Businessunit>("owningbusinessunit", this.owningbusinessunit);
        writer.writeObjectValue<Team>("owningteam", this.owningteam);
        writer.writeObjectValue<Systemuser>("owninguser", this.owninguser);
        writer.writeStringValue("processid", this.processid);
        writer.writeStringValue("stageid", this.stageid);
        writer.writeNumberValue("statecode", this.statecode);
        writer.writeNumberValue("statuscode", this.statuscode);
        writer.writeNumberValue("timezoneruleversionnumber", this.timezoneruleversionnumber);
        writer.writeObjectValue<Transactioncurrency>("transactioncurrencyid", this.transactioncurrencyid);
        writer.writeStringValue("traversedpath", this.traversedpath);
        writer.writeNumberValue("utcconversiontimezonecode", this.utcconversiontimezonecode);
        writer.writeNumberValue("versionnumber", this.versionnumber);
    };
    /**
     * Gets the stageid property value. 
     * @returns a string
     */
    public get stageid() {
        return this._stageid;
    };
    /**
     * Sets the stageid property value. 
     * @param value Value to set for the stageid property.
     */
    public set stageid(value: string | undefined) {
        this._stageid = value;
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
     * Gets the timezoneruleversionnumber property value. 
     * @returns a integer
     */
    public get timezoneruleversionnumber() {
        return this._timezoneruleversionnumber;
    };
    /**
     * Sets the timezoneruleversionnumber property value. 
     * @param value Value to set for the timezoneruleversionnumber property.
     */
    public set timezoneruleversionnumber(value: number | undefined) {
        this._timezoneruleversionnumber = value;
    };
    /**
     * Gets the transactioncurrencyid property value. 
     * @returns a transactioncurrency
     */
    public get transactioncurrencyid() {
        return this._transactioncurrencyid;
    };
    /**
     * Sets the transactioncurrencyid property value. 
     * @param value Value to set for the transactioncurrencyid property.
     */
    public set transactioncurrencyid(value: Transactioncurrency | undefined) {
        this._transactioncurrencyid = value;
    };
    /**
     * Gets the traversedpath property value. 
     * @returns a string
     */
    public get traversedpath() {
        return this._traversedpath;
    };
    /**
     * Sets the traversedpath property value. 
     * @param value Value to set for the traversedpath property.
     */
    public set traversedpath(value: string | undefined) {
        this._traversedpath = value;
    };
    /**
     * Gets the utcconversiontimezonecode property value. 
     * @returns a integer
     */
    public get utcconversiontimezonecode() {
        return this._utcconversiontimezonecode;
    };
    /**
     * Sets the utcconversiontimezonecode property value. 
     * @param value Value to set for the utcconversiontimezonecode property.
     */
    public set utcconversiontimezonecode(value: number | undefined) {
        this._utcconversiontimezonecode = value;
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
}
