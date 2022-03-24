import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createBulkdeletefailureFromDiscriminatorValue} from './createBulkdeletefailureFromDiscriminatorValue';
import {createDuplicaterecordFromDiscriminatorValue} from './createDuplicaterecordFromDiscriminatorValue';
import {createInvoiceFromDiscriminatorValue} from './createInvoiceFromDiscriminatorValue';
import {createMailboxtrackingfolderFromDiscriminatorValue} from './createMailboxtrackingfolderFromDiscriminatorValue';
import {createMsdyn_contractlinescheduleofvalueFromDiscriminatorValue} from './createMsdyn_contractlinescheduleofvalueFromDiscriminatorValue';
import {createOrganizationFromDiscriminatorValue} from './createOrganizationFromDiscriminatorValue';
import {createPrincipalobjectattributeaccessFromDiscriminatorValue} from './createPrincipalobjectattributeaccessFromDiscriminatorValue';
import {createProcesssessionFromDiscriminatorValue} from './createProcesssessionFromDiscriminatorValue';
import {createSalesorderdetailFromDiscriminatorValue} from './createSalesorderdetailFromDiscriminatorValue';
import {createSyncerrorFromDiscriminatorValue} from './createSyncerrorFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {Asyncoperation, Bulkdeletefailure, Crmbaseentity, Duplicaterecord, Invoice, Mailboxtrackingfolder, Msdyn_contractlinescheduleofvalue, Organization, Principalobjectattributeaccess, Processsession, Salesorderdetail, Syncerror, Systemuser} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Msdyn_contractlineinvoiceschedule extends Crmbaseentity implements Parsable {
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private __msdyn_contractlineid_value?: string | undefined;
    private __msdyn_contractlinescheduleofvalue_value?: string | undefined;
    private __msdyn_invoice_value?: string | undefined;
    private __organizationid_value?: string | undefined;
    private _createdby?: Systemuser | undefined;
    private _createdon?: Date | undefined;
    private _createdonbehalfby?: Systemuser | undefined;
    private _importsequencenumber?: number | undefined;
    private _modifiedby?: Systemuser | undefined;
    private _modifiedon?: Date | undefined;
    private _modifiedonbehalfby?: Systemuser | undefined;
    private _msdyn_contractline?: string | undefined;
    private _msdyn_ContractLineId?: Salesorderdetail | undefined;
    private _msdyn_contractlineinvoiceschedule_AsyncOperations?: Asyncoperation[] | undefined;
    private _msdyn_contractlineinvoiceschedule_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _msdyn_contractlineinvoiceschedule_DuplicateBaseRecord?: Duplicaterecord[] | undefined;
    private _msdyn_contractlineinvoiceschedule_DuplicateMatchingRecord?: Duplicaterecord[] | undefined;
    private _msdyn_contractlineinvoiceschedule_MailboxTrackingFolders?: Mailboxtrackingfolder[] | undefined;
    private _msdyn_contractlineinvoiceschedule_PrincipalObjectAttributeAccesses?: Principalobjectattributeaccess[] | undefined;
    private _msdyn_contractlineinvoiceschedule_ProcessSession?: Processsession[] | undefined;
    private _msdyn_contractlineinvoiceschedule_SyncErrors?: Syncerror[] | undefined;
    private _msdyn_contractlineinvoicescheduleid?: string | undefined;
    private _msdyn_ContractLineScheduleOfValue?: Msdyn_contractlinescheduleofvalue | undefined;
    private _msdyn_Invoice?: Invoice | undefined;
    private _msdyn_invoicerundate?: Date | undefined;
    private _msdyn_invoicerunstatus?: number | undefined;
    private _msdyn_name?: string | undefined;
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
     * Gets the _msdyn_contractlinescheduleofvalue_value property value. 
     * @returns a string
     */
    public get _msdyn_contractlinescheduleofvalue_value() {
        return this.__msdyn_contractlinescheduleofvalue_value;
    };
    /**
     * Sets the _msdyn_contractlinescheduleofvalue_value property value. 
     * @param value Value to set for the _msdyn_contractlinescheduleofvalue_value property.
     */
    public set _msdyn_contractlinescheduleofvalue_value(value: string | undefined) {
        this.__msdyn_contractlinescheduleofvalue_value = value;
    };
    /**
     * Gets the _msdyn_invoice_value property value. 
     * @returns a string
     */
    public get _msdyn_invoice_value() {
        return this.__msdyn_invoice_value;
    };
    /**
     * Sets the _msdyn_invoice_value property value. 
     * @param value Value to set for the _msdyn_invoice_value property.
     */
    public set _msdyn_invoice_value(value: string | undefined) {
        this.__msdyn_invoice_value = value;
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
     * Instantiates a new msdyn_contractlineinvoiceschedule and sets the default values.
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
            "_createdby_value": (o, n) => { (o as unknown as Msdyn_contractlineinvoiceschedule)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Msdyn_contractlineinvoiceschedule)._createdonbehalfby_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Msdyn_contractlineinvoiceschedule)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Msdyn_contractlineinvoiceschedule)._modifiedonbehalfby_value = n.getStringValue(); },
            "_msdyn_contractlineid_value": (o, n) => { (o as unknown as Msdyn_contractlineinvoiceschedule)._msdyn_contractlineid_value = n.getStringValue(); },
            "_msdyn_contractlinescheduleofvalue_value": (o, n) => { (o as unknown as Msdyn_contractlineinvoiceschedule)._msdyn_contractlinescheduleofvalue_value = n.getStringValue(); },
            "_msdyn_invoice_value": (o, n) => { (o as unknown as Msdyn_contractlineinvoiceschedule)._msdyn_invoice_value = n.getStringValue(); },
            "_organizationid_value": (o, n) => { (o as unknown as Msdyn_contractlineinvoiceschedule)._organizationid_value = n.getStringValue(); },
            "createdby": (o, n) => { (o as unknown as Msdyn_contractlineinvoiceschedule).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Msdyn_contractlineinvoiceschedule).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Msdyn_contractlineinvoiceschedule).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "importsequencenumber": (o, n) => { (o as unknown as Msdyn_contractlineinvoiceschedule).importsequencenumber = n.getNumberValue(); },
            "modifiedby": (o, n) => { (o as unknown as Msdyn_contractlineinvoiceschedule).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Msdyn_contractlineinvoiceschedule).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Msdyn_contractlineinvoiceschedule).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "msdyn_contractline": (o, n) => { (o as unknown as Msdyn_contractlineinvoiceschedule).msdyn_contractline = n.getStringValue(); },
            "msdyn_ContractLineId": (o, n) => { (o as unknown as Msdyn_contractlineinvoiceschedule).msdyn_ContractLineId = n.getObjectValue<Salesorderdetail>(createSalesorderdetailFromDiscriminatorValue); },
            "msdyn_contractlineinvoiceschedule_AsyncOperations": (o, n) => { (o as unknown as Msdyn_contractlineinvoiceschedule).msdyn_contractlineinvoiceschedule_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "msdyn_contractlineinvoiceschedule_BulkDeleteFailures": (o, n) => { (o as unknown as Msdyn_contractlineinvoiceschedule).msdyn_contractlineinvoiceschedule_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "msdyn_contractlineinvoiceschedule_DuplicateBaseRecord": (o, n) => { (o as unknown as Msdyn_contractlineinvoiceschedule).msdyn_contractlineinvoiceschedule_DuplicateBaseRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "msdyn_contractlineinvoiceschedule_DuplicateMatchingRecord": (o, n) => { (o as unknown as Msdyn_contractlineinvoiceschedule).msdyn_contractlineinvoiceschedule_DuplicateMatchingRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "msdyn_contractlineinvoiceschedule_MailboxTrackingFolders": (o, n) => { (o as unknown as Msdyn_contractlineinvoiceschedule).msdyn_contractlineinvoiceschedule_MailboxTrackingFolders = n.getCollectionOfObjectValues<Mailboxtrackingfolder>(createMailboxtrackingfolderFromDiscriminatorValue); },
            "msdyn_contractlineinvoiceschedule_PrincipalObjectAttributeAccesses": (o, n) => { (o as unknown as Msdyn_contractlineinvoiceschedule).msdyn_contractlineinvoiceschedule_PrincipalObjectAttributeAccesses = n.getCollectionOfObjectValues<Principalobjectattributeaccess>(createPrincipalobjectattributeaccessFromDiscriminatorValue); },
            "msdyn_contractlineinvoiceschedule_ProcessSession": (o, n) => { (o as unknown as Msdyn_contractlineinvoiceschedule).msdyn_contractlineinvoiceschedule_ProcessSession = n.getCollectionOfObjectValues<Processsession>(createProcesssessionFromDiscriminatorValue); },
            "msdyn_contractlineinvoiceschedule_SyncErrors": (o, n) => { (o as unknown as Msdyn_contractlineinvoiceschedule).msdyn_contractlineinvoiceschedule_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "msdyn_contractlineinvoicescheduleid": (o, n) => { (o as unknown as Msdyn_contractlineinvoiceschedule).msdyn_contractlineinvoicescheduleid = n.getStringValue(); },
            "msdyn_ContractLineScheduleOfValue": (o, n) => { (o as unknown as Msdyn_contractlineinvoiceschedule).msdyn_ContractLineScheduleOfValue = n.getObjectValue<Msdyn_contractlinescheduleofvalue>(createMsdyn_contractlinescheduleofvalueFromDiscriminatorValue); },
            "msdyn_Invoice": (o, n) => { (o as unknown as Msdyn_contractlineinvoiceschedule).msdyn_Invoice = n.getObjectValue<Invoice>(createInvoiceFromDiscriminatorValue); },
            "msdyn_invoicerundate": (o, n) => { (o as unknown as Msdyn_contractlineinvoiceschedule).msdyn_invoicerundate = n.getDateValue(); },
            "msdyn_invoicerunstatus": (o, n) => { (o as unknown as Msdyn_contractlineinvoiceschedule).msdyn_invoicerunstatus = n.getNumberValue(); },
            "msdyn_name": (o, n) => { (o as unknown as Msdyn_contractlineinvoiceschedule).msdyn_name = n.getStringValue(); },
            "msdyn_transactioncutoffdate": (o, n) => { (o as unknown as Msdyn_contractlineinvoiceschedule).msdyn_transactioncutoffdate = n.getDateValue(); },
            "organizationid": (o, n) => { (o as unknown as Msdyn_contractlineinvoiceschedule).organizationid = n.getObjectValue<Organization>(createOrganizationFromDiscriminatorValue); },
            "overriddencreatedon": (o, n) => { (o as unknown as Msdyn_contractlineinvoiceschedule).overriddencreatedon = n.getDateValue(); },
            "statecode": (o, n) => { (o as unknown as Msdyn_contractlineinvoiceschedule).statecode = n.getNumberValue(); },
            "statuscode": (o, n) => { (o as unknown as Msdyn_contractlineinvoiceschedule).statuscode = n.getNumberValue(); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Msdyn_contractlineinvoiceschedule).timezoneruleversionnumber = n.getNumberValue(); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Msdyn_contractlineinvoiceschedule).utcconversiontimezonecode = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as Msdyn_contractlineinvoiceschedule).versionnumber = n.getNumberValue(); },
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
     * Gets the msdyn_contractlineinvoiceschedule_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get msdyn_contractlineinvoiceschedule_AsyncOperations() {
        return this._msdyn_contractlineinvoiceschedule_AsyncOperations;
    };
    /**
     * Sets the msdyn_contractlineinvoiceschedule_AsyncOperations property value. 
     * @param value Value to set for the msdyn_contractlineinvoiceschedule_AsyncOperations property.
     */
    public set msdyn_contractlineinvoiceschedule_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._msdyn_contractlineinvoiceschedule_AsyncOperations = value;
    };
    /**
     * Gets the msdyn_contractlineinvoiceschedule_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get msdyn_contractlineinvoiceschedule_BulkDeleteFailures() {
        return this._msdyn_contractlineinvoiceschedule_BulkDeleteFailures;
    };
    /**
     * Sets the msdyn_contractlineinvoiceschedule_BulkDeleteFailures property value. 
     * @param value Value to set for the msdyn_contractlineinvoiceschedule_BulkDeleteFailures property.
     */
    public set msdyn_contractlineinvoiceschedule_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._msdyn_contractlineinvoiceschedule_BulkDeleteFailures = value;
    };
    /**
     * Gets the msdyn_contractlineinvoiceschedule_DuplicateBaseRecord property value. 
     * @returns a duplicaterecord
     */
    public get msdyn_contractlineinvoiceschedule_DuplicateBaseRecord() {
        return this._msdyn_contractlineinvoiceschedule_DuplicateBaseRecord;
    };
    /**
     * Sets the msdyn_contractlineinvoiceschedule_DuplicateBaseRecord property value. 
     * @param value Value to set for the msdyn_contractlineinvoiceschedule_DuplicateBaseRecord property.
     */
    public set msdyn_contractlineinvoiceschedule_DuplicateBaseRecord(value: Duplicaterecord[] | undefined) {
        this._msdyn_contractlineinvoiceschedule_DuplicateBaseRecord = value;
    };
    /**
     * Gets the msdyn_contractlineinvoiceschedule_DuplicateMatchingRecord property value. 
     * @returns a duplicaterecord
     */
    public get msdyn_contractlineinvoiceschedule_DuplicateMatchingRecord() {
        return this._msdyn_contractlineinvoiceschedule_DuplicateMatchingRecord;
    };
    /**
     * Sets the msdyn_contractlineinvoiceschedule_DuplicateMatchingRecord property value. 
     * @param value Value to set for the msdyn_contractlineinvoiceschedule_DuplicateMatchingRecord property.
     */
    public set msdyn_contractlineinvoiceschedule_DuplicateMatchingRecord(value: Duplicaterecord[] | undefined) {
        this._msdyn_contractlineinvoiceschedule_DuplicateMatchingRecord = value;
    };
    /**
     * Gets the msdyn_contractlineinvoiceschedule_MailboxTrackingFolders property value. 
     * @returns a mailboxtrackingfolder
     */
    public get msdyn_contractlineinvoiceschedule_MailboxTrackingFolders() {
        return this._msdyn_contractlineinvoiceschedule_MailboxTrackingFolders;
    };
    /**
     * Sets the msdyn_contractlineinvoiceschedule_MailboxTrackingFolders property value. 
     * @param value Value to set for the msdyn_contractlineinvoiceschedule_MailboxTrackingFolders property.
     */
    public set msdyn_contractlineinvoiceschedule_MailboxTrackingFolders(value: Mailboxtrackingfolder[] | undefined) {
        this._msdyn_contractlineinvoiceschedule_MailboxTrackingFolders = value;
    };
    /**
     * Gets the msdyn_contractlineinvoiceschedule_PrincipalObjectAttributeAccesses property value. 
     * @returns a principalobjectattributeaccess
     */
    public get msdyn_contractlineinvoiceschedule_PrincipalObjectAttributeAccesses() {
        return this._msdyn_contractlineinvoiceschedule_PrincipalObjectAttributeAccesses;
    };
    /**
     * Sets the msdyn_contractlineinvoiceschedule_PrincipalObjectAttributeAccesses property value. 
     * @param value Value to set for the msdyn_contractlineinvoiceschedule_PrincipalObjectAttributeAccesses property.
     */
    public set msdyn_contractlineinvoiceschedule_PrincipalObjectAttributeAccesses(value: Principalobjectattributeaccess[] | undefined) {
        this._msdyn_contractlineinvoiceschedule_PrincipalObjectAttributeAccesses = value;
    };
    /**
     * Gets the msdyn_contractlineinvoiceschedule_ProcessSession property value. 
     * @returns a processsession
     */
    public get msdyn_contractlineinvoiceschedule_ProcessSession() {
        return this._msdyn_contractlineinvoiceschedule_ProcessSession;
    };
    /**
     * Sets the msdyn_contractlineinvoiceschedule_ProcessSession property value. 
     * @param value Value to set for the msdyn_contractlineinvoiceschedule_ProcessSession property.
     */
    public set msdyn_contractlineinvoiceschedule_ProcessSession(value: Processsession[] | undefined) {
        this._msdyn_contractlineinvoiceschedule_ProcessSession = value;
    };
    /**
     * Gets the msdyn_contractlineinvoiceschedule_SyncErrors property value. 
     * @returns a syncerror
     */
    public get msdyn_contractlineinvoiceschedule_SyncErrors() {
        return this._msdyn_contractlineinvoiceschedule_SyncErrors;
    };
    /**
     * Sets the msdyn_contractlineinvoiceschedule_SyncErrors property value. 
     * @param value Value to set for the msdyn_contractlineinvoiceschedule_SyncErrors property.
     */
    public set msdyn_contractlineinvoiceschedule_SyncErrors(value: Syncerror[] | undefined) {
        this._msdyn_contractlineinvoiceschedule_SyncErrors = value;
    };
    /**
     * Gets the msdyn_contractlineinvoicescheduleid property value. 
     * @returns a string
     */
    public get msdyn_contractlineinvoicescheduleid() {
        return this._msdyn_contractlineinvoicescheduleid;
    };
    /**
     * Sets the msdyn_contractlineinvoicescheduleid property value. 
     * @param value Value to set for the msdyn_contractlineinvoicescheduleid property.
     */
    public set msdyn_contractlineinvoicescheduleid(value: string | undefined) {
        this._msdyn_contractlineinvoicescheduleid = value;
    };
    /**
     * Gets the msdyn_ContractLineScheduleOfValue property value. 
     * @returns a msdyn_contractlinescheduleofvalue
     */
    public get msdyn_ContractLineScheduleOfValue() {
        return this._msdyn_ContractLineScheduleOfValue;
    };
    /**
     * Sets the msdyn_ContractLineScheduleOfValue property value. 
     * @param value Value to set for the msdyn_ContractLineScheduleOfValue property.
     */
    public set msdyn_ContractLineScheduleOfValue(value: Msdyn_contractlinescheduleofvalue | undefined) {
        this._msdyn_ContractLineScheduleOfValue = value;
    };
    /**
     * Gets the msdyn_Invoice property value. 
     * @returns a invoice
     */
    public get msdyn_Invoice() {
        return this._msdyn_Invoice;
    };
    /**
     * Sets the msdyn_Invoice property value. 
     * @param value Value to set for the msdyn_Invoice property.
     */
    public set msdyn_Invoice(value: Invoice | undefined) {
        this._msdyn_Invoice = value;
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
     * Gets the msdyn_invoicerunstatus property value. 
     * @returns a integer
     */
    public get msdyn_invoicerunstatus() {
        return this._msdyn_invoicerunstatus;
    };
    /**
     * Sets the msdyn_invoicerunstatus property value. 
     * @param value Value to set for the msdyn_invoicerunstatus property.
     */
    public set msdyn_invoicerunstatus(value: number | undefined) {
        this._msdyn_invoicerunstatus = value;
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
        writer.writeStringValue("_msdyn_contractlineid_value", this._msdyn_contractlineid_value);
        writer.writeStringValue("_msdyn_contractlinescheduleofvalue_value", this._msdyn_contractlinescheduleofvalue_value);
        writer.writeStringValue("_msdyn_invoice_value", this._msdyn_invoice_value);
        writer.writeStringValue("_organizationid_value", this._organizationid_value);
        writer.writeObjectValue<Systemuser>("createdby", this.createdby);
        writer.writeDateValue("createdon", this.createdon);
        writer.writeObjectValue<Systemuser>("createdonbehalfby", this.createdonbehalfby);
        writer.writeNumberValue("importsequencenumber", this.importsequencenumber);
        writer.writeObjectValue<Systemuser>("modifiedby", this.modifiedby);
        writer.writeDateValue("modifiedon", this.modifiedon);
        writer.writeObjectValue<Systemuser>("modifiedonbehalfby", this.modifiedonbehalfby);
        writer.writeStringValue("msdyn_contractline", this.msdyn_contractline);
        writer.writeObjectValue<Salesorderdetail>("msdyn_ContractLineId", this.msdyn_ContractLineId);
        writer.writeCollectionOfObjectValues<Asyncoperation>("msdyn_contractlineinvoiceschedule_AsyncOperations", this.msdyn_contractlineinvoiceschedule_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("msdyn_contractlineinvoiceschedule_BulkDeleteFailures", this.msdyn_contractlineinvoiceschedule_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("msdyn_contractlineinvoiceschedule_DuplicateBaseRecord", this.msdyn_contractlineinvoiceschedule_DuplicateBaseRecord);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("msdyn_contractlineinvoiceschedule_DuplicateMatchingRecord", this.msdyn_contractlineinvoiceschedule_DuplicateMatchingRecord);
        writer.writeCollectionOfObjectValues<Mailboxtrackingfolder>("msdyn_contractlineinvoiceschedule_MailboxTrackingFolders", this.msdyn_contractlineinvoiceschedule_MailboxTrackingFolders);
        writer.writeCollectionOfObjectValues<Principalobjectattributeaccess>("msdyn_contractlineinvoiceschedule_PrincipalObjectAttributeAccesses", this.msdyn_contractlineinvoiceschedule_PrincipalObjectAttributeAccesses);
        writer.writeCollectionOfObjectValues<Processsession>("msdyn_contractlineinvoiceschedule_ProcessSession", this.msdyn_contractlineinvoiceschedule_ProcessSession);
        writer.writeCollectionOfObjectValues<Syncerror>("msdyn_contractlineinvoiceschedule_SyncErrors", this.msdyn_contractlineinvoiceschedule_SyncErrors);
        writer.writeStringValue("msdyn_contractlineinvoicescheduleid", this.msdyn_contractlineinvoicescheduleid);
        writer.writeObjectValue<Msdyn_contractlinescheduleofvalue>("msdyn_ContractLineScheduleOfValue", this.msdyn_ContractLineScheduleOfValue);
        writer.writeObjectValue<Invoice>("msdyn_Invoice", this.msdyn_Invoice);
        writer.writeDateValue("msdyn_invoicerundate", this.msdyn_invoicerundate);
        writer.writeNumberValue("msdyn_invoicerunstatus", this.msdyn_invoicerunstatus);
        writer.writeStringValue("msdyn_name", this.msdyn_name);
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
