import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createBookableresourcecategoryFromDiscriminatorValue} from './createBookableresourcecategoryFromDiscriminatorValue';
import {createBookableresourceFromDiscriminatorValue} from './createBookableresourceFromDiscriminatorValue';
import {createBulkdeletefailureFromDiscriminatorValue} from './createBulkdeletefailureFromDiscriminatorValue';
import {createDuplicaterecordFromDiscriminatorValue} from './createDuplicaterecordFromDiscriminatorValue';
import {createMailboxtrackingfolderFromDiscriminatorValue} from './createMailboxtrackingfolderFromDiscriminatorValue';
import {createMsdyn_organizationalunitFromDiscriminatorValue} from './createMsdyn_organizationalunitFromDiscriminatorValue';
import {createMsdyn_transactioncategoryFromDiscriminatorValue} from './createMsdyn_transactioncategoryFromDiscriminatorValue';
import {createOrganizationFromDiscriminatorValue} from './createOrganizationFromDiscriminatorValue';
import {createPricelevelFromDiscriminatorValue} from './createPricelevelFromDiscriminatorValue';
import {createPrincipalobjectattributeaccessFromDiscriminatorValue} from './createPrincipalobjectattributeaccessFromDiscriminatorValue';
import {createProcesssessionFromDiscriminatorValue} from './createProcesssessionFromDiscriminatorValue';
import {createSyncerrorFromDiscriminatorValue} from './createSyncerrorFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {Asyncoperation, Bookableresource, Bookableresourcecategory, Bulkdeletefailure, Crmbaseentity, Duplicaterecord, Mailboxtrackingfolder, Msdyn_organizationalunit, Msdyn_transactioncategory, Organization, Pricelevel, Principalobjectattributeaccess, Processsession, Syncerror, Systemuser} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Msdyn_resourcecategorymarkuppricelevel extends Crmbaseentity implements Parsable {
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private __msdyn_bookableresource_value?: string | undefined;
    private __msdyn_organizationalunit_value?: string | undefined;
    private __msdyn_pricelist_value?: string | undefined;
    private __msdyn_resourcecategory_value?: string | undefined;
    private __msdyn_transactioncategory_value?: string | undefined;
    private __organizationid_value?: string | undefined;
    private _createdby?: Systemuser | undefined;
    private _createdon?: Date | undefined;
    private _createdonbehalfby?: Systemuser | undefined;
    private _importsequencenumber?: number | undefined;
    private _modifiedby?: Systemuser | undefined;
    private _modifiedon?: Date | undefined;
    private _modifiedonbehalfby?: Systemuser | undefined;
    private _msdyn_bookableresource?: Bookableresource | undefined;
    private _msdyn_description?: string | undefined;
    private _msdyn_organizationalunit?: Msdyn_organizationalunit | undefined;
    private _msdyn_percent?: number | undefined;
    private _msdyn_pricecalculation?: number | undefined;
    private _msdyn_pricelist?: Pricelevel | undefined;
    private _msdyn_resourcecategory?: Bookableresourcecategory | undefined;
    private _msdyn_resourcecategorymarkuppricelevel_AsyncOperations?: Asyncoperation[] | undefined;
    private _msdyn_resourcecategorymarkuppricelevel_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _msdyn_resourcecategorymarkuppricelevel_DuplicateBaseRecord?: Duplicaterecord[] | undefined;
    private _msdyn_resourcecategorymarkuppricelevel_DuplicateMatchingRecord?: Duplicaterecord[] | undefined;
    private _msdyn_resourcecategorymarkuppricelevel_MailboxTrackingFolders?: Mailboxtrackingfolder[] | undefined;
    private _msdyn_resourcecategorymarkuppricelevel_PrincipalObjectAttributeAccesses?: Principalobjectattributeaccess[] | undefined;
    private _msdyn_resourcecategorymarkuppricelevel_ProcessSession?: Processsession[] | undefined;
    private _msdyn_resourcecategorymarkuppricelevel_SyncErrors?: Syncerror[] | undefined;
    private _msdyn_resourcecategorymarkuppricelevelid?: string | undefined;
    private _msdyn_transactioncategory?: Msdyn_transactioncategory | undefined;
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
     * Gets the _msdyn_organizationalunit_value property value. 
     * @returns a string
     */
    public get _msdyn_organizationalunit_value() {
        return this.__msdyn_organizationalunit_value;
    };
    /**
     * Sets the _msdyn_organizationalunit_value property value. 
     * @param value Value to set for the _msdyn_organizationalunit_value property.
     */
    public set _msdyn_organizationalunit_value(value: string | undefined) {
        this.__msdyn_organizationalunit_value = value;
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
     * Instantiates a new msdyn_resourcecategorymarkuppricelevel and sets the default values.
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
            "_createdby_value": (o, n) => { (o as unknown as Msdyn_resourcecategorymarkuppricelevel)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Msdyn_resourcecategorymarkuppricelevel)._createdonbehalfby_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Msdyn_resourcecategorymarkuppricelevel)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Msdyn_resourcecategorymarkuppricelevel)._modifiedonbehalfby_value = n.getStringValue(); },
            "_msdyn_bookableresource_value": (o, n) => { (o as unknown as Msdyn_resourcecategorymarkuppricelevel)._msdyn_bookableresource_value = n.getStringValue(); },
            "_msdyn_organizationalunit_value": (o, n) => { (o as unknown as Msdyn_resourcecategorymarkuppricelevel)._msdyn_organizationalunit_value = n.getStringValue(); },
            "_msdyn_pricelist_value": (o, n) => { (o as unknown as Msdyn_resourcecategorymarkuppricelevel)._msdyn_pricelist_value = n.getStringValue(); },
            "_msdyn_resourcecategory_value": (o, n) => { (o as unknown as Msdyn_resourcecategorymarkuppricelevel)._msdyn_resourcecategory_value = n.getStringValue(); },
            "_msdyn_transactioncategory_value": (o, n) => { (o as unknown as Msdyn_resourcecategorymarkuppricelevel)._msdyn_transactioncategory_value = n.getStringValue(); },
            "_organizationid_value": (o, n) => { (o as unknown as Msdyn_resourcecategorymarkuppricelevel)._organizationid_value = n.getStringValue(); },
            "createdby": (o, n) => { (o as unknown as Msdyn_resourcecategorymarkuppricelevel).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Msdyn_resourcecategorymarkuppricelevel).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Msdyn_resourcecategorymarkuppricelevel).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "importsequencenumber": (o, n) => { (o as unknown as Msdyn_resourcecategorymarkuppricelevel).importsequencenumber = n.getNumberValue(); },
            "modifiedby": (o, n) => { (o as unknown as Msdyn_resourcecategorymarkuppricelevel).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Msdyn_resourcecategorymarkuppricelevel).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Msdyn_resourcecategorymarkuppricelevel).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "msdyn_bookableresource": (o, n) => { (o as unknown as Msdyn_resourcecategorymarkuppricelevel).msdyn_bookableresource = n.getObjectValue<Bookableresource>(createBookableresourceFromDiscriminatorValue); },
            "msdyn_description": (o, n) => { (o as unknown as Msdyn_resourcecategorymarkuppricelevel).msdyn_description = n.getStringValue(); },
            "msdyn_organizationalunit": (o, n) => { (o as unknown as Msdyn_resourcecategorymarkuppricelevel).msdyn_organizationalunit = n.getObjectValue<Msdyn_organizationalunit>(createMsdyn_organizationalunitFromDiscriminatorValue); },
            "msdyn_percent": (o, n) => { (o as unknown as Msdyn_resourcecategorymarkuppricelevel).msdyn_percent = n.getNumberValue(); },
            "msdyn_pricecalculation": (o, n) => { (o as unknown as Msdyn_resourcecategorymarkuppricelevel).msdyn_pricecalculation = n.getNumberValue(); },
            "msdyn_pricelist": (o, n) => { (o as unknown as Msdyn_resourcecategorymarkuppricelevel).msdyn_pricelist = n.getObjectValue<Pricelevel>(createPricelevelFromDiscriminatorValue); },
            "msdyn_resourcecategory": (o, n) => { (o as unknown as Msdyn_resourcecategorymarkuppricelevel).msdyn_resourcecategory = n.getObjectValue<Bookableresourcecategory>(createBookableresourcecategoryFromDiscriminatorValue); },
            "msdyn_resourcecategorymarkuppricelevel_AsyncOperations": (o, n) => { (o as unknown as Msdyn_resourcecategorymarkuppricelevel).msdyn_resourcecategorymarkuppricelevel_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "msdyn_resourcecategorymarkuppricelevel_BulkDeleteFailures": (o, n) => { (o as unknown as Msdyn_resourcecategorymarkuppricelevel).msdyn_resourcecategorymarkuppricelevel_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "msdyn_resourcecategorymarkuppricelevel_DuplicateBaseRecord": (o, n) => { (o as unknown as Msdyn_resourcecategorymarkuppricelevel).msdyn_resourcecategorymarkuppricelevel_DuplicateBaseRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "msdyn_resourcecategorymarkuppricelevel_DuplicateMatchingRecord": (o, n) => { (o as unknown as Msdyn_resourcecategorymarkuppricelevel).msdyn_resourcecategorymarkuppricelevel_DuplicateMatchingRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "msdyn_resourcecategorymarkuppricelevel_MailboxTrackingFolders": (o, n) => { (o as unknown as Msdyn_resourcecategorymarkuppricelevel).msdyn_resourcecategorymarkuppricelevel_MailboxTrackingFolders = n.getCollectionOfObjectValues<Mailboxtrackingfolder>(createMailboxtrackingfolderFromDiscriminatorValue); },
            "msdyn_resourcecategorymarkuppricelevel_PrincipalObjectAttributeAccesses": (o, n) => { (o as unknown as Msdyn_resourcecategorymarkuppricelevel).msdyn_resourcecategorymarkuppricelevel_PrincipalObjectAttributeAccesses = n.getCollectionOfObjectValues<Principalobjectattributeaccess>(createPrincipalobjectattributeaccessFromDiscriminatorValue); },
            "msdyn_resourcecategorymarkuppricelevel_ProcessSession": (o, n) => { (o as unknown as Msdyn_resourcecategorymarkuppricelevel).msdyn_resourcecategorymarkuppricelevel_ProcessSession = n.getCollectionOfObjectValues<Processsession>(createProcesssessionFromDiscriminatorValue); },
            "msdyn_resourcecategorymarkuppricelevel_SyncErrors": (o, n) => { (o as unknown as Msdyn_resourcecategorymarkuppricelevel).msdyn_resourcecategorymarkuppricelevel_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "msdyn_resourcecategorymarkuppricelevelid": (o, n) => { (o as unknown as Msdyn_resourcecategorymarkuppricelevel).msdyn_resourcecategorymarkuppricelevelid = n.getStringValue(); },
            "msdyn_transactioncategory": (o, n) => { (o as unknown as Msdyn_resourcecategorymarkuppricelevel).msdyn_transactioncategory = n.getObjectValue<Msdyn_transactioncategory>(createMsdyn_transactioncategoryFromDiscriminatorValue); },
            "organizationid": (o, n) => { (o as unknown as Msdyn_resourcecategorymarkuppricelevel).organizationid = n.getObjectValue<Organization>(createOrganizationFromDiscriminatorValue); },
            "overriddencreatedon": (o, n) => { (o as unknown as Msdyn_resourcecategorymarkuppricelevel).overriddencreatedon = n.getDateValue(); },
            "statecode": (o, n) => { (o as unknown as Msdyn_resourcecategorymarkuppricelevel).statecode = n.getNumberValue(); },
            "statuscode": (o, n) => { (o as unknown as Msdyn_resourcecategorymarkuppricelevel).statuscode = n.getNumberValue(); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Msdyn_resourcecategorymarkuppricelevel).timezoneruleversionnumber = n.getNumberValue(); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Msdyn_resourcecategorymarkuppricelevel).utcconversiontimezonecode = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as Msdyn_resourcecategorymarkuppricelevel).versionnumber = n.getNumberValue(); },
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
     * Gets the msdyn_organizationalunit property value. 
     * @returns a msdyn_organizationalunit
     */
    public get msdyn_organizationalunit() {
        return this._msdyn_organizationalunit;
    };
    /**
     * Sets the msdyn_organizationalunit property value. 
     * @param value Value to set for the msdyn_organizationalunit property.
     */
    public set msdyn_organizationalunit(value: Msdyn_organizationalunit | undefined) {
        this._msdyn_organizationalunit = value;
    };
    /**
     * Gets the msdyn_percent property value. 
     * @returns a int64
     */
    public get msdyn_percent() {
        return this._msdyn_percent;
    };
    /**
     * Sets the msdyn_percent property value. 
     * @param value Value to set for the msdyn_percent property.
     */
    public set msdyn_percent(value: number | undefined) {
        this._msdyn_percent = value;
    };
    /**
     * Gets the msdyn_pricecalculation property value. 
     * @returns a integer
     */
    public get msdyn_pricecalculation() {
        return this._msdyn_pricecalculation;
    };
    /**
     * Sets the msdyn_pricecalculation property value. 
     * @param value Value to set for the msdyn_pricecalculation property.
     */
    public set msdyn_pricecalculation(value: number | undefined) {
        this._msdyn_pricecalculation = value;
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
     * Gets the msdyn_resourcecategorymarkuppricelevel_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get msdyn_resourcecategorymarkuppricelevel_AsyncOperations() {
        return this._msdyn_resourcecategorymarkuppricelevel_AsyncOperations;
    };
    /**
     * Sets the msdyn_resourcecategorymarkuppricelevel_AsyncOperations property value. 
     * @param value Value to set for the msdyn_resourcecategorymarkuppricelevel_AsyncOperations property.
     */
    public set msdyn_resourcecategorymarkuppricelevel_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._msdyn_resourcecategorymarkuppricelevel_AsyncOperations = value;
    };
    /**
     * Gets the msdyn_resourcecategorymarkuppricelevel_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get msdyn_resourcecategorymarkuppricelevel_BulkDeleteFailures() {
        return this._msdyn_resourcecategorymarkuppricelevel_BulkDeleteFailures;
    };
    /**
     * Sets the msdyn_resourcecategorymarkuppricelevel_BulkDeleteFailures property value. 
     * @param value Value to set for the msdyn_resourcecategorymarkuppricelevel_BulkDeleteFailures property.
     */
    public set msdyn_resourcecategorymarkuppricelevel_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._msdyn_resourcecategorymarkuppricelevel_BulkDeleteFailures = value;
    };
    /**
     * Gets the msdyn_resourcecategorymarkuppricelevel_DuplicateBaseRecord property value. 
     * @returns a duplicaterecord
     */
    public get msdyn_resourcecategorymarkuppricelevel_DuplicateBaseRecord() {
        return this._msdyn_resourcecategorymarkuppricelevel_DuplicateBaseRecord;
    };
    /**
     * Sets the msdyn_resourcecategorymarkuppricelevel_DuplicateBaseRecord property value. 
     * @param value Value to set for the msdyn_resourcecategorymarkuppricelevel_DuplicateBaseRecord property.
     */
    public set msdyn_resourcecategorymarkuppricelevel_DuplicateBaseRecord(value: Duplicaterecord[] | undefined) {
        this._msdyn_resourcecategorymarkuppricelevel_DuplicateBaseRecord = value;
    };
    /**
     * Gets the msdyn_resourcecategorymarkuppricelevel_DuplicateMatchingRecord property value. 
     * @returns a duplicaterecord
     */
    public get msdyn_resourcecategorymarkuppricelevel_DuplicateMatchingRecord() {
        return this._msdyn_resourcecategorymarkuppricelevel_DuplicateMatchingRecord;
    };
    /**
     * Sets the msdyn_resourcecategorymarkuppricelevel_DuplicateMatchingRecord property value. 
     * @param value Value to set for the msdyn_resourcecategorymarkuppricelevel_DuplicateMatchingRecord property.
     */
    public set msdyn_resourcecategorymarkuppricelevel_DuplicateMatchingRecord(value: Duplicaterecord[] | undefined) {
        this._msdyn_resourcecategorymarkuppricelevel_DuplicateMatchingRecord = value;
    };
    /**
     * Gets the msdyn_resourcecategorymarkuppricelevel_MailboxTrackingFolders property value. 
     * @returns a mailboxtrackingfolder
     */
    public get msdyn_resourcecategorymarkuppricelevel_MailboxTrackingFolders() {
        return this._msdyn_resourcecategorymarkuppricelevel_MailboxTrackingFolders;
    };
    /**
     * Sets the msdyn_resourcecategorymarkuppricelevel_MailboxTrackingFolders property value. 
     * @param value Value to set for the msdyn_resourcecategorymarkuppricelevel_MailboxTrackingFolders property.
     */
    public set msdyn_resourcecategorymarkuppricelevel_MailboxTrackingFolders(value: Mailboxtrackingfolder[] | undefined) {
        this._msdyn_resourcecategorymarkuppricelevel_MailboxTrackingFolders = value;
    };
    /**
     * Gets the msdyn_resourcecategorymarkuppricelevel_PrincipalObjectAttributeAccesses property value. 
     * @returns a principalobjectattributeaccess
     */
    public get msdyn_resourcecategorymarkuppricelevel_PrincipalObjectAttributeAccesses() {
        return this._msdyn_resourcecategorymarkuppricelevel_PrincipalObjectAttributeAccesses;
    };
    /**
     * Sets the msdyn_resourcecategorymarkuppricelevel_PrincipalObjectAttributeAccesses property value. 
     * @param value Value to set for the msdyn_resourcecategorymarkuppricelevel_PrincipalObjectAttributeAccesses property.
     */
    public set msdyn_resourcecategorymarkuppricelevel_PrincipalObjectAttributeAccesses(value: Principalobjectattributeaccess[] | undefined) {
        this._msdyn_resourcecategorymarkuppricelevel_PrincipalObjectAttributeAccesses = value;
    };
    /**
     * Gets the msdyn_resourcecategorymarkuppricelevel_ProcessSession property value. 
     * @returns a processsession
     */
    public get msdyn_resourcecategorymarkuppricelevel_ProcessSession() {
        return this._msdyn_resourcecategorymarkuppricelevel_ProcessSession;
    };
    /**
     * Sets the msdyn_resourcecategorymarkuppricelevel_ProcessSession property value. 
     * @param value Value to set for the msdyn_resourcecategorymarkuppricelevel_ProcessSession property.
     */
    public set msdyn_resourcecategorymarkuppricelevel_ProcessSession(value: Processsession[] | undefined) {
        this._msdyn_resourcecategorymarkuppricelevel_ProcessSession = value;
    };
    /**
     * Gets the msdyn_resourcecategorymarkuppricelevel_SyncErrors property value. 
     * @returns a syncerror
     */
    public get msdyn_resourcecategorymarkuppricelevel_SyncErrors() {
        return this._msdyn_resourcecategorymarkuppricelevel_SyncErrors;
    };
    /**
     * Sets the msdyn_resourcecategorymarkuppricelevel_SyncErrors property value. 
     * @param value Value to set for the msdyn_resourcecategorymarkuppricelevel_SyncErrors property.
     */
    public set msdyn_resourcecategorymarkuppricelevel_SyncErrors(value: Syncerror[] | undefined) {
        this._msdyn_resourcecategorymarkuppricelevel_SyncErrors = value;
    };
    /**
     * Gets the msdyn_resourcecategorymarkuppricelevelid property value. 
     * @returns a string
     */
    public get msdyn_resourcecategorymarkuppricelevelid() {
        return this._msdyn_resourcecategorymarkuppricelevelid;
    };
    /**
     * Sets the msdyn_resourcecategorymarkuppricelevelid property value. 
     * @param value Value to set for the msdyn_resourcecategorymarkuppricelevelid property.
     */
    public set msdyn_resourcecategorymarkuppricelevelid(value: string | undefined) {
        this._msdyn_resourcecategorymarkuppricelevelid = value;
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
        writer.writeStringValue("_msdyn_bookableresource_value", this._msdyn_bookableresource_value);
        writer.writeStringValue("_msdyn_organizationalunit_value", this._msdyn_organizationalunit_value);
        writer.writeStringValue("_msdyn_pricelist_value", this._msdyn_pricelist_value);
        writer.writeStringValue("_msdyn_resourcecategory_value", this._msdyn_resourcecategory_value);
        writer.writeStringValue("_msdyn_transactioncategory_value", this._msdyn_transactioncategory_value);
        writer.writeStringValue("_organizationid_value", this._organizationid_value);
        writer.writeObjectValue<Systemuser>("createdby", this.createdby);
        writer.writeDateValue("createdon", this.createdon);
        writer.writeObjectValue<Systemuser>("createdonbehalfby", this.createdonbehalfby);
        writer.writeNumberValue("importsequencenumber", this.importsequencenumber);
        writer.writeObjectValue<Systemuser>("modifiedby", this.modifiedby);
        writer.writeDateValue("modifiedon", this.modifiedon);
        writer.writeObjectValue<Systemuser>("modifiedonbehalfby", this.modifiedonbehalfby);
        writer.writeObjectValue<Bookableresource>("msdyn_bookableresource", this.msdyn_bookableresource);
        writer.writeStringValue("msdyn_description", this.msdyn_description);
        writer.writeObjectValue<Msdyn_organizationalunit>("msdyn_organizationalunit", this.msdyn_organizationalunit);
        writer.writeNumberValue("msdyn_percent", this.msdyn_percent);
        writer.writeNumberValue("msdyn_pricecalculation", this.msdyn_pricecalculation);
        writer.writeObjectValue<Pricelevel>("msdyn_pricelist", this.msdyn_pricelist);
        writer.writeObjectValue<Bookableresourcecategory>("msdyn_resourcecategory", this.msdyn_resourcecategory);
        writer.writeCollectionOfObjectValues<Asyncoperation>("msdyn_resourcecategorymarkuppricelevel_AsyncOperations", this.msdyn_resourcecategorymarkuppricelevel_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("msdyn_resourcecategorymarkuppricelevel_BulkDeleteFailures", this.msdyn_resourcecategorymarkuppricelevel_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("msdyn_resourcecategorymarkuppricelevel_DuplicateBaseRecord", this.msdyn_resourcecategorymarkuppricelevel_DuplicateBaseRecord);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("msdyn_resourcecategorymarkuppricelevel_DuplicateMatchingRecord", this.msdyn_resourcecategorymarkuppricelevel_DuplicateMatchingRecord);
        writer.writeCollectionOfObjectValues<Mailboxtrackingfolder>("msdyn_resourcecategorymarkuppricelevel_MailboxTrackingFolders", this.msdyn_resourcecategorymarkuppricelevel_MailboxTrackingFolders);
        writer.writeCollectionOfObjectValues<Principalobjectattributeaccess>("msdyn_resourcecategorymarkuppricelevel_PrincipalObjectAttributeAccesses", this.msdyn_resourcecategorymarkuppricelevel_PrincipalObjectAttributeAccesses);
        writer.writeCollectionOfObjectValues<Processsession>("msdyn_resourcecategorymarkuppricelevel_ProcessSession", this.msdyn_resourcecategorymarkuppricelevel_ProcessSession);
        writer.writeCollectionOfObjectValues<Syncerror>("msdyn_resourcecategorymarkuppricelevel_SyncErrors", this.msdyn_resourcecategorymarkuppricelevel_SyncErrors);
        writer.writeStringValue("msdyn_resourcecategorymarkuppricelevelid", this.msdyn_resourcecategorymarkuppricelevelid);
        writer.writeObjectValue<Msdyn_transactioncategory>("msdyn_transactioncategory", this.msdyn_transactioncategory);
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
