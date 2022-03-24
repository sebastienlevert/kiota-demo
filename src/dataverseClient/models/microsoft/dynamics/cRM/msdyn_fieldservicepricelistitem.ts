import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createBulkdeletefailureFromDiscriminatorValue} from './createBulkdeletefailureFromDiscriminatorValue';
import {createDuplicaterecordFromDiscriminatorValue} from './createDuplicaterecordFromDiscriminatorValue';
import {createMailboxtrackingfolderFromDiscriminatorValue} from './createMailboxtrackingfolderFromDiscriminatorValue';
import {createOrganizationFromDiscriminatorValue} from './createOrganizationFromDiscriminatorValue';
import {createPricelevelFromDiscriminatorValue} from './createPricelevelFromDiscriminatorValue';
import {createPrincipalobjectattributeaccessFromDiscriminatorValue} from './createPrincipalobjectattributeaccessFromDiscriminatorValue';
import {createProcesssessionFromDiscriminatorValue} from './createProcesssessionFromDiscriminatorValue';
import {createProductFromDiscriminatorValue} from './createProductFromDiscriminatorValue';
import {createSyncerrorFromDiscriminatorValue} from './createSyncerrorFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {createTransactioncurrencyFromDiscriminatorValue} from './createTransactioncurrencyFromDiscriminatorValue';
import {Asyncoperation, Bulkdeletefailure, Crmbaseentity, Duplicaterecord, Mailboxtrackingfolder, Organization, Pricelevel, Principalobjectattributeaccess, Processsession, Product, Syncerror, Systemuser, Transactioncurrency} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Msdyn_fieldservicepricelistitem extends Crmbaseentity implements Parsable {
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private __msdyn_pricelist_value?: string | undefined;
    private __msdyn_productservice_value?: string | undefined;
    private __organizationid_value?: string | undefined;
    private __transactioncurrencyid_value?: string | undefined;
    private _createdby?: Systemuser | undefined;
    private _createdon?: Date | undefined;
    private _createdonbehalfby?: Systemuser | undefined;
    private _exchangerate?: number | undefined;
    private _importsequencenumber?: number | undefined;
    private _modifiedby?: Systemuser | undefined;
    private _modifiedon?: Date | undefined;
    private _modifiedonbehalfby?: Systemuser | undefined;
    private _msdyn_durationroundingpolicy?: number | undefined;
    private _msdyn_durationroundto?: number | undefined;
    private _msdyn_fieldservicepricelistitem_AsyncOperations?: Asyncoperation[] | undefined;
    private _msdyn_fieldservicepricelistitem_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _msdyn_fieldservicepricelistitem_DuplicateBaseRecord?: Duplicaterecord[] | undefined;
    private _msdyn_fieldservicepricelistitem_DuplicateMatchingRecord?: Duplicaterecord[] | undefined;
    private _msdyn_fieldservicepricelistitem_MailboxTrackingFolders?: Mailboxtrackingfolder[] | undefined;
    private _msdyn_fieldservicepricelistitem_PrincipalObjectAttributeAccesses?: Principalobjectattributeaccess[] | undefined;
    private _msdyn_fieldservicepricelistitem_ProcessSession?: Processsession[] | undefined;
    private _msdyn_fieldservicepricelistitem_SyncErrors?: Syncerror[] | undefined;
    private _msdyn_fieldservicepricelistitemid?: string | undefined;
    private _msdyn_flatfee?: boolean | undefined;
    private _msdyn_minimumchargeamount?: number | undefined;
    private _msdyn_minimumchargeamount_base?: number | undefined;
    private _msdyn_minimumchargeduration?: number | undefined;
    private _msdyn_name?: string | undefined;
    private _msdyn_pricelist?: Pricelevel | undefined;
    private _msdyn_productservice?: Product | undefined;
    private _organizationid?: Organization | undefined;
    private _overriddencreatedon?: Date | undefined;
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
     * Gets the _msdyn_pricelist_value property value. 
     * @returns a string
     */
    public get _msdyn_pricelist_value() {
        return this.__msdyn_pricelist_value;
    };
    /**
     * Sets the _msdyn_pricelist_value property value. 
     * @param value Value to set for the _msdyn_pricelist_value property.
     */
    public set _msdyn_pricelist_value(value: string | undefined) {
        this.__msdyn_pricelist_value = value;
    };
    /**
     * Gets the _msdyn_productservice_value property value. 
     * @returns a string
     */
    public get _msdyn_productservice_value() {
        return this.__msdyn_productservice_value;
    };
    /**
     * Sets the _msdyn_productservice_value property value. 
     * @param value Value to set for the _msdyn_productservice_value property.
     */
    public set _msdyn_productservice_value(value: string | undefined) {
        this.__msdyn_productservice_value = value;
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
     * Instantiates a new msdyn_fieldservicepricelistitem and sets the default values.
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
            "_createdby_value": (o, n) => { (o as unknown as Msdyn_fieldservicepricelistitem)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Msdyn_fieldservicepricelistitem)._createdonbehalfby_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Msdyn_fieldservicepricelistitem)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Msdyn_fieldservicepricelistitem)._modifiedonbehalfby_value = n.getStringValue(); },
            "_msdyn_pricelist_value": (o, n) => { (o as unknown as Msdyn_fieldservicepricelistitem)._msdyn_pricelist_value = n.getStringValue(); },
            "_msdyn_productservice_value": (o, n) => { (o as unknown as Msdyn_fieldservicepricelistitem)._msdyn_productservice_value = n.getStringValue(); },
            "_organizationid_value": (o, n) => { (o as unknown as Msdyn_fieldservicepricelistitem)._organizationid_value = n.getStringValue(); },
            "_transactioncurrencyid_value": (o, n) => { (o as unknown as Msdyn_fieldservicepricelistitem)._transactioncurrencyid_value = n.getStringValue(); },
            "createdby": (o, n) => { (o as unknown as Msdyn_fieldservicepricelistitem).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Msdyn_fieldservicepricelistitem).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Msdyn_fieldservicepricelistitem).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "exchangerate": (o, n) => { (o as unknown as Msdyn_fieldservicepricelistitem).exchangerate = n.getNumberValue(); },
            "importsequencenumber": (o, n) => { (o as unknown as Msdyn_fieldservicepricelistitem).importsequencenumber = n.getNumberValue(); },
            "modifiedby": (o, n) => { (o as unknown as Msdyn_fieldservicepricelistitem).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Msdyn_fieldservicepricelistitem).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Msdyn_fieldservicepricelistitem).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "msdyn_durationroundingpolicy": (o, n) => { (o as unknown as Msdyn_fieldservicepricelistitem).msdyn_durationroundingpolicy = n.getNumberValue(); },
            "msdyn_durationroundto": (o, n) => { (o as unknown as Msdyn_fieldservicepricelistitem).msdyn_durationroundto = n.getNumberValue(); },
            "msdyn_fieldservicepricelistitem_AsyncOperations": (o, n) => { (o as unknown as Msdyn_fieldservicepricelistitem).msdyn_fieldservicepricelistitem_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "msdyn_fieldservicepricelistitem_BulkDeleteFailures": (o, n) => { (o as unknown as Msdyn_fieldservicepricelistitem).msdyn_fieldservicepricelistitem_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "msdyn_fieldservicepricelistitem_DuplicateBaseRecord": (o, n) => { (o as unknown as Msdyn_fieldservicepricelistitem).msdyn_fieldservicepricelistitem_DuplicateBaseRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "msdyn_fieldservicepricelistitem_DuplicateMatchingRecord": (o, n) => { (o as unknown as Msdyn_fieldservicepricelistitem).msdyn_fieldservicepricelistitem_DuplicateMatchingRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "msdyn_fieldservicepricelistitem_MailboxTrackingFolders": (o, n) => { (o as unknown as Msdyn_fieldservicepricelistitem).msdyn_fieldservicepricelistitem_MailboxTrackingFolders = n.getCollectionOfObjectValues<Mailboxtrackingfolder>(createMailboxtrackingfolderFromDiscriminatorValue); },
            "msdyn_fieldservicepricelistitem_PrincipalObjectAttributeAccesses": (o, n) => { (o as unknown as Msdyn_fieldservicepricelistitem).msdyn_fieldservicepricelistitem_PrincipalObjectAttributeAccesses = n.getCollectionOfObjectValues<Principalobjectattributeaccess>(createPrincipalobjectattributeaccessFromDiscriminatorValue); },
            "msdyn_fieldservicepricelistitem_ProcessSession": (o, n) => { (o as unknown as Msdyn_fieldservicepricelistitem).msdyn_fieldservicepricelistitem_ProcessSession = n.getCollectionOfObjectValues<Processsession>(createProcesssessionFromDiscriminatorValue); },
            "msdyn_fieldservicepricelistitem_SyncErrors": (o, n) => { (o as unknown as Msdyn_fieldservicepricelistitem).msdyn_fieldservicepricelistitem_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "msdyn_fieldservicepricelistitemid": (o, n) => { (o as unknown as Msdyn_fieldservicepricelistitem).msdyn_fieldservicepricelistitemid = n.getStringValue(); },
            "msdyn_flatfee": (o, n) => { (o as unknown as Msdyn_fieldservicepricelistitem).msdyn_flatfee = n.getBooleanValue(); },
            "msdyn_minimumchargeamount": (o, n) => { (o as unknown as Msdyn_fieldservicepricelistitem).msdyn_minimumchargeamount = n.getNumberValue(); },
            "msdyn_minimumchargeamount_base": (o, n) => { (o as unknown as Msdyn_fieldservicepricelistitem).msdyn_minimumchargeamount_base = n.getNumberValue(); },
            "msdyn_minimumchargeduration": (o, n) => { (o as unknown as Msdyn_fieldservicepricelistitem).msdyn_minimumchargeduration = n.getNumberValue(); },
            "msdyn_name": (o, n) => { (o as unknown as Msdyn_fieldservicepricelistitem).msdyn_name = n.getStringValue(); },
            "msdyn_pricelist": (o, n) => { (o as unknown as Msdyn_fieldservicepricelistitem).msdyn_pricelist = n.getObjectValue<Pricelevel>(createPricelevelFromDiscriminatorValue); },
            "msdyn_productservice": (o, n) => { (o as unknown as Msdyn_fieldservicepricelistitem).msdyn_productservice = n.getObjectValue<Product>(createProductFromDiscriminatorValue); },
            "organizationid": (o, n) => { (o as unknown as Msdyn_fieldservicepricelistitem).organizationid = n.getObjectValue<Organization>(createOrganizationFromDiscriminatorValue); },
            "overriddencreatedon": (o, n) => { (o as unknown as Msdyn_fieldservicepricelistitem).overriddencreatedon = n.getDateValue(); },
            "statecode": (o, n) => { (o as unknown as Msdyn_fieldservicepricelistitem).statecode = n.getNumberValue(); },
            "statuscode": (o, n) => { (o as unknown as Msdyn_fieldservicepricelistitem).statuscode = n.getNumberValue(); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Msdyn_fieldservicepricelistitem).timezoneruleversionnumber = n.getNumberValue(); },
            "transactioncurrencyid": (o, n) => { (o as unknown as Msdyn_fieldservicepricelistitem).transactioncurrencyid = n.getObjectValue<Transactioncurrency>(createTransactioncurrencyFromDiscriminatorValue); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Msdyn_fieldservicepricelistitem).utcconversiontimezonecode = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as Msdyn_fieldservicepricelistitem).versionnumber = n.getNumberValue(); },
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
     * Gets the msdyn_durationroundingpolicy property value. 
     * @returns a integer
     */
    public get msdyn_durationroundingpolicy() {
        return this._msdyn_durationroundingpolicy;
    };
    /**
     * Sets the msdyn_durationroundingpolicy property value. 
     * @param value Value to set for the msdyn_durationroundingpolicy property.
     */
    public set msdyn_durationroundingpolicy(value: number | undefined) {
        this._msdyn_durationroundingpolicy = value;
    };
    /**
     * Gets the msdyn_durationroundto property value. 
     * @returns a integer
     */
    public get msdyn_durationroundto() {
        return this._msdyn_durationroundto;
    };
    /**
     * Sets the msdyn_durationroundto property value. 
     * @param value Value to set for the msdyn_durationroundto property.
     */
    public set msdyn_durationroundto(value: number | undefined) {
        this._msdyn_durationroundto = value;
    };
    /**
     * Gets the msdyn_fieldservicepricelistitem_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get msdyn_fieldservicepricelistitem_AsyncOperations() {
        return this._msdyn_fieldservicepricelistitem_AsyncOperations;
    };
    /**
     * Sets the msdyn_fieldservicepricelistitem_AsyncOperations property value. 
     * @param value Value to set for the msdyn_fieldservicepricelistitem_AsyncOperations property.
     */
    public set msdyn_fieldservicepricelistitem_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._msdyn_fieldservicepricelistitem_AsyncOperations = value;
    };
    /**
     * Gets the msdyn_fieldservicepricelistitem_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get msdyn_fieldservicepricelistitem_BulkDeleteFailures() {
        return this._msdyn_fieldservicepricelistitem_BulkDeleteFailures;
    };
    /**
     * Sets the msdyn_fieldservicepricelistitem_BulkDeleteFailures property value. 
     * @param value Value to set for the msdyn_fieldservicepricelistitem_BulkDeleteFailures property.
     */
    public set msdyn_fieldservicepricelistitem_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._msdyn_fieldservicepricelistitem_BulkDeleteFailures = value;
    };
    /**
     * Gets the msdyn_fieldservicepricelistitem_DuplicateBaseRecord property value. 
     * @returns a duplicaterecord
     */
    public get msdyn_fieldservicepricelistitem_DuplicateBaseRecord() {
        return this._msdyn_fieldservicepricelistitem_DuplicateBaseRecord;
    };
    /**
     * Sets the msdyn_fieldservicepricelistitem_DuplicateBaseRecord property value. 
     * @param value Value to set for the msdyn_fieldservicepricelistitem_DuplicateBaseRecord property.
     */
    public set msdyn_fieldservicepricelistitem_DuplicateBaseRecord(value: Duplicaterecord[] | undefined) {
        this._msdyn_fieldservicepricelistitem_DuplicateBaseRecord = value;
    };
    /**
     * Gets the msdyn_fieldservicepricelistitem_DuplicateMatchingRecord property value. 
     * @returns a duplicaterecord
     */
    public get msdyn_fieldservicepricelistitem_DuplicateMatchingRecord() {
        return this._msdyn_fieldservicepricelistitem_DuplicateMatchingRecord;
    };
    /**
     * Sets the msdyn_fieldservicepricelistitem_DuplicateMatchingRecord property value. 
     * @param value Value to set for the msdyn_fieldservicepricelistitem_DuplicateMatchingRecord property.
     */
    public set msdyn_fieldservicepricelistitem_DuplicateMatchingRecord(value: Duplicaterecord[] | undefined) {
        this._msdyn_fieldservicepricelistitem_DuplicateMatchingRecord = value;
    };
    /**
     * Gets the msdyn_fieldservicepricelistitem_MailboxTrackingFolders property value. 
     * @returns a mailboxtrackingfolder
     */
    public get msdyn_fieldservicepricelistitem_MailboxTrackingFolders() {
        return this._msdyn_fieldservicepricelistitem_MailboxTrackingFolders;
    };
    /**
     * Sets the msdyn_fieldservicepricelistitem_MailboxTrackingFolders property value. 
     * @param value Value to set for the msdyn_fieldservicepricelistitem_MailboxTrackingFolders property.
     */
    public set msdyn_fieldservicepricelistitem_MailboxTrackingFolders(value: Mailboxtrackingfolder[] | undefined) {
        this._msdyn_fieldservicepricelistitem_MailboxTrackingFolders = value;
    };
    /**
     * Gets the msdyn_fieldservicepricelistitem_PrincipalObjectAttributeAccesses property value. 
     * @returns a principalobjectattributeaccess
     */
    public get msdyn_fieldservicepricelistitem_PrincipalObjectAttributeAccesses() {
        return this._msdyn_fieldservicepricelistitem_PrincipalObjectAttributeAccesses;
    };
    /**
     * Sets the msdyn_fieldservicepricelistitem_PrincipalObjectAttributeAccesses property value. 
     * @param value Value to set for the msdyn_fieldservicepricelistitem_PrincipalObjectAttributeAccesses property.
     */
    public set msdyn_fieldservicepricelistitem_PrincipalObjectAttributeAccesses(value: Principalobjectattributeaccess[] | undefined) {
        this._msdyn_fieldservicepricelistitem_PrincipalObjectAttributeAccesses = value;
    };
    /**
     * Gets the msdyn_fieldservicepricelistitem_ProcessSession property value. 
     * @returns a processsession
     */
    public get msdyn_fieldservicepricelistitem_ProcessSession() {
        return this._msdyn_fieldservicepricelistitem_ProcessSession;
    };
    /**
     * Sets the msdyn_fieldservicepricelistitem_ProcessSession property value. 
     * @param value Value to set for the msdyn_fieldservicepricelistitem_ProcessSession property.
     */
    public set msdyn_fieldservicepricelistitem_ProcessSession(value: Processsession[] | undefined) {
        this._msdyn_fieldservicepricelistitem_ProcessSession = value;
    };
    /**
     * Gets the msdyn_fieldservicepricelistitem_SyncErrors property value. 
     * @returns a syncerror
     */
    public get msdyn_fieldservicepricelistitem_SyncErrors() {
        return this._msdyn_fieldservicepricelistitem_SyncErrors;
    };
    /**
     * Sets the msdyn_fieldservicepricelistitem_SyncErrors property value. 
     * @param value Value to set for the msdyn_fieldservicepricelistitem_SyncErrors property.
     */
    public set msdyn_fieldservicepricelistitem_SyncErrors(value: Syncerror[] | undefined) {
        this._msdyn_fieldservicepricelistitem_SyncErrors = value;
    };
    /**
     * Gets the msdyn_fieldservicepricelistitemid property value. 
     * @returns a string
     */
    public get msdyn_fieldservicepricelistitemid() {
        return this._msdyn_fieldservicepricelistitemid;
    };
    /**
     * Sets the msdyn_fieldservicepricelistitemid property value. 
     * @param value Value to set for the msdyn_fieldservicepricelistitemid property.
     */
    public set msdyn_fieldservicepricelistitemid(value: string | undefined) {
        this._msdyn_fieldservicepricelistitemid = value;
    };
    /**
     * Gets the msdyn_flatfee property value. 
     * @returns a boolean
     */
    public get msdyn_flatfee() {
        return this._msdyn_flatfee;
    };
    /**
     * Sets the msdyn_flatfee property value. 
     * @param value Value to set for the msdyn_flatfee property.
     */
    public set msdyn_flatfee(value: boolean | undefined) {
        this._msdyn_flatfee = value;
    };
    /**
     * Gets the msdyn_minimumchargeamount property value. 
     * @returns a int64
     */
    public get msdyn_minimumchargeamount() {
        return this._msdyn_minimumchargeamount;
    };
    /**
     * Sets the msdyn_minimumchargeamount property value. 
     * @param value Value to set for the msdyn_minimumchargeamount property.
     */
    public set msdyn_minimumchargeamount(value: number | undefined) {
        this._msdyn_minimumchargeamount = value;
    };
    /**
     * Gets the msdyn_minimumchargeamount_base property value. 
     * @returns a int64
     */
    public get msdyn_minimumchargeamount_base() {
        return this._msdyn_minimumchargeamount_base;
    };
    /**
     * Sets the msdyn_minimumchargeamount_base property value. 
     * @param value Value to set for the msdyn_minimumchargeamount_base property.
     */
    public set msdyn_minimumchargeamount_base(value: number | undefined) {
        this._msdyn_minimumchargeamount_base = value;
    };
    /**
     * Gets the msdyn_minimumchargeduration property value. 
     * @returns a integer
     */
    public get msdyn_minimumchargeduration() {
        return this._msdyn_minimumchargeduration;
    };
    /**
     * Sets the msdyn_minimumchargeduration property value. 
     * @param value Value to set for the msdyn_minimumchargeduration property.
     */
    public set msdyn_minimumchargeduration(value: number | undefined) {
        this._msdyn_minimumchargeduration = value;
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
     * Gets the msdyn_pricelist property value. 
     * @returns a pricelevel
     */
    public get msdyn_pricelist() {
        return this._msdyn_pricelist;
    };
    /**
     * Sets the msdyn_pricelist property value. 
     * @param value Value to set for the msdyn_pricelist property.
     */
    public set msdyn_pricelist(value: Pricelevel | undefined) {
        this._msdyn_pricelist = value;
    };
    /**
     * Gets the msdyn_productservice property value. 
     * @returns a product
     */
    public get msdyn_productservice() {
        return this._msdyn_productservice;
    };
    /**
     * Sets the msdyn_productservice property value. 
     * @param value Value to set for the msdyn_productservice property.
     */
    public set msdyn_productservice(value: Product | undefined) {
        this._msdyn_productservice = value;
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
        writer.writeStringValue("_msdyn_pricelist_value", this._msdyn_pricelist_value);
        writer.writeStringValue("_msdyn_productservice_value", this._msdyn_productservice_value);
        writer.writeStringValue("_organizationid_value", this._organizationid_value);
        writer.writeStringValue("_transactioncurrencyid_value", this._transactioncurrencyid_value);
        writer.writeObjectValue<Systemuser>("createdby", this.createdby);
        writer.writeDateValue("createdon", this.createdon);
        writer.writeObjectValue<Systemuser>("createdonbehalfby", this.createdonbehalfby);
        writer.writeNumberValue("exchangerate", this.exchangerate);
        writer.writeNumberValue("importsequencenumber", this.importsequencenumber);
        writer.writeObjectValue<Systemuser>("modifiedby", this.modifiedby);
        writer.writeDateValue("modifiedon", this.modifiedon);
        writer.writeObjectValue<Systemuser>("modifiedonbehalfby", this.modifiedonbehalfby);
        writer.writeNumberValue("msdyn_durationroundingpolicy", this.msdyn_durationroundingpolicy);
        writer.writeNumberValue("msdyn_durationroundto", this.msdyn_durationroundto);
        writer.writeCollectionOfObjectValues<Asyncoperation>("msdyn_fieldservicepricelistitem_AsyncOperations", this.msdyn_fieldservicepricelistitem_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("msdyn_fieldservicepricelistitem_BulkDeleteFailures", this.msdyn_fieldservicepricelistitem_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("msdyn_fieldservicepricelistitem_DuplicateBaseRecord", this.msdyn_fieldservicepricelistitem_DuplicateBaseRecord);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("msdyn_fieldservicepricelistitem_DuplicateMatchingRecord", this.msdyn_fieldservicepricelistitem_DuplicateMatchingRecord);
        writer.writeCollectionOfObjectValues<Mailboxtrackingfolder>("msdyn_fieldservicepricelistitem_MailboxTrackingFolders", this.msdyn_fieldservicepricelistitem_MailboxTrackingFolders);
        writer.writeCollectionOfObjectValues<Principalobjectattributeaccess>("msdyn_fieldservicepricelistitem_PrincipalObjectAttributeAccesses", this.msdyn_fieldservicepricelistitem_PrincipalObjectAttributeAccesses);
        writer.writeCollectionOfObjectValues<Processsession>("msdyn_fieldservicepricelistitem_ProcessSession", this.msdyn_fieldservicepricelistitem_ProcessSession);
        writer.writeCollectionOfObjectValues<Syncerror>("msdyn_fieldservicepricelistitem_SyncErrors", this.msdyn_fieldservicepricelistitem_SyncErrors);
        writer.writeStringValue("msdyn_fieldservicepricelistitemid", this.msdyn_fieldservicepricelistitemid);
        writer.writeBooleanValue("msdyn_flatfee", this.msdyn_flatfee);
        writer.writeNumberValue("msdyn_minimumchargeamount", this.msdyn_minimumchargeamount);
        writer.writeNumberValue("msdyn_minimumchargeamount_base", this.msdyn_minimumchargeamount_base);
        writer.writeNumberValue("msdyn_minimumchargeduration", this.msdyn_minimumchargeduration);
        writer.writeStringValue("msdyn_name", this.msdyn_name);
        writer.writeObjectValue<Pricelevel>("msdyn_pricelist", this.msdyn_pricelist);
        writer.writeObjectValue<Product>("msdyn_productservice", this.msdyn_productservice);
        writer.writeObjectValue<Organization>("organizationid", this.organizationid);
        writer.writeDateValue("overriddencreatedon", this.overriddencreatedon);
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
