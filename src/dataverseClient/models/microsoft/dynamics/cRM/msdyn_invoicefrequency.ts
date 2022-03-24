import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createBulkdeletefailureFromDiscriminatorValue} from './createBulkdeletefailureFromDiscriminatorValue';
import {createDuplicaterecordFromDiscriminatorValue} from './createDuplicaterecordFromDiscriminatorValue';
import {createMailboxtrackingfolderFromDiscriminatorValue} from './createMailboxtrackingfolderFromDiscriminatorValue';
import {createMsdyn_invoicefrequencydetailFromDiscriminatorValue} from './createMsdyn_invoicefrequencydetailFromDiscriminatorValue';
import {createMsdyn_projectparameterFromDiscriminatorValue} from './createMsdyn_projectparameterFromDiscriminatorValue';
import {createOrganizationFromDiscriminatorValue} from './createOrganizationFromDiscriminatorValue';
import {createPrincipalobjectattributeaccessFromDiscriminatorValue} from './createPrincipalobjectattributeaccessFromDiscriminatorValue';
import {createProcesssessionFromDiscriminatorValue} from './createProcesssessionFromDiscriminatorValue';
import {createQuotedetailFromDiscriminatorValue} from './createQuotedetailFromDiscriminatorValue';
import {createSalesorderdetailFromDiscriminatorValue} from './createSalesorderdetailFromDiscriminatorValue';
import {createSyncerrorFromDiscriminatorValue} from './createSyncerrorFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {Asyncoperation, Bulkdeletefailure, Crmbaseentity, Duplicaterecord, Mailboxtrackingfolder, Msdyn_invoicefrequencydetail, Msdyn_projectparameter, Organization, Principalobjectattributeaccess, Processsession, Quotedetail, Salesorderdetail, Syncerror, Systemuser} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Msdyn_invoicefrequency extends Crmbaseentity implements Parsable {
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private __organizationid_value?: string | undefined;
    private _createdby?: Systemuser | undefined;
    private _createdon?: Date | undefined;
    private _createdonbehalfby?: Systemuser | undefined;
    private _importsequencenumber?: number | undefined;
    private _modifiedby?: Systemuser | undefined;
    private _modifiedon?: Date | undefined;
    private _modifiedonbehalfby?: Systemuser | undefined;
    private _msdyn_daysofrun?: number | undefined;
    private _msdyn_invoicefrequency_AsyncOperations?: Asyncoperation[] | undefined;
    private _msdyn_invoicefrequency_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _msdyn_invoicefrequency_DuplicateBaseRecord?: Duplicaterecord[] | undefined;
    private _msdyn_invoicefrequency_DuplicateMatchingRecord?: Duplicaterecord[] | undefined;
    private _msdyn_invoicefrequency_MailboxTrackingFolders?: Mailboxtrackingfolder[] | undefined;
    private _msdyn_invoicefrequency_PrincipalObjectAttributeAccesses?: Principalobjectattributeaccess[] | undefined;
    private _msdyn_invoicefrequency_ProcessSession?: Processsession[] | undefined;
    private _msdyn_invoicefrequency_SyncErrors?: Syncerror[] | undefined;
    private _msdyn_invoicefrequencyid?: string | undefined;
    private _msdyn_msdyn_invoicefrequency_msdyn_invoicefrequencydetail_invoicefrequency?: Msdyn_invoicefrequencydetail[] | undefined;
    private _msdyn_msdyn_invoicefrequency_msdyn_projectparameter_invoicefrequency?: Msdyn_projectparameter[] | undefined;
    private _msdyn_msdyn_invoicefrequency_quotedetail_invoicefrequency?: Quotedetail[] | undefined;
    private _msdyn_msdyn_invoicefrequency_salesorderdetail_invoicefrequency?: Salesorderdetail[] | undefined;
    private _msdyn_name?: string | undefined;
    private _msdyn_period?: number | undefined;
    private _msdyn_runspermonth?: number | undefined;
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
     * Instantiates a new msdyn_invoicefrequency and sets the default values.
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
            "_createdby_value": (o, n) => { (o as unknown as Msdyn_invoicefrequency)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Msdyn_invoicefrequency)._createdonbehalfby_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Msdyn_invoicefrequency)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Msdyn_invoicefrequency)._modifiedonbehalfby_value = n.getStringValue(); },
            "_organizationid_value": (o, n) => { (o as unknown as Msdyn_invoicefrequency)._organizationid_value = n.getStringValue(); },
            "createdby": (o, n) => { (o as unknown as Msdyn_invoicefrequency).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Msdyn_invoicefrequency).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Msdyn_invoicefrequency).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "importsequencenumber": (o, n) => { (o as unknown as Msdyn_invoicefrequency).importsequencenumber = n.getNumberValue(); },
            "modifiedby": (o, n) => { (o as unknown as Msdyn_invoicefrequency).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Msdyn_invoicefrequency).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Msdyn_invoicefrequency).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "msdyn_daysofrun": (o, n) => { (o as unknown as Msdyn_invoicefrequency).msdyn_daysofrun = n.getNumberValue(); },
            "msdyn_invoicefrequency_AsyncOperations": (o, n) => { (o as unknown as Msdyn_invoicefrequency).msdyn_invoicefrequency_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "msdyn_invoicefrequency_BulkDeleteFailures": (o, n) => { (o as unknown as Msdyn_invoicefrequency).msdyn_invoicefrequency_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "msdyn_invoicefrequency_DuplicateBaseRecord": (o, n) => { (o as unknown as Msdyn_invoicefrequency).msdyn_invoicefrequency_DuplicateBaseRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "msdyn_invoicefrequency_DuplicateMatchingRecord": (o, n) => { (o as unknown as Msdyn_invoicefrequency).msdyn_invoicefrequency_DuplicateMatchingRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "msdyn_invoicefrequency_MailboxTrackingFolders": (o, n) => { (o as unknown as Msdyn_invoicefrequency).msdyn_invoicefrequency_MailboxTrackingFolders = n.getCollectionOfObjectValues<Mailboxtrackingfolder>(createMailboxtrackingfolderFromDiscriminatorValue); },
            "msdyn_invoicefrequency_PrincipalObjectAttributeAccesses": (o, n) => { (o as unknown as Msdyn_invoicefrequency).msdyn_invoicefrequency_PrincipalObjectAttributeAccesses = n.getCollectionOfObjectValues<Principalobjectattributeaccess>(createPrincipalobjectattributeaccessFromDiscriminatorValue); },
            "msdyn_invoicefrequency_ProcessSession": (o, n) => { (o as unknown as Msdyn_invoicefrequency).msdyn_invoicefrequency_ProcessSession = n.getCollectionOfObjectValues<Processsession>(createProcesssessionFromDiscriminatorValue); },
            "msdyn_invoicefrequency_SyncErrors": (o, n) => { (o as unknown as Msdyn_invoicefrequency).msdyn_invoicefrequency_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "msdyn_invoicefrequencyid": (o, n) => { (o as unknown as Msdyn_invoicefrequency).msdyn_invoicefrequencyid = n.getStringValue(); },
            "msdyn_msdyn_invoicefrequency_msdyn_invoicefrequencydetail_invoicefrequency": (o, n) => { (o as unknown as Msdyn_invoicefrequency).msdyn_msdyn_invoicefrequency_msdyn_invoicefrequencydetail_invoicefrequency = n.getCollectionOfObjectValues<Msdyn_invoicefrequencydetail>(createMsdyn_invoicefrequencydetailFromDiscriminatorValue); },
            "msdyn_msdyn_invoicefrequency_msdyn_projectparameter_invoicefrequency": (o, n) => { (o as unknown as Msdyn_invoicefrequency).msdyn_msdyn_invoicefrequency_msdyn_projectparameter_invoicefrequency = n.getCollectionOfObjectValues<Msdyn_projectparameter>(createMsdyn_projectparameterFromDiscriminatorValue); },
            "msdyn_msdyn_invoicefrequency_quotedetail_invoicefrequency": (o, n) => { (o as unknown as Msdyn_invoicefrequency).msdyn_msdyn_invoicefrequency_quotedetail_invoicefrequency = n.getCollectionOfObjectValues<Quotedetail>(createQuotedetailFromDiscriminatorValue); },
            "msdyn_msdyn_invoicefrequency_salesorderdetail_invoicefrequency": (o, n) => { (o as unknown as Msdyn_invoicefrequency).msdyn_msdyn_invoicefrequency_salesorderdetail_invoicefrequency = n.getCollectionOfObjectValues<Salesorderdetail>(createSalesorderdetailFromDiscriminatorValue); },
            "msdyn_name": (o, n) => { (o as unknown as Msdyn_invoicefrequency).msdyn_name = n.getStringValue(); },
            "msdyn_period": (o, n) => { (o as unknown as Msdyn_invoicefrequency).msdyn_period = n.getNumberValue(); },
            "msdyn_runspermonth": (o, n) => { (o as unknown as Msdyn_invoicefrequency).msdyn_runspermonth = n.getNumberValue(); },
            "organizationid": (o, n) => { (o as unknown as Msdyn_invoicefrequency).organizationid = n.getObjectValue<Organization>(createOrganizationFromDiscriminatorValue); },
            "overriddencreatedon": (o, n) => { (o as unknown as Msdyn_invoicefrequency).overriddencreatedon = n.getDateValue(); },
            "statecode": (o, n) => { (o as unknown as Msdyn_invoicefrequency).statecode = n.getNumberValue(); },
            "statuscode": (o, n) => { (o as unknown as Msdyn_invoicefrequency).statuscode = n.getNumberValue(); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Msdyn_invoicefrequency).timezoneruleversionnumber = n.getNumberValue(); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Msdyn_invoicefrequency).utcconversiontimezonecode = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as Msdyn_invoicefrequency).versionnumber = n.getNumberValue(); },
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
     * Gets the msdyn_daysofrun property value. 
     * @returns a integer
     */
    public get msdyn_daysofrun() {
        return this._msdyn_daysofrun;
    };
    /**
     * Sets the msdyn_daysofrun property value. 
     * @param value Value to set for the msdyn_daysofrun property.
     */
    public set msdyn_daysofrun(value: number | undefined) {
        this._msdyn_daysofrun = value;
    };
    /**
     * Gets the msdyn_invoicefrequency_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get msdyn_invoicefrequency_AsyncOperations() {
        return this._msdyn_invoicefrequency_AsyncOperations;
    };
    /**
     * Sets the msdyn_invoicefrequency_AsyncOperations property value. 
     * @param value Value to set for the msdyn_invoicefrequency_AsyncOperations property.
     */
    public set msdyn_invoicefrequency_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._msdyn_invoicefrequency_AsyncOperations = value;
    };
    /**
     * Gets the msdyn_invoicefrequency_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get msdyn_invoicefrequency_BulkDeleteFailures() {
        return this._msdyn_invoicefrequency_BulkDeleteFailures;
    };
    /**
     * Sets the msdyn_invoicefrequency_BulkDeleteFailures property value. 
     * @param value Value to set for the msdyn_invoicefrequency_BulkDeleteFailures property.
     */
    public set msdyn_invoicefrequency_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._msdyn_invoicefrequency_BulkDeleteFailures = value;
    };
    /**
     * Gets the msdyn_invoicefrequency_DuplicateBaseRecord property value. 
     * @returns a duplicaterecord
     */
    public get msdyn_invoicefrequency_DuplicateBaseRecord() {
        return this._msdyn_invoicefrequency_DuplicateBaseRecord;
    };
    /**
     * Sets the msdyn_invoicefrequency_DuplicateBaseRecord property value. 
     * @param value Value to set for the msdyn_invoicefrequency_DuplicateBaseRecord property.
     */
    public set msdyn_invoicefrequency_DuplicateBaseRecord(value: Duplicaterecord[] | undefined) {
        this._msdyn_invoicefrequency_DuplicateBaseRecord = value;
    };
    /**
     * Gets the msdyn_invoicefrequency_DuplicateMatchingRecord property value. 
     * @returns a duplicaterecord
     */
    public get msdyn_invoicefrequency_DuplicateMatchingRecord() {
        return this._msdyn_invoicefrequency_DuplicateMatchingRecord;
    };
    /**
     * Sets the msdyn_invoicefrequency_DuplicateMatchingRecord property value. 
     * @param value Value to set for the msdyn_invoicefrequency_DuplicateMatchingRecord property.
     */
    public set msdyn_invoicefrequency_DuplicateMatchingRecord(value: Duplicaterecord[] | undefined) {
        this._msdyn_invoicefrequency_DuplicateMatchingRecord = value;
    };
    /**
     * Gets the msdyn_invoicefrequency_MailboxTrackingFolders property value. 
     * @returns a mailboxtrackingfolder
     */
    public get msdyn_invoicefrequency_MailboxTrackingFolders() {
        return this._msdyn_invoicefrequency_MailboxTrackingFolders;
    };
    /**
     * Sets the msdyn_invoicefrequency_MailboxTrackingFolders property value. 
     * @param value Value to set for the msdyn_invoicefrequency_MailboxTrackingFolders property.
     */
    public set msdyn_invoicefrequency_MailboxTrackingFolders(value: Mailboxtrackingfolder[] | undefined) {
        this._msdyn_invoicefrequency_MailboxTrackingFolders = value;
    };
    /**
     * Gets the msdyn_invoicefrequency_PrincipalObjectAttributeAccesses property value. 
     * @returns a principalobjectattributeaccess
     */
    public get msdyn_invoicefrequency_PrincipalObjectAttributeAccesses() {
        return this._msdyn_invoicefrequency_PrincipalObjectAttributeAccesses;
    };
    /**
     * Sets the msdyn_invoicefrequency_PrincipalObjectAttributeAccesses property value. 
     * @param value Value to set for the msdyn_invoicefrequency_PrincipalObjectAttributeAccesses property.
     */
    public set msdyn_invoicefrequency_PrincipalObjectAttributeAccesses(value: Principalobjectattributeaccess[] | undefined) {
        this._msdyn_invoicefrequency_PrincipalObjectAttributeAccesses = value;
    };
    /**
     * Gets the msdyn_invoicefrequency_ProcessSession property value. 
     * @returns a processsession
     */
    public get msdyn_invoicefrequency_ProcessSession() {
        return this._msdyn_invoicefrequency_ProcessSession;
    };
    /**
     * Sets the msdyn_invoicefrequency_ProcessSession property value. 
     * @param value Value to set for the msdyn_invoicefrequency_ProcessSession property.
     */
    public set msdyn_invoicefrequency_ProcessSession(value: Processsession[] | undefined) {
        this._msdyn_invoicefrequency_ProcessSession = value;
    };
    /**
     * Gets the msdyn_invoicefrequency_SyncErrors property value. 
     * @returns a syncerror
     */
    public get msdyn_invoicefrequency_SyncErrors() {
        return this._msdyn_invoicefrequency_SyncErrors;
    };
    /**
     * Sets the msdyn_invoicefrequency_SyncErrors property value. 
     * @param value Value to set for the msdyn_invoicefrequency_SyncErrors property.
     */
    public set msdyn_invoicefrequency_SyncErrors(value: Syncerror[] | undefined) {
        this._msdyn_invoicefrequency_SyncErrors = value;
    };
    /**
     * Gets the msdyn_invoicefrequencyid property value. 
     * @returns a string
     */
    public get msdyn_invoicefrequencyid() {
        return this._msdyn_invoicefrequencyid;
    };
    /**
     * Sets the msdyn_invoicefrequencyid property value. 
     * @param value Value to set for the msdyn_invoicefrequencyid property.
     */
    public set msdyn_invoicefrequencyid(value: string | undefined) {
        this._msdyn_invoicefrequencyid = value;
    };
    /**
     * Gets the msdyn_msdyn_invoicefrequency_msdyn_invoicefrequencydetail_invoicefrequency property value. 
     * @returns a msdyn_invoicefrequencydetail
     */
    public get msdyn_msdyn_invoicefrequency_msdyn_invoicefrequencydetail_invoicefrequency() {
        return this._msdyn_msdyn_invoicefrequency_msdyn_invoicefrequencydetail_invoicefrequency;
    };
    /**
     * Sets the msdyn_msdyn_invoicefrequency_msdyn_invoicefrequencydetail_invoicefrequency property value. 
     * @param value Value to set for the msdyn_msdyn_invoicefrequency_msdyn_invoicefrequencydetail_invoicefrequency property.
     */
    public set msdyn_msdyn_invoicefrequency_msdyn_invoicefrequencydetail_invoicefrequency(value: Msdyn_invoicefrequencydetail[] | undefined) {
        this._msdyn_msdyn_invoicefrequency_msdyn_invoicefrequencydetail_invoicefrequency = value;
    };
    /**
     * Gets the msdyn_msdyn_invoicefrequency_msdyn_projectparameter_invoicefrequency property value. 
     * @returns a msdyn_projectparameter
     */
    public get msdyn_msdyn_invoicefrequency_msdyn_projectparameter_invoicefrequency() {
        return this._msdyn_msdyn_invoicefrequency_msdyn_projectparameter_invoicefrequency;
    };
    /**
     * Sets the msdyn_msdyn_invoicefrequency_msdyn_projectparameter_invoicefrequency property value. 
     * @param value Value to set for the msdyn_msdyn_invoicefrequency_msdyn_projectparameter_invoicefrequency property.
     */
    public set msdyn_msdyn_invoicefrequency_msdyn_projectparameter_invoicefrequency(value: Msdyn_projectparameter[] | undefined) {
        this._msdyn_msdyn_invoicefrequency_msdyn_projectparameter_invoicefrequency = value;
    };
    /**
     * Gets the msdyn_msdyn_invoicefrequency_quotedetail_invoicefrequency property value. 
     * @returns a quotedetail
     */
    public get msdyn_msdyn_invoicefrequency_quotedetail_invoicefrequency() {
        return this._msdyn_msdyn_invoicefrequency_quotedetail_invoicefrequency;
    };
    /**
     * Sets the msdyn_msdyn_invoicefrequency_quotedetail_invoicefrequency property value. 
     * @param value Value to set for the msdyn_msdyn_invoicefrequency_quotedetail_invoicefrequency property.
     */
    public set msdyn_msdyn_invoicefrequency_quotedetail_invoicefrequency(value: Quotedetail[] | undefined) {
        this._msdyn_msdyn_invoicefrequency_quotedetail_invoicefrequency = value;
    };
    /**
     * Gets the msdyn_msdyn_invoicefrequency_salesorderdetail_invoicefrequency property value. 
     * @returns a salesorderdetail
     */
    public get msdyn_msdyn_invoicefrequency_salesorderdetail_invoicefrequency() {
        return this._msdyn_msdyn_invoicefrequency_salesorderdetail_invoicefrequency;
    };
    /**
     * Sets the msdyn_msdyn_invoicefrequency_salesorderdetail_invoicefrequency property value. 
     * @param value Value to set for the msdyn_msdyn_invoicefrequency_salesorderdetail_invoicefrequency property.
     */
    public set msdyn_msdyn_invoicefrequency_salesorderdetail_invoicefrequency(value: Salesorderdetail[] | undefined) {
        this._msdyn_msdyn_invoicefrequency_salesorderdetail_invoicefrequency = value;
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
     * Gets the msdyn_period property value. 
     * @returns a integer
     */
    public get msdyn_period() {
        return this._msdyn_period;
    };
    /**
     * Sets the msdyn_period property value. 
     * @param value Value to set for the msdyn_period property.
     */
    public set msdyn_period(value: number | undefined) {
        this._msdyn_period = value;
    };
    /**
     * Gets the msdyn_runspermonth property value. 
     * @returns a integer
     */
    public get msdyn_runspermonth() {
        return this._msdyn_runspermonth;
    };
    /**
     * Sets the msdyn_runspermonth property value. 
     * @param value Value to set for the msdyn_runspermonth property.
     */
    public set msdyn_runspermonth(value: number | undefined) {
        this._msdyn_runspermonth = value;
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
        writer.writeStringValue("_organizationid_value", this._organizationid_value);
        writer.writeObjectValue<Systemuser>("createdby", this.createdby);
        writer.writeDateValue("createdon", this.createdon);
        writer.writeObjectValue<Systemuser>("createdonbehalfby", this.createdonbehalfby);
        writer.writeNumberValue("importsequencenumber", this.importsequencenumber);
        writer.writeObjectValue<Systemuser>("modifiedby", this.modifiedby);
        writer.writeDateValue("modifiedon", this.modifiedon);
        writer.writeObjectValue<Systemuser>("modifiedonbehalfby", this.modifiedonbehalfby);
        writer.writeNumberValue("msdyn_daysofrun", this.msdyn_daysofrun);
        writer.writeCollectionOfObjectValues<Asyncoperation>("msdyn_invoicefrequency_AsyncOperations", this.msdyn_invoicefrequency_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("msdyn_invoicefrequency_BulkDeleteFailures", this.msdyn_invoicefrequency_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("msdyn_invoicefrequency_DuplicateBaseRecord", this.msdyn_invoicefrequency_DuplicateBaseRecord);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("msdyn_invoicefrequency_DuplicateMatchingRecord", this.msdyn_invoicefrequency_DuplicateMatchingRecord);
        writer.writeCollectionOfObjectValues<Mailboxtrackingfolder>("msdyn_invoicefrequency_MailboxTrackingFolders", this.msdyn_invoicefrequency_MailboxTrackingFolders);
        writer.writeCollectionOfObjectValues<Principalobjectattributeaccess>("msdyn_invoicefrequency_PrincipalObjectAttributeAccesses", this.msdyn_invoicefrequency_PrincipalObjectAttributeAccesses);
        writer.writeCollectionOfObjectValues<Processsession>("msdyn_invoicefrequency_ProcessSession", this.msdyn_invoicefrequency_ProcessSession);
        writer.writeCollectionOfObjectValues<Syncerror>("msdyn_invoicefrequency_SyncErrors", this.msdyn_invoicefrequency_SyncErrors);
        writer.writeStringValue("msdyn_invoicefrequencyid", this.msdyn_invoicefrequencyid);
        writer.writeCollectionOfObjectValues<Msdyn_invoicefrequencydetail>("msdyn_msdyn_invoicefrequency_msdyn_invoicefrequencydetail_invoicefrequency", this.msdyn_msdyn_invoicefrequency_msdyn_invoicefrequencydetail_invoicefrequency);
        writer.writeCollectionOfObjectValues<Msdyn_projectparameter>("msdyn_msdyn_invoicefrequency_msdyn_projectparameter_invoicefrequency", this.msdyn_msdyn_invoicefrequency_msdyn_projectparameter_invoicefrequency);
        writer.writeCollectionOfObjectValues<Quotedetail>("msdyn_msdyn_invoicefrequency_quotedetail_invoicefrequency", this.msdyn_msdyn_invoicefrequency_quotedetail_invoicefrequency);
        writer.writeCollectionOfObjectValues<Salesorderdetail>("msdyn_msdyn_invoicefrequency_salesorderdetail_invoicefrequency", this.msdyn_msdyn_invoicefrequency_salesorderdetail_invoicefrequency);
        writer.writeStringValue("msdyn_name", this.msdyn_name);
        writer.writeNumberValue("msdyn_period", this.msdyn_period);
        writer.writeNumberValue("msdyn_runspermonth", this.msdyn_runspermonth);
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
