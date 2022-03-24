import {createAnnotationFromDiscriminatorValue} from './createAnnotationFromDiscriminatorValue';
import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createBookableresourcecategoryFromDiscriminatorValue} from './createBookableresourcecategoryFromDiscriminatorValue';
import {createBookableresourceFromDiscriminatorValue} from './createBookableresourceFromDiscriminatorValue';
import {createBulkdeletefailureFromDiscriminatorValue} from './createBulkdeletefailureFromDiscriminatorValue';
import {createBusinessunitFromDiscriminatorValue} from './createBusinessunitFromDiscriminatorValue';
import {createDuplicaterecordFromDiscriminatorValue} from './createDuplicaterecordFromDiscriminatorValue';
import {createMailboxtrackingfolderFromDiscriminatorValue} from './createMailboxtrackingfolderFromDiscriminatorValue';
import {createMsdyn_approvalsetFromDiscriminatorValue} from './createMsdyn_approvalsetFromDiscriminatorValue';
import {createMsdyn_expensecategoryFromDiscriminatorValue} from './createMsdyn_expensecategoryFromDiscriminatorValue';
import {createMsdyn_expenseFromDiscriminatorValue} from './createMsdyn_expenseFromDiscriminatorValue';
import {createMsdyn_journallineFromDiscriminatorValue} from './createMsdyn_journallineFromDiscriminatorValue';
import {createMsdyn_projectFromDiscriminatorValue} from './createMsdyn_projectFromDiscriminatorValue';
import {createMsdyn_projecttaskFromDiscriminatorValue} from './createMsdyn_projecttaskFromDiscriminatorValue';
import {createMsdyn_timeentryFromDiscriminatorValue} from './createMsdyn_timeentryFromDiscriminatorValue';
import {createMsdyn_transactioncategoryFromDiscriminatorValue} from './createMsdyn_transactioncategoryFromDiscriminatorValue';
import {createPrincipalFromDiscriminatorValue} from './createPrincipalFromDiscriminatorValue';
import {createPrincipalobjectattributeaccessFromDiscriminatorValue} from './createPrincipalobjectattributeaccessFromDiscriminatorValue';
import {createProcesssessionFromDiscriminatorValue} from './createProcesssessionFromDiscriminatorValue';
import {createSyncerrorFromDiscriminatorValue} from './createSyncerrorFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {createTeamFromDiscriminatorValue} from './createTeamFromDiscriminatorValue';
import {createTransactioncurrencyFromDiscriminatorValue} from './createTransactioncurrencyFromDiscriminatorValue';
import {Annotation, Asyncoperation, Bookableresource, Bookableresourcecategory, Bulkdeletefailure, Businessunit, Crmbaseentity, Duplicaterecord, Mailboxtrackingfolder, Msdyn_approvalset, Msdyn_expense, Msdyn_expensecategory, Msdyn_journalline, Msdyn_project, Msdyn_projecttask, Msdyn_timeentry, Msdyn_transactioncategory, Principal, Principalobjectattributeaccess, Processsession, Syncerror, Systemuser, Team, Transactioncurrency} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Msdyn_projectapproval extends Crmbaseentity implements Parsable {
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private __msdyn_approvalset_value?: string | undefined;
    private __msdyn_approvedby_value?: string | undefined;
    private __msdyn_bookableresource_value?: string | undefined;
    private __msdyn_expensecategory_value?: string | undefined;
    private __msdyn_expenseentry_value?: string | undefined;
    private __msdyn_manager_value?: string | undefined;
    private __msdyn_project_value?: string | undefined;
    private __msdyn_projecttask_value?: string | undefined;
    private __msdyn_referencejournalline_value?: string | undefined;
    private __msdyn_resourcecategory_value?: string | undefined;
    private __msdyn_submittedby_value?: string | undefined;
    private __msdyn_timeentry_value?: string | undefined;
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
    private _msdyn_ApprovalSet?: Msdyn_approvalset | undefined;
    private _msdyn_ApprovedBy?: Systemuser | undefined;
    private _msdyn_approvedon?: Date | undefined;
    private _msdyn_billingtype?: number | undefined;
    private _msdyn_bookableresource?: Bookableresource | undefined;
    private _msdyn_costamount?: number | undefined;
    private _msdyn_costamount_base?: number | undefined;
    private _msdyn_costprice?: number | undefined;
    private _msdyn_costprice_base?: number | undefined;
    private _msdyn_costquantity?: number | undefined;
    private _msdyn_date?: Date | undefined;
    private _msdyn_entrytype?: number | undefined;
    private _msdyn_ExpenseCategory?: Msdyn_expensecategory | undefined;
    private _msdyn_ExpenseEntry?: Msdyn_expense | undefined;
    private _msdyn_externalcomments?: string | undefined;
    private _msdyn_hasreceipt?: boolean | undefined;
    private _msdyn_internalcomments?: string | undefined;
    private _msdyn_journaltransaction?: string | undefined;
    private _msdyn_Manager?: Systemuser | undefined;
    private _msdyn_name?: string | undefined;
    private _msdyn_Project?: Msdyn_project | undefined;
    private _msdyn_projectapproval_Annotations?: Annotation[] | undefined;
    private _msdyn_projectapproval_AsyncOperations?: Asyncoperation[] | undefined;
    private _msdyn_projectapproval_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _msdyn_projectapproval_DuplicateBaseRecord?: Duplicaterecord[] | undefined;
    private _msdyn_projectapproval_DuplicateMatchingRecord?: Duplicaterecord[] | undefined;
    private _msdyn_projectapproval_MailboxTrackingFolders?: Mailboxtrackingfolder[] | undefined;
    private _msdyn_projectapproval_PrincipalObjectAttributeAccesses?: Principalobjectattributeaccess[] | undefined;
    private _msdyn_projectapproval_ProcessSession?: Processsession[] | undefined;
    private _msdyn_projectapproval_SyncErrors?: Syncerror[] | undefined;
    private _msdyn_projectapprovalid?: string | undefined;
    private _msdyn_ProjectTask?: Msdyn_projecttask | undefined;
    private _msdyn_recordstage?: number | undefined;
    private _msdyn_referenceexpenseid?: string | undefined;
    private _msdyn_referencejournalline?: Msdyn_journalline | undefined;
    private _msdyn_referencetimeid?: string | undefined;
    private _msdyn_ResourceCategory?: Bookableresourcecategory | undefined;
    private _msdyn_salesamount?: number | undefined;
    private _msdyn_salesamount_base?: number | undefined;
    private _msdyn_salesprice?: number | undefined;
    private _msdyn_salesprice_base?: number | undefined;
    private _msdyn_salesquantity?: number | undefined;
    private _msdyn_SubmittedBy?: Bookableresource | undefined;
    private _msdyn_TimeEntry?: Msdyn_timeentry | undefined;
    private _msdyn_TransactionCategory?: Msdyn_transactioncategory | undefined;
    private _overriddencreatedon?: Date | undefined;
    private _ownerid?: Principal | undefined;
    private _owningbusinessunit?: Businessunit | undefined;
    private _owningteam?: Team | undefined;
    private _owninguser?: Systemuser | undefined;
    private _statecode?: number | undefined;
    private _statuscode?: number | undefined;
    private _timezoneruleversionnumber?: number | undefined;
    private _transactioncurrencyid?: Transactioncurrency | undefined;
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
     * Gets the _msdyn_approvalset_value property value. 
     * @returns a string
     */
    public get _msdyn_approvalset_value() {
        return this.__msdyn_approvalset_value;
    };
    /**
     * Sets the _msdyn_approvalset_value property value. 
     * @param value Value to set for the _msdyn_approvalset_value property.
     */
    public set _msdyn_approvalset_value(value: string | undefined) {
        this.__msdyn_approvalset_value = value;
    };
    /**
     * Gets the _msdyn_approvedby_value property value. 
     * @returns a string
     */
    public get _msdyn_approvedby_value() {
        return this.__msdyn_approvedby_value;
    };
    /**
     * Sets the _msdyn_approvedby_value property value. 
     * @param value Value to set for the _msdyn_approvedby_value property.
     */
    public set _msdyn_approvedby_value(value: string | undefined) {
        this.__msdyn_approvedby_value = value;
    };
    /**
     * Gets the _msdyn_bookableresource_value property value. 
     * @returns a string
     */
    public get _msdyn_bookableresource_value() {
        return this.__msdyn_bookableresource_value;
    };
    /**
     * Sets the _msdyn_bookableresource_value property value. 
     * @param value Value to set for the _msdyn_bookableresource_value property.
     */
    public set _msdyn_bookableresource_value(value: string | undefined) {
        this.__msdyn_bookableresource_value = value;
    };
    /**
     * Gets the _msdyn_expensecategory_value property value. 
     * @returns a string
     */
    public get _msdyn_expensecategory_value() {
        return this.__msdyn_expensecategory_value;
    };
    /**
     * Sets the _msdyn_expensecategory_value property value. 
     * @param value Value to set for the _msdyn_expensecategory_value property.
     */
    public set _msdyn_expensecategory_value(value: string | undefined) {
        this.__msdyn_expensecategory_value = value;
    };
    /**
     * Gets the _msdyn_expenseentry_value property value. 
     * @returns a string
     */
    public get _msdyn_expenseentry_value() {
        return this.__msdyn_expenseentry_value;
    };
    /**
     * Sets the _msdyn_expenseentry_value property value. 
     * @param value Value to set for the _msdyn_expenseentry_value property.
     */
    public set _msdyn_expenseentry_value(value: string | undefined) {
        this.__msdyn_expenseentry_value = value;
    };
    /**
     * Gets the _msdyn_manager_value property value. 
     * @returns a string
     */
    public get _msdyn_manager_value() {
        return this.__msdyn_manager_value;
    };
    /**
     * Sets the _msdyn_manager_value property value. 
     * @param value Value to set for the _msdyn_manager_value property.
     */
    public set _msdyn_manager_value(value: string | undefined) {
        this.__msdyn_manager_value = value;
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
     * Gets the _msdyn_projecttask_value property value. 
     * @returns a string
     */
    public get _msdyn_projecttask_value() {
        return this.__msdyn_projecttask_value;
    };
    /**
     * Sets the _msdyn_projecttask_value property value. 
     * @param value Value to set for the _msdyn_projecttask_value property.
     */
    public set _msdyn_projecttask_value(value: string | undefined) {
        this.__msdyn_projecttask_value = value;
    };
    /**
     * Gets the _msdyn_referencejournalline_value property value. 
     * @returns a string
     */
    public get _msdyn_referencejournalline_value() {
        return this.__msdyn_referencejournalline_value;
    };
    /**
     * Sets the _msdyn_referencejournalline_value property value. 
     * @param value Value to set for the _msdyn_referencejournalline_value property.
     */
    public set _msdyn_referencejournalline_value(value: string | undefined) {
        this.__msdyn_referencejournalline_value = value;
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
     * Gets the _msdyn_submittedby_value property value. 
     * @returns a string
     */
    public get _msdyn_submittedby_value() {
        return this.__msdyn_submittedby_value;
    };
    /**
     * Sets the _msdyn_submittedby_value property value. 
     * @param value Value to set for the _msdyn_submittedby_value property.
     */
    public set _msdyn_submittedby_value(value: string | undefined) {
        this.__msdyn_submittedby_value = value;
    };
    /**
     * Gets the _msdyn_timeentry_value property value. 
     * @returns a string
     */
    public get _msdyn_timeentry_value() {
        return this.__msdyn_timeentry_value;
    };
    /**
     * Sets the _msdyn_timeentry_value property value. 
     * @param value Value to set for the _msdyn_timeentry_value property.
     */
    public set _msdyn_timeentry_value(value: string | undefined) {
        this.__msdyn_timeentry_value = value;
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
     * Instantiates a new msdyn_projectapproval and sets the default values.
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
            "_createdby_value": (o, n) => { (o as unknown as Msdyn_projectapproval)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Msdyn_projectapproval)._createdonbehalfby_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Msdyn_projectapproval)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Msdyn_projectapproval)._modifiedonbehalfby_value = n.getStringValue(); },
            "_msdyn_approvalset_value": (o, n) => { (o as unknown as Msdyn_projectapproval)._msdyn_approvalset_value = n.getStringValue(); },
            "_msdyn_approvedby_value": (o, n) => { (o as unknown as Msdyn_projectapproval)._msdyn_approvedby_value = n.getStringValue(); },
            "_msdyn_bookableresource_value": (o, n) => { (o as unknown as Msdyn_projectapproval)._msdyn_bookableresource_value = n.getStringValue(); },
            "_msdyn_expensecategory_value": (o, n) => { (o as unknown as Msdyn_projectapproval)._msdyn_expensecategory_value = n.getStringValue(); },
            "_msdyn_expenseentry_value": (o, n) => { (o as unknown as Msdyn_projectapproval)._msdyn_expenseentry_value = n.getStringValue(); },
            "_msdyn_manager_value": (o, n) => { (o as unknown as Msdyn_projectapproval)._msdyn_manager_value = n.getStringValue(); },
            "_msdyn_project_value": (o, n) => { (o as unknown as Msdyn_projectapproval)._msdyn_project_value = n.getStringValue(); },
            "_msdyn_projecttask_value": (o, n) => { (o as unknown as Msdyn_projectapproval)._msdyn_projecttask_value = n.getStringValue(); },
            "_msdyn_referencejournalline_value": (o, n) => { (o as unknown as Msdyn_projectapproval)._msdyn_referencejournalline_value = n.getStringValue(); },
            "_msdyn_resourcecategory_value": (o, n) => { (o as unknown as Msdyn_projectapproval)._msdyn_resourcecategory_value = n.getStringValue(); },
            "_msdyn_submittedby_value": (o, n) => { (o as unknown as Msdyn_projectapproval)._msdyn_submittedby_value = n.getStringValue(); },
            "_msdyn_timeentry_value": (o, n) => { (o as unknown as Msdyn_projectapproval)._msdyn_timeentry_value = n.getStringValue(); },
            "_msdyn_transactioncategory_value": (o, n) => { (o as unknown as Msdyn_projectapproval)._msdyn_transactioncategory_value = n.getStringValue(); },
            "_ownerid_value": (o, n) => { (o as unknown as Msdyn_projectapproval)._ownerid_value = n.getStringValue(); },
            "_owningbusinessunit_value": (o, n) => { (o as unknown as Msdyn_projectapproval)._owningbusinessunit_value = n.getStringValue(); },
            "_owningteam_value": (o, n) => { (o as unknown as Msdyn_projectapproval)._owningteam_value = n.getStringValue(); },
            "_owninguser_value": (o, n) => { (o as unknown as Msdyn_projectapproval)._owninguser_value = n.getStringValue(); },
            "_transactioncurrencyid_value": (o, n) => { (o as unknown as Msdyn_projectapproval)._transactioncurrencyid_value = n.getStringValue(); },
            "createdby": (o, n) => { (o as unknown as Msdyn_projectapproval).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Msdyn_projectapproval).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Msdyn_projectapproval).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "exchangerate": (o, n) => { (o as unknown as Msdyn_projectapproval).exchangerate = n.getNumberValue(); },
            "importsequencenumber": (o, n) => { (o as unknown as Msdyn_projectapproval).importsequencenumber = n.getNumberValue(); },
            "modifiedby": (o, n) => { (o as unknown as Msdyn_projectapproval).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Msdyn_projectapproval).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Msdyn_projectapproval).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "msdyn_ApprovalSet": (o, n) => { (o as unknown as Msdyn_projectapproval).msdyn_ApprovalSet = n.getObjectValue<Msdyn_approvalset>(createMsdyn_approvalsetFromDiscriminatorValue); },
            "msdyn_ApprovedBy": (o, n) => { (o as unknown as Msdyn_projectapproval).msdyn_ApprovedBy = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "msdyn_approvedon": (o, n) => { (o as unknown as Msdyn_projectapproval).msdyn_approvedon = n.getDateValue(); },
            "msdyn_billingtype": (o, n) => { (o as unknown as Msdyn_projectapproval).msdyn_billingtype = n.getNumberValue(); },
            "msdyn_bookableresource": (o, n) => { (o as unknown as Msdyn_projectapproval).msdyn_bookableresource = n.getObjectValue<Bookableresource>(createBookableresourceFromDiscriminatorValue); },
            "msdyn_costamount": (o, n) => { (o as unknown as Msdyn_projectapproval).msdyn_costamount = n.getNumberValue(); },
            "msdyn_costamount_base": (o, n) => { (o as unknown as Msdyn_projectapproval).msdyn_costamount_base = n.getNumberValue(); },
            "msdyn_costprice": (o, n) => { (o as unknown as Msdyn_projectapproval).msdyn_costprice = n.getNumberValue(); },
            "msdyn_costprice_base": (o, n) => { (o as unknown as Msdyn_projectapproval).msdyn_costprice_base = n.getNumberValue(); },
            "msdyn_costquantity": (o, n) => { (o as unknown as Msdyn_projectapproval).msdyn_costquantity = n.getNumberValue(); },
            "msdyn_date": (o, n) => { (o as unknown as Msdyn_projectapproval).msdyn_date = n.getDateValue(); },
            "msdyn_entrytype": (o, n) => { (o as unknown as Msdyn_projectapproval).msdyn_entrytype = n.getNumberValue(); },
            "msdyn_ExpenseCategory": (o, n) => { (o as unknown as Msdyn_projectapproval).msdyn_ExpenseCategory = n.getObjectValue<Msdyn_expensecategory>(createMsdyn_expensecategoryFromDiscriminatorValue); },
            "msdyn_ExpenseEntry": (o, n) => { (o as unknown as Msdyn_projectapproval).msdyn_ExpenseEntry = n.getObjectValue<Msdyn_expense>(createMsdyn_expenseFromDiscriminatorValue); },
            "msdyn_externalcomments": (o, n) => { (o as unknown as Msdyn_projectapproval).msdyn_externalcomments = n.getStringValue(); },
            "msdyn_hasreceipt": (o, n) => { (o as unknown as Msdyn_projectapproval).msdyn_hasreceipt = n.getBooleanValue(); },
            "msdyn_internalcomments": (o, n) => { (o as unknown as Msdyn_projectapproval).msdyn_internalcomments = n.getStringValue(); },
            "msdyn_journaltransaction": (o, n) => { (o as unknown as Msdyn_projectapproval).msdyn_journaltransaction = n.getStringValue(); },
            "msdyn_Manager": (o, n) => { (o as unknown as Msdyn_projectapproval).msdyn_Manager = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "msdyn_name": (o, n) => { (o as unknown as Msdyn_projectapproval).msdyn_name = n.getStringValue(); },
            "msdyn_Project": (o, n) => { (o as unknown as Msdyn_projectapproval).msdyn_Project = n.getObjectValue<Msdyn_project>(createMsdyn_projectFromDiscriminatorValue); },
            "msdyn_projectapproval_Annotations": (o, n) => { (o as unknown as Msdyn_projectapproval).msdyn_projectapproval_Annotations = n.getCollectionOfObjectValues<Annotation>(createAnnotationFromDiscriminatorValue); },
            "msdyn_projectapproval_AsyncOperations": (o, n) => { (o as unknown as Msdyn_projectapproval).msdyn_projectapproval_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "msdyn_projectapproval_BulkDeleteFailures": (o, n) => { (o as unknown as Msdyn_projectapproval).msdyn_projectapproval_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "msdyn_projectapproval_DuplicateBaseRecord": (o, n) => { (o as unknown as Msdyn_projectapproval).msdyn_projectapproval_DuplicateBaseRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "msdyn_projectapproval_DuplicateMatchingRecord": (o, n) => { (o as unknown as Msdyn_projectapproval).msdyn_projectapproval_DuplicateMatchingRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "msdyn_projectapproval_MailboxTrackingFolders": (o, n) => { (o as unknown as Msdyn_projectapproval).msdyn_projectapproval_MailboxTrackingFolders = n.getCollectionOfObjectValues<Mailboxtrackingfolder>(createMailboxtrackingfolderFromDiscriminatorValue); },
            "msdyn_projectapproval_PrincipalObjectAttributeAccesses": (o, n) => { (o as unknown as Msdyn_projectapproval).msdyn_projectapproval_PrincipalObjectAttributeAccesses = n.getCollectionOfObjectValues<Principalobjectattributeaccess>(createPrincipalobjectattributeaccessFromDiscriminatorValue); },
            "msdyn_projectapproval_ProcessSession": (o, n) => { (o as unknown as Msdyn_projectapproval).msdyn_projectapproval_ProcessSession = n.getCollectionOfObjectValues<Processsession>(createProcesssessionFromDiscriminatorValue); },
            "msdyn_projectapproval_SyncErrors": (o, n) => { (o as unknown as Msdyn_projectapproval).msdyn_projectapproval_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "msdyn_projectapprovalid": (o, n) => { (o as unknown as Msdyn_projectapproval).msdyn_projectapprovalid = n.getStringValue(); },
            "msdyn_ProjectTask": (o, n) => { (o as unknown as Msdyn_projectapproval).msdyn_ProjectTask = n.getObjectValue<Msdyn_projecttask>(createMsdyn_projecttaskFromDiscriminatorValue); },
            "msdyn_recordstage": (o, n) => { (o as unknown as Msdyn_projectapproval).msdyn_recordstage = n.getNumberValue(); },
            "msdyn_referenceexpenseid": (o, n) => { (o as unknown as Msdyn_projectapproval).msdyn_referenceexpenseid = n.getStringValue(); },
            "msdyn_referencejournalline": (o, n) => { (o as unknown as Msdyn_projectapproval).msdyn_referencejournalline = n.getObjectValue<Msdyn_journalline>(createMsdyn_journallineFromDiscriminatorValue); },
            "msdyn_referencetimeid": (o, n) => { (o as unknown as Msdyn_projectapproval).msdyn_referencetimeid = n.getStringValue(); },
            "msdyn_ResourceCategory": (o, n) => { (o as unknown as Msdyn_projectapproval).msdyn_ResourceCategory = n.getObjectValue<Bookableresourcecategory>(createBookableresourcecategoryFromDiscriminatorValue); },
            "msdyn_salesamount": (o, n) => { (o as unknown as Msdyn_projectapproval).msdyn_salesamount = n.getNumberValue(); },
            "msdyn_salesamount_base": (o, n) => { (o as unknown as Msdyn_projectapproval).msdyn_salesamount_base = n.getNumberValue(); },
            "msdyn_salesprice": (o, n) => { (o as unknown as Msdyn_projectapproval).msdyn_salesprice = n.getNumberValue(); },
            "msdyn_salesprice_base": (o, n) => { (o as unknown as Msdyn_projectapproval).msdyn_salesprice_base = n.getNumberValue(); },
            "msdyn_salesquantity": (o, n) => { (o as unknown as Msdyn_projectapproval).msdyn_salesquantity = n.getNumberValue(); },
            "msdyn_SubmittedBy": (o, n) => { (o as unknown as Msdyn_projectapproval).msdyn_SubmittedBy = n.getObjectValue<Bookableresource>(createBookableresourceFromDiscriminatorValue); },
            "msdyn_TimeEntry": (o, n) => { (o as unknown as Msdyn_projectapproval).msdyn_TimeEntry = n.getObjectValue<Msdyn_timeentry>(createMsdyn_timeentryFromDiscriminatorValue); },
            "msdyn_TransactionCategory": (o, n) => { (o as unknown as Msdyn_projectapproval).msdyn_TransactionCategory = n.getObjectValue<Msdyn_transactioncategory>(createMsdyn_transactioncategoryFromDiscriminatorValue); },
            "overriddencreatedon": (o, n) => { (o as unknown as Msdyn_projectapproval).overriddencreatedon = n.getDateValue(); },
            "ownerid": (o, n) => { (o as unknown as Msdyn_projectapproval).ownerid = n.getObjectValue<Principal>(createPrincipalFromDiscriminatorValue); },
            "owningbusinessunit": (o, n) => { (o as unknown as Msdyn_projectapproval).owningbusinessunit = n.getObjectValue<Businessunit>(createBusinessunitFromDiscriminatorValue); },
            "owningteam": (o, n) => { (o as unknown as Msdyn_projectapproval).owningteam = n.getObjectValue<Team>(createTeamFromDiscriminatorValue); },
            "owninguser": (o, n) => { (o as unknown as Msdyn_projectapproval).owninguser = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "statecode": (o, n) => { (o as unknown as Msdyn_projectapproval).statecode = n.getNumberValue(); },
            "statuscode": (o, n) => { (o as unknown as Msdyn_projectapproval).statuscode = n.getNumberValue(); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Msdyn_projectapproval).timezoneruleversionnumber = n.getNumberValue(); },
            "transactioncurrencyid": (o, n) => { (o as unknown as Msdyn_projectapproval).transactioncurrencyid = n.getObjectValue<Transactioncurrency>(createTransactioncurrencyFromDiscriminatorValue); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Msdyn_projectapproval).utcconversiontimezonecode = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as Msdyn_projectapproval).versionnumber = n.getNumberValue(); },
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
     * Gets the msdyn_ApprovalSet property value. 
     * @returns a msdyn_approvalset
     */
    public get msdyn_ApprovalSet() {
        return this._msdyn_ApprovalSet;
    };
    /**
     * Sets the msdyn_ApprovalSet property value. 
     * @param value Value to set for the msdyn_ApprovalSet property.
     */
    public set msdyn_ApprovalSet(value: Msdyn_approvalset | undefined) {
        this._msdyn_ApprovalSet = value;
    };
    /**
     * Gets the msdyn_ApprovedBy property value. 
     * @returns a systemuser
     */
    public get msdyn_ApprovedBy() {
        return this._msdyn_ApprovedBy;
    };
    /**
     * Sets the msdyn_ApprovedBy property value. 
     * @param value Value to set for the msdyn_ApprovedBy property.
     */
    public set msdyn_ApprovedBy(value: Systemuser | undefined) {
        this._msdyn_ApprovedBy = value;
    };
    /**
     * Gets the msdyn_approvedon property value. 
     * @returns a Date
     */
    public get msdyn_approvedon() {
        return this._msdyn_approvedon;
    };
    /**
     * Sets the msdyn_approvedon property value. 
     * @param value Value to set for the msdyn_approvedon property.
     */
    public set msdyn_approvedon(value: Date | undefined) {
        this._msdyn_approvedon = value;
    };
    /**
     * Gets the msdyn_billingtype property value. 
     * @returns a integer
     */
    public get msdyn_billingtype() {
        return this._msdyn_billingtype;
    };
    /**
     * Sets the msdyn_billingtype property value. 
     * @param value Value to set for the msdyn_billingtype property.
     */
    public set msdyn_billingtype(value: number | undefined) {
        this._msdyn_billingtype = value;
    };
    /**
     * Gets the msdyn_bookableresource property value. 
     * @returns a bookableresource
     */
    public get msdyn_bookableresource() {
        return this._msdyn_bookableresource;
    };
    /**
     * Sets the msdyn_bookableresource property value. 
     * @param value Value to set for the msdyn_bookableresource property.
     */
    public set msdyn_bookableresource(value: Bookableresource | undefined) {
        this._msdyn_bookableresource = value;
    };
    /**
     * Gets the msdyn_costamount property value. 
     * @returns a int64
     */
    public get msdyn_costamount() {
        return this._msdyn_costamount;
    };
    /**
     * Sets the msdyn_costamount property value. 
     * @param value Value to set for the msdyn_costamount property.
     */
    public set msdyn_costamount(value: number | undefined) {
        this._msdyn_costamount = value;
    };
    /**
     * Gets the msdyn_costamount_base property value. 
     * @returns a int64
     */
    public get msdyn_costamount_base() {
        return this._msdyn_costamount_base;
    };
    /**
     * Sets the msdyn_costamount_base property value. 
     * @param value Value to set for the msdyn_costamount_base property.
     */
    public set msdyn_costamount_base(value: number | undefined) {
        this._msdyn_costamount_base = value;
    };
    /**
     * Gets the msdyn_costprice property value. 
     * @returns a int64
     */
    public get msdyn_costprice() {
        return this._msdyn_costprice;
    };
    /**
     * Sets the msdyn_costprice property value. 
     * @param value Value to set for the msdyn_costprice property.
     */
    public set msdyn_costprice(value: number | undefined) {
        this._msdyn_costprice = value;
    };
    /**
     * Gets the msdyn_costprice_base property value. 
     * @returns a int64
     */
    public get msdyn_costprice_base() {
        return this._msdyn_costprice_base;
    };
    /**
     * Sets the msdyn_costprice_base property value. 
     * @param value Value to set for the msdyn_costprice_base property.
     */
    public set msdyn_costprice_base(value: number | undefined) {
        this._msdyn_costprice_base = value;
    };
    /**
     * Gets the msdyn_costquantity property value. 
     * @returns a int64
     */
    public get msdyn_costquantity() {
        return this._msdyn_costquantity;
    };
    /**
     * Sets the msdyn_costquantity property value. 
     * @param value Value to set for the msdyn_costquantity property.
     */
    public set msdyn_costquantity(value: number | undefined) {
        this._msdyn_costquantity = value;
    };
    /**
     * Gets the msdyn_date property value. 
     * @returns a Date
     */
    public get msdyn_date() {
        return this._msdyn_date;
    };
    /**
     * Sets the msdyn_date property value. 
     * @param value Value to set for the msdyn_date property.
     */
    public set msdyn_date(value: Date | undefined) {
        this._msdyn_date = value;
    };
    /**
     * Gets the msdyn_entrytype property value. 
     * @returns a integer
     */
    public get msdyn_entrytype() {
        return this._msdyn_entrytype;
    };
    /**
     * Sets the msdyn_entrytype property value. 
     * @param value Value to set for the msdyn_entrytype property.
     */
    public set msdyn_entrytype(value: number | undefined) {
        this._msdyn_entrytype = value;
    };
    /**
     * Gets the msdyn_ExpenseCategory property value. 
     * @returns a msdyn_expensecategory
     */
    public get msdyn_ExpenseCategory() {
        return this._msdyn_ExpenseCategory;
    };
    /**
     * Sets the msdyn_ExpenseCategory property value. 
     * @param value Value to set for the msdyn_ExpenseCategory property.
     */
    public set msdyn_ExpenseCategory(value: Msdyn_expensecategory | undefined) {
        this._msdyn_ExpenseCategory = value;
    };
    /**
     * Gets the msdyn_ExpenseEntry property value. 
     * @returns a msdyn_expense
     */
    public get msdyn_ExpenseEntry() {
        return this._msdyn_ExpenseEntry;
    };
    /**
     * Sets the msdyn_ExpenseEntry property value. 
     * @param value Value to set for the msdyn_ExpenseEntry property.
     */
    public set msdyn_ExpenseEntry(value: Msdyn_expense | undefined) {
        this._msdyn_ExpenseEntry = value;
    };
    /**
     * Gets the msdyn_externalcomments property value. 
     * @returns a string
     */
    public get msdyn_externalcomments() {
        return this._msdyn_externalcomments;
    };
    /**
     * Sets the msdyn_externalcomments property value. 
     * @param value Value to set for the msdyn_externalcomments property.
     */
    public set msdyn_externalcomments(value: string | undefined) {
        this._msdyn_externalcomments = value;
    };
    /**
     * Gets the msdyn_hasreceipt property value. 
     * @returns a boolean
     */
    public get msdyn_hasreceipt() {
        return this._msdyn_hasreceipt;
    };
    /**
     * Sets the msdyn_hasreceipt property value. 
     * @param value Value to set for the msdyn_hasreceipt property.
     */
    public set msdyn_hasreceipt(value: boolean | undefined) {
        this._msdyn_hasreceipt = value;
    };
    /**
     * Gets the msdyn_internalcomments property value. 
     * @returns a string
     */
    public get msdyn_internalcomments() {
        return this._msdyn_internalcomments;
    };
    /**
     * Sets the msdyn_internalcomments property value. 
     * @param value Value to set for the msdyn_internalcomments property.
     */
    public set msdyn_internalcomments(value: string | undefined) {
        this._msdyn_internalcomments = value;
    };
    /**
     * Gets the msdyn_journaltransaction property value. 
     * @returns a string
     */
    public get msdyn_journaltransaction() {
        return this._msdyn_journaltransaction;
    };
    /**
     * Sets the msdyn_journaltransaction property value. 
     * @param value Value to set for the msdyn_journaltransaction property.
     */
    public set msdyn_journaltransaction(value: string | undefined) {
        this._msdyn_journaltransaction = value;
    };
    /**
     * Gets the msdyn_Manager property value. 
     * @returns a systemuser
     */
    public get msdyn_Manager() {
        return this._msdyn_Manager;
    };
    /**
     * Sets the msdyn_Manager property value. 
     * @param value Value to set for the msdyn_Manager property.
     */
    public set msdyn_Manager(value: Systemuser | undefined) {
        this._msdyn_Manager = value;
    };
    /**
     * Gets the msdyn_name property value. 
     * @returns a string
     */
    public get msdyn_name() {
        return this._msdyn_name;
    };
    /**
     * Sets the msdyn_name property value. 
     * @param value Value to set for the msdyn_name property.
     */
    public set msdyn_name(value: string | undefined) {
        this._msdyn_name = value;
    };
    /**
     * Gets the msdyn_Project property value. 
     * @returns a msdyn_project
     */
    public get msdyn_Project() {
        return this._msdyn_Project;
    };
    /**
     * Sets the msdyn_Project property value. 
     * @param value Value to set for the msdyn_Project property.
     */
    public set msdyn_Project(value: Msdyn_project | undefined) {
        this._msdyn_Project = value;
    };
    /**
     * Gets the msdyn_projectapproval_Annotations property value. 
     * @returns a annotation
     */
    public get msdyn_projectapproval_Annotations() {
        return this._msdyn_projectapproval_Annotations;
    };
    /**
     * Sets the msdyn_projectapproval_Annotations property value. 
     * @param value Value to set for the msdyn_projectapproval_Annotations property.
     */
    public set msdyn_projectapproval_Annotations(value: Annotation[] | undefined) {
        this._msdyn_projectapproval_Annotations = value;
    };
    /**
     * Gets the msdyn_projectapproval_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get msdyn_projectapproval_AsyncOperations() {
        return this._msdyn_projectapproval_AsyncOperations;
    };
    /**
     * Sets the msdyn_projectapproval_AsyncOperations property value. 
     * @param value Value to set for the msdyn_projectapproval_AsyncOperations property.
     */
    public set msdyn_projectapproval_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._msdyn_projectapproval_AsyncOperations = value;
    };
    /**
     * Gets the msdyn_projectapproval_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get msdyn_projectapproval_BulkDeleteFailures() {
        return this._msdyn_projectapproval_BulkDeleteFailures;
    };
    /**
     * Sets the msdyn_projectapproval_BulkDeleteFailures property value. 
     * @param value Value to set for the msdyn_projectapproval_BulkDeleteFailures property.
     */
    public set msdyn_projectapproval_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._msdyn_projectapproval_BulkDeleteFailures = value;
    };
    /**
     * Gets the msdyn_projectapproval_DuplicateBaseRecord property value. 
     * @returns a duplicaterecord
     */
    public get msdyn_projectapproval_DuplicateBaseRecord() {
        return this._msdyn_projectapproval_DuplicateBaseRecord;
    };
    /**
     * Sets the msdyn_projectapproval_DuplicateBaseRecord property value. 
     * @param value Value to set for the msdyn_projectapproval_DuplicateBaseRecord property.
     */
    public set msdyn_projectapproval_DuplicateBaseRecord(value: Duplicaterecord[] | undefined) {
        this._msdyn_projectapproval_DuplicateBaseRecord = value;
    };
    /**
     * Gets the msdyn_projectapproval_DuplicateMatchingRecord property value. 
     * @returns a duplicaterecord
     */
    public get msdyn_projectapproval_DuplicateMatchingRecord() {
        return this._msdyn_projectapproval_DuplicateMatchingRecord;
    };
    /**
     * Sets the msdyn_projectapproval_DuplicateMatchingRecord property value. 
     * @param value Value to set for the msdyn_projectapproval_DuplicateMatchingRecord property.
     */
    public set msdyn_projectapproval_DuplicateMatchingRecord(value: Duplicaterecord[] | undefined) {
        this._msdyn_projectapproval_DuplicateMatchingRecord = value;
    };
    /**
     * Gets the msdyn_projectapproval_MailboxTrackingFolders property value. 
     * @returns a mailboxtrackingfolder
     */
    public get msdyn_projectapproval_MailboxTrackingFolders() {
        return this._msdyn_projectapproval_MailboxTrackingFolders;
    };
    /**
     * Sets the msdyn_projectapproval_MailboxTrackingFolders property value. 
     * @param value Value to set for the msdyn_projectapproval_MailboxTrackingFolders property.
     */
    public set msdyn_projectapproval_MailboxTrackingFolders(value: Mailboxtrackingfolder[] | undefined) {
        this._msdyn_projectapproval_MailboxTrackingFolders = value;
    };
    /**
     * Gets the msdyn_projectapproval_PrincipalObjectAttributeAccesses property value. 
     * @returns a principalobjectattributeaccess
     */
    public get msdyn_projectapproval_PrincipalObjectAttributeAccesses() {
        return this._msdyn_projectapproval_PrincipalObjectAttributeAccesses;
    };
    /**
     * Sets the msdyn_projectapproval_PrincipalObjectAttributeAccesses property value. 
     * @param value Value to set for the msdyn_projectapproval_PrincipalObjectAttributeAccesses property.
     */
    public set msdyn_projectapproval_PrincipalObjectAttributeAccesses(value: Principalobjectattributeaccess[] | undefined) {
        this._msdyn_projectapproval_PrincipalObjectAttributeAccesses = value;
    };
    /**
     * Gets the msdyn_projectapproval_ProcessSession property value. 
     * @returns a processsession
     */
    public get msdyn_projectapproval_ProcessSession() {
        return this._msdyn_projectapproval_ProcessSession;
    };
    /**
     * Sets the msdyn_projectapproval_ProcessSession property value. 
     * @param value Value to set for the msdyn_projectapproval_ProcessSession property.
     */
    public set msdyn_projectapproval_ProcessSession(value: Processsession[] | undefined) {
        this._msdyn_projectapproval_ProcessSession = value;
    };
    /**
     * Gets the msdyn_projectapproval_SyncErrors property value. 
     * @returns a syncerror
     */
    public get msdyn_projectapproval_SyncErrors() {
        return this._msdyn_projectapproval_SyncErrors;
    };
    /**
     * Sets the msdyn_projectapproval_SyncErrors property value. 
     * @param value Value to set for the msdyn_projectapproval_SyncErrors property.
     */
    public set msdyn_projectapproval_SyncErrors(value: Syncerror[] | undefined) {
        this._msdyn_projectapproval_SyncErrors = value;
    };
    /**
     * Gets the msdyn_projectapprovalid property value. 
     * @returns a string
     */
    public get msdyn_projectapprovalid() {
        return this._msdyn_projectapprovalid;
    };
    /**
     * Sets the msdyn_projectapprovalid property value. 
     * @param value Value to set for the msdyn_projectapprovalid property.
     */
    public set msdyn_projectapprovalid(value: string | undefined) {
        this._msdyn_projectapprovalid = value;
    };
    /**
     * Gets the msdyn_ProjectTask property value. 
     * @returns a msdyn_projecttask
     */
    public get msdyn_ProjectTask() {
        return this._msdyn_ProjectTask;
    };
    /**
     * Sets the msdyn_ProjectTask property value. 
     * @param value Value to set for the msdyn_ProjectTask property.
     */
    public set msdyn_ProjectTask(value: Msdyn_projecttask | undefined) {
        this._msdyn_ProjectTask = value;
    };
    /**
     * Gets the msdyn_recordstage property value. 
     * @returns a integer
     */
    public get msdyn_recordstage() {
        return this._msdyn_recordstage;
    };
    /**
     * Sets the msdyn_recordstage property value. 
     * @param value Value to set for the msdyn_recordstage property.
     */
    public set msdyn_recordstage(value: number | undefined) {
        this._msdyn_recordstage = value;
    };
    /**
     * Gets the msdyn_referenceexpenseid property value. 
     * @returns a string
     */
    public get msdyn_referenceexpenseid() {
        return this._msdyn_referenceexpenseid;
    };
    /**
     * Sets the msdyn_referenceexpenseid property value. 
     * @param value Value to set for the msdyn_referenceexpenseid property.
     */
    public set msdyn_referenceexpenseid(value: string | undefined) {
        this._msdyn_referenceexpenseid = value;
    };
    /**
     * Gets the msdyn_referencejournalline property value. 
     * @returns a msdyn_journalline
     */
    public get msdyn_referencejournalline() {
        return this._msdyn_referencejournalline;
    };
    /**
     * Sets the msdyn_referencejournalline property value. 
     * @param value Value to set for the msdyn_referencejournalline property.
     */
    public set msdyn_referencejournalline(value: Msdyn_journalline | undefined) {
        this._msdyn_referencejournalline = value;
    };
    /**
     * Gets the msdyn_referencetimeid property value. 
     * @returns a string
     */
    public get msdyn_referencetimeid() {
        return this._msdyn_referencetimeid;
    };
    /**
     * Sets the msdyn_referencetimeid property value. 
     * @param value Value to set for the msdyn_referencetimeid property.
     */
    public set msdyn_referencetimeid(value: string | undefined) {
        this._msdyn_referencetimeid = value;
    };
    /**
     * Gets the msdyn_ResourceCategory property value. 
     * @returns a bookableresourcecategory
     */
    public get msdyn_ResourceCategory() {
        return this._msdyn_ResourceCategory;
    };
    /**
     * Sets the msdyn_ResourceCategory property value. 
     * @param value Value to set for the msdyn_ResourceCategory property.
     */
    public set msdyn_ResourceCategory(value: Bookableresourcecategory | undefined) {
        this._msdyn_ResourceCategory = value;
    };
    /**
     * Gets the msdyn_salesamount property value. 
     * @returns a int64
     */
    public get msdyn_salesamount() {
        return this._msdyn_salesamount;
    };
    /**
     * Sets the msdyn_salesamount property value. 
     * @param value Value to set for the msdyn_salesamount property.
     */
    public set msdyn_salesamount(value: number | undefined) {
        this._msdyn_salesamount = value;
    };
    /**
     * Gets the msdyn_salesamount_base property value. 
     * @returns a int64
     */
    public get msdyn_salesamount_base() {
        return this._msdyn_salesamount_base;
    };
    /**
     * Sets the msdyn_salesamount_base property value. 
     * @param value Value to set for the msdyn_salesamount_base property.
     */
    public set msdyn_salesamount_base(value: number | undefined) {
        this._msdyn_salesamount_base = value;
    };
    /**
     * Gets the msdyn_salesprice property value. 
     * @returns a int64
     */
    public get msdyn_salesprice() {
        return this._msdyn_salesprice;
    };
    /**
     * Sets the msdyn_salesprice property value. 
     * @param value Value to set for the msdyn_salesprice property.
     */
    public set msdyn_salesprice(value: number | undefined) {
        this._msdyn_salesprice = value;
    };
    /**
     * Gets the msdyn_salesprice_base property value. 
     * @returns a int64
     */
    public get msdyn_salesprice_base() {
        return this._msdyn_salesprice_base;
    };
    /**
     * Sets the msdyn_salesprice_base property value. 
     * @param value Value to set for the msdyn_salesprice_base property.
     */
    public set msdyn_salesprice_base(value: number | undefined) {
        this._msdyn_salesprice_base = value;
    };
    /**
     * Gets the msdyn_salesquantity property value. 
     * @returns a int64
     */
    public get msdyn_salesquantity() {
        return this._msdyn_salesquantity;
    };
    /**
     * Sets the msdyn_salesquantity property value. 
     * @param value Value to set for the msdyn_salesquantity property.
     */
    public set msdyn_salesquantity(value: number | undefined) {
        this._msdyn_salesquantity = value;
    };
    /**
     * Gets the msdyn_SubmittedBy property value. 
     * @returns a bookableresource
     */
    public get msdyn_SubmittedBy() {
        return this._msdyn_SubmittedBy;
    };
    /**
     * Sets the msdyn_SubmittedBy property value. 
     * @param value Value to set for the msdyn_SubmittedBy property.
     */
    public set msdyn_SubmittedBy(value: Bookableresource | undefined) {
        this._msdyn_SubmittedBy = value;
    };
    /**
     * Gets the msdyn_TimeEntry property value. 
     * @returns a msdyn_timeentry
     */
    public get msdyn_TimeEntry() {
        return this._msdyn_TimeEntry;
    };
    /**
     * Sets the msdyn_TimeEntry property value. 
     * @param value Value to set for the msdyn_TimeEntry property.
     */
    public set msdyn_TimeEntry(value: Msdyn_timeentry | undefined) {
        this._msdyn_TimeEntry = value;
    };
    /**
     * Gets the msdyn_TransactionCategory property value. 
     * @returns a msdyn_transactioncategory
     */
    public get msdyn_TransactionCategory() {
        return this._msdyn_TransactionCategory;
    };
    /**
     * Sets the msdyn_TransactionCategory property value. 
     * @param value Value to set for the msdyn_TransactionCategory property.
     */
    public set msdyn_TransactionCategory(value: Msdyn_transactioncategory | undefined) {
        this._msdyn_TransactionCategory = value;
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
        writer.writeStringValue("_msdyn_approvalset_value", this._msdyn_approvalset_value);
        writer.writeStringValue("_msdyn_approvedby_value", this._msdyn_approvedby_value);
        writer.writeStringValue("_msdyn_bookableresource_value", this._msdyn_bookableresource_value);
        writer.writeStringValue("_msdyn_expensecategory_value", this._msdyn_expensecategory_value);
        writer.writeStringValue("_msdyn_expenseentry_value", this._msdyn_expenseentry_value);
        writer.writeStringValue("_msdyn_manager_value", this._msdyn_manager_value);
        writer.writeStringValue("_msdyn_project_value", this._msdyn_project_value);
        writer.writeStringValue("_msdyn_projecttask_value", this._msdyn_projecttask_value);
        writer.writeStringValue("_msdyn_referencejournalline_value", this._msdyn_referencejournalline_value);
        writer.writeStringValue("_msdyn_resourcecategory_value", this._msdyn_resourcecategory_value);
        writer.writeStringValue("_msdyn_submittedby_value", this._msdyn_submittedby_value);
        writer.writeStringValue("_msdyn_timeentry_value", this._msdyn_timeentry_value);
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
        writer.writeObjectValue<Msdyn_approvalset>("msdyn_ApprovalSet", this.msdyn_ApprovalSet);
        writer.writeObjectValue<Systemuser>("msdyn_ApprovedBy", this.msdyn_ApprovedBy);
        writer.writeDateValue("msdyn_approvedon", this.msdyn_approvedon);
        writer.writeNumberValue("msdyn_billingtype", this.msdyn_billingtype);
        writer.writeObjectValue<Bookableresource>("msdyn_bookableresource", this.msdyn_bookableresource);
        writer.writeNumberValue("msdyn_costamount", this.msdyn_costamount);
        writer.writeNumberValue("msdyn_costamount_base", this.msdyn_costamount_base);
        writer.writeNumberValue("msdyn_costprice", this.msdyn_costprice);
        writer.writeNumberValue("msdyn_costprice_base", this.msdyn_costprice_base);
        writer.writeNumberValue("msdyn_costquantity", this.msdyn_costquantity);
        writer.writeDateValue("msdyn_date", this.msdyn_date);
        writer.writeNumberValue("msdyn_entrytype", this.msdyn_entrytype);
        writer.writeObjectValue<Msdyn_expensecategory>("msdyn_ExpenseCategory", this.msdyn_ExpenseCategory);
        writer.writeObjectValue<Msdyn_expense>("msdyn_ExpenseEntry", this.msdyn_ExpenseEntry);
        writer.writeStringValue("msdyn_externalcomments", this.msdyn_externalcomments);
        writer.writeBooleanValue("msdyn_hasreceipt", this.msdyn_hasreceipt);
        writer.writeStringValue("msdyn_internalcomments", this.msdyn_internalcomments);
        writer.writeStringValue("msdyn_journaltransaction", this.msdyn_journaltransaction);
        writer.writeObjectValue<Systemuser>("msdyn_Manager", this.msdyn_Manager);
        writer.writeStringValue("msdyn_name", this.msdyn_name);
        writer.writeObjectValue<Msdyn_project>("msdyn_Project", this.msdyn_Project);
        writer.writeCollectionOfObjectValues<Annotation>("msdyn_projectapproval_Annotations", this.msdyn_projectapproval_Annotations);
        writer.writeCollectionOfObjectValues<Asyncoperation>("msdyn_projectapproval_AsyncOperations", this.msdyn_projectapproval_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("msdyn_projectapproval_BulkDeleteFailures", this.msdyn_projectapproval_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("msdyn_projectapproval_DuplicateBaseRecord", this.msdyn_projectapproval_DuplicateBaseRecord);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("msdyn_projectapproval_DuplicateMatchingRecord", this.msdyn_projectapproval_DuplicateMatchingRecord);
        writer.writeCollectionOfObjectValues<Mailboxtrackingfolder>("msdyn_projectapproval_MailboxTrackingFolders", this.msdyn_projectapproval_MailboxTrackingFolders);
        writer.writeCollectionOfObjectValues<Principalobjectattributeaccess>("msdyn_projectapproval_PrincipalObjectAttributeAccesses", this.msdyn_projectapproval_PrincipalObjectAttributeAccesses);
        writer.writeCollectionOfObjectValues<Processsession>("msdyn_projectapproval_ProcessSession", this.msdyn_projectapproval_ProcessSession);
        writer.writeCollectionOfObjectValues<Syncerror>("msdyn_projectapproval_SyncErrors", this.msdyn_projectapproval_SyncErrors);
        writer.writeStringValue("msdyn_projectapprovalid", this.msdyn_projectapprovalid);
        writer.writeObjectValue<Msdyn_projecttask>("msdyn_ProjectTask", this.msdyn_ProjectTask);
        writer.writeNumberValue("msdyn_recordstage", this.msdyn_recordstage);
        writer.writeStringValue("msdyn_referenceexpenseid", this.msdyn_referenceexpenseid);
        writer.writeObjectValue<Msdyn_journalline>("msdyn_referencejournalline", this.msdyn_referencejournalline);
        writer.writeStringValue("msdyn_referencetimeid", this.msdyn_referencetimeid);
        writer.writeObjectValue<Bookableresourcecategory>("msdyn_ResourceCategory", this.msdyn_ResourceCategory);
        writer.writeNumberValue("msdyn_salesamount", this.msdyn_salesamount);
        writer.writeNumberValue("msdyn_salesamount_base", this.msdyn_salesamount_base);
        writer.writeNumberValue("msdyn_salesprice", this.msdyn_salesprice);
        writer.writeNumberValue("msdyn_salesprice_base", this.msdyn_salesprice_base);
        writer.writeNumberValue("msdyn_salesquantity", this.msdyn_salesquantity);
        writer.writeObjectValue<Bookableresource>("msdyn_SubmittedBy", this.msdyn_SubmittedBy);
        writer.writeObjectValue<Msdyn_timeentry>("msdyn_TimeEntry", this.msdyn_TimeEntry);
        writer.writeObjectValue<Msdyn_transactioncategory>("msdyn_TransactionCategory", this.msdyn_TransactionCategory);
        writer.writeDateValue("overriddencreatedon", this.overriddencreatedon);
        writer.writeObjectValue<Principal>("ownerid", this.ownerid);
        writer.writeObjectValue<Businessunit>("owningbusinessunit", this.owningbusinessunit);
        writer.writeObjectValue<Team>("owningteam", this.owningteam);
        writer.writeObjectValue<Systemuser>("owninguser", this.owninguser);
        writer.writeNumberValue("statecode", this.statecode);
        writer.writeNumberValue("statuscode", this.statuscode);
        writer.writeNumberValue("timezoneruleversionnumber", this.timezoneruleversionnumber);
        writer.writeObjectValue<Transactioncurrency>("transactioncurrencyid", this.transactioncurrencyid);
        writer.writeNumberValue("utcconversiontimezonecode", this.utcconversiontimezonecode);
        writer.writeNumberValue("versionnumber", this.versionnumber);
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
