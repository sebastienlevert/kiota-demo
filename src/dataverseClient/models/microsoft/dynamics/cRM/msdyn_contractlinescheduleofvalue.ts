import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createBulkdeletefailureFromDiscriminatorValue} from './createBulkdeletefailureFromDiscriminatorValue';
import {createBusinessunitFromDiscriminatorValue} from './createBusinessunitFromDiscriminatorValue';
import {createDuplicaterecordFromDiscriminatorValue} from './createDuplicaterecordFromDiscriminatorValue';
import {createMailboxtrackingfolderFromDiscriminatorValue} from './createMailboxtrackingfolderFromDiscriminatorValue';
import {createMsdyn_contractlineinvoicescheduleFromDiscriminatorValue} from './createMsdyn_contractlineinvoicescheduleFromDiscriminatorValue';
import {createMsdyn_projectFromDiscriminatorValue} from './createMsdyn_projectFromDiscriminatorValue';
import {createMsdyn_projecttaskFromDiscriminatorValue} from './createMsdyn_projecttaskFromDiscriminatorValue';
import {createPrincipalFromDiscriminatorValue} from './createPrincipalFromDiscriminatorValue';
import {createPrincipalobjectattributeaccessFromDiscriminatorValue} from './createPrincipalobjectattributeaccessFromDiscriminatorValue';
import {createProcesssessionFromDiscriminatorValue} from './createProcesssessionFromDiscriminatorValue';
import {createSalesorderdetailFromDiscriminatorValue} from './createSalesorderdetailFromDiscriminatorValue';
import {createSalesorderFromDiscriminatorValue} from './createSalesorderFromDiscriminatorValue';
import {createSyncerrorFromDiscriminatorValue} from './createSyncerrorFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {createTeamFromDiscriminatorValue} from './createTeamFromDiscriminatorValue';
import {createTransactioncurrencyFromDiscriminatorValue} from './createTransactioncurrencyFromDiscriminatorValue';
import {Asyncoperation, Bulkdeletefailure, Businessunit, Crmbaseentity, Duplicaterecord, Mailboxtrackingfolder, Msdyn_contractlineinvoiceschedule, Msdyn_project, Msdyn_projecttask, Principal, Principalobjectattributeaccess, Processsession, Salesorder, Salesorderdetail, Syncerror, Systemuser, Team, Transactioncurrency} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Msdyn_contractlinescheduleofvalue extends Crmbaseentity implements Parsable {
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private __msdyn_contract_value?: string | undefined;
    private __msdyn_contractlineid_value?: string | undefined;
    private __msdyn_project_value?: string | undefined;
    private __msdyn_projecttask_value?: string | undefined;
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
    private _msdyn_amount?: number | undefined;
    private _msdyn_amount_after_tax?: number | undefined;
    private _msdyn_amount_after_tax_base?: number | undefined;
    private _msdyn_amount_base?: number | undefined;
    private _msdyn_contract?: Salesorder | undefined;
    private _msdyn_contractline?: string | undefined;
    private _msdyn_contractlinedescription?: string | undefined;
    private _msdyn_ContractLineId?: Salesorderdetail | undefined;
    private _msdyn_contractlinescheduleofvalue_AsyncOperations?: Asyncoperation[] | undefined;
    private _msdyn_contractlinescheduleofvalue_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _msdyn_contractlinescheduleofvalue_DuplicateBaseRecord?: Duplicaterecord[] | undefined;
    private _msdyn_contractlinescheduleofvalue_DuplicateMatchingRecord?: Duplicaterecord[] | undefined;
    private _msdyn_contractlinescheduleofvalue_MailboxTrackingFolders?: Mailboxtrackingfolder[] | undefined;
    private _msdyn_contractlinescheduleofvalue_msdyn_contractlineinvoiceschedule?: Msdyn_contractlineinvoiceschedule[] | undefined;
    private _msdyn_contractlinescheduleofvalue_PrincipalObjectAttributeAccesses?: Principalobjectattributeaccess[] | undefined;
    private _msdyn_contractlinescheduleofvalue_ProcessSession?: Processsession[] | undefined;
    private _msdyn_contractlinescheduleofvalue_SyncErrors?: Syncerror[] | undefined;
    private _msdyn_contractlinescheduleofvalueid?: string | undefined;
    private _msdyn_description?: string | undefined;
    private _msdyn_externaldescription?: string | undefined;
    private _msdyn_invoicedate?: Date | undefined;
    private _msdyn_invoicestatus?: number | undefined;
    private _msdyn_name?: string | undefined;
    private _msdyn_price?: number | undefined;
    private _msdyn_price_base?: number | undefined;
    private _msdyn_project?: Msdyn_project | undefined;
    private _msdyn_projecttask?: Msdyn_projecttask | undefined;
    private _msdyn_startdatetime?: Date | undefined;
    private _msdyn_tax?: number | undefined;
    private _msdyn_tax_base?: number | undefined;
    private _msdyn_transactionclassification?: number | undefined;
    private _msdyn_transactiontypecode?: number | undefined;
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
     * Gets the _msdyn_contract_value property value. 
     * @returns a string
     */
    public get _msdyn_contract_value() {
        return this.__msdyn_contract_value;
    };
    /**
     * Sets the _msdyn_contract_value property value. 
     * @param value Value to set for the _msdyn_contract_value property.
     */
    public set _msdyn_contract_value(value: string | undefined) {
        this.__msdyn_contract_value = value;
    };
    /**
     * Gets the _msdyn_contractlineid_value property value. 
     * @returns a string
     */
    public get _msdyn_contractlineid_value() {
        return this.__msdyn_contractlineid_value;
    };
    /**
     * Sets the _msdyn_contractlineid_value property value. 
     * @param value Value to set for the _msdyn_contractlineid_value property.
     */
    public set _msdyn_contractlineid_value(value: string | undefined) {
        this.__msdyn_contractlineid_value = value;
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
     * Instantiates a new msdyn_contractlinescheduleofvalue and sets the default values.
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
            "_createdby_value": (o, n) => { (o as unknown as Msdyn_contractlinescheduleofvalue)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Msdyn_contractlinescheduleofvalue)._createdonbehalfby_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Msdyn_contractlinescheduleofvalue)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Msdyn_contractlinescheduleofvalue)._modifiedonbehalfby_value = n.getStringValue(); },
            "_msdyn_contract_value": (o, n) => { (o as unknown as Msdyn_contractlinescheduleofvalue)._msdyn_contract_value = n.getStringValue(); },
            "_msdyn_contractlineid_value": (o, n) => { (o as unknown as Msdyn_contractlinescheduleofvalue)._msdyn_contractlineid_value = n.getStringValue(); },
            "_msdyn_project_value": (o, n) => { (o as unknown as Msdyn_contractlinescheduleofvalue)._msdyn_project_value = n.getStringValue(); },
            "_msdyn_projecttask_value": (o, n) => { (o as unknown as Msdyn_contractlinescheduleofvalue)._msdyn_projecttask_value = n.getStringValue(); },
            "_ownerid_value": (o, n) => { (o as unknown as Msdyn_contractlinescheduleofvalue)._ownerid_value = n.getStringValue(); },
            "_owningbusinessunit_value": (o, n) => { (o as unknown as Msdyn_contractlinescheduleofvalue)._owningbusinessunit_value = n.getStringValue(); },
            "_owningteam_value": (o, n) => { (o as unknown as Msdyn_contractlinescheduleofvalue)._owningteam_value = n.getStringValue(); },
            "_owninguser_value": (o, n) => { (o as unknown as Msdyn_contractlinescheduleofvalue)._owninguser_value = n.getStringValue(); },
            "_transactioncurrencyid_value": (o, n) => { (o as unknown as Msdyn_contractlinescheduleofvalue)._transactioncurrencyid_value = n.getStringValue(); },
            "createdby": (o, n) => { (o as unknown as Msdyn_contractlinescheduleofvalue).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Msdyn_contractlinescheduleofvalue).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Msdyn_contractlinescheduleofvalue).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "exchangerate": (o, n) => { (o as unknown as Msdyn_contractlinescheduleofvalue).exchangerate = n.getNumberValue(); },
            "importsequencenumber": (o, n) => { (o as unknown as Msdyn_contractlinescheduleofvalue).importsequencenumber = n.getNumberValue(); },
            "modifiedby": (o, n) => { (o as unknown as Msdyn_contractlinescheduleofvalue).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Msdyn_contractlinescheduleofvalue).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Msdyn_contractlinescheduleofvalue).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "msdyn_amount": (o, n) => { (o as unknown as Msdyn_contractlinescheduleofvalue).msdyn_amount = n.getNumberValue(); },
            "msdyn_amount_after_tax": (o, n) => { (o as unknown as Msdyn_contractlinescheduleofvalue).msdyn_amount_after_tax = n.getNumberValue(); },
            "msdyn_amount_after_tax_base": (o, n) => { (o as unknown as Msdyn_contractlinescheduleofvalue).msdyn_amount_after_tax_base = n.getNumberValue(); },
            "msdyn_amount_base": (o, n) => { (o as unknown as Msdyn_contractlinescheduleofvalue).msdyn_amount_base = n.getNumberValue(); },
            "msdyn_contract": (o, n) => { (o as unknown as Msdyn_contractlinescheduleofvalue).msdyn_contract = n.getObjectValue<Salesorder>(createSalesorderFromDiscriminatorValue); },
            "msdyn_contractline": (o, n) => { (o as unknown as Msdyn_contractlinescheduleofvalue).msdyn_contractline = n.getStringValue(); },
            "msdyn_contractlinedescription": (o, n) => { (o as unknown as Msdyn_contractlinescheduleofvalue).msdyn_contractlinedescription = n.getStringValue(); },
            "msdyn_ContractLineId": (o, n) => { (o as unknown as Msdyn_contractlinescheduleofvalue).msdyn_ContractLineId = n.getObjectValue<Salesorderdetail>(createSalesorderdetailFromDiscriminatorValue); },
            "msdyn_contractlinescheduleofvalue_AsyncOperations": (o, n) => { (o as unknown as Msdyn_contractlinescheduleofvalue).msdyn_contractlinescheduleofvalue_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "msdyn_contractlinescheduleofvalue_BulkDeleteFailures": (o, n) => { (o as unknown as Msdyn_contractlinescheduleofvalue).msdyn_contractlinescheduleofvalue_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "msdyn_contractlinescheduleofvalue_DuplicateBaseRecord": (o, n) => { (o as unknown as Msdyn_contractlinescheduleofvalue).msdyn_contractlinescheduleofvalue_DuplicateBaseRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "msdyn_contractlinescheduleofvalue_DuplicateMatchingRecord": (o, n) => { (o as unknown as Msdyn_contractlinescheduleofvalue).msdyn_contractlinescheduleofvalue_DuplicateMatchingRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "msdyn_contractlinescheduleofvalue_MailboxTrackingFolders": (o, n) => { (o as unknown as Msdyn_contractlinescheduleofvalue).msdyn_contractlinescheduleofvalue_MailboxTrackingFolders = n.getCollectionOfObjectValues<Mailboxtrackingfolder>(createMailboxtrackingfolderFromDiscriminatorValue); },
            "msdyn_contractlinescheduleofvalue_msdyn_contractlineinvoiceschedule": (o, n) => { (o as unknown as Msdyn_contractlinescheduleofvalue).msdyn_contractlinescheduleofvalue_msdyn_contractlineinvoiceschedule = n.getCollectionOfObjectValues<Msdyn_contractlineinvoiceschedule>(createMsdyn_contractlineinvoicescheduleFromDiscriminatorValue); },
            "msdyn_contractlinescheduleofvalue_PrincipalObjectAttributeAccesses": (o, n) => { (o as unknown as Msdyn_contractlinescheduleofvalue).msdyn_contractlinescheduleofvalue_PrincipalObjectAttributeAccesses = n.getCollectionOfObjectValues<Principalobjectattributeaccess>(createPrincipalobjectattributeaccessFromDiscriminatorValue); },
            "msdyn_contractlinescheduleofvalue_ProcessSession": (o, n) => { (o as unknown as Msdyn_contractlinescheduleofvalue).msdyn_contractlinescheduleofvalue_ProcessSession = n.getCollectionOfObjectValues<Processsession>(createProcesssessionFromDiscriminatorValue); },
            "msdyn_contractlinescheduleofvalue_SyncErrors": (o, n) => { (o as unknown as Msdyn_contractlinescheduleofvalue).msdyn_contractlinescheduleofvalue_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "msdyn_contractlinescheduleofvalueid": (o, n) => { (o as unknown as Msdyn_contractlinescheduleofvalue).msdyn_contractlinescheduleofvalueid = n.getStringValue(); },
            "msdyn_description": (o, n) => { (o as unknown as Msdyn_contractlinescheduleofvalue).msdyn_description = n.getStringValue(); },
            "msdyn_externaldescription": (o, n) => { (o as unknown as Msdyn_contractlinescheduleofvalue).msdyn_externaldescription = n.getStringValue(); },
            "msdyn_invoicedate": (o, n) => { (o as unknown as Msdyn_contractlinescheduleofvalue).msdyn_invoicedate = n.getDateValue(); },
            "msdyn_invoicestatus": (o, n) => { (o as unknown as Msdyn_contractlinescheduleofvalue).msdyn_invoicestatus = n.getNumberValue(); },
            "msdyn_name": (o, n) => { (o as unknown as Msdyn_contractlinescheduleofvalue).msdyn_name = n.getStringValue(); },
            "msdyn_price": (o, n) => { (o as unknown as Msdyn_contractlinescheduleofvalue).msdyn_price = n.getNumberValue(); },
            "msdyn_price_base": (o, n) => { (o as unknown as Msdyn_contractlinescheduleofvalue).msdyn_price_base = n.getNumberValue(); },
            "msdyn_project": (o, n) => { (o as unknown as Msdyn_contractlinescheduleofvalue).msdyn_project = n.getObjectValue<Msdyn_project>(createMsdyn_projectFromDiscriminatorValue); },
            "msdyn_projecttask": (o, n) => { (o as unknown as Msdyn_contractlinescheduleofvalue).msdyn_projecttask = n.getObjectValue<Msdyn_projecttask>(createMsdyn_projecttaskFromDiscriminatorValue); },
            "msdyn_startdatetime": (o, n) => { (o as unknown as Msdyn_contractlinescheduleofvalue).msdyn_startdatetime = n.getDateValue(); },
            "msdyn_tax": (o, n) => { (o as unknown as Msdyn_contractlinescheduleofvalue).msdyn_tax = n.getNumberValue(); },
            "msdyn_tax_base": (o, n) => { (o as unknown as Msdyn_contractlinescheduleofvalue).msdyn_tax_base = n.getNumberValue(); },
            "msdyn_transactionclassification": (o, n) => { (o as unknown as Msdyn_contractlinescheduleofvalue).msdyn_transactionclassification = n.getNumberValue(); },
            "msdyn_transactiontypecode": (o, n) => { (o as unknown as Msdyn_contractlinescheduleofvalue).msdyn_transactiontypecode = n.getNumberValue(); },
            "overriddencreatedon": (o, n) => { (o as unknown as Msdyn_contractlinescheduleofvalue).overriddencreatedon = n.getDateValue(); },
            "ownerid": (o, n) => { (o as unknown as Msdyn_contractlinescheduleofvalue).ownerid = n.getObjectValue<Principal>(createPrincipalFromDiscriminatorValue); },
            "owningbusinessunit": (o, n) => { (o as unknown as Msdyn_contractlinescheduleofvalue).owningbusinessunit = n.getObjectValue<Businessunit>(createBusinessunitFromDiscriminatorValue); },
            "owningteam": (o, n) => { (o as unknown as Msdyn_contractlinescheduleofvalue).owningteam = n.getObjectValue<Team>(createTeamFromDiscriminatorValue); },
            "owninguser": (o, n) => { (o as unknown as Msdyn_contractlinescheduleofvalue).owninguser = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "statecode": (o, n) => { (o as unknown as Msdyn_contractlinescheduleofvalue).statecode = n.getNumberValue(); },
            "statuscode": (o, n) => { (o as unknown as Msdyn_contractlinescheduleofvalue).statuscode = n.getNumberValue(); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Msdyn_contractlinescheduleofvalue).timezoneruleversionnumber = n.getNumberValue(); },
            "transactioncurrencyid": (o, n) => { (o as unknown as Msdyn_contractlinescheduleofvalue).transactioncurrencyid = n.getObjectValue<Transactioncurrency>(createTransactioncurrencyFromDiscriminatorValue); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Msdyn_contractlinescheduleofvalue).utcconversiontimezonecode = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as Msdyn_contractlinescheduleofvalue).versionnumber = n.getNumberValue(); },
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
     * Gets the msdyn_amount_after_tax property value. 
     * @returns a int64
     */
    public get msdyn_amount_after_tax() {
        return this._msdyn_amount_after_tax;
    };
    /**
     * Sets the msdyn_amount_after_tax property value. 
     * @param value Value to set for the msdyn_amount_after_tax property.
     */
    public set msdyn_amount_after_tax(value: number | undefined) {
        this._msdyn_amount_after_tax = value;
    };
    /**
     * Gets the msdyn_amount_after_tax_base property value. 
     * @returns a int64
     */
    public get msdyn_amount_after_tax_base() {
        return this._msdyn_amount_after_tax_base;
    };
    /**
     * Sets the msdyn_amount_after_tax_base property value. 
     * @param value Value to set for the msdyn_amount_after_tax_base property.
     */
    public set msdyn_amount_after_tax_base(value: number | undefined) {
        this._msdyn_amount_after_tax_base = value;
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
     * Gets the msdyn_contract property value. 
     * @returns a salesorder
     */
    public get msdyn_contract() {
        return this._msdyn_contract;
    };
    /**
     * Sets the msdyn_contract property value. 
     * @param value Value to set for the msdyn_contract property.
     */
    public set msdyn_contract(value: Salesorder | undefined) {
        this._msdyn_contract = value;
    };
    /**
     * Gets the msdyn_contractline property value. 
     * @returns a string
     */
    public get msdyn_contractline() {
        return this._msdyn_contractline;
    };
    /**
     * Sets the msdyn_contractline property value. 
     * @param value Value to set for the msdyn_contractline property.
     */
    public set msdyn_contractline(value: string | undefined) {
        this._msdyn_contractline = value;
    };
    /**
     * Gets the msdyn_contractlinedescription property value. 
     * @returns a string
     */
    public get msdyn_contractlinedescription() {
        return this._msdyn_contractlinedescription;
    };
    /**
     * Sets the msdyn_contractlinedescription property value. 
     * @param value Value to set for the msdyn_contractlinedescription property.
     */
    public set msdyn_contractlinedescription(value: string | undefined) {
        this._msdyn_contractlinedescription = value;
    };
    /**
     * Gets the msdyn_ContractLineId property value. 
     * @returns a salesorderdetail
     */
    public get msdyn_ContractLineId() {
        return this._msdyn_ContractLineId;
    };
    /**
     * Sets the msdyn_ContractLineId property value. 
     * @param value Value to set for the msdyn_ContractLineId property.
     */
    public set msdyn_ContractLineId(value: Salesorderdetail | undefined) {
        this._msdyn_ContractLineId = value;
    };
    /**
     * Gets the msdyn_contractlinescheduleofvalue_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get msdyn_contractlinescheduleofvalue_AsyncOperations() {
        return this._msdyn_contractlinescheduleofvalue_AsyncOperations;
    };
    /**
     * Sets the msdyn_contractlinescheduleofvalue_AsyncOperations property value. 
     * @param value Value to set for the msdyn_contractlinescheduleofvalue_AsyncOperations property.
     */
    public set msdyn_contractlinescheduleofvalue_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._msdyn_contractlinescheduleofvalue_AsyncOperations = value;
    };
    /**
     * Gets the msdyn_contractlinescheduleofvalue_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get msdyn_contractlinescheduleofvalue_BulkDeleteFailures() {
        return this._msdyn_contractlinescheduleofvalue_BulkDeleteFailures;
    };
    /**
     * Sets the msdyn_contractlinescheduleofvalue_BulkDeleteFailures property value. 
     * @param value Value to set for the msdyn_contractlinescheduleofvalue_BulkDeleteFailures property.
     */
    public set msdyn_contractlinescheduleofvalue_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._msdyn_contractlinescheduleofvalue_BulkDeleteFailures = value;
    };
    /**
     * Gets the msdyn_contractlinescheduleofvalue_DuplicateBaseRecord property value. 
     * @returns a duplicaterecord
     */
    public get msdyn_contractlinescheduleofvalue_DuplicateBaseRecord() {
        return this._msdyn_contractlinescheduleofvalue_DuplicateBaseRecord;
    };
    /**
     * Sets the msdyn_contractlinescheduleofvalue_DuplicateBaseRecord property value. 
     * @param value Value to set for the msdyn_contractlinescheduleofvalue_DuplicateBaseRecord property.
     */
    public set msdyn_contractlinescheduleofvalue_DuplicateBaseRecord(value: Duplicaterecord[] | undefined) {
        this._msdyn_contractlinescheduleofvalue_DuplicateBaseRecord = value;
    };
    /**
     * Gets the msdyn_contractlinescheduleofvalue_DuplicateMatchingRecord property value. 
     * @returns a duplicaterecord
     */
    public get msdyn_contractlinescheduleofvalue_DuplicateMatchingRecord() {
        return this._msdyn_contractlinescheduleofvalue_DuplicateMatchingRecord;
    };
    /**
     * Sets the msdyn_contractlinescheduleofvalue_DuplicateMatchingRecord property value. 
     * @param value Value to set for the msdyn_contractlinescheduleofvalue_DuplicateMatchingRecord property.
     */
    public set msdyn_contractlinescheduleofvalue_DuplicateMatchingRecord(value: Duplicaterecord[] | undefined) {
        this._msdyn_contractlinescheduleofvalue_DuplicateMatchingRecord = value;
    };
    /**
     * Gets the msdyn_contractlinescheduleofvalue_MailboxTrackingFolders property value. 
     * @returns a mailboxtrackingfolder
     */
    public get msdyn_contractlinescheduleofvalue_MailboxTrackingFolders() {
        return this._msdyn_contractlinescheduleofvalue_MailboxTrackingFolders;
    };
    /**
     * Sets the msdyn_contractlinescheduleofvalue_MailboxTrackingFolders property value. 
     * @param value Value to set for the msdyn_contractlinescheduleofvalue_MailboxTrackingFolders property.
     */
    public set msdyn_contractlinescheduleofvalue_MailboxTrackingFolders(value: Mailboxtrackingfolder[] | undefined) {
        this._msdyn_contractlinescheduleofvalue_MailboxTrackingFolders = value;
    };
    /**
     * Gets the msdyn_contractlinescheduleofvalue_msdyn_contractlineinvoiceschedule property value. 
     * @returns a msdyn_contractlineinvoiceschedule
     */
    public get msdyn_contractlinescheduleofvalue_msdyn_contractlineinvoiceschedule() {
        return this._msdyn_contractlinescheduleofvalue_msdyn_contractlineinvoiceschedule;
    };
    /**
     * Sets the msdyn_contractlinescheduleofvalue_msdyn_contractlineinvoiceschedule property value. 
     * @param value Value to set for the msdyn_contractlinescheduleofvalue_msdyn_contractlineinvoiceschedule property.
     */
    public set msdyn_contractlinescheduleofvalue_msdyn_contractlineinvoiceschedule(value: Msdyn_contractlineinvoiceschedule[] | undefined) {
        this._msdyn_contractlinescheduleofvalue_msdyn_contractlineinvoiceschedule = value;
    };
    /**
     * Gets the msdyn_contractlinescheduleofvalue_PrincipalObjectAttributeAccesses property value. 
     * @returns a principalobjectattributeaccess
     */
    public get msdyn_contractlinescheduleofvalue_PrincipalObjectAttributeAccesses() {
        return this._msdyn_contractlinescheduleofvalue_PrincipalObjectAttributeAccesses;
    };
    /**
     * Sets the msdyn_contractlinescheduleofvalue_PrincipalObjectAttributeAccesses property value. 
     * @param value Value to set for the msdyn_contractlinescheduleofvalue_PrincipalObjectAttributeAccesses property.
     */
    public set msdyn_contractlinescheduleofvalue_PrincipalObjectAttributeAccesses(value: Principalobjectattributeaccess[] | undefined) {
        this._msdyn_contractlinescheduleofvalue_PrincipalObjectAttributeAccesses = value;
    };
    /**
     * Gets the msdyn_contractlinescheduleofvalue_ProcessSession property value. 
     * @returns a processsession
     */
    public get msdyn_contractlinescheduleofvalue_ProcessSession() {
        return this._msdyn_contractlinescheduleofvalue_ProcessSession;
    };
    /**
     * Sets the msdyn_contractlinescheduleofvalue_ProcessSession property value. 
     * @param value Value to set for the msdyn_contractlinescheduleofvalue_ProcessSession property.
     */
    public set msdyn_contractlinescheduleofvalue_ProcessSession(value: Processsession[] | undefined) {
        this._msdyn_contractlinescheduleofvalue_ProcessSession = value;
    };
    /**
     * Gets the msdyn_contractlinescheduleofvalue_SyncErrors property value. 
     * @returns a syncerror
     */
    public get msdyn_contractlinescheduleofvalue_SyncErrors() {
        return this._msdyn_contractlinescheduleofvalue_SyncErrors;
    };
    /**
     * Sets the msdyn_contractlinescheduleofvalue_SyncErrors property value. 
     * @param value Value to set for the msdyn_contractlinescheduleofvalue_SyncErrors property.
     */
    public set msdyn_contractlinescheduleofvalue_SyncErrors(value: Syncerror[] | undefined) {
        this._msdyn_contractlinescheduleofvalue_SyncErrors = value;
    };
    /**
     * Gets the msdyn_contractlinescheduleofvalueid property value. 
     * @returns a string
     */
    public get msdyn_contractlinescheduleofvalueid() {
        return this._msdyn_contractlinescheduleofvalueid;
    };
    /**
     * Sets the msdyn_contractlinescheduleofvalueid property value. 
     * @param value Value to set for the msdyn_contractlinescheduleofvalueid property.
     */
    public set msdyn_contractlinescheduleofvalueid(value: string | undefined) {
        this._msdyn_contractlinescheduleofvalueid = value;
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
     * Gets the msdyn_invoicedate property value. 
     * @returns a Date
     */
    public get msdyn_invoicedate() {
        return this._msdyn_invoicedate;
    };
    /**
     * Sets the msdyn_invoicedate property value. 
     * @param value Value to set for the msdyn_invoicedate property.
     */
    public set msdyn_invoicedate(value: Date | undefined) {
        this._msdyn_invoicedate = value;
    };
    /**
     * Gets the msdyn_invoicestatus property value. 
     * @returns a integer
     */
    public get msdyn_invoicestatus() {
        return this._msdyn_invoicestatus;
    };
    /**
     * Sets the msdyn_invoicestatus property value. 
     * @param value Value to set for the msdyn_invoicestatus property.
     */
    public set msdyn_invoicestatus(value: number | undefined) {
        this._msdyn_invoicestatus = value;
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
     * Gets the msdyn_projecttask property value. 
     * @returns a msdyn_projecttask
     */
    public get msdyn_projecttask() {
        return this._msdyn_projecttask;
    };
    /**
     * Sets the msdyn_projecttask property value. 
     * @param value Value to set for the msdyn_projecttask property.
     */
    public set msdyn_projecttask(value: Msdyn_projecttask | undefined) {
        this._msdyn_projecttask = value;
    };
    /**
     * Gets the msdyn_startdatetime property value. 
     * @returns a Date
     */
    public get msdyn_startdatetime() {
        return this._msdyn_startdatetime;
    };
    /**
     * Sets the msdyn_startdatetime property value. 
     * @param value Value to set for the msdyn_startdatetime property.
     */
    public set msdyn_startdatetime(value: Date | undefined) {
        this._msdyn_startdatetime = value;
    };
    /**
     * Gets the msdyn_tax property value. 
     * @returns a int64
     */
    public get msdyn_tax() {
        return this._msdyn_tax;
    };
    /**
     * Sets the msdyn_tax property value. 
     * @param value Value to set for the msdyn_tax property.
     */
    public set msdyn_tax(value: number | undefined) {
        this._msdyn_tax = value;
    };
    /**
     * Gets the msdyn_tax_base property value. 
     * @returns a int64
     */
    public get msdyn_tax_base() {
        return this._msdyn_tax_base;
    };
    /**
     * Sets the msdyn_tax_base property value. 
     * @param value Value to set for the msdyn_tax_base property.
     */
    public set msdyn_tax_base(value: number | undefined) {
        this._msdyn_tax_base = value;
    };
    /**
     * Gets the msdyn_transactionclassification property value. 
     * @returns a integer
     */
    public get msdyn_transactionclassification() {
        return this._msdyn_transactionclassification;
    };
    /**
     * Sets the msdyn_transactionclassification property value. 
     * @param value Value to set for the msdyn_transactionclassification property.
     */
    public set msdyn_transactionclassification(value: number | undefined) {
        this._msdyn_transactionclassification = value;
    };
    /**
     * Gets the msdyn_transactiontypecode property value. 
     * @returns a integer
     */
    public get msdyn_transactiontypecode() {
        return this._msdyn_transactiontypecode;
    };
    /**
     * Sets the msdyn_transactiontypecode property value. 
     * @param value Value to set for the msdyn_transactiontypecode property.
     */
    public set msdyn_transactiontypecode(value: number | undefined) {
        this._msdyn_transactiontypecode = value;
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
        writer.writeStringValue("_msdyn_contract_value", this._msdyn_contract_value);
        writer.writeStringValue("_msdyn_contractlineid_value", this._msdyn_contractlineid_value);
        writer.writeStringValue("_msdyn_project_value", this._msdyn_project_value);
        writer.writeStringValue("_msdyn_projecttask_value", this._msdyn_projecttask_value);
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
        writer.writeNumberValue("msdyn_amount", this.msdyn_amount);
        writer.writeNumberValue("msdyn_amount_after_tax", this.msdyn_amount_after_tax);
        writer.writeNumberValue("msdyn_amount_after_tax_base", this.msdyn_amount_after_tax_base);
        writer.writeNumberValue("msdyn_amount_base", this.msdyn_amount_base);
        writer.writeObjectValue<Salesorder>("msdyn_contract", this.msdyn_contract);
        writer.writeStringValue("msdyn_contractline", this.msdyn_contractline);
        writer.writeStringValue("msdyn_contractlinedescription", this.msdyn_contractlinedescription);
        writer.writeObjectValue<Salesorderdetail>("msdyn_ContractLineId", this.msdyn_ContractLineId);
        writer.writeCollectionOfObjectValues<Asyncoperation>("msdyn_contractlinescheduleofvalue_AsyncOperations", this.msdyn_contractlinescheduleofvalue_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("msdyn_contractlinescheduleofvalue_BulkDeleteFailures", this.msdyn_contractlinescheduleofvalue_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("msdyn_contractlinescheduleofvalue_DuplicateBaseRecord", this.msdyn_contractlinescheduleofvalue_DuplicateBaseRecord);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("msdyn_contractlinescheduleofvalue_DuplicateMatchingRecord", this.msdyn_contractlinescheduleofvalue_DuplicateMatchingRecord);
        writer.writeCollectionOfObjectValues<Mailboxtrackingfolder>("msdyn_contractlinescheduleofvalue_MailboxTrackingFolders", this.msdyn_contractlinescheduleofvalue_MailboxTrackingFolders);
        writer.writeCollectionOfObjectValues<Msdyn_contractlineinvoiceschedule>("msdyn_contractlinescheduleofvalue_msdyn_contractlineinvoiceschedule", this.msdyn_contractlinescheduleofvalue_msdyn_contractlineinvoiceschedule);
        writer.writeCollectionOfObjectValues<Principalobjectattributeaccess>("msdyn_contractlinescheduleofvalue_PrincipalObjectAttributeAccesses", this.msdyn_contractlinescheduleofvalue_PrincipalObjectAttributeAccesses);
        writer.writeCollectionOfObjectValues<Processsession>("msdyn_contractlinescheduleofvalue_ProcessSession", this.msdyn_contractlinescheduleofvalue_ProcessSession);
        writer.writeCollectionOfObjectValues<Syncerror>("msdyn_contractlinescheduleofvalue_SyncErrors", this.msdyn_contractlinescheduleofvalue_SyncErrors);
        writer.writeStringValue("msdyn_contractlinescheduleofvalueid", this.msdyn_contractlinescheduleofvalueid);
        writer.writeStringValue("msdyn_description", this.msdyn_description);
        writer.writeStringValue("msdyn_externaldescription", this.msdyn_externaldescription);
        writer.writeDateValue("msdyn_invoicedate", this.msdyn_invoicedate);
        writer.writeNumberValue("msdyn_invoicestatus", this.msdyn_invoicestatus);
        writer.writeStringValue("msdyn_name", this.msdyn_name);
        writer.writeNumberValue("msdyn_price", this.msdyn_price);
        writer.writeNumberValue("msdyn_price_base", this.msdyn_price_base);
        writer.writeObjectValue<Msdyn_project>("msdyn_project", this.msdyn_project);
        writer.writeObjectValue<Msdyn_projecttask>("msdyn_projecttask", this.msdyn_projecttask);
        writer.writeDateValue("msdyn_startdatetime", this.msdyn_startdatetime);
        writer.writeNumberValue("msdyn_tax", this.msdyn_tax);
        writer.writeNumberValue("msdyn_tax_base", this.msdyn_tax_base);
        writer.writeNumberValue("msdyn_transactionclassification", this.msdyn_transactionclassification);
        writer.writeNumberValue("msdyn_transactiontypecode", this.msdyn_transactiontypecode);
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
