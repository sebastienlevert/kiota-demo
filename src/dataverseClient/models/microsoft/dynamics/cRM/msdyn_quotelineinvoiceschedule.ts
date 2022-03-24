import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createBulkdeletefailureFromDiscriminatorValue} from './createBulkdeletefailureFromDiscriminatorValue';
import {createDuplicaterecordFromDiscriminatorValue} from './createDuplicaterecordFromDiscriminatorValue';
import {createMailboxtrackingfolderFromDiscriminatorValue} from './createMailboxtrackingfolderFromDiscriminatorValue';
import {createMsdyn_quotelinescheduleofvalueFromDiscriminatorValue} from './createMsdyn_quotelinescheduleofvalueFromDiscriminatorValue';
import {createOrganizationFromDiscriminatorValue} from './createOrganizationFromDiscriminatorValue';
import {createPrincipalobjectattributeaccessFromDiscriminatorValue} from './createPrincipalobjectattributeaccessFromDiscriminatorValue';
import {createProcesssessionFromDiscriminatorValue} from './createProcesssessionFromDiscriminatorValue';
import {createQuotedetailFromDiscriminatorValue} from './createQuotedetailFromDiscriminatorValue';
import {createSyncerrorFromDiscriminatorValue} from './createSyncerrorFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {Asyncoperation, Bulkdeletefailure, Crmbaseentity, Duplicaterecord, Mailboxtrackingfolder, Msdyn_quotelinescheduleofvalue, Organization, Principalobjectattributeaccess, Processsession, Quotedetail, Syncerror, Systemuser} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Msdyn_quotelineinvoiceschedule extends Crmbaseentity implements Parsable {
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private __msdyn_quotelineid_value?: string | undefined;
    private __msdyn_quotelinescheduleofvalue_value?: string | undefined;
    private __organizationid_value?: string | undefined;
    private _createdby?: Systemuser | undefined;
    private _createdon?: Date | undefined;
    private _createdonbehalfby?: Systemuser | undefined;
    private _importsequencenumber?: number | undefined;
    private _modifiedby?: Systemuser | undefined;
    private _modifiedon?: Date | undefined;
    private _modifiedonbehalfby?: Systemuser | undefined;
    private _msdyn_invoicerundate?: Date | undefined;
    private _msdyn_name?: string | undefined;
    private _msdyn_quoteline?: string | undefined;
    private _msdyn_quotelineid?: Quotedetail | undefined;
    private _msdyn_quotelineinvoiceschedule_AsyncOperations?: Asyncoperation[] | undefined;
    private _msdyn_quotelineinvoiceschedule_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _msdyn_quotelineinvoiceschedule_DuplicateBaseRecord?: Duplicaterecord[] | undefined;
    private _msdyn_quotelineinvoiceschedule_DuplicateMatchingRecord?: Duplicaterecord[] | undefined;
    private _msdyn_quotelineinvoiceschedule_MailboxTrackingFolders?: Mailboxtrackingfolder[] | undefined;
    private _msdyn_quotelineinvoiceschedule_PrincipalObjectAttributeAccesses?: Principalobjectattributeaccess[] | undefined;
    private _msdyn_quotelineinvoiceschedule_ProcessSession?: Processsession[] | undefined;
    private _msdyn_quotelineinvoiceschedule_SyncErrors?: Syncerror[] | undefined;
    private _msdyn_quotelineinvoicescheduleid?: string | undefined;
    private _msdyn_QuoteLineScheduleOfValue?: Msdyn_quotelinescheduleofvalue | undefined;
    private _msdyn_transactioncutoffdate?: Date | undefined;
    private _organizationid?: Organization | undefined;
    private _overriddencreatedon?: Date | undefined;
    private _statecode?: number | undefined;
    private _statuscode?: number | undefined;
    private _timezoneruleversionnumber?: number | undefined;
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
     * Gets the _organizationid_value property value. 
     * @returns a string
     */
    public get _organizationid_value() {
        return this.__organizationid_value;
    };
    /**
     * Sets the _organizationid_value property value. 
     * @param value Value to set for the _organizationid_value property.
     */
    public set _organizationid_value(value: string | undefined) {
        this.__organizationid_value = value;
    };
    /**
     * Instantiates a new msdyn_quotelineinvoiceschedule and sets the default values.
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
     * The deserialization information for the current model
     * @returns a Record<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Record<string, (item: T, node: ParseNode) => void> {
        return {...super.getFieldDeserializers<T>(),
            "_createdby_value": (o, n) => { (o as unknown as Msdyn_quotelineinvoiceschedule)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Msdyn_quotelineinvoiceschedule)._createdonbehalfby_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Msdyn_quotelineinvoiceschedule)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Msdyn_quotelineinvoiceschedule)._modifiedonbehalfby_value = n.getStringValue(); },
            "_msdyn_quotelineid_value": (o, n) => { (o as unknown as Msdyn_quotelineinvoiceschedule)._msdyn_quotelineid_value = n.getStringValue(); },
            "_msdyn_quotelinescheduleofvalue_value": (o, n) => { (o as unknown as Msdyn_quotelineinvoiceschedule)._msdyn_quotelinescheduleofvalue_value = n.getStringValue(); },
            "_organizationid_value": (o, n) => { (o as unknown as Msdyn_quotelineinvoiceschedule)._organizationid_value = n.getStringValue(); },
            "createdby": (o, n) => { (o as unknown as Msdyn_quotelineinvoiceschedule).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Msdyn_quotelineinvoiceschedule).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Msdyn_quotelineinvoiceschedule).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "importsequencenumber": (o, n) => { (o as unknown as Msdyn_quotelineinvoiceschedule).importsequencenumber = n.getNumberValue(); },
            "modifiedby": (o, n) => { (o as unknown as Msdyn_quotelineinvoiceschedule).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Msdyn_quotelineinvoiceschedule).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Msdyn_quotelineinvoiceschedule).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "msdyn_invoicerundate": (o, n) => { (o as unknown as Msdyn_quotelineinvoiceschedule).msdyn_invoicerundate = n.getDateValue(); },
            "msdyn_name": (o, n) => { (o as unknown as Msdyn_quotelineinvoiceschedule).msdyn_name = n.getStringValue(); },
            "msdyn_quoteline": (o, n) => { (o as unknown as Msdyn_quotelineinvoiceschedule).msdyn_quoteline = n.getStringValue(); },
            "msdyn_quotelineid": (o, n) => { (o as unknown as Msdyn_quotelineinvoiceschedule).msdyn_quotelineid = n.getObjectValue<Quotedetail>(createQuotedetailFromDiscriminatorValue); },
            "msdyn_quotelineinvoiceschedule_AsyncOperations": (o, n) => { (o as unknown as Msdyn_quotelineinvoiceschedule).msdyn_quotelineinvoiceschedule_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "msdyn_quotelineinvoiceschedule_BulkDeleteFailures": (o, n) => { (o as unknown as Msdyn_quotelineinvoiceschedule).msdyn_quotelineinvoiceschedule_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "msdyn_quotelineinvoiceschedule_DuplicateBaseRecord": (o, n) => { (o as unknown as Msdyn_quotelineinvoiceschedule).msdyn_quotelineinvoiceschedule_DuplicateBaseRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "msdyn_quotelineinvoiceschedule_DuplicateMatchingRecord": (o, n) => { (o as unknown as Msdyn_quotelineinvoiceschedule).msdyn_quotelineinvoiceschedule_DuplicateMatchingRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "msdyn_quotelineinvoiceschedule_MailboxTrackingFolders": (o, n) => { (o as unknown as Msdyn_quotelineinvoiceschedule).msdyn_quotelineinvoiceschedule_MailboxTrackingFolders = n.getCollectionOfObjectValues<Mailboxtrackingfolder>(createMailboxtrackingfolderFromDiscriminatorValue); },
            "msdyn_quotelineinvoiceschedule_PrincipalObjectAttributeAccesses": (o, n) => { (o as unknown as Msdyn_quotelineinvoiceschedule).msdyn_quotelineinvoiceschedule_PrincipalObjectAttributeAccesses = n.getCollectionOfObjectValues<Principalobjectattributeaccess>(createPrincipalobjectattributeaccessFromDiscriminatorValue); },
            "msdyn_quotelineinvoiceschedule_ProcessSession": (o, n) => { (o as unknown as Msdyn_quotelineinvoiceschedule).msdyn_quotelineinvoiceschedule_ProcessSession = n.getCollectionOfObjectValues<Processsession>(createProcesssessionFromDiscriminatorValue); },
            "msdyn_quotelineinvoiceschedule_SyncErrors": (o, n) => { (o as unknown as Msdyn_quotelineinvoiceschedule).msdyn_quotelineinvoiceschedule_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "msdyn_quotelineinvoicescheduleid": (o, n) => { (o as unknown as Msdyn_quotelineinvoiceschedule).msdyn_quotelineinvoicescheduleid = n.getStringValue(); },
            "msdyn_QuoteLineScheduleOfValue": (o, n) => { (o as unknown as Msdyn_quotelineinvoiceschedule).msdyn_QuoteLineScheduleOfValue = n.getObjectValue<Msdyn_quotelinescheduleofvalue>(createMsdyn_quotelinescheduleofvalueFromDiscriminatorValue); },
            "msdyn_transactioncutoffdate": (o, n) => { (o as unknown as Msdyn_quotelineinvoiceschedule).msdyn_transactioncutoffdate = n.getDateValue(); },
            "organizationid": (o, n) => { (o as unknown as Msdyn_quotelineinvoiceschedule).organizationid = n.getObjectValue<Organization>(createOrganizationFromDiscriminatorValue); },
            "overriddencreatedon": (o, n) => { (o as unknown as Msdyn_quotelineinvoiceschedule).overriddencreatedon = n.getDateValue(); },
            "statecode": (o, n) => { (o as unknown as Msdyn_quotelineinvoiceschedule).statecode = n.getNumberValue(); },
            "statuscode": (o, n) => { (o as unknown as Msdyn_quotelineinvoiceschedule).statuscode = n.getNumberValue(); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Msdyn_quotelineinvoiceschedule).timezoneruleversionnumber = n.getNumberValue(); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Msdyn_quotelineinvoiceschedule).utcconversiontimezonecode = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as Msdyn_quotelineinvoiceschedule).versionnumber = n.getNumberValue(); },
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
     * Gets the msdyn_invoicerundate property value. 
     * @returns a Date
     */
    public get msdyn_invoicerundate() {
        return this._msdyn_invoicerundate;
    };
    /**
     * Sets the msdyn_invoicerundate property value. 
     * @param value Value to set for the msdyn_invoicerundate property.
     */
    public set msdyn_invoicerundate(value: Date | undefined) {
        this._msdyn_invoicerundate = value;
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
     * Gets the msdyn_quotelineinvoiceschedule_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get msdyn_quotelineinvoiceschedule_AsyncOperations() {
        return this._msdyn_quotelineinvoiceschedule_AsyncOperations;
    };
    /**
     * Sets the msdyn_quotelineinvoiceschedule_AsyncOperations property value. 
     * @param value Value to set for the msdyn_quotelineinvoiceschedule_AsyncOperations property.
     */
    public set msdyn_quotelineinvoiceschedule_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._msdyn_quotelineinvoiceschedule_AsyncOperations = value;
    };
    /**
     * Gets the msdyn_quotelineinvoiceschedule_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get msdyn_quotelineinvoiceschedule_BulkDeleteFailures() {
        return this._msdyn_quotelineinvoiceschedule_BulkDeleteFailures;
    };
    /**
     * Sets the msdyn_quotelineinvoiceschedule_BulkDeleteFailures property value. 
     * @param value Value to set for the msdyn_quotelineinvoiceschedule_BulkDeleteFailures property.
     */
    public set msdyn_quotelineinvoiceschedule_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._msdyn_quotelineinvoiceschedule_BulkDeleteFailures = value;
    };
    /**
     * Gets the msdyn_quotelineinvoiceschedule_DuplicateBaseRecord property value. 
     * @returns a duplicaterecord
     */
    public get msdyn_quotelineinvoiceschedule_DuplicateBaseRecord() {
        return this._msdyn_quotelineinvoiceschedule_DuplicateBaseRecord;
    };
    /**
     * Sets the msdyn_quotelineinvoiceschedule_DuplicateBaseRecord property value. 
     * @param value Value to set for the msdyn_quotelineinvoiceschedule_DuplicateBaseRecord property.
     */
    public set msdyn_quotelineinvoiceschedule_DuplicateBaseRecord(value: Duplicaterecord[] | undefined) {
        this._msdyn_quotelineinvoiceschedule_DuplicateBaseRecord = value;
    };
    /**
     * Gets the msdyn_quotelineinvoiceschedule_DuplicateMatchingRecord property value. 
     * @returns a duplicaterecord
     */
    public get msdyn_quotelineinvoiceschedule_DuplicateMatchingRecord() {
        return this._msdyn_quotelineinvoiceschedule_DuplicateMatchingRecord;
    };
    /**
     * Sets the msdyn_quotelineinvoiceschedule_DuplicateMatchingRecord property value. 
     * @param value Value to set for the msdyn_quotelineinvoiceschedule_DuplicateMatchingRecord property.
     */
    public set msdyn_quotelineinvoiceschedule_DuplicateMatchingRecord(value: Duplicaterecord[] | undefined) {
        this._msdyn_quotelineinvoiceschedule_DuplicateMatchingRecord = value;
    };
    /**
     * Gets the msdyn_quotelineinvoiceschedule_MailboxTrackingFolders property value. 
     * @returns a mailboxtrackingfolder
     */
    public get msdyn_quotelineinvoiceschedule_MailboxTrackingFolders() {
        return this._msdyn_quotelineinvoiceschedule_MailboxTrackingFolders;
    };
    /**
     * Sets the msdyn_quotelineinvoiceschedule_MailboxTrackingFolders property value. 
     * @param value Value to set for the msdyn_quotelineinvoiceschedule_MailboxTrackingFolders property.
     */
    public set msdyn_quotelineinvoiceschedule_MailboxTrackingFolders(value: Mailboxtrackingfolder[] | undefined) {
        this._msdyn_quotelineinvoiceschedule_MailboxTrackingFolders = value;
    };
    /**
     * Gets the msdyn_quotelineinvoiceschedule_PrincipalObjectAttributeAccesses property value. 
     * @returns a principalobjectattributeaccess
     */
    public get msdyn_quotelineinvoiceschedule_PrincipalObjectAttributeAccesses() {
        return this._msdyn_quotelineinvoiceschedule_PrincipalObjectAttributeAccesses;
    };
    /**
     * Sets the msdyn_quotelineinvoiceschedule_PrincipalObjectAttributeAccesses property value. 
     * @param value Value to set for the msdyn_quotelineinvoiceschedule_PrincipalObjectAttributeAccesses property.
     */
    public set msdyn_quotelineinvoiceschedule_PrincipalObjectAttributeAccesses(value: Principalobjectattributeaccess[] | undefined) {
        this._msdyn_quotelineinvoiceschedule_PrincipalObjectAttributeAccesses = value;
    };
    /**
     * Gets the msdyn_quotelineinvoiceschedule_ProcessSession property value. 
     * @returns a processsession
     */
    public get msdyn_quotelineinvoiceschedule_ProcessSession() {
        return this._msdyn_quotelineinvoiceschedule_ProcessSession;
    };
    /**
     * Sets the msdyn_quotelineinvoiceschedule_ProcessSession property value. 
     * @param value Value to set for the msdyn_quotelineinvoiceschedule_ProcessSession property.
     */
    public set msdyn_quotelineinvoiceschedule_ProcessSession(value: Processsession[] | undefined) {
        this._msdyn_quotelineinvoiceschedule_ProcessSession = value;
    };
    /**
     * Gets the msdyn_quotelineinvoiceschedule_SyncErrors property value. 
     * @returns a syncerror
     */
    public get msdyn_quotelineinvoiceschedule_SyncErrors() {
        return this._msdyn_quotelineinvoiceschedule_SyncErrors;
    };
    /**
     * Sets the msdyn_quotelineinvoiceschedule_SyncErrors property value. 
     * @param value Value to set for the msdyn_quotelineinvoiceschedule_SyncErrors property.
     */
    public set msdyn_quotelineinvoiceschedule_SyncErrors(value: Syncerror[] | undefined) {
        this._msdyn_quotelineinvoiceschedule_SyncErrors = value;
    };
    /**
     * Gets the msdyn_quotelineinvoicescheduleid property value. 
     * @returns a string
     */
    public get msdyn_quotelineinvoicescheduleid() {
        return this._msdyn_quotelineinvoicescheduleid;
    };
    /**
     * Sets the msdyn_quotelineinvoicescheduleid property value. 
     * @param value Value to set for the msdyn_quotelineinvoicescheduleid property.
     */
    public set msdyn_quotelineinvoicescheduleid(value: string | undefined) {
        this._msdyn_quotelineinvoicescheduleid = value;
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
     * Gets the msdyn_transactioncutoffdate property value. 
     * @returns a Date
     */
    public get msdyn_transactioncutoffdate() {
        return this._msdyn_transactioncutoffdate;
    };
    /**
     * Sets the msdyn_transactioncutoffdate property value. 
     * @param value Value to set for the msdyn_transactioncutoffdate property.
     */
    public set msdyn_transactioncutoffdate(value: Date | undefined) {
        this._msdyn_transactioncutoffdate = value;
    };
    /**
     * Gets the organizationid property value. 
     * @returns a organization
     */
    public get organizationid() {
        return this._organizationid;
    };
    /**
     * Sets the organizationid property value. 
     * @param value Value to set for the organizationid property.
     */
    public set organizationid(value: Organization | undefined) {
        this._organizationid = value;
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
        writer.writeStringValue("_msdyn_quotelineid_value", this._msdyn_quotelineid_value);
        writer.writeStringValue("_msdyn_quotelinescheduleofvalue_value", this._msdyn_quotelinescheduleofvalue_value);
        writer.writeStringValue("_organizationid_value", this._organizationid_value);
        writer.writeObjectValue<Systemuser>("createdby", this.createdby);
        writer.writeDateValue("createdon", this.createdon);
        writer.writeObjectValue<Systemuser>("createdonbehalfby", this.createdonbehalfby);
        writer.writeNumberValue("importsequencenumber", this.importsequencenumber);
        writer.writeObjectValue<Systemuser>("modifiedby", this.modifiedby);
        writer.writeDateValue("modifiedon", this.modifiedon);
        writer.writeObjectValue<Systemuser>("modifiedonbehalfby", this.modifiedonbehalfby);
        writer.writeDateValue("msdyn_invoicerundate", this.msdyn_invoicerundate);
        writer.writeStringValue("msdyn_name", this.msdyn_name);
        writer.writeStringValue("msdyn_quoteline", this.msdyn_quoteline);
        writer.writeObjectValue<Quotedetail>("msdyn_quotelineid", this.msdyn_quotelineid);
        writer.writeCollectionOfObjectValues<Asyncoperation>("msdyn_quotelineinvoiceschedule_AsyncOperations", this.msdyn_quotelineinvoiceschedule_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("msdyn_quotelineinvoiceschedule_BulkDeleteFailures", this.msdyn_quotelineinvoiceschedule_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("msdyn_quotelineinvoiceschedule_DuplicateBaseRecord", this.msdyn_quotelineinvoiceschedule_DuplicateBaseRecord);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("msdyn_quotelineinvoiceschedule_DuplicateMatchingRecord", this.msdyn_quotelineinvoiceschedule_DuplicateMatchingRecord);
        writer.writeCollectionOfObjectValues<Mailboxtrackingfolder>("msdyn_quotelineinvoiceschedule_MailboxTrackingFolders", this.msdyn_quotelineinvoiceschedule_MailboxTrackingFolders);
        writer.writeCollectionOfObjectValues<Principalobjectattributeaccess>("msdyn_quotelineinvoiceschedule_PrincipalObjectAttributeAccesses", this.msdyn_quotelineinvoiceschedule_PrincipalObjectAttributeAccesses);
        writer.writeCollectionOfObjectValues<Processsession>("msdyn_quotelineinvoiceschedule_ProcessSession", this.msdyn_quotelineinvoiceschedule_ProcessSession);
        writer.writeCollectionOfObjectValues<Syncerror>("msdyn_quotelineinvoiceschedule_SyncErrors", this.msdyn_quotelineinvoiceschedule_SyncErrors);
        writer.writeStringValue("msdyn_quotelineinvoicescheduleid", this.msdyn_quotelineinvoicescheduleid);
        writer.writeObjectValue<Msdyn_quotelinescheduleofvalue>("msdyn_QuoteLineScheduleOfValue", this.msdyn_QuoteLineScheduleOfValue);
        writer.writeDateValue("msdyn_transactioncutoffdate", this.msdyn_transactioncutoffdate);
        writer.writeObjectValue<Organization>("organizationid", this.organizationid);
        writer.writeDateValue("overriddencreatedon", this.overriddencreatedon);
        writer.writeNumberValue("statecode", this.statecode);
        writer.writeNumberValue("statuscode", this.statuscode);
        writer.writeNumberValue("timezoneruleversionnumber", this.timezoneruleversionnumber);
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
