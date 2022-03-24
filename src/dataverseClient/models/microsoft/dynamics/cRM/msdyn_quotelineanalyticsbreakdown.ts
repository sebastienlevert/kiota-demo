import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createBookableresourcecategoryFromDiscriminatorValue} from './createBookableresourcecategoryFromDiscriminatorValue';
import {createBulkdeletefailureFromDiscriminatorValue} from './createBulkdeletefailureFromDiscriminatorValue';
import {createBusinessunitFromDiscriminatorValue} from './createBusinessunitFromDiscriminatorValue';
import {createDuplicaterecordFromDiscriminatorValue} from './createDuplicaterecordFromDiscriminatorValue';
import {createMailboxtrackingfolderFromDiscriminatorValue} from './createMailboxtrackingfolderFromDiscriminatorValue';
import {createMsdyn_quotelinescheduleofvalueFromDiscriminatorValue} from './createMsdyn_quotelinescheduleofvalueFromDiscriminatorValue';
import {createMsdyn_quotelinetransactionFromDiscriminatorValue} from './createMsdyn_quotelinetransactionFromDiscriminatorValue';
import {createMsdyn_transactioncategoryFromDiscriminatorValue} from './createMsdyn_transactioncategoryFromDiscriminatorValue';
import {createPrincipalFromDiscriminatorValue} from './createPrincipalFromDiscriminatorValue';
import {createPrincipalobjectattributeaccessFromDiscriminatorValue} from './createPrincipalobjectattributeaccessFromDiscriminatorValue';
import {createProcesssessionFromDiscriminatorValue} from './createProcesssessionFromDiscriminatorValue';
import {createQuoteFromDiscriminatorValue} from './createQuoteFromDiscriminatorValue';
import {createSyncerrorFromDiscriminatorValue} from './createSyncerrorFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {createTeamFromDiscriminatorValue} from './createTeamFromDiscriminatorValue';
import {createTransactioncurrencyFromDiscriminatorValue} from './createTransactioncurrencyFromDiscriminatorValue';
import {Asyncoperation, Bookableresourcecategory, Bulkdeletefailure, Businessunit, Crmbaseentity, Duplicaterecord, Mailboxtrackingfolder, Msdyn_quotelinescheduleofvalue, Msdyn_quotelinetransaction, Msdyn_transactioncategory, Principal, Principalobjectattributeaccess, Processsession, Quote, Syncerror, Systemuser, Team, Transactioncurrency} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Msdyn_quotelineanalyticsbreakdown extends Crmbaseentity implements Parsable {
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private __msdyn_quote_value?: string | undefined;
    private __msdyn_quotelinedetail_value?: string | undefined;
    private __msdyn_quotelinescheduleofvalue_value?: string | undefined;
    private __msdyn_resourcecategory_value?: string | undefined;
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
    private _msdyn_amount?: number | undefined;
    private _msdyn_amount_base?: number | undefined;
    private _msdyn_billingtype?: number | undefined;
    private _msdyn_enddatetime?: Date | undefined;
    private _msdyn_name?: string | undefined;
    private _msdyn_price?: number | undefined;
    private _msdyn_price_base?: number | undefined;
    private _msdyn_Quote?: Quote | undefined;
    private _msdyn_quotelineanalyticsbreakdown_AsyncOperations?: Asyncoperation[] | undefined;
    private _msdyn_quotelineanalyticsbreakdown_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _msdyn_quotelineanalyticsbreakdown_DuplicateBaseRecord?: Duplicaterecord[] | undefined;
    private _msdyn_quotelineanalyticsbreakdown_DuplicateMatchingRecord?: Duplicaterecord[] | undefined;
    private _msdyn_quotelineanalyticsbreakdown_MailboxTrackingFolders?: Mailboxtrackingfolder[] | undefined;
    private _msdyn_quotelineanalyticsbreakdown_PrincipalObjectAttributeAccesses?: Principalobjectattributeaccess[] | undefined;
    private _msdyn_quotelineanalyticsbreakdown_ProcessSession?: Processsession[] | undefined;
    private _msdyn_quotelineanalyticsbreakdown_SyncErrors?: Syncerror[] | undefined;
    private _msdyn_quotelineanalyticsbreakdownid?: string | undefined;
    private _msdyn_QuoteLineDetail?: Msdyn_quotelinetransaction | undefined;
    private _msdyn_QuoteLineScheduleOfValue?: Msdyn_quotelinescheduleofvalue | undefined;
    private _msdyn_ResourceCategory?: Bookableresourcecategory | undefined;
    private _msdyn_startdatetime?: Date | undefined;
    private _msdyn_TransactionCategory?: Msdyn_transactioncategory | undefined;
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
     * Gets the _msdyn_quote_value property value. 
     * @returns a string
     */
    public get _msdyn_quote_value() {
        return this.__msdyn_quote_value;
    };
    /**
     * Sets the _msdyn_quote_value property value. 
     * @param value Value to set for the _msdyn_quote_value property.
     */
    public set _msdyn_quote_value(value: string | undefined) {
        this.__msdyn_quote_value = value;
    };
    /**
     * Gets the _msdyn_quotelinedetail_value property value. 
     * @returns a string
     */
    public get _msdyn_quotelinedetail_value() {
        return this.__msdyn_quotelinedetail_value;
    };
    /**
     * Sets the _msdyn_quotelinedetail_value property value. 
     * @param value Value to set for the _msdyn_quotelinedetail_value property.
     */
    public set _msdyn_quotelinedetail_value(value: string | undefined) {
        this.__msdyn_quotelinedetail_value = value;
    };
    /**
     * Gets the _msdyn_quotelinescheduleofvalue_value property value. 
     * @returns a string
     */
    public get _msdyn_quotelinescheduleofvalue_value() {
        return this.__msdyn_quotelinescheduleofvalue_value;
    };
    /**
     * Sets the _msdyn_quotelinescheduleofvalue_value property value. 
     * @param value Value to set for the _msdyn_quotelinescheduleofvalue_value property.
     */
    public set _msdyn_quotelinescheduleofvalue_value(value: string | undefined) {
        this.__msdyn_quotelinescheduleofvalue_value = value;
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
     * Instantiates a new msdyn_quotelineanalyticsbreakdown and sets the default values.
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
            "_createdby_value": (o, n) => { (o as unknown as Msdyn_quotelineanalyticsbreakdown)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Msdyn_quotelineanalyticsbreakdown)._createdonbehalfby_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Msdyn_quotelineanalyticsbreakdown)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Msdyn_quotelineanalyticsbreakdown)._modifiedonbehalfby_value = n.getStringValue(); },
            "_msdyn_quote_value": (o, n) => { (o as unknown as Msdyn_quotelineanalyticsbreakdown)._msdyn_quote_value = n.getStringValue(); },
            "_msdyn_quotelinedetail_value": (o, n) => { (o as unknown as Msdyn_quotelineanalyticsbreakdown)._msdyn_quotelinedetail_value = n.getStringValue(); },
            "_msdyn_quotelinescheduleofvalue_value": (o, n) => { (o as unknown as Msdyn_quotelineanalyticsbreakdown)._msdyn_quotelinescheduleofvalue_value = n.getStringValue(); },
            "_msdyn_resourcecategory_value": (o, n) => { (o as unknown as Msdyn_quotelineanalyticsbreakdown)._msdyn_resourcecategory_value = n.getStringValue(); },
            "_msdyn_transactioncategory_value": (o, n) => { (o as unknown as Msdyn_quotelineanalyticsbreakdown)._msdyn_transactioncategory_value = n.getStringValue(); },
            "_ownerid_value": (o, n) => { (o as unknown as Msdyn_quotelineanalyticsbreakdown)._ownerid_value = n.getStringValue(); },
            "_owningbusinessunit_value": (o, n) => { (o as unknown as Msdyn_quotelineanalyticsbreakdown)._owningbusinessunit_value = n.getStringValue(); },
            "_owningteam_value": (o, n) => { (o as unknown as Msdyn_quotelineanalyticsbreakdown)._owningteam_value = n.getStringValue(); },
            "_owninguser_value": (o, n) => { (o as unknown as Msdyn_quotelineanalyticsbreakdown)._owninguser_value = n.getStringValue(); },
            "_transactioncurrencyid_value": (o, n) => { (o as unknown as Msdyn_quotelineanalyticsbreakdown)._transactioncurrencyid_value = n.getStringValue(); },
            "createdby": (o, n) => { (o as unknown as Msdyn_quotelineanalyticsbreakdown).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Msdyn_quotelineanalyticsbreakdown).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Msdyn_quotelineanalyticsbreakdown).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "exchangerate": (o, n) => { (o as unknown as Msdyn_quotelineanalyticsbreakdown).exchangerate = n.getNumberValue(); },
            "importsequencenumber": (o, n) => { (o as unknown as Msdyn_quotelineanalyticsbreakdown).importsequencenumber = n.getNumberValue(); },
            "modifiedby": (o, n) => { (o as unknown as Msdyn_quotelineanalyticsbreakdown).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Msdyn_quotelineanalyticsbreakdown).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Msdyn_quotelineanalyticsbreakdown).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "msdyn_amount": (o, n) => { (o as unknown as Msdyn_quotelineanalyticsbreakdown).msdyn_amount = n.getNumberValue(); },
            "msdyn_amount_base": (o, n) => { (o as unknown as Msdyn_quotelineanalyticsbreakdown).msdyn_amount_base = n.getNumberValue(); },
            "msdyn_billingtype": (o, n) => { (o as unknown as Msdyn_quotelineanalyticsbreakdown).msdyn_billingtype = n.getNumberValue(); },
            "msdyn_enddatetime": (o, n) => { (o as unknown as Msdyn_quotelineanalyticsbreakdown).msdyn_enddatetime = n.getDateValue(); },
            "msdyn_name": (o, n) => { (o as unknown as Msdyn_quotelineanalyticsbreakdown).msdyn_name = n.getStringValue(); },
            "msdyn_price": (o, n) => { (o as unknown as Msdyn_quotelineanalyticsbreakdown).msdyn_price = n.getNumberValue(); },
            "msdyn_price_base": (o, n) => { (o as unknown as Msdyn_quotelineanalyticsbreakdown).msdyn_price_base = n.getNumberValue(); },
            "msdyn_Quote": (o, n) => { (o as unknown as Msdyn_quotelineanalyticsbreakdown).msdyn_Quote = n.getObjectValue<Quote>(createQuoteFromDiscriminatorValue); },
            "msdyn_quotelineanalyticsbreakdown_AsyncOperations": (o, n) => { (o as unknown as Msdyn_quotelineanalyticsbreakdown).msdyn_quotelineanalyticsbreakdown_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "msdyn_quotelineanalyticsbreakdown_BulkDeleteFailures": (o, n) => { (o as unknown as Msdyn_quotelineanalyticsbreakdown).msdyn_quotelineanalyticsbreakdown_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "msdyn_quotelineanalyticsbreakdown_DuplicateBaseRecord": (o, n) => { (o as unknown as Msdyn_quotelineanalyticsbreakdown).msdyn_quotelineanalyticsbreakdown_DuplicateBaseRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "msdyn_quotelineanalyticsbreakdown_DuplicateMatchingRecord": (o, n) => { (o as unknown as Msdyn_quotelineanalyticsbreakdown).msdyn_quotelineanalyticsbreakdown_DuplicateMatchingRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "msdyn_quotelineanalyticsbreakdown_MailboxTrackingFolders": (o, n) => { (o as unknown as Msdyn_quotelineanalyticsbreakdown).msdyn_quotelineanalyticsbreakdown_MailboxTrackingFolders = n.getCollectionOfObjectValues<Mailboxtrackingfolder>(createMailboxtrackingfolderFromDiscriminatorValue); },
            "msdyn_quotelineanalyticsbreakdown_PrincipalObjectAttributeAccesses": (o, n) => { (o as unknown as Msdyn_quotelineanalyticsbreakdown).msdyn_quotelineanalyticsbreakdown_PrincipalObjectAttributeAccesses = n.getCollectionOfObjectValues<Principalobjectattributeaccess>(createPrincipalobjectattributeaccessFromDiscriminatorValue); },
            "msdyn_quotelineanalyticsbreakdown_ProcessSession": (o, n) => { (o as unknown as Msdyn_quotelineanalyticsbreakdown).msdyn_quotelineanalyticsbreakdown_ProcessSession = n.getCollectionOfObjectValues<Processsession>(createProcesssessionFromDiscriminatorValue); },
            "msdyn_quotelineanalyticsbreakdown_SyncErrors": (o, n) => { (o as unknown as Msdyn_quotelineanalyticsbreakdown).msdyn_quotelineanalyticsbreakdown_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "msdyn_quotelineanalyticsbreakdownid": (o, n) => { (o as unknown as Msdyn_quotelineanalyticsbreakdown).msdyn_quotelineanalyticsbreakdownid = n.getStringValue(); },
            "msdyn_QuoteLineDetail": (o, n) => { (o as unknown as Msdyn_quotelineanalyticsbreakdown).msdyn_QuoteLineDetail = n.getObjectValue<Msdyn_quotelinetransaction>(createMsdyn_quotelinetransactionFromDiscriminatorValue); },
            "msdyn_QuoteLineScheduleOfValue": (o, n) => { (o as unknown as Msdyn_quotelineanalyticsbreakdown).msdyn_QuoteLineScheduleOfValue = n.getObjectValue<Msdyn_quotelinescheduleofvalue>(createMsdyn_quotelinescheduleofvalueFromDiscriminatorValue); },
            "msdyn_ResourceCategory": (o, n) => { (o as unknown as Msdyn_quotelineanalyticsbreakdown).msdyn_ResourceCategory = n.getObjectValue<Bookableresourcecategory>(createBookableresourcecategoryFromDiscriminatorValue); },
            "msdyn_startdatetime": (o, n) => { (o as unknown as Msdyn_quotelineanalyticsbreakdown).msdyn_startdatetime = n.getDateValue(); },
            "msdyn_TransactionCategory": (o, n) => { (o as unknown as Msdyn_quotelineanalyticsbreakdown).msdyn_TransactionCategory = n.getObjectValue<Msdyn_transactioncategory>(createMsdyn_transactioncategoryFromDiscriminatorValue); },
            "msdyn_transactionclassification": (o, n) => { (o as unknown as Msdyn_quotelineanalyticsbreakdown).msdyn_transactionclassification = n.getNumberValue(); },
            "msdyn_transactiontypecode": (o, n) => { (o as unknown as Msdyn_quotelineanalyticsbreakdown).msdyn_transactiontypecode = n.getNumberValue(); },
            "overriddencreatedon": (o, n) => { (o as unknown as Msdyn_quotelineanalyticsbreakdown).overriddencreatedon = n.getDateValue(); },
            "ownerid": (o, n) => { (o as unknown as Msdyn_quotelineanalyticsbreakdown).ownerid = n.getObjectValue<Principal>(createPrincipalFromDiscriminatorValue); },
            "owningbusinessunit": (o, n) => { (o as unknown as Msdyn_quotelineanalyticsbreakdown).owningbusinessunit = n.getObjectValue<Businessunit>(createBusinessunitFromDiscriminatorValue); },
            "owningteam": (o, n) => { (o as unknown as Msdyn_quotelineanalyticsbreakdown).owningteam = n.getObjectValue<Team>(createTeamFromDiscriminatorValue); },
            "owninguser": (o, n) => { (o as unknown as Msdyn_quotelineanalyticsbreakdown).owninguser = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "statecode": (o, n) => { (o as unknown as Msdyn_quotelineanalyticsbreakdown).statecode = n.getNumberValue(); },
            "statuscode": (o, n) => { (o as unknown as Msdyn_quotelineanalyticsbreakdown).statuscode = n.getNumberValue(); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Msdyn_quotelineanalyticsbreakdown).timezoneruleversionnumber = n.getNumberValue(); },
            "transactioncurrencyid": (o, n) => { (o as unknown as Msdyn_quotelineanalyticsbreakdown).transactioncurrencyid = n.getObjectValue<Transactioncurrency>(createTransactioncurrencyFromDiscriminatorValue); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Msdyn_quotelineanalyticsbreakdown).utcconversiontimezonecode = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as Msdyn_quotelineanalyticsbreakdown).versionnumber = n.getNumberValue(); },
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
     * Gets the msdyn_enddatetime property value. 
     * @returns a Date
     */
    public get msdyn_enddatetime() {
        return this._msdyn_enddatetime;
    };
    /**
     * Sets the msdyn_enddatetime property value. 
     * @param value Value to set for the msdyn_enddatetime property.
     */
    public set msdyn_enddatetime(value: Date | undefined) {
        this._msdyn_enddatetime = value;
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
     * Gets the msdyn_Quote property value. 
     * @returns a quote
     */
    public get msdyn_Quote() {
        return this._msdyn_Quote;
    };
    /**
     * Sets the msdyn_Quote property value. 
     * @param value Value to set for the msdyn_Quote property.
     */
    public set msdyn_Quote(value: Quote | undefined) {
        this._msdyn_Quote = value;
    };
    /**
     * Gets the msdyn_quotelineanalyticsbreakdown_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get msdyn_quotelineanalyticsbreakdown_AsyncOperations() {
        return this._msdyn_quotelineanalyticsbreakdown_AsyncOperations;
    };
    /**
     * Sets the msdyn_quotelineanalyticsbreakdown_AsyncOperations property value. 
     * @param value Value to set for the msdyn_quotelineanalyticsbreakdown_AsyncOperations property.
     */
    public set msdyn_quotelineanalyticsbreakdown_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._msdyn_quotelineanalyticsbreakdown_AsyncOperations = value;
    };
    /**
     * Gets the msdyn_quotelineanalyticsbreakdown_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get msdyn_quotelineanalyticsbreakdown_BulkDeleteFailures() {
        return this._msdyn_quotelineanalyticsbreakdown_BulkDeleteFailures;
    };
    /**
     * Sets the msdyn_quotelineanalyticsbreakdown_BulkDeleteFailures property value. 
     * @param value Value to set for the msdyn_quotelineanalyticsbreakdown_BulkDeleteFailures property.
     */
    public set msdyn_quotelineanalyticsbreakdown_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._msdyn_quotelineanalyticsbreakdown_BulkDeleteFailures = value;
    };
    /**
     * Gets the msdyn_quotelineanalyticsbreakdown_DuplicateBaseRecord property value. 
     * @returns a duplicaterecord
     */
    public get msdyn_quotelineanalyticsbreakdown_DuplicateBaseRecord() {
        return this._msdyn_quotelineanalyticsbreakdown_DuplicateBaseRecord;
    };
    /**
     * Sets the msdyn_quotelineanalyticsbreakdown_DuplicateBaseRecord property value. 
     * @param value Value to set for the msdyn_quotelineanalyticsbreakdown_DuplicateBaseRecord property.
     */
    public set msdyn_quotelineanalyticsbreakdown_DuplicateBaseRecord(value: Duplicaterecord[] | undefined) {
        this._msdyn_quotelineanalyticsbreakdown_DuplicateBaseRecord = value;
    };
    /**
     * Gets the msdyn_quotelineanalyticsbreakdown_DuplicateMatchingRecord property value. 
     * @returns a duplicaterecord
     */
    public get msdyn_quotelineanalyticsbreakdown_DuplicateMatchingRecord() {
        return this._msdyn_quotelineanalyticsbreakdown_DuplicateMatchingRecord;
    };
    /**
     * Sets the msdyn_quotelineanalyticsbreakdown_DuplicateMatchingRecord property value. 
     * @param value Value to set for the msdyn_quotelineanalyticsbreakdown_DuplicateMatchingRecord property.
     */
    public set msdyn_quotelineanalyticsbreakdown_DuplicateMatchingRecord(value: Duplicaterecord[] | undefined) {
        this._msdyn_quotelineanalyticsbreakdown_DuplicateMatchingRecord = value;
    };
    /**
     * Gets the msdyn_quotelineanalyticsbreakdown_MailboxTrackingFolders property value. 
     * @returns a mailboxtrackingfolder
     */
    public get msdyn_quotelineanalyticsbreakdown_MailboxTrackingFolders() {
        return this._msdyn_quotelineanalyticsbreakdown_MailboxTrackingFolders;
    };
    /**
     * Sets the msdyn_quotelineanalyticsbreakdown_MailboxTrackingFolders property value. 
     * @param value Value to set for the msdyn_quotelineanalyticsbreakdown_MailboxTrackingFolders property.
     */
    public set msdyn_quotelineanalyticsbreakdown_MailboxTrackingFolders(value: Mailboxtrackingfolder[] | undefined) {
        this._msdyn_quotelineanalyticsbreakdown_MailboxTrackingFolders = value;
    };
    /**
     * Gets the msdyn_quotelineanalyticsbreakdown_PrincipalObjectAttributeAccesses property value. 
     * @returns a principalobjectattributeaccess
     */
    public get msdyn_quotelineanalyticsbreakdown_PrincipalObjectAttributeAccesses() {
        return this._msdyn_quotelineanalyticsbreakdown_PrincipalObjectAttributeAccesses;
    };
    /**
     * Sets the msdyn_quotelineanalyticsbreakdown_PrincipalObjectAttributeAccesses property value. 
     * @param value Value to set for the msdyn_quotelineanalyticsbreakdown_PrincipalObjectAttributeAccesses property.
     */
    public set msdyn_quotelineanalyticsbreakdown_PrincipalObjectAttributeAccesses(value: Principalobjectattributeaccess[] | undefined) {
        this._msdyn_quotelineanalyticsbreakdown_PrincipalObjectAttributeAccesses = value;
    };
    /**
     * Gets the msdyn_quotelineanalyticsbreakdown_ProcessSession property value. 
     * @returns a processsession
     */
    public get msdyn_quotelineanalyticsbreakdown_ProcessSession() {
        return this._msdyn_quotelineanalyticsbreakdown_ProcessSession;
    };
    /**
     * Sets the msdyn_quotelineanalyticsbreakdown_ProcessSession property value. 
     * @param value Value to set for the msdyn_quotelineanalyticsbreakdown_ProcessSession property.
     */
    public set msdyn_quotelineanalyticsbreakdown_ProcessSession(value: Processsession[] | undefined) {
        this._msdyn_quotelineanalyticsbreakdown_ProcessSession = value;
    };
    /**
     * Gets the msdyn_quotelineanalyticsbreakdown_SyncErrors property value. 
     * @returns a syncerror
     */
    public get msdyn_quotelineanalyticsbreakdown_SyncErrors() {
        return this._msdyn_quotelineanalyticsbreakdown_SyncErrors;
    };
    /**
     * Sets the msdyn_quotelineanalyticsbreakdown_SyncErrors property value. 
     * @param value Value to set for the msdyn_quotelineanalyticsbreakdown_SyncErrors property.
     */
    public set msdyn_quotelineanalyticsbreakdown_SyncErrors(value: Syncerror[] | undefined) {
        this._msdyn_quotelineanalyticsbreakdown_SyncErrors = value;
    };
    /**
     * Gets the msdyn_quotelineanalyticsbreakdownid property value. 
     * @returns a string
     */
    public get msdyn_quotelineanalyticsbreakdownid() {
        return this._msdyn_quotelineanalyticsbreakdownid;
    };
    /**
     * Sets the msdyn_quotelineanalyticsbreakdownid property value. 
     * @param value Value to set for the msdyn_quotelineanalyticsbreakdownid property.
     */
    public set msdyn_quotelineanalyticsbreakdownid(value: string | undefined) {
        this._msdyn_quotelineanalyticsbreakdownid = value;
    };
    /**
     * Gets the msdyn_QuoteLineDetail property value. 
     * @returns a msdyn_quotelinetransaction
     */
    public get msdyn_QuoteLineDetail() {
        return this._msdyn_QuoteLineDetail;
    };
    /**
     * Sets the msdyn_QuoteLineDetail property value. 
     * @param value Value to set for the msdyn_QuoteLineDetail property.
     */
    public set msdyn_QuoteLineDetail(value: Msdyn_quotelinetransaction | undefined) {
        this._msdyn_QuoteLineDetail = value;
    };
    /**
     * Gets the msdyn_QuoteLineScheduleOfValue property value. 
     * @returns a msdyn_quotelinescheduleofvalue
     */
    public get msdyn_QuoteLineScheduleOfValue() {
        return this._msdyn_QuoteLineScheduleOfValue;
    };
    /**
     * Sets the msdyn_QuoteLineScheduleOfValue property value. 
     * @param value Value to set for the msdyn_QuoteLineScheduleOfValue property.
     */
    public set msdyn_QuoteLineScheduleOfValue(value: Msdyn_quotelinescheduleofvalue | undefined) {
        this._msdyn_QuoteLineScheduleOfValue = value;
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
        writer.writeStringValue("_msdyn_quote_value", this._msdyn_quote_value);
        writer.writeStringValue("_msdyn_quotelinedetail_value", this._msdyn_quotelinedetail_value);
        writer.writeStringValue("_msdyn_quotelinescheduleofvalue_value", this._msdyn_quotelinescheduleofvalue_value);
        writer.writeStringValue("_msdyn_resourcecategory_value", this._msdyn_resourcecategory_value);
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
        writer.writeNumberValue("msdyn_amount", this.msdyn_amount);
        writer.writeNumberValue("msdyn_amount_base", this.msdyn_amount_base);
        writer.writeNumberValue("msdyn_billingtype", this.msdyn_billingtype);
        writer.writeDateValue("msdyn_enddatetime", this.msdyn_enddatetime);
        writer.writeStringValue("msdyn_name", this.msdyn_name);
        writer.writeNumberValue("msdyn_price", this.msdyn_price);
        writer.writeNumberValue("msdyn_price_base", this.msdyn_price_base);
        writer.writeObjectValue<Quote>("msdyn_Quote", this.msdyn_Quote);
        writer.writeCollectionOfObjectValues<Asyncoperation>("msdyn_quotelineanalyticsbreakdown_AsyncOperations", this.msdyn_quotelineanalyticsbreakdown_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("msdyn_quotelineanalyticsbreakdown_BulkDeleteFailures", this.msdyn_quotelineanalyticsbreakdown_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("msdyn_quotelineanalyticsbreakdown_DuplicateBaseRecord", this.msdyn_quotelineanalyticsbreakdown_DuplicateBaseRecord);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("msdyn_quotelineanalyticsbreakdown_DuplicateMatchingRecord", this.msdyn_quotelineanalyticsbreakdown_DuplicateMatchingRecord);
        writer.writeCollectionOfObjectValues<Mailboxtrackingfolder>("msdyn_quotelineanalyticsbreakdown_MailboxTrackingFolders", this.msdyn_quotelineanalyticsbreakdown_MailboxTrackingFolders);
        writer.writeCollectionOfObjectValues<Principalobjectattributeaccess>("msdyn_quotelineanalyticsbreakdown_PrincipalObjectAttributeAccesses", this.msdyn_quotelineanalyticsbreakdown_PrincipalObjectAttributeAccesses);
        writer.writeCollectionOfObjectValues<Processsession>("msdyn_quotelineanalyticsbreakdown_ProcessSession", this.msdyn_quotelineanalyticsbreakdown_ProcessSession);
        writer.writeCollectionOfObjectValues<Syncerror>("msdyn_quotelineanalyticsbreakdown_SyncErrors", this.msdyn_quotelineanalyticsbreakdown_SyncErrors);
        writer.writeStringValue("msdyn_quotelineanalyticsbreakdownid", this.msdyn_quotelineanalyticsbreakdownid);
        writer.writeObjectValue<Msdyn_quotelinetransaction>("msdyn_QuoteLineDetail", this.msdyn_QuoteLineDetail);
        writer.writeObjectValue<Msdyn_quotelinescheduleofvalue>("msdyn_QuoteLineScheduleOfValue", this.msdyn_QuoteLineScheduleOfValue);
        writer.writeObjectValue<Bookableresourcecategory>("msdyn_ResourceCategory", this.msdyn_ResourceCategory);
        writer.writeDateValue("msdyn_startdatetime", this.msdyn_startdatetime);
        writer.writeObjectValue<Msdyn_transactioncategory>("msdyn_TransactionCategory", this.msdyn_TransactionCategory);
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
