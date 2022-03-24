import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createBulkdeletefailureFromDiscriminatorValue} from './createBulkdeletefailureFromDiscriminatorValue';
import {createBusinessunitFromDiscriminatorValue} from './createBusinessunitFromDiscriminatorValue';
import {createDuplicaterecordFromDiscriminatorValue} from './createDuplicaterecordFromDiscriminatorValue';
import {createMailboxtrackingfolderFromDiscriminatorValue} from './createMailboxtrackingfolderFromDiscriminatorValue';
import {createMsdyn_projecttaskFromDiscriminatorValue} from './createMsdyn_projecttaskFromDiscriminatorValue';
import {createMsdyn_quotelineanalyticsbreakdownFromDiscriminatorValue} from './createMsdyn_quotelineanalyticsbreakdownFromDiscriminatorValue';
import {createMsdyn_quotelineinvoicescheduleFromDiscriminatorValue} from './createMsdyn_quotelineinvoicescheduleFromDiscriminatorValue';
import {createPrincipalFromDiscriminatorValue} from './createPrincipalFromDiscriminatorValue';
import {createPrincipalobjectattributeaccessFromDiscriminatorValue} from './createPrincipalobjectattributeaccessFromDiscriminatorValue';
import {createProcesssessionFromDiscriminatorValue} from './createProcesssessionFromDiscriminatorValue';
import {createQuotedetailFromDiscriminatorValue} from './createQuotedetailFromDiscriminatorValue';
import {createSyncerrorFromDiscriminatorValue} from './createSyncerrorFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {createTeamFromDiscriminatorValue} from './createTeamFromDiscriminatorValue';
import {createTransactioncurrencyFromDiscriminatorValue} from './createTransactioncurrencyFromDiscriminatorValue';
import {Asyncoperation, Bulkdeletefailure, Businessunit, Crmbaseentity, Duplicaterecord, Mailboxtrackingfolder, Msdyn_projecttask, Msdyn_quotelineanalyticsbreakdown, Msdyn_quotelineinvoiceschedule, Principal, Principalobjectattributeaccess, Processsession, Quotedetail, Syncerror, Systemuser, Team, Transactioncurrency} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Msdyn_quotelinescheduleofvalue extends Crmbaseentity implements Parsable {
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private __msdyn_projecttask_value?: string | undefined;
    private __msdyn_quotelineid_value?: string | undefined;
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
    private _msdyn_invoicedate?: Date | undefined;
    private _msdyn_invoicestatus?: number | undefined;
    private _msdyn_isdataimport?: boolean | undefined;
    private _msdyn_msdyn_quotelinescheduleofvalue_msdyn_quotelineanalyticsbreakdown_QuoteLineScheduleOfValue?: Msdyn_quotelineanalyticsbreakdown[] | undefined;
    private _msdyn_msdyn_quotelinescheduleofvalue_msdyn_quotelineinvoiceschedule_QuoteLineScheduleOfValue?: Msdyn_quotelineinvoiceschedule[] | undefined;
    private _msdyn_name?: string | undefined;
    private _msdyn_projecttask?: Msdyn_projecttask | undefined;
    private _msdyn_quoteline?: string | undefined;
    private _msdyn_quotelineid?: Quotedetail | undefined;
    private _msdyn_quotelinescheduleofvalue_AsyncOperations?: Asyncoperation[] | undefined;
    private _msdyn_quotelinescheduleofvalue_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _msdyn_quotelinescheduleofvalue_DuplicateBaseRecord?: Duplicaterecord[] | undefined;
    private _msdyn_quotelinescheduleofvalue_DuplicateMatchingRecord?: Duplicaterecord[] | undefined;
    private _msdyn_quotelinescheduleofvalue_MailboxTrackingFolders?: Mailboxtrackingfolder[] | undefined;
    private _msdyn_quotelinescheduleofvalue_PrincipalObjectAttributeAccesses?: Principalobjectattributeaccess[] | undefined;
    private _msdyn_quotelinescheduleofvalue_ProcessSession?: Processsession[] | undefined;
    private _msdyn_quotelinescheduleofvalue_SyncErrors?: Syncerror[] | undefined;
    private _msdyn_quotelinescheduleofvalueid?: string | undefined;
    private _msdyn_tax?: number | undefined;
    private _msdyn_tax_base?: number | undefined;
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
     * Gets the _msdyn_quotelineid_value property value. 
     * @returns a string
     */
    public get _msdyn_quotelineid_value() {
        return this.__msdyn_quotelineid_value;
    };
    /**
     * Sets the _msdyn_quotelineid_value property value. 
     * @param value Value to set for the _msdyn_quotelineid_value property.
     */
    public set _msdyn_quotelineid_value(value: string | undefined) {
        this.__msdyn_quotelineid_value = value;
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
     * Instantiates a new msdyn_quotelinescheduleofvalue and sets the default values.
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
            "_createdby_value": (o, n) => { (o as unknown as Msdyn_quotelinescheduleofvalue)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Msdyn_quotelinescheduleofvalue)._createdonbehalfby_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Msdyn_quotelinescheduleofvalue)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Msdyn_quotelinescheduleofvalue)._modifiedonbehalfby_value = n.getStringValue(); },
            "_msdyn_projecttask_value": (o, n) => { (o as unknown as Msdyn_quotelinescheduleofvalue)._msdyn_projecttask_value = n.getStringValue(); },
            "_msdyn_quotelineid_value": (o, n) => { (o as unknown as Msdyn_quotelinescheduleofvalue)._msdyn_quotelineid_value = n.getStringValue(); },
            "_ownerid_value": (o, n) => { (o as unknown as Msdyn_quotelinescheduleofvalue)._ownerid_value = n.getStringValue(); },
            "_owningbusinessunit_value": (o, n) => { (o as unknown as Msdyn_quotelinescheduleofvalue)._owningbusinessunit_value = n.getStringValue(); },
            "_owningteam_value": (o, n) => { (o as unknown as Msdyn_quotelinescheduleofvalue)._owningteam_value = n.getStringValue(); },
            "_owninguser_value": (o, n) => { (o as unknown as Msdyn_quotelinescheduleofvalue)._owninguser_value = n.getStringValue(); },
            "_transactioncurrencyid_value": (o, n) => { (o as unknown as Msdyn_quotelinescheduleofvalue)._transactioncurrencyid_value = n.getStringValue(); },
            "createdby": (o, n) => { (o as unknown as Msdyn_quotelinescheduleofvalue).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Msdyn_quotelinescheduleofvalue).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Msdyn_quotelinescheduleofvalue).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "exchangerate": (o, n) => { (o as unknown as Msdyn_quotelinescheduleofvalue).exchangerate = n.getNumberValue(); },
            "importsequencenumber": (o, n) => { (o as unknown as Msdyn_quotelinescheduleofvalue).importsequencenumber = n.getNumberValue(); },
            "modifiedby": (o, n) => { (o as unknown as Msdyn_quotelinescheduleofvalue).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Msdyn_quotelinescheduleofvalue).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Msdyn_quotelinescheduleofvalue).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "msdyn_amount": (o, n) => { (o as unknown as Msdyn_quotelinescheduleofvalue).msdyn_amount = n.getNumberValue(); },
            "msdyn_amount_after_tax": (o, n) => { (o as unknown as Msdyn_quotelinescheduleofvalue).msdyn_amount_after_tax = n.getNumberValue(); },
            "msdyn_amount_after_tax_base": (o, n) => { (o as unknown as Msdyn_quotelinescheduleofvalue).msdyn_amount_after_tax_base = n.getNumberValue(); },
            "msdyn_amount_base": (o, n) => { (o as unknown as Msdyn_quotelinescheduleofvalue).msdyn_amount_base = n.getNumberValue(); },
            "msdyn_invoicedate": (o, n) => { (o as unknown as Msdyn_quotelinescheduleofvalue).msdyn_invoicedate = n.getDateValue(); },
            "msdyn_invoicestatus": (o, n) => { (o as unknown as Msdyn_quotelinescheduleofvalue).msdyn_invoicestatus = n.getNumberValue(); },
            "msdyn_isdataimport": (o, n) => { (o as unknown as Msdyn_quotelinescheduleofvalue).msdyn_isdataimport = n.getBooleanValue(); },
            "msdyn_msdyn_quotelinescheduleofvalue_msdyn_quotelineanalyticsbreakdown_QuoteLineScheduleOfValue": (o, n) => { (o as unknown as Msdyn_quotelinescheduleofvalue).msdyn_msdyn_quotelinescheduleofvalue_msdyn_quotelineanalyticsbreakdown_QuoteLineScheduleOfValue = n.getCollectionOfObjectValues<Msdyn_quotelineanalyticsbreakdown>(createMsdyn_quotelineanalyticsbreakdownFromDiscriminatorValue); },
            "msdyn_msdyn_quotelinescheduleofvalue_msdyn_quotelineinvoiceschedule_QuoteLineScheduleOfValue": (o, n) => { (o as unknown as Msdyn_quotelinescheduleofvalue).msdyn_msdyn_quotelinescheduleofvalue_msdyn_quotelineinvoiceschedule_QuoteLineScheduleOfValue = n.getCollectionOfObjectValues<Msdyn_quotelineinvoiceschedule>(createMsdyn_quotelineinvoicescheduleFromDiscriminatorValue); },
            "msdyn_name": (o, n) => { (o as unknown as Msdyn_quotelinescheduleofvalue).msdyn_name = n.getStringValue(); },
            "msdyn_projecttask": (o, n) => { (o as unknown as Msdyn_quotelinescheduleofvalue).msdyn_projecttask = n.getObjectValue<Msdyn_projecttask>(createMsdyn_projecttaskFromDiscriminatorValue); },
            "msdyn_quoteline": (o, n) => { (o as unknown as Msdyn_quotelinescheduleofvalue).msdyn_quoteline = n.getStringValue(); },
            "msdyn_quotelineid": (o, n) => { (o as unknown as Msdyn_quotelinescheduleofvalue).msdyn_quotelineid = n.getObjectValue<Quotedetail>(createQuotedetailFromDiscriminatorValue); },
            "msdyn_quotelinescheduleofvalue_AsyncOperations": (o, n) => { (o as unknown as Msdyn_quotelinescheduleofvalue).msdyn_quotelinescheduleofvalue_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "msdyn_quotelinescheduleofvalue_BulkDeleteFailures": (o, n) => { (o as unknown as Msdyn_quotelinescheduleofvalue).msdyn_quotelinescheduleofvalue_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "msdyn_quotelinescheduleofvalue_DuplicateBaseRecord": (o, n) => { (o as unknown as Msdyn_quotelinescheduleofvalue).msdyn_quotelinescheduleofvalue_DuplicateBaseRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "msdyn_quotelinescheduleofvalue_DuplicateMatchingRecord": (o, n) => { (o as unknown as Msdyn_quotelinescheduleofvalue).msdyn_quotelinescheduleofvalue_DuplicateMatchingRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "msdyn_quotelinescheduleofvalue_MailboxTrackingFolders": (o, n) => { (o as unknown as Msdyn_quotelinescheduleofvalue).msdyn_quotelinescheduleofvalue_MailboxTrackingFolders = n.getCollectionOfObjectValues<Mailboxtrackingfolder>(createMailboxtrackingfolderFromDiscriminatorValue); },
            "msdyn_quotelinescheduleofvalue_PrincipalObjectAttributeAccesses": (o, n) => { (o as unknown as Msdyn_quotelinescheduleofvalue).msdyn_quotelinescheduleofvalue_PrincipalObjectAttributeAccesses = n.getCollectionOfObjectValues<Principalobjectattributeaccess>(createPrincipalobjectattributeaccessFromDiscriminatorValue); },
            "msdyn_quotelinescheduleofvalue_ProcessSession": (o, n) => { (o as unknown as Msdyn_quotelinescheduleofvalue).msdyn_quotelinescheduleofvalue_ProcessSession = n.getCollectionOfObjectValues<Processsession>(createProcesssessionFromDiscriminatorValue); },
            "msdyn_quotelinescheduleofvalue_SyncErrors": (o, n) => { (o as unknown as Msdyn_quotelinescheduleofvalue).msdyn_quotelinescheduleofvalue_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "msdyn_quotelinescheduleofvalueid": (o, n) => { (o as unknown as Msdyn_quotelinescheduleofvalue).msdyn_quotelinescheduleofvalueid = n.getStringValue(); },
            "msdyn_tax": (o, n) => { (o as unknown as Msdyn_quotelinescheduleofvalue).msdyn_tax = n.getNumberValue(); },
            "msdyn_tax_base": (o, n) => { (o as unknown as Msdyn_quotelinescheduleofvalue).msdyn_tax_base = n.getNumberValue(); },
            "overriddencreatedon": (o, n) => { (o as unknown as Msdyn_quotelinescheduleofvalue).overriddencreatedon = n.getDateValue(); },
            "ownerid": (o, n) => { (o as unknown as Msdyn_quotelinescheduleofvalue).ownerid = n.getObjectValue<Principal>(createPrincipalFromDiscriminatorValue); },
            "owningbusinessunit": (o, n) => { (o as unknown as Msdyn_quotelinescheduleofvalue).owningbusinessunit = n.getObjectValue<Businessunit>(createBusinessunitFromDiscriminatorValue); },
            "owningteam": (o, n) => { (o as unknown as Msdyn_quotelinescheduleofvalue).owningteam = n.getObjectValue<Team>(createTeamFromDiscriminatorValue); },
            "owninguser": (o, n) => { (o as unknown as Msdyn_quotelinescheduleofvalue).owninguser = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "statecode": (o, n) => { (o as unknown as Msdyn_quotelinescheduleofvalue).statecode = n.getNumberValue(); },
            "statuscode": (o, n) => { (o as unknown as Msdyn_quotelinescheduleofvalue).statuscode = n.getNumberValue(); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Msdyn_quotelinescheduleofvalue).timezoneruleversionnumber = n.getNumberValue(); },
            "transactioncurrencyid": (o, n) => { (o as unknown as Msdyn_quotelinescheduleofvalue).transactioncurrencyid = n.getObjectValue<Transactioncurrency>(createTransactioncurrencyFromDiscriminatorValue); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Msdyn_quotelinescheduleofvalue).utcconversiontimezonecode = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as Msdyn_quotelinescheduleofvalue).versionnumber = n.getNumberValue(); },
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
     * Gets the msdyn_isdataimport property value. 
     * @returns a boolean
     */
    public get msdyn_isdataimport() {
        return this._msdyn_isdataimport;
    };
    /**
     * Sets the msdyn_isdataimport property value. 
     * @param value Value to set for the msdyn_isdataimport property.
     */
    public set msdyn_isdataimport(value: boolean | undefined) {
        this._msdyn_isdataimport = value;
    };
    /**
     * Gets the msdyn_msdyn_quotelinescheduleofvalue_msdyn_quotelineanalyticsbreakdown_QuoteLineScheduleOfValue property value. 
     * @returns a msdyn_quotelineanalyticsbreakdown
     */
    public get msdyn_msdyn_quotelinescheduleofvalue_msdyn_quotelineanalyticsbreakdown_QuoteLineScheduleOfValue() {
        return this._msdyn_msdyn_quotelinescheduleofvalue_msdyn_quotelineanalyticsbreakdown_QuoteLineScheduleOfValue;
    };
    /**
     * Sets the msdyn_msdyn_quotelinescheduleofvalue_msdyn_quotelineanalyticsbreakdown_QuoteLineScheduleOfValue property value. 
     * @param value Value to set for the msdyn_msdyn_quotelinescheduleofvalue_msdyn_quotelineanalyticsbreakdown_QuoteLineScheduleOfValue property.
     */
    public set msdyn_msdyn_quotelinescheduleofvalue_msdyn_quotelineanalyticsbreakdown_QuoteLineScheduleOfValue(value: Msdyn_quotelineanalyticsbreakdown[] | undefined) {
        this._msdyn_msdyn_quotelinescheduleofvalue_msdyn_quotelineanalyticsbreakdown_QuoteLineScheduleOfValue = value;
    };
    /**
     * Gets the msdyn_msdyn_quotelinescheduleofvalue_msdyn_quotelineinvoiceschedule_QuoteLineScheduleOfValue property value. 
     * @returns a msdyn_quotelineinvoiceschedule
     */
    public get msdyn_msdyn_quotelinescheduleofvalue_msdyn_quotelineinvoiceschedule_QuoteLineScheduleOfValue() {
        return this._msdyn_msdyn_quotelinescheduleofvalue_msdyn_quotelineinvoiceschedule_QuoteLineScheduleOfValue;
    };
    /**
     * Sets the msdyn_msdyn_quotelinescheduleofvalue_msdyn_quotelineinvoiceschedule_QuoteLineScheduleOfValue property value. 
     * @param value Value to set for the msdyn_msdyn_quotelinescheduleofvalue_msdyn_quotelineinvoiceschedule_QuoteLineScheduleOfValue property.
     */
    public set msdyn_msdyn_quotelinescheduleofvalue_msdyn_quotelineinvoiceschedule_QuoteLineScheduleOfValue(value: Msdyn_quotelineinvoiceschedule[] | undefined) {
        this._msdyn_msdyn_quotelinescheduleofvalue_msdyn_quotelineinvoiceschedule_QuoteLineScheduleOfValue = value;
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
     * Gets the msdyn_quoteline property value. 
     * @returns a string
     */
    public get msdyn_quoteline() {
        return this._msdyn_quoteline;
    };
    /**
     * Sets the msdyn_quoteline property value. 
     * @param value Value to set for the msdyn_quoteline property.
     */
    public set msdyn_quoteline(value: string | undefined) {
        this._msdyn_quoteline = value;
    };
    /**
     * Gets the msdyn_quotelineid property value. 
     * @returns a quotedetail
     */
    public get msdyn_quotelineid() {
        return this._msdyn_quotelineid;
    };
    /**
     * Sets the msdyn_quotelineid property value. 
     * @param value Value to set for the msdyn_quotelineid property.
     */
    public set msdyn_quotelineid(value: Quotedetail | undefined) {
        this._msdyn_quotelineid = value;
    };
    /**
     * Gets the msdyn_quotelinescheduleofvalue_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get msdyn_quotelinescheduleofvalue_AsyncOperations() {
        return this._msdyn_quotelinescheduleofvalue_AsyncOperations;
    };
    /**
     * Sets the msdyn_quotelinescheduleofvalue_AsyncOperations property value. 
     * @param value Value to set for the msdyn_quotelinescheduleofvalue_AsyncOperations property.
     */
    public set msdyn_quotelinescheduleofvalue_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._msdyn_quotelinescheduleofvalue_AsyncOperations = value;
    };
    /**
     * Gets the msdyn_quotelinescheduleofvalue_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get msdyn_quotelinescheduleofvalue_BulkDeleteFailures() {
        return this._msdyn_quotelinescheduleofvalue_BulkDeleteFailures;
    };
    /**
     * Sets the msdyn_quotelinescheduleofvalue_BulkDeleteFailures property value. 
     * @param value Value to set for the msdyn_quotelinescheduleofvalue_BulkDeleteFailures property.
     */
    public set msdyn_quotelinescheduleofvalue_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._msdyn_quotelinescheduleofvalue_BulkDeleteFailures = value;
    };
    /**
     * Gets the msdyn_quotelinescheduleofvalue_DuplicateBaseRecord property value. 
     * @returns a duplicaterecord
     */
    public get msdyn_quotelinescheduleofvalue_DuplicateBaseRecord() {
        return this._msdyn_quotelinescheduleofvalue_DuplicateBaseRecord;
    };
    /**
     * Sets the msdyn_quotelinescheduleofvalue_DuplicateBaseRecord property value. 
     * @param value Value to set for the msdyn_quotelinescheduleofvalue_DuplicateBaseRecord property.
     */
    public set msdyn_quotelinescheduleofvalue_DuplicateBaseRecord(value: Duplicaterecord[] | undefined) {
        this._msdyn_quotelinescheduleofvalue_DuplicateBaseRecord = value;
    };
    /**
     * Gets the msdyn_quotelinescheduleofvalue_DuplicateMatchingRecord property value. 
     * @returns a duplicaterecord
     */
    public get msdyn_quotelinescheduleofvalue_DuplicateMatchingRecord() {
        return this._msdyn_quotelinescheduleofvalue_DuplicateMatchingRecord;
    };
    /**
     * Sets the msdyn_quotelinescheduleofvalue_DuplicateMatchingRecord property value. 
     * @param value Value to set for the msdyn_quotelinescheduleofvalue_DuplicateMatchingRecord property.
     */
    public set msdyn_quotelinescheduleofvalue_DuplicateMatchingRecord(value: Duplicaterecord[] | undefined) {
        this._msdyn_quotelinescheduleofvalue_DuplicateMatchingRecord = value;
    };
    /**
     * Gets the msdyn_quotelinescheduleofvalue_MailboxTrackingFolders property value. 
     * @returns a mailboxtrackingfolder
     */
    public get msdyn_quotelinescheduleofvalue_MailboxTrackingFolders() {
        return this._msdyn_quotelinescheduleofvalue_MailboxTrackingFolders;
    };
    /**
     * Sets the msdyn_quotelinescheduleofvalue_MailboxTrackingFolders property value. 
     * @param value Value to set for the msdyn_quotelinescheduleofvalue_MailboxTrackingFolders property.
     */
    public set msdyn_quotelinescheduleofvalue_MailboxTrackingFolders(value: Mailboxtrackingfolder[] | undefined) {
        this._msdyn_quotelinescheduleofvalue_MailboxTrackingFolders = value;
    };
    /**
     * Gets the msdyn_quotelinescheduleofvalue_PrincipalObjectAttributeAccesses property value. 
     * @returns a principalobjectattributeaccess
     */
    public get msdyn_quotelinescheduleofvalue_PrincipalObjectAttributeAccesses() {
        return this._msdyn_quotelinescheduleofvalue_PrincipalObjectAttributeAccesses;
    };
    /**
     * Sets the msdyn_quotelinescheduleofvalue_PrincipalObjectAttributeAccesses property value. 
     * @param value Value to set for the msdyn_quotelinescheduleofvalue_PrincipalObjectAttributeAccesses property.
     */
    public set msdyn_quotelinescheduleofvalue_PrincipalObjectAttributeAccesses(value: Principalobjectattributeaccess[] | undefined) {
        this._msdyn_quotelinescheduleofvalue_PrincipalObjectAttributeAccesses = value;
    };
    /**
     * Gets the msdyn_quotelinescheduleofvalue_ProcessSession property value. 
     * @returns a processsession
     */
    public get msdyn_quotelinescheduleofvalue_ProcessSession() {
        return this._msdyn_quotelinescheduleofvalue_ProcessSession;
    };
    /**
     * Sets the msdyn_quotelinescheduleofvalue_ProcessSession property value. 
     * @param value Value to set for the msdyn_quotelinescheduleofvalue_ProcessSession property.
     */
    public set msdyn_quotelinescheduleofvalue_ProcessSession(value: Processsession[] | undefined) {
        this._msdyn_quotelinescheduleofvalue_ProcessSession = value;
    };
    /**
     * Gets the msdyn_quotelinescheduleofvalue_SyncErrors property value. 
     * @returns a syncerror
     */
    public get msdyn_quotelinescheduleofvalue_SyncErrors() {
        return this._msdyn_quotelinescheduleofvalue_SyncErrors;
    };
    /**
     * Sets the msdyn_quotelinescheduleofvalue_SyncErrors property value. 
     * @param value Value to set for the msdyn_quotelinescheduleofvalue_SyncErrors property.
     */
    public set msdyn_quotelinescheduleofvalue_SyncErrors(value: Syncerror[] | undefined) {
        this._msdyn_quotelinescheduleofvalue_SyncErrors = value;
    };
    /**
     * Gets the msdyn_quotelinescheduleofvalueid property value. 
     * @returns a string
     */
    public get msdyn_quotelinescheduleofvalueid() {
        return this._msdyn_quotelinescheduleofvalueid;
    };
    /**
     * Sets the msdyn_quotelinescheduleofvalueid property value. 
     * @param value Value to set for the msdyn_quotelinescheduleofvalueid property.
     */
    public set msdyn_quotelinescheduleofvalueid(value: string | undefined) {
        this._msdyn_quotelinescheduleofvalueid = value;
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
        writer.writeStringValue("_msdyn_projecttask_value", this._msdyn_projecttask_value);
        writer.writeStringValue("_msdyn_quotelineid_value", this._msdyn_quotelineid_value);
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
        writer.writeDateValue("msdyn_invoicedate", this.msdyn_invoicedate);
        writer.writeNumberValue("msdyn_invoicestatus", this.msdyn_invoicestatus);
        writer.writeBooleanValue("msdyn_isdataimport", this.msdyn_isdataimport);
        writer.writeCollectionOfObjectValues<Msdyn_quotelineanalyticsbreakdown>("msdyn_msdyn_quotelinescheduleofvalue_msdyn_quotelineanalyticsbreakdown_QuoteLineScheduleOfValue", this.msdyn_msdyn_quotelinescheduleofvalue_msdyn_quotelineanalyticsbreakdown_QuoteLineScheduleOfValue);
        writer.writeCollectionOfObjectValues<Msdyn_quotelineinvoiceschedule>("msdyn_msdyn_quotelinescheduleofvalue_msdyn_quotelineinvoiceschedule_QuoteLineScheduleOfValue", this.msdyn_msdyn_quotelinescheduleofvalue_msdyn_quotelineinvoiceschedule_QuoteLineScheduleOfValue);
        writer.writeStringValue("msdyn_name", this.msdyn_name);
        writer.writeObjectValue<Msdyn_projecttask>("msdyn_projecttask", this.msdyn_projecttask);
        writer.writeStringValue("msdyn_quoteline", this.msdyn_quoteline);
        writer.writeObjectValue<Quotedetail>("msdyn_quotelineid", this.msdyn_quotelineid);
        writer.writeCollectionOfObjectValues<Asyncoperation>("msdyn_quotelinescheduleofvalue_AsyncOperations", this.msdyn_quotelinescheduleofvalue_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("msdyn_quotelinescheduleofvalue_BulkDeleteFailures", this.msdyn_quotelinescheduleofvalue_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("msdyn_quotelinescheduleofvalue_DuplicateBaseRecord", this.msdyn_quotelinescheduleofvalue_DuplicateBaseRecord);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("msdyn_quotelinescheduleofvalue_DuplicateMatchingRecord", this.msdyn_quotelinescheduleofvalue_DuplicateMatchingRecord);
        writer.writeCollectionOfObjectValues<Mailboxtrackingfolder>("msdyn_quotelinescheduleofvalue_MailboxTrackingFolders", this.msdyn_quotelinescheduleofvalue_MailboxTrackingFolders);
        writer.writeCollectionOfObjectValues<Principalobjectattributeaccess>("msdyn_quotelinescheduleofvalue_PrincipalObjectAttributeAccesses", this.msdyn_quotelinescheduleofvalue_PrincipalObjectAttributeAccesses);
        writer.writeCollectionOfObjectValues<Processsession>("msdyn_quotelinescheduleofvalue_ProcessSession", this.msdyn_quotelinescheduleofvalue_ProcessSession);
        writer.writeCollectionOfObjectValues<Syncerror>("msdyn_quotelinescheduleofvalue_SyncErrors", this.msdyn_quotelinescheduleofvalue_SyncErrors);
        writer.writeStringValue("msdyn_quotelinescheduleofvalueid", this.msdyn_quotelinescheduleofvalueid);
        writer.writeNumberValue("msdyn_tax", this.msdyn_tax);
        writer.writeNumberValue("msdyn_tax_base", this.msdyn_tax_base);
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
