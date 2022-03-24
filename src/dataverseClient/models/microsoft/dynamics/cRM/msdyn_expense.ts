import {createAnnotationFromDiscriminatorValue} from './createAnnotationFromDiscriminatorValue';
import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createBookableresourceFromDiscriminatorValue} from './createBookableresourceFromDiscriminatorValue';
import {createBulkdeletefailureFromDiscriminatorValue} from './createBulkdeletefailureFromDiscriminatorValue';
import {createBusinessunitFromDiscriminatorValue} from './createBusinessunitFromDiscriminatorValue';
import {createDuplicaterecordFromDiscriminatorValue} from './createDuplicaterecordFromDiscriminatorValue';
import {createMailboxtrackingfolderFromDiscriminatorValue} from './createMailboxtrackingfolderFromDiscriminatorValue';
import {createMsdyn_expensecategoryFromDiscriminatorValue} from './createMsdyn_expensecategoryFromDiscriminatorValue';
import {createMsdyn_expensereceiptFromDiscriminatorValue} from './createMsdyn_expensereceiptFromDiscriminatorValue';
import {createMsdyn_journalFromDiscriminatorValue} from './createMsdyn_journalFromDiscriminatorValue';
import {createMsdyn_organizationalunitFromDiscriminatorValue} from './createMsdyn_organizationalunitFromDiscriminatorValue';
import {createMsdyn_projectapprovalFromDiscriminatorValue} from './createMsdyn_projectapprovalFromDiscriminatorValue';
import {createMsdyn_projectFromDiscriminatorValue} from './createMsdyn_projectFromDiscriminatorValue';
import {createPrincipalFromDiscriminatorValue} from './createPrincipalFromDiscriminatorValue';
import {createPrincipalobjectattributeaccessFromDiscriminatorValue} from './createPrincipalobjectattributeaccessFromDiscriminatorValue';
import {createProcesssessionFromDiscriminatorValue} from './createProcesssessionFromDiscriminatorValue';
import {createProcessstageFromDiscriminatorValue} from './createProcessstageFromDiscriminatorValue';
import {createSharepointdocumentlocationFromDiscriminatorValue} from './createSharepointdocumentlocationFromDiscriminatorValue';
import {createSyncerrorFromDiscriminatorValue} from './createSyncerrorFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {createTeamFromDiscriminatorValue} from './createTeamFromDiscriminatorValue';
import {createTransactioncurrencyFromDiscriminatorValue} from './createTransactioncurrencyFromDiscriminatorValue';
import {createUomFromDiscriminatorValue} from './createUomFromDiscriminatorValue';
import {createUomscheduleFromDiscriminatorValue} from './createUomscheduleFromDiscriminatorValue';
import {Annotation, Asyncoperation, Bookableresource, Bulkdeletefailure, Businessunit, Crmbaseentity, Duplicaterecord, Mailboxtrackingfolder, Msdyn_expensecategory, Msdyn_expensereceipt, Msdyn_journal, Msdyn_organizationalunit, Msdyn_project, Msdyn_projectapproval, Principal, Principalobjectattributeaccess, Processsession, Processstage, Sharepointdocumentlocation, Syncerror, Systemuser, Team, Transactioncurrency, Uom, Uomschedule} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Msdyn_expense extends Crmbaseentity implements Parsable {
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private __msdyn_bookableresource_value?: string | undefined;
    private __msdyn_expensecategory_value?: string | undefined;
    private __msdyn_manager_value?: string | undefined;
    private __msdyn_project_value?: string | undefined;
    private __msdyn_resourceorganizationalunitid_value?: string | undefined;
    private __msdyn_unit_value?: string | undefined;
    private __msdyn_unitgroup_value?: string | undefined;
    private __ownerid_value?: string | undefined;
    private __owningbusinessunit_value?: string | undefined;
    private __owningteam_value?: string | undefined;
    private __owninguser_value?: string | undefined;
    private __stageid_value?: string | undefined;
    private __transactioncurrencyid_value?: string | undefined;
    private _createdby?: Systemuser | undefined;
    private _createdon?: Date | undefined;
    private _createdonbehalfby?: Systemuser | undefined;
    private _exchangerate?: number | undefined;
    private _importsequencenumber?: number | undefined;
    private _modifiedby?: Systemuser | undefined;
    private _modifiedon?: Date | undefined;
    private _modifiedonbehalfby?: Systemuser | undefined;
    private _msdyn_amount?: number | undefined;
    private _msdyn_amount_base?: number | undefined;
    private _msdyn_bookableresource?: Bookableresource | undefined;
    private _msdyn_expense_Annotations?: Annotation[] | undefined;
    private _msdyn_expense_AsyncOperations?: Asyncoperation[] | undefined;
    private _msdyn_expense_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _msdyn_expense_DuplicateBaseRecord?: Duplicaterecord[] | undefined;
    private _msdyn_expense_DuplicateMatchingRecord?: Duplicaterecord[] | undefined;
    private _msdyn_expense_MailboxTrackingFolders?: Mailboxtrackingfolder[] | undefined;
    private _msdyn_expense_PrincipalObjectAttributeAccesses?: Principalobjectattributeaccess[] | undefined;
    private _msdyn_expense_ProcessSession?: Processsession[] | undefined;
    private _msdyn_expense_SharePointDocumentLocations?: Sharepointdocumentlocation[] | undefined;
    private _msdyn_expense_SyncErrors?: Syncerror[] | undefined;
    private _msdyn_ExpenseCategory?: Msdyn_expensecategory | undefined;
    private _msdyn_expenseid?: string | undefined;
    private _msdyn_expensestatus?: number | undefined;
    private _msdyn_externaldescription?: string | undefined;
    private _msdyn_manager?: Systemuser | undefined;
    private _msdyn_msdyn_expense_msdyn_expensereceipt_ExpenseId?: Msdyn_expensereceipt[] | undefined;
    private _msdyn_msdyn_expense_msdyn_projectapproval_ExpenseEntry?: Msdyn_projectapproval[] | undefined;
    private _msdyn_msdyn_journal_msdyn_expense?: Msdyn_journal[] | undefined;
    private _msdyn_name?: string | undefined;
    private _msdyn_price?: number | undefined;
    private _msdyn_price_base?: number | undefined;
    private _msdyn_Project?: Msdyn_project | undefined;
    private _msdyn_quantity?: number | undefined;
    private _msdyn_ResourceOrganizationalUnitId?: Msdyn_organizationalunit | undefined;
    private _msdyn_salestaxamount?: number | undefined;
    private _msdyn_salestaxamount_base?: number | undefined;
    private _msdyn_targetexpensestatus?: number | undefined;
    private _msdyn_totalamount?: number | undefined;
    private _msdyn_totalamount_base?: number | undefined;
    private _msdyn_transactiondate?: Date | undefined;
    private _msdyn_Unit?: Uom | undefined;
    private _msdyn_UnitGroup?: Uomschedule | undefined;
    private _overriddencreatedon?: Date | undefined;
    private _ownerid?: Principal | undefined;
    private _owningbusinessunit?: Businessunit | undefined;
    private _owningteam?: Team | undefined;
    private _owninguser?: Systemuser | undefined;
    private _processid?: string | undefined;
    private _stageid?: Processstage | undefined;
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
     * Gets the _msdyn_unit_value property value. 
     * @returns a string
     */
    public get _msdyn_unit_value() {
        return this.__msdyn_unit_value;
    };
    /**
     * Sets the _msdyn_unit_value property value. 
     * @param value Value to set for the _msdyn_unit_value property.
     */
    public set _msdyn_unit_value(value: string | undefined) {
        this.__msdyn_unit_value = value;
    };
    /**
     * Gets the _msdyn_unitgroup_value property value. 
     * @returns a string
     */
    public get _msdyn_unitgroup_value() {
        return this.__msdyn_unitgroup_value;
    };
    /**
     * Sets the _msdyn_unitgroup_value property value. 
     * @param value Value to set for the _msdyn_unitgroup_value property.
     */
    public set _msdyn_unitgroup_value(value: string | undefined) {
        this.__msdyn_unitgroup_value = value;
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
     * Gets the _stageid_value property value. 
     * @returns a string
     */
    public get _stageid_value() {
        return this.__stageid_value;
    };
    /**
     * Sets the _stageid_value property value. 
     * @param value Value to set for the _stageid_value property.
     */
    public set _stageid_value(value: string | undefined) {
        this.__stageid_value = value;
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
     * Instantiates a new msdyn_expense and sets the default values.
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
            "_createdby_value": (o, n) => { (o as unknown as Msdyn_expense)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Msdyn_expense)._createdonbehalfby_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Msdyn_expense)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Msdyn_expense)._modifiedonbehalfby_value = n.getStringValue(); },
            "_msdyn_bookableresource_value": (o, n) => { (o as unknown as Msdyn_expense)._msdyn_bookableresource_value = n.getStringValue(); },
            "_msdyn_expensecategory_value": (o, n) => { (o as unknown as Msdyn_expense)._msdyn_expensecategory_value = n.getStringValue(); },
            "_msdyn_manager_value": (o, n) => { (o as unknown as Msdyn_expense)._msdyn_manager_value = n.getStringValue(); },
            "_msdyn_project_value": (o, n) => { (o as unknown as Msdyn_expense)._msdyn_project_value = n.getStringValue(); },
            "_msdyn_resourceorganizationalunitid_value": (o, n) => { (o as unknown as Msdyn_expense)._msdyn_resourceorganizationalunitid_value = n.getStringValue(); },
            "_msdyn_unit_value": (o, n) => { (o as unknown as Msdyn_expense)._msdyn_unit_value = n.getStringValue(); },
            "_msdyn_unitgroup_value": (o, n) => { (o as unknown as Msdyn_expense)._msdyn_unitgroup_value = n.getStringValue(); },
            "_ownerid_value": (o, n) => { (o as unknown as Msdyn_expense)._ownerid_value = n.getStringValue(); },
            "_owningbusinessunit_value": (o, n) => { (o as unknown as Msdyn_expense)._owningbusinessunit_value = n.getStringValue(); },
            "_owningteam_value": (o, n) => { (o as unknown as Msdyn_expense)._owningteam_value = n.getStringValue(); },
            "_owninguser_value": (o, n) => { (o as unknown as Msdyn_expense)._owninguser_value = n.getStringValue(); },
            "_stageid_value": (o, n) => { (o as unknown as Msdyn_expense)._stageid_value = n.getStringValue(); },
            "_transactioncurrencyid_value": (o, n) => { (o as unknown as Msdyn_expense)._transactioncurrencyid_value = n.getStringValue(); },
            "createdby": (o, n) => { (o as unknown as Msdyn_expense).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Msdyn_expense).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Msdyn_expense).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "exchangerate": (o, n) => { (o as unknown as Msdyn_expense).exchangerate = n.getNumberValue(); },
            "importsequencenumber": (o, n) => { (o as unknown as Msdyn_expense).importsequencenumber = n.getNumberValue(); },
            "modifiedby": (o, n) => { (o as unknown as Msdyn_expense).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Msdyn_expense).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Msdyn_expense).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "msdyn_amount": (o, n) => { (o as unknown as Msdyn_expense).msdyn_amount = n.getNumberValue(); },
            "msdyn_amount_base": (o, n) => { (o as unknown as Msdyn_expense).msdyn_amount_base = n.getNumberValue(); },
            "msdyn_bookableresource": (o, n) => { (o as unknown as Msdyn_expense).msdyn_bookableresource = n.getObjectValue<Bookableresource>(createBookableresourceFromDiscriminatorValue); },
            "msdyn_expense_Annotations": (o, n) => { (o as unknown as Msdyn_expense).msdyn_expense_Annotations = n.getCollectionOfObjectValues<Annotation>(createAnnotationFromDiscriminatorValue); },
            "msdyn_expense_AsyncOperations": (o, n) => { (o as unknown as Msdyn_expense).msdyn_expense_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "msdyn_expense_BulkDeleteFailures": (o, n) => { (o as unknown as Msdyn_expense).msdyn_expense_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "msdyn_expense_DuplicateBaseRecord": (o, n) => { (o as unknown as Msdyn_expense).msdyn_expense_DuplicateBaseRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "msdyn_expense_DuplicateMatchingRecord": (o, n) => { (o as unknown as Msdyn_expense).msdyn_expense_DuplicateMatchingRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "msdyn_expense_MailboxTrackingFolders": (o, n) => { (o as unknown as Msdyn_expense).msdyn_expense_MailboxTrackingFolders = n.getCollectionOfObjectValues<Mailboxtrackingfolder>(createMailboxtrackingfolderFromDiscriminatorValue); },
            "msdyn_expense_PrincipalObjectAttributeAccesses": (o, n) => { (o as unknown as Msdyn_expense).msdyn_expense_PrincipalObjectAttributeAccesses = n.getCollectionOfObjectValues<Principalobjectattributeaccess>(createPrincipalobjectattributeaccessFromDiscriminatorValue); },
            "msdyn_expense_ProcessSession": (o, n) => { (o as unknown as Msdyn_expense).msdyn_expense_ProcessSession = n.getCollectionOfObjectValues<Processsession>(createProcesssessionFromDiscriminatorValue); },
            "msdyn_expense_SharePointDocumentLocations": (o, n) => { (o as unknown as Msdyn_expense).msdyn_expense_SharePointDocumentLocations = n.getCollectionOfObjectValues<Sharepointdocumentlocation>(createSharepointdocumentlocationFromDiscriminatorValue); },
            "msdyn_expense_SyncErrors": (o, n) => { (o as unknown as Msdyn_expense).msdyn_expense_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "msdyn_ExpenseCategory": (o, n) => { (o as unknown as Msdyn_expense).msdyn_ExpenseCategory = n.getObjectValue<Msdyn_expensecategory>(createMsdyn_expensecategoryFromDiscriminatorValue); },
            "msdyn_expenseid": (o, n) => { (o as unknown as Msdyn_expense).msdyn_expenseid = n.getStringValue(); },
            "msdyn_expensestatus": (o, n) => { (o as unknown as Msdyn_expense).msdyn_expensestatus = n.getNumberValue(); },
            "msdyn_externaldescription": (o, n) => { (o as unknown as Msdyn_expense).msdyn_externaldescription = n.getStringValue(); },
            "msdyn_manager": (o, n) => { (o as unknown as Msdyn_expense).msdyn_manager = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "msdyn_msdyn_expense_msdyn_expensereceipt_ExpenseId": (o, n) => { (o as unknown as Msdyn_expense).msdyn_msdyn_expense_msdyn_expensereceipt_ExpenseId = n.getCollectionOfObjectValues<Msdyn_expensereceipt>(createMsdyn_expensereceiptFromDiscriminatorValue); },
            "msdyn_msdyn_expense_msdyn_projectapproval_ExpenseEntry": (o, n) => { (o as unknown as Msdyn_expense).msdyn_msdyn_expense_msdyn_projectapproval_ExpenseEntry = n.getCollectionOfObjectValues<Msdyn_projectapproval>(createMsdyn_projectapprovalFromDiscriminatorValue); },
            "msdyn_msdyn_journal_msdyn_expense": (o, n) => { (o as unknown as Msdyn_expense).msdyn_msdyn_journal_msdyn_expense = n.getCollectionOfObjectValues<Msdyn_journal>(createMsdyn_journalFromDiscriminatorValue); },
            "msdyn_name": (o, n) => { (o as unknown as Msdyn_expense).msdyn_name = n.getStringValue(); },
            "msdyn_price": (o, n) => { (o as unknown as Msdyn_expense).msdyn_price = n.getNumberValue(); },
            "msdyn_price_base": (o, n) => { (o as unknown as Msdyn_expense).msdyn_price_base = n.getNumberValue(); },
            "msdyn_Project": (o, n) => { (o as unknown as Msdyn_expense).msdyn_Project = n.getObjectValue<Msdyn_project>(createMsdyn_projectFromDiscriminatorValue); },
            "msdyn_quantity": (o, n) => { (o as unknown as Msdyn_expense).msdyn_quantity = n.getNumberValue(); },
            "msdyn_ResourceOrganizationalUnitId": (o, n) => { (o as unknown as Msdyn_expense).msdyn_ResourceOrganizationalUnitId = n.getObjectValue<Msdyn_organizationalunit>(createMsdyn_organizationalunitFromDiscriminatorValue); },
            "msdyn_salestaxamount": (o, n) => { (o as unknown as Msdyn_expense).msdyn_salestaxamount = n.getNumberValue(); },
            "msdyn_salestaxamount_base": (o, n) => { (o as unknown as Msdyn_expense).msdyn_salestaxamount_base = n.getNumberValue(); },
            "msdyn_targetexpensestatus": (o, n) => { (o as unknown as Msdyn_expense).msdyn_targetexpensestatus = n.getNumberValue(); },
            "msdyn_totalamount": (o, n) => { (o as unknown as Msdyn_expense).msdyn_totalamount = n.getNumberValue(); },
            "msdyn_totalamount_base": (o, n) => { (o as unknown as Msdyn_expense).msdyn_totalamount_base = n.getNumberValue(); },
            "msdyn_transactiondate": (o, n) => { (o as unknown as Msdyn_expense).msdyn_transactiondate = n.getDateValue(); },
            "msdyn_Unit": (o, n) => { (o as unknown as Msdyn_expense).msdyn_Unit = n.getObjectValue<Uom>(createUomFromDiscriminatorValue); },
            "msdyn_UnitGroup": (o, n) => { (o as unknown as Msdyn_expense).msdyn_UnitGroup = n.getObjectValue<Uomschedule>(createUomscheduleFromDiscriminatorValue); },
            "overriddencreatedon": (o, n) => { (o as unknown as Msdyn_expense).overriddencreatedon = n.getDateValue(); },
            "ownerid": (o, n) => { (o as unknown as Msdyn_expense).ownerid = n.getObjectValue<Principal>(createPrincipalFromDiscriminatorValue); },
            "owningbusinessunit": (o, n) => { (o as unknown as Msdyn_expense).owningbusinessunit = n.getObjectValue<Businessunit>(createBusinessunitFromDiscriminatorValue); },
            "owningteam": (o, n) => { (o as unknown as Msdyn_expense).owningteam = n.getObjectValue<Team>(createTeamFromDiscriminatorValue); },
            "owninguser": (o, n) => { (o as unknown as Msdyn_expense).owninguser = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "processid": (o, n) => { (o as unknown as Msdyn_expense).processid = n.getStringValue(); },
            "stageid": (o, n) => { (o as unknown as Msdyn_expense).stageid = n.getObjectValue<Processstage>(createProcessstageFromDiscriminatorValue); },
            "statecode": (o, n) => { (o as unknown as Msdyn_expense).statecode = n.getNumberValue(); },
            "statuscode": (o, n) => { (o as unknown as Msdyn_expense).statuscode = n.getNumberValue(); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Msdyn_expense).timezoneruleversionnumber = n.getNumberValue(); },
            "transactioncurrencyid": (o, n) => { (o as unknown as Msdyn_expense).transactioncurrencyid = n.getObjectValue<Transactioncurrency>(createTransactioncurrencyFromDiscriminatorValue); },
            "traversedpath": (o, n) => { (o as unknown as Msdyn_expense).traversedpath = n.getStringValue(); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Msdyn_expense).utcconversiontimezonecode = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as Msdyn_expense).versionnumber = n.getNumberValue(); },
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
     * Gets the msdyn_amount property value. 
     * @returns a int64
     */
    public get msdyn_amount() {
        return this._msdyn_amount;
    };
    /**
     * Sets the msdyn_amount property value. 
     * @param value Value to set for the msdyn_amount property.
     */
    public set msdyn_amount(value: number | undefined) {
        this._msdyn_amount = value;
    };
    /**
     * Gets the msdyn_amount_base property value. 
     * @returns a int64
     */
    public get msdyn_amount_base() {
        return this._msdyn_amount_base;
    };
    /**
     * Sets the msdyn_amount_base property value. 
     * @param value Value to set for the msdyn_amount_base property.
     */
    public set msdyn_amount_base(value: number | undefined) {
        this._msdyn_amount_base = value;
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
     * Gets the msdyn_expense_Annotations property value. 
     * @returns a annotation
     */
    public get msdyn_expense_Annotations() {
        return this._msdyn_expense_Annotations;
    };
    /**
     * Sets the msdyn_expense_Annotations property value. 
     * @param value Value to set for the msdyn_expense_Annotations property.
     */
    public set msdyn_expense_Annotations(value: Annotation[] | undefined) {
        this._msdyn_expense_Annotations = value;
    };
    /**
     * Gets the msdyn_expense_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get msdyn_expense_AsyncOperations() {
        return this._msdyn_expense_AsyncOperations;
    };
    /**
     * Sets the msdyn_expense_AsyncOperations property value. 
     * @param value Value to set for the msdyn_expense_AsyncOperations property.
     */
    public set msdyn_expense_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._msdyn_expense_AsyncOperations = value;
    };
    /**
     * Gets the msdyn_expense_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get msdyn_expense_BulkDeleteFailures() {
        return this._msdyn_expense_BulkDeleteFailures;
    };
    /**
     * Sets the msdyn_expense_BulkDeleteFailures property value. 
     * @param value Value to set for the msdyn_expense_BulkDeleteFailures property.
     */
    public set msdyn_expense_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._msdyn_expense_BulkDeleteFailures = value;
    };
    /**
     * Gets the msdyn_expense_DuplicateBaseRecord property value. 
     * @returns a duplicaterecord
     */
    public get msdyn_expense_DuplicateBaseRecord() {
        return this._msdyn_expense_DuplicateBaseRecord;
    };
    /**
     * Sets the msdyn_expense_DuplicateBaseRecord property value. 
     * @param value Value to set for the msdyn_expense_DuplicateBaseRecord property.
     */
    public set msdyn_expense_DuplicateBaseRecord(value: Duplicaterecord[] | undefined) {
        this._msdyn_expense_DuplicateBaseRecord = value;
    };
    /**
     * Gets the msdyn_expense_DuplicateMatchingRecord property value. 
     * @returns a duplicaterecord
     */
    public get msdyn_expense_DuplicateMatchingRecord() {
        return this._msdyn_expense_DuplicateMatchingRecord;
    };
    /**
     * Sets the msdyn_expense_DuplicateMatchingRecord property value. 
     * @param value Value to set for the msdyn_expense_DuplicateMatchingRecord property.
     */
    public set msdyn_expense_DuplicateMatchingRecord(value: Duplicaterecord[] | undefined) {
        this._msdyn_expense_DuplicateMatchingRecord = value;
    };
    /**
     * Gets the msdyn_expense_MailboxTrackingFolders property value. 
     * @returns a mailboxtrackingfolder
     */
    public get msdyn_expense_MailboxTrackingFolders() {
        return this._msdyn_expense_MailboxTrackingFolders;
    };
    /**
     * Sets the msdyn_expense_MailboxTrackingFolders property value. 
     * @param value Value to set for the msdyn_expense_MailboxTrackingFolders property.
     */
    public set msdyn_expense_MailboxTrackingFolders(value: Mailboxtrackingfolder[] | undefined) {
        this._msdyn_expense_MailboxTrackingFolders = value;
    };
    /**
     * Gets the msdyn_expense_PrincipalObjectAttributeAccesses property value. 
     * @returns a principalobjectattributeaccess
     */
    public get msdyn_expense_PrincipalObjectAttributeAccesses() {
        return this._msdyn_expense_PrincipalObjectAttributeAccesses;
    };
    /**
     * Sets the msdyn_expense_PrincipalObjectAttributeAccesses property value. 
     * @param value Value to set for the msdyn_expense_PrincipalObjectAttributeAccesses property.
     */
    public set msdyn_expense_PrincipalObjectAttributeAccesses(value: Principalobjectattributeaccess[] | undefined) {
        this._msdyn_expense_PrincipalObjectAttributeAccesses = value;
    };
    /**
     * Gets the msdyn_expense_ProcessSession property value. 
     * @returns a processsession
     */
    public get msdyn_expense_ProcessSession() {
        return this._msdyn_expense_ProcessSession;
    };
    /**
     * Sets the msdyn_expense_ProcessSession property value. 
     * @param value Value to set for the msdyn_expense_ProcessSession property.
     */
    public set msdyn_expense_ProcessSession(value: Processsession[] | undefined) {
        this._msdyn_expense_ProcessSession = value;
    };
    /**
     * Gets the msdyn_expense_SharePointDocumentLocations property value. 
     * @returns a sharepointdocumentlocation
     */
    public get msdyn_expense_SharePointDocumentLocations() {
        return this._msdyn_expense_SharePointDocumentLocations;
    };
    /**
     * Sets the msdyn_expense_SharePointDocumentLocations property value. 
     * @param value Value to set for the msdyn_expense_SharePointDocumentLocations property.
     */
    public set msdyn_expense_SharePointDocumentLocations(value: Sharepointdocumentlocation[] | undefined) {
        this._msdyn_expense_SharePointDocumentLocations = value;
    };
    /**
     * Gets the msdyn_expense_SyncErrors property value. 
     * @returns a syncerror
     */
    public get msdyn_expense_SyncErrors() {
        return this._msdyn_expense_SyncErrors;
    };
    /**
     * Sets the msdyn_expense_SyncErrors property value. 
     * @param value Value to set for the msdyn_expense_SyncErrors property.
     */
    public set msdyn_expense_SyncErrors(value: Syncerror[] | undefined) {
        this._msdyn_expense_SyncErrors = value;
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
     * Gets the msdyn_expenseid property value. 
     * @returns a string
     */
    public get msdyn_expenseid() {
        return this._msdyn_expenseid;
    };
    /**
     * Sets the msdyn_expenseid property value. 
     * @param value Value to set for the msdyn_expenseid property.
     */
    public set msdyn_expenseid(value: string | undefined) {
        this._msdyn_expenseid = value;
    };
    /**
     * Gets the msdyn_expensestatus property value. 
     * @returns a integer
     */
    public get msdyn_expensestatus() {
        return this._msdyn_expensestatus;
    };
    /**
     * Sets the msdyn_expensestatus property value. 
     * @param value Value to set for the msdyn_expensestatus property.
     */
    public set msdyn_expensestatus(value: number | undefined) {
        this._msdyn_expensestatus = value;
    };
    /**
     * Gets the msdyn_externaldescription property value. 
     * @returns a string
     */
    public get msdyn_externaldescription() {
        return this._msdyn_externaldescription;
    };
    /**
     * Sets the msdyn_externaldescription property value. 
     * @param value Value to set for the msdyn_externaldescription property.
     */
    public set msdyn_externaldescription(value: string | undefined) {
        this._msdyn_externaldescription = value;
    };
    /**
     * Gets the msdyn_manager property value. 
     * @returns a systemuser
     */
    public get msdyn_manager() {
        return this._msdyn_manager;
    };
    /**
     * Sets the msdyn_manager property value. 
     * @param value Value to set for the msdyn_manager property.
     */
    public set msdyn_manager(value: Systemuser | undefined) {
        this._msdyn_manager = value;
    };
    /**
     * Gets the msdyn_msdyn_expense_msdyn_expensereceipt_ExpenseId property value. 
     * @returns a msdyn_expensereceipt
     */
    public get msdyn_msdyn_expense_msdyn_expensereceipt_ExpenseId() {
        return this._msdyn_msdyn_expense_msdyn_expensereceipt_ExpenseId;
    };
    /**
     * Sets the msdyn_msdyn_expense_msdyn_expensereceipt_ExpenseId property value. 
     * @param value Value to set for the msdyn_msdyn_expense_msdyn_expensereceipt_ExpenseId property.
     */
    public set msdyn_msdyn_expense_msdyn_expensereceipt_ExpenseId(value: Msdyn_expensereceipt[] | undefined) {
        this._msdyn_msdyn_expense_msdyn_expensereceipt_ExpenseId = value;
    };
    /**
     * Gets the msdyn_msdyn_expense_msdyn_projectapproval_ExpenseEntry property value. 
     * @returns a msdyn_projectapproval
     */
    public get msdyn_msdyn_expense_msdyn_projectapproval_ExpenseEntry() {
        return this._msdyn_msdyn_expense_msdyn_projectapproval_ExpenseEntry;
    };
    /**
     * Sets the msdyn_msdyn_expense_msdyn_projectapproval_ExpenseEntry property value. 
     * @param value Value to set for the msdyn_msdyn_expense_msdyn_projectapproval_ExpenseEntry property.
     */
    public set msdyn_msdyn_expense_msdyn_projectapproval_ExpenseEntry(value: Msdyn_projectapproval[] | undefined) {
        this._msdyn_msdyn_expense_msdyn_projectapproval_ExpenseEntry = value;
    };
    /**
     * Gets the msdyn_msdyn_journal_msdyn_expense property value. 
     * @returns a msdyn_journal
     */
    public get msdyn_msdyn_journal_msdyn_expense() {
        return this._msdyn_msdyn_journal_msdyn_expense;
    };
    /**
     * Sets the msdyn_msdyn_journal_msdyn_expense property value. 
     * @param value Value to set for the msdyn_msdyn_journal_msdyn_expense property.
     */
    public set msdyn_msdyn_journal_msdyn_expense(value: Msdyn_journal[] | undefined) {
        this._msdyn_msdyn_journal_msdyn_expense = value;
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
     * Gets the msdyn_price property value. 
     * @returns a int64
     */
    public get msdyn_price() {
        return this._msdyn_price;
    };
    /**
     * Sets the msdyn_price property value. 
     * @param value Value to set for the msdyn_price property.
     */
    public set msdyn_price(value: number | undefined) {
        this._msdyn_price = value;
    };
    /**
     * Gets the msdyn_price_base property value. 
     * @returns a int64
     */
    public get msdyn_price_base() {
        return this._msdyn_price_base;
    };
    /**
     * Sets the msdyn_price_base property value. 
     * @param value Value to set for the msdyn_price_base property.
     */
    public set msdyn_price_base(value: number | undefined) {
        this._msdyn_price_base = value;
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
     * Gets the msdyn_quantity property value. 
     * @returns a int64
     */
    public get msdyn_quantity() {
        return this._msdyn_quantity;
    };
    /**
     * Sets the msdyn_quantity property value. 
     * @param value Value to set for the msdyn_quantity property.
     */
    public set msdyn_quantity(value: number | undefined) {
        this._msdyn_quantity = value;
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
     * Gets the msdyn_salestaxamount property value. 
     * @returns a int64
     */
    public get msdyn_salestaxamount() {
        return this._msdyn_salestaxamount;
    };
    /**
     * Sets the msdyn_salestaxamount property value. 
     * @param value Value to set for the msdyn_salestaxamount property.
     */
    public set msdyn_salestaxamount(value: number | undefined) {
        this._msdyn_salestaxamount = value;
    };
    /**
     * Gets the msdyn_salestaxamount_base property value. 
     * @returns a int64
     */
    public get msdyn_salestaxamount_base() {
        return this._msdyn_salestaxamount_base;
    };
    /**
     * Sets the msdyn_salestaxamount_base property value. 
     * @param value Value to set for the msdyn_salestaxamount_base property.
     */
    public set msdyn_salestaxamount_base(value: number | undefined) {
        this._msdyn_salestaxamount_base = value;
    };
    /**
     * Gets the msdyn_targetexpensestatus property value. 
     * @returns a integer
     */
    public get msdyn_targetexpensestatus() {
        return this._msdyn_targetexpensestatus;
    };
    /**
     * Sets the msdyn_targetexpensestatus property value. 
     * @param value Value to set for the msdyn_targetexpensestatus property.
     */
    public set msdyn_targetexpensestatus(value: number | undefined) {
        this._msdyn_targetexpensestatus = value;
    };
    /**
     * Gets the msdyn_totalamount property value. 
     * @returns a int64
     */
    public get msdyn_totalamount() {
        return this._msdyn_totalamount;
    };
    /**
     * Sets the msdyn_totalamount property value. 
     * @param value Value to set for the msdyn_totalamount property.
     */
    public set msdyn_totalamount(value: number | undefined) {
        this._msdyn_totalamount = value;
    };
    /**
     * Gets the msdyn_totalamount_base property value. 
     * @returns a int64
     */
    public get msdyn_totalamount_base() {
        return this._msdyn_totalamount_base;
    };
    /**
     * Sets the msdyn_totalamount_base property value. 
     * @param value Value to set for the msdyn_totalamount_base property.
     */
    public set msdyn_totalamount_base(value: number | undefined) {
        this._msdyn_totalamount_base = value;
    };
    /**
     * Gets the msdyn_transactiondate property value. 
     * @returns a Date
     */
    public get msdyn_transactiondate() {
        return this._msdyn_transactiondate;
    };
    /**
     * Sets the msdyn_transactiondate property value. 
     * @param value Value to set for the msdyn_transactiondate property.
     */
    public set msdyn_transactiondate(value: Date | undefined) {
        this._msdyn_transactiondate = value;
    };
    /**
     * Gets the msdyn_Unit property value. 
     * @returns a uom
     */
    public get msdyn_Unit() {
        return this._msdyn_Unit;
    };
    /**
     * Sets the msdyn_Unit property value. 
     * @param value Value to set for the msdyn_Unit property.
     */
    public set msdyn_Unit(value: Uom | undefined) {
        this._msdyn_Unit = value;
    };
    /**
     * Gets the msdyn_UnitGroup property value. 
     * @returns a uomschedule
     */
    public get msdyn_UnitGroup() {
        return this._msdyn_UnitGroup;
    };
    /**
     * Sets the msdyn_UnitGroup property value. 
     * @param value Value to set for the msdyn_UnitGroup property.
     */
    public set msdyn_UnitGroup(value: Uomschedule | undefined) {
        this._msdyn_UnitGroup = value;
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
        writer.writeStringValue("_msdyn_bookableresource_value", this._msdyn_bookableresource_value);
        writer.writeStringValue("_msdyn_expensecategory_value", this._msdyn_expensecategory_value);
        writer.writeStringValue("_msdyn_manager_value", this._msdyn_manager_value);
        writer.writeStringValue("_msdyn_project_value", this._msdyn_project_value);
        writer.writeStringValue("_msdyn_resourceorganizationalunitid_value", this._msdyn_resourceorganizationalunitid_value);
        writer.writeStringValue("_msdyn_unit_value", this._msdyn_unit_value);
        writer.writeStringValue("_msdyn_unitgroup_value", this._msdyn_unitgroup_value);
        writer.writeStringValue("_ownerid_value", this._ownerid_value);
        writer.writeStringValue("_owningbusinessunit_value", this._owningbusinessunit_value);
        writer.writeStringValue("_owningteam_value", this._owningteam_value);
        writer.writeStringValue("_owninguser_value", this._owninguser_value);
        writer.writeStringValue("_stageid_value", this._stageid_value);
        writer.writeStringValue("_transactioncurrencyid_value", this._transactioncurrencyid_value);
        writer.writeObjectValue<Systemuser>("createdby", this.createdby);
        writer.writeDateValue("createdon", this.createdon);
        writer.writeObjectValue<Systemuser>("createdonbehalfby", this.createdonbehalfby);
        writer.writeNumberValue("exchangerate", this.exchangerate);
        writer.writeNumberValue("importsequencenumber", this.importsequencenumber);
        writer.writeObjectValue<Systemuser>("modifiedby", this.modifiedby);
        writer.writeDateValue("modifiedon", this.modifiedon);
        writer.writeObjectValue<Systemuser>("modifiedonbehalfby", this.modifiedonbehalfby);
        writer.writeNumberValue("msdyn_amount", this.msdyn_amount);
        writer.writeNumberValue("msdyn_amount_base", this.msdyn_amount_base);
        writer.writeObjectValue<Bookableresource>("msdyn_bookableresource", this.msdyn_bookableresource);
        writer.writeCollectionOfObjectValues<Annotation>("msdyn_expense_Annotations", this.msdyn_expense_Annotations);
        writer.writeCollectionOfObjectValues<Asyncoperation>("msdyn_expense_AsyncOperations", this.msdyn_expense_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("msdyn_expense_BulkDeleteFailures", this.msdyn_expense_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("msdyn_expense_DuplicateBaseRecord", this.msdyn_expense_DuplicateBaseRecord);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("msdyn_expense_DuplicateMatchingRecord", this.msdyn_expense_DuplicateMatchingRecord);
        writer.writeCollectionOfObjectValues<Mailboxtrackingfolder>("msdyn_expense_MailboxTrackingFolders", this.msdyn_expense_MailboxTrackingFolders);
        writer.writeCollectionOfObjectValues<Principalobjectattributeaccess>("msdyn_expense_PrincipalObjectAttributeAccesses", this.msdyn_expense_PrincipalObjectAttributeAccesses);
        writer.writeCollectionOfObjectValues<Processsession>("msdyn_expense_ProcessSession", this.msdyn_expense_ProcessSession);
        writer.writeCollectionOfObjectValues<Sharepointdocumentlocation>("msdyn_expense_SharePointDocumentLocations", this.msdyn_expense_SharePointDocumentLocations);
        writer.writeCollectionOfObjectValues<Syncerror>("msdyn_expense_SyncErrors", this.msdyn_expense_SyncErrors);
        writer.writeObjectValue<Msdyn_expensecategory>("msdyn_ExpenseCategory", this.msdyn_ExpenseCategory);
        writer.writeStringValue("msdyn_expenseid", this.msdyn_expenseid);
        writer.writeNumberValue("msdyn_expensestatus", this.msdyn_expensestatus);
        writer.writeStringValue("msdyn_externaldescription", this.msdyn_externaldescription);
        writer.writeObjectValue<Systemuser>("msdyn_manager", this.msdyn_manager);
        writer.writeCollectionOfObjectValues<Msdyn_expensereceipt>("msdyn_msdyn_expense_msdyn_expensereceipt_ExpenseId", this.msdyn_msdyn_expense_msdyn_expensereceipt_ExpenseId);
        writer.writeCollectionOfObjectValues<Msdyn_projectapproval>("msdyn_msdyn_expense_msdyn_projectapproval_ExpenseEntry", this.msdyn_msdyn_expense_msdyn_projectapproval_ExpenseEntry);
        writer.writeCollectionOfObjectValues<Msdyn_journal>("msdyn_msdyn_journal_msdyn_expense", this.msdyn_msdyn_journal_msdyn_expense);
        writer.writeStringValue("msdyn_name", this.msdyn_name);
        writer.writeNumberValue("msdyn_price", this.msdyn_price);
        writer.writeNumberValue("msdyn_price_base", this.msdyn_price_base);
        writer.writeObjectValue<Msdyn_project>("msdyn_Project", this.msdyn_Project);
        writer.writeNumberValue("msdyn_quantity", this.msdyn_quantity);
        writer.writeObjectValue<Msdyn_organizationalunit>("msdyn_ResourceOrganizationalUnitId", this.msdyn_ResourceOrganizationalUnitId);
        writer.writeNumberValue("msdyn_salestaxamount", this.msdyn_salestaxamount);
        writer.writeNumberValue("msdyn_salestaxamount_base", this.msdyn_salestaxamount_base);
        writer.writeNumberValue("msdyn_targetexpensestatus", this.msdyn_targetexpensestatus);
        writer.writeNumberValue("msdyn_totalamount", this.msdyn_totalamount);
        writer.writeNumberValue("msdyn_totalamount_base", this.msdyn_totalamount_base);
        writer.writeDateValue("msdyn_transactiondate", this.msdyn_transactiondate);
        writer.writeObjectValue<Uom>("msdyn_Unit", this.msdyn_Unit);
        writer.writeObjectValue<Uomschedule>("msdyn_UnitGroup", this.msdyn_UnitGroup);
        writer.writeDateValue("overriddencreatedon", this.overriddencreatedon);
        writer.writeObjectValue<Principal>("ownerid", this.ownerid);
        writer.writeObjectValue<Businessunit>("owningbusinessunit", this.owningbusinessunit);
        writer.writeObjectValue<Team>("owningteam", this.owningteam);
        writer.writeObjectValue<Systemuser>("owninguser", this.owninguser);
        writer.writeStringValue("processid", this.processid);
        writer.writeObjectValue<Processstage>("stageid", this.stageid);
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
     * @returns a processstage
     */
    public get stageid() {
        return this._stageid;
    };
    /**
     * Sets the stageid property value. 
     * @param value Value to set for the stageid property.
     */
    public set stageid(value: Processstage | undefined) {
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
