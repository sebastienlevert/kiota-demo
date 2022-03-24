import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createBulkdeletefailureFromDiscriminatorValue} from './createBulkdeletefailureFromDiscriminatorValue';
import {createDuplicaterecordFromDiscriminatorValue} from './createDuplicaterecordFromDiscriminatorValue';
import {createMailboxtrackingfolderFromDiscriminatorValue} from './createMailboxtrackingfolderFromDiscriminatorValue';
import {createOrganizationdatasyncsubscriptionentityFromDiscriminatorValue} from './createOrganizationdatasyncsubscriptionentityFromDiscriminatorValue';
import {createOrganizationFromDiscriminatorValue} from './createOrganizationFromDiscriminatorValue';
import {createPrincipalobjectattributeaccessFromDiscriminatorValue} from './createPrincipalobjectattributeaccessFromDiscriminatorValue';
import {createProcesssessionFromDiscriminatorValue} from './createProcesssessionFromDiscriminatorValue';
import {createSyncerrorFromDiscriminatorValue} from './createSyncerrorFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {Asyncoperation, Bulkdeletefailure, Crmbaseentity, Duplicaterecord, Mailboxtrackingfolder, Organization, Organizationdatasyncsubscriptionentity, Principalobjectattributeaccess, Processsession, Syncerror, Systemuser} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Organizationdatasyncsubscription extends Crmbaseentity implements Parsable {
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private __organizationid_value?: string | undefined;
    private _aadapplicationid?: string | undefined;
    private _blobpartitionby?: number | undefined;
    private _cansyncallmetadata?: boolean | undefined;
    private _createdby?: Systemuser | undefined;
    private _createdon?: Date | undefined;
    private _createdonbehalfby?: Systemuser | undefined;
    private _dataendpointpostingtype?: number | undefined;
    private _dataprocessingtype?: number | undefined;
    private _endpointsettings?: string | undefined;
    private _entityfilters?: string | undefined;
    private _entitysettings?: string | undefined;
    private _fullsynconly?: boolean | undefined;
    private _importsequencenumber?: number | undefined;
    private _isoutofboxsubscription?: boolean | undefined;
    private _migrationstate?: number | undefined;
    private _modifiedby?: Systemuser | undefined;
    private _modifiedon?: Date | undefined;
    private _modifiedonbehalfby?: Systemuser | undefined;
    private _name?: string | undefined;
    private _needcopyattachmentstoblob?: boolean | undefined;
    private _needtocopyfilestoblob?: boolean | undefined;
    private _newentities?: string | undefined;
    private _organizationdatasyncsubscription_AsyncOperations?: Asyncoperation[] | undefined;
    private _organizationdatasyncsubscription_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _organizationdatasyncsubscription_DuplicateBaseRecord?: Duplicaterecord[] | undefined;
    private _organizationdatasyncsubscription_DuplicateMatchingRecord?: Duplicaterecord[] | undefined;
    private _organizationdatasyncsubscription_MailboxTrackingFolders?: Mailboxtrackingfolder[] | undefined;
    private _organizationdatasyncsubscription_PrincipalObjectAttributeAccesses?: Principalobjectattributeaccess[] | undefined;
    private _organizationdatasyncsubscription_ProcessSession?: Processsession[] | undefined;
    private _organizationdatasyncsubscription_SyncErrors?: Syncerror[] | undefined;
    private _organizationdatasyncsubscriptionid?: string | undefined;
    private _organizationid?: Organization | undefined;
    private _overriddencreatedon?: Date | undefined;
    private _partnerprefix?: string | undefined;
    private _statecode?: number | undefined;
    private _statuscode?: number | undefined;
    private _subscription_subscriptionentity?: Organizationdatasyncsubscriptionentity[] | undefined;
    private _subscription_subscriptionentity_duplicate?: Organizationdatasyncsubscriptionentity[] | undefined;
    private _subscriptionendpointstatus?: number | undefined;
    private _subscriptionentities?: string | undefined;
    private _timezoneruleversionnumber?: number | undefined;
    private _unsubscribedentities?: string | undefined;
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
     * Gets the aadapplicationid property value. 
     * @returns a string
     */
    public get aadapplicationid() {
        return this._aadapplicationid;
    };
    /**
     * Sets the aadapplicationid property value. 
     * @param value Value to set for the aadapplicationid property.
     */
    public set aadapplicationid(value: string | undefined) {
        this._aadapplicationid = value;
    };
    /**
     * Gets the blobpartitionby property value. 
     * @returns a integer
     */
    public get blobpartitionby() {
        return this._blobpartitionby;
    };
    /**
     * Sets the blobpartitionby property value. 
     * @param value Value to set for the blobpartitionby property.
     */
    public set blobpartitionby(value: number | undefined) {
        this._blobpartitionby = value;
    };
    /**
     * Gets the cansyncallmetadata property value. 
     * @returns a boolean
     */
    public get cansyncallmetadata() {
        return this._cansyncallmetadata;
    };
    /**
     * Sets the cansyncallmetadata property value. 
     * @param value Value to set for the cansyncallmetadata property.
     */
    public set cansyncallmetadata(value: boolean | undefined) {
        this._cansyncallmetadata = value;
    };
    /**
     * Instantiates a new organizationdatasyncsubscription and sets the default values.
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
     * Gets the dataendpointpostingtype property value. 
     * @returns a integer
     */
    public get dataendpointpostingtype() {
        return this._dataendpointpostingtype;
    };
    /**
     * Sets the dataendpointpostingtype property value. 
     * @param value Value to set for the dataendpointpostingtype property.
     */
    public set dataendpointpostingtype(value: number | undefined) {
        this._dataendpointpostingtype = value;
    };
    /**
     * Gets the dataprocessingtype property value. 
     * @returns a integer
     */
    public get dataprocessingtype() {
        return this._dataprocessingtype;
    };
    /**
     * Sets the dataprocessingtype property value. 
     * @param value Value to set for the dataprocessingtype property.
     */
    public set dataprocessingtype(value: number | undefined) {
        this._dataprocessingtype = value;
    };
    /**
     * Gets the endpointsettings property value. 
     * @returns a string
     */
    public get endpointsettings() {
        return this._endpointsettings;
    };
    /**
     * Sets the endpointsettings property value. 
     * @param value Value to set for the endpointsettings property.
     */
    public set endpointsettings(value: string | undefined) {
        this._endpointsettings = value;
    };
    /**
     * Gets the entityfilters property value. 
     * @returns a string
     */
    public get entityfilters() {
        return this._entityfilters;
    };
    /**
     * Sets the entityfilters property value. 
     * @param value Value to set for the entityfilters property.
     */
    public set entityfilters(value: string | undefined) {
        this._entityfilters = value;
    };
    /**
     * Gets the entitysettings property value. 
     * @returns a string
     */
    public get entitysettings() {
        return this._entitysettings;
    };
    /**
     * Sets the entitysettings property value. 
     * @param value Value to set for the entitysettings property.
     */
    public set entitysettings(value: string | undefined) {
        this._entitysettings = value;
    };
    /**
     * Gets the fullsynconly property value. 
     * @returns a boolean
     */
    public get fullsynconly() {
        return this._fullsynconly;
    };
    /**
     * Sets the fullsynconly property value. 
     * @param value Value to set for the fullsynconly property.
     */
    public set fullsynconly(value: boolean | undefined) {
        this._fullsynconly = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Record<string, (item: T, node: ParseNode) => void> {
        return {...super.getFieldDeserializers<T>(),
            "_createdby_value": (o, n) => { (o as unknown as Organizationdatasyncsubscription)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Organizationdatasyncsubscription)._createdonbehalfby_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Organizationdatasyncsubscription)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Organizationdatasyncsubscription)._modifiedonbehalfby_value = n.getStringValue(); },
            "_organizationid_value": (o, n) => { (o as unknown as Organizationdatasyncsubscription)._organizationid_value = n.getStringValue(); },
            "aadapplicationid": (o, n) => { (o as unknown as Organizationdatasyncsubscription).aadapplicationid = n.getStringValue(); },
            "blobpartitionby": (o, n) => { (o as unknown as Organizationdatasyncsubscription).blobpartitionby = n.getNumberValue(); },
            "cansyncallmetadata": (o, n) => { (o as unknown as Organizationdatasyncsubscription).cansyncallmetadata = n.getBooleanValue(); },
            "createdby": (o, n) => { (o as unknown as Organizationdatasyncsubscription).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Organizationdatasyncsubscription).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Organizationdatasyncsubscription).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "dataendpointpostingtype": (o, n) => { (o as unknown as Organizationdatasyncsubscription).dataendpointpostingtype = n.getNumberValue(); },
            "dataprocessingtype": (o, n) => { (o as unknown as Organizationdatasyncsubscription).dataprocessingtype = n.getNumberValue(); },
            "endpointsettings": (o, n) => { (o as unknown as Organizationdatasyncsubscription).endpointsettings = n.getStringValue(); },
            "entityfilters": (o, n) => { (o as unknown as Organizationdatasyncsubscription).entityfilters = n.getStringValue(); },
            "entitysettings": (o, n) => { (o as unknown as Organizationdatasyncsubscription).entitysettings = n.getStringValue(); },
            "fullsynconly": (o, n) => { (o as unknown as Organizationdatasyncsubscription).fullsynconly = n.getBooleanValue(); },
            "importsequencenumber": (o, n) => { (o as unknown as Organizationdatasyncsubscription).importsequencenumber = n.getNumberValue(); },
            "isoutofboxsubscription": (o, n) => { (o as unknown as Organizationdatasyncsubscription).isoutofboxsubscription = n.getBooleanValue(); },
            "migrationstate": (o, n) => { (o as unknown as Organizationdatasyncsubscription).migrationstate = n.getNumberValue(); },
            "modifiedby": (o, n) => { (o as unknown as Organizationdatasyncsubscription).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Organizationdatasyncsubscription).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Organizationdatasyncsubscription).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "name": (o, n) => { (o as unknown as Organizationdatasyncsubscription).name = n.getStringValue(); },
            "needcopyattachmentstoblob": (o, n) => { (o as unknown as Organizationdatasyncsubscription).needcopyattachmentstoblob = n.getBooleanValue(); },
            "needtocopyfilestoblob": (o, n) => { (o as unknown as Organizationdatasyncsubscription).needtocopyfilestoblob = n.getBooleanValue(); },
            "newentities": (o, n) => { (o as unknown as Organizationdatasyncsubscription).newentities = n.getStringValue(); },
            "organizationdatasyncsubscription_AsyncOperations": (o, n) => { (o as unknown as Organizationdatasyncsubscription).organizationdatasyncsubscription_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "organizationdatasyncsubscription_BulkDeleteFailures": (o, n) => { (o as unknown as Organizationdatasyncsubscription).organizationdatasyncsubscription_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "organizationdatasyncsubscription_DuplicateBaseRecord": (o, n) => { (o as unknown as Organizationdatasyncsubscription).organizationdatasyncsubscription_DuplicateBaseRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "organizationdatasyncsubscription_DuplicateMatchingRecord": (o, n) => { (o as unknown as Organizationdatasyncsubscription).organizationdatasyncsubscription_DuplicateMatchingRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "organizationdatasyncsubscription_MailboxTrackingFolders": (o, n) => { (o as unknown as Organizationdatasyncsubscription).organizationdatasyncsubscription_MailboxTrackingFolders = n.getCollectionOfObjectValues<Mailboxtrackingfolder>(createMailboxtrackingfolderFromDiscriminatorValue); },
            "organizationdatasyncsubscription_PrincipalObjectAttributeAccesses": (o, n) => { (o as unknown as Organizationdatasyncsubscription).organizationdatasyncsubscription_PrincipalObjectAttributeAccesses = n.getCollectionOfObjectValues<Principalobjectattributeaccess>(createPrincipalobjectattributeaccessFromDiscriminatorValue); },
            "organizationdatasyncsubscription_ProcessSession": (o, n) => { (o as unknown as Organizationdatasyncsubscription).organizationdatasyncsubscription_ProcessSession = n.getCollectionOfObjectValues<Processsession>(createProcesssessionFromDiscriminatorValue); },
            "organizationdatasyncsubscription_SyncErrors": (o, n) => { (o as unknown as Organizationdatasyncsubscription).organizationdatasyncsubscription_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "organizationdatasyncsubscriptionid": (o, n) => { (o as unknown as Organizationdatasyncsubscription).organizationdatasyncsubscriptionid = n.getStringValue(); },
            "organizationid": (o, n) => { (o as unknown as Organizationdatasyncsubscription).organizationid = n.getObjectValue<Organization>(createOrganizationFromDiscriminatorValue); },
            "overriddencreatedon": (o, n) => { (o as unknown as Organizationdatasyncsubscription).overriddencreatedon = n.getDateValue(); },
            "partnerprefix": (o, n) => { (o as unknown as Organizationdatasyncsubscription).partnerprefix = n.getStringValue(); },
            "statecode": (o, n) => { (o as unknown as Organizationdatasyncsubscription).statecode = n.getNumberValue(); },
            "statuscode": (o, n) => { (o as unknown as Organizationdatasyncsubscription).statuscode = n.getNumberValue(); },
            "subscription_subscriptionentity": (o, n) => { (o as unknown as Organizationdatasyncsubscription).subscription_subscriptionentity = n.getCollectionOfObjectValues<Organizationdatasyncsubscriptionentity>(createOrganizationdatasyncsubscriptionentityFromDiscriminatorValue); },
            "subscription_subscriptionentity_duplicate": (o, n) => { (o as unknown as Organizationdatasyncsubscription).subscription_subscriptionentity_duplicate = n.getCollectionOfObjectValues<Organizationdatasyncsubscriptionentity>(createOrganizationdatasyncsubscriptionentityFromDiscriminatorValue); },
            "subscriptionendpointstatus": (o, n) => { (o as unknown as Organizationdatasyncsubscription).subscriptionendpointstatus = n.getNumberValue(); },
            "subscriptionentities": (o, n) => { (o as unknown as Organizationdatasyncsubscription).subscriptionentities = n.getStringValue(); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Organizationdatasyncsubscription).timezoneruleversionnumber = n.getNumberValue(); },
            "unsubscribedentities": (o, n) => { (o as unknown as Organizationdatasyncsubscription).unsubscribedentities = n.getStringValue(); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Organizationdatasyncsubscription).utcconversiontimezonecode = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as Organizationdatasyncsubscription).versionnumber = n.getNumberValue(); },
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
     * Gets the isoutofboxsubscription property value. 
     * @returns a boolean
     */
    public get isoutofboxsubscription() {
        return this._isoutofboxsubscription;
    };
    /**
     * Sets the isoutofboxsubscription property value. 
     * @param value Value to set for the isoutofboxsubscription property.
     */
    public set isoutofboxsubscription(value: boolean | undefined) {
        this._isoutofboxsubscription = value;
    };
    /**
     * Gets the migrationstate property value. 
     * @returns a integer
     */
    public get migrationstate() {
        return this._migrationstate;
    };
    /**
     * Sets the migrationstate property value. 
     * @param value Value to set for the migrationstate property.
     */
    public set migrationstate(value: number | undefined) {
        this._migrationstate = value;
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
     * Gets the name property value. 
     * @returns a string
     */
    public get name() {
        return this._name;
    };
    /**
     * Sets the name property value. 
     * @param value Value to set for the name property.
     */
    public set name(value: string | undefined) {
        this._name = value;
    };
    /**
     * Gets the needcopyattachmentstoblob property value. 
     * @returns a boolean
     */
    public get needcopyattachmentstoblob() {
        return this._needcopyattachmentstoblob;
    };
    /**
     * Sets the needcopyattachmentstoblob property value. 
     * @param value Value to set for the needcopyattachmentstoblob property.
     */
    public set needcopyattachmentstoblob(value: boolean | undefined) {
        this._needcopyattachmentstoblob = value;
    };
    /**
     * Gets the needtocopyfilestoblob property value. 
     * @returns a boolean
     */
    public get needtocopyfilestoblob() {
        return this._needtocopyfilestoblob;
    };
    /**
     * Sets the needtocopyfilestoblob property value. 
     * @param value Value to set for the needtocopyfilestoblob property.
     */
    public set needtocopyfilestoblob(value: boolean | undefined) {
        this._needtocopyfilestoblob = value;
    };
    /**
     * Gets the newentities property value. 
     * @returns a string
     */
    public get newentities() {
        return this._newentities;
    };
    /**
     * Sets the newentities property value. 
     * @param value Value to set for the newentities property.
     */
    public set newentities(value: string | undefined) {
        this._newentities = value;
    };
    /**
     * Gets the organizationdatasyncsubscription_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get organizationdatasyncsubscription_AsyncOperations() {
        return this._organizationdatasyncsubscription_AsyncOperations;
    };
    /**
     * Sets the organizationdatasyncsubscription_AsyncOperations property value. 
     * @param value Value to set for the organizationdatasyncsubscription_AsyncOperations property.
     */
    public set organizationdatasyncsubscription_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._organizationdatasyncsubscription_AsyncOperations = value;
    };
    /**
     * Gets the organizationdatasyncsubscription_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get organizationdatasyncsubscription_BulkDeleteFailures() {
        return this._organizationdatasyncsubscription_BulkDeleteFailures;
    };
    /**
     * Sets the organizationdatasyncsubscription_BulkDeleteFailures property value. 
     * @param value Value to set for the organizationdatasyncsubscription_BulkDeleteFailures property.
     */
    public set organizationdatasyncsubscription_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._organizationdatasyncsubscription_BulkDeleteFailures = value;
    };
    /**
     * Gets the organizationdatasyncsubscription_DuplicateBaseRecord property value. 
     * @returns a duplicaterecord
     */
    public get organizationdatasyncsubscription_DuplicateBaseRecord() {
        return this._organizationdatasyncsubscription_DuplicateBaseRecord;
    };
    /**
     * Sets the organizationdatasyncsubscription_DuplicateBaseRecord property value. 
     * @param value Value to set for the organizationdatasyncsubscription_DuplicateBaseRecord property.
     */
    public set organizationdatasyncsubscription_DuplicateBaseRecord(value: Duplicaterecord[] | undefined) {
        this._organizationdatasyncsubscription_DuplicateBaseRecord = value;
    };
    /**
     * Gets the organizationdatasyncsubscription_DuplicateMatchingRecord property value. 
     * @returns a duplicaterecord
     */
    public get organizationdatasyncsubscription_DuplicateMatchingRecord() {
        return this._organizationdatasyncsubscription_DuplicateMatchingRecord;
    };
    /**
     * Sets the organizationdatasyncsubscription_DuplicateMatchingRecord property value. 
     * @param value Value to set for the organizationdatasyncsubscription_DuplicateMatchingRecord property.
     */
    public set organizationdatasyncsubscription_DuplicateMatchingRecord(value: Duplicaterecord[] | undefined) {
        this._organizationdatasyncsubscription_DuplicateMatchingRecord = value;
    };
    /**
     * Gets the organizationdatasyncsubscription_MailboxTrackingFolders property value. 
     * @returns a mailboxtrackingfolder
     */
    public get organizationdatasyncsubscription_MailboxTrackingFolders() {
        return this._organizationdatasyncsubscription_MailboxTrackingFolders;
    };
    /**
     * Sets the organizationdatasyncsubscription_MailboxTrackingFolders property value. 
     * @param value Value to set for the organizationdatasyncsubscription_MailboxTrackingFolders property.
     */
    public set organizationdatasyncsubscription_MailboxTrackingFolders(value: Mailboxtrackingfolder[] | undefined) {
        this._organizationdatasyncsubscription_MailboxTrackingFolders = value;
    };
    /**
     * Gets the organizationdatasyncsubscription_PrincipalObjectAttributeAccesses property value. 
     * @returns a principalobjectattributeaccess
     */
    public get organizationdatasyncsubscription_PrincipalObjectAttributeAccesses() {
        return this._organizationdatasyncsubscription_PrincipalObjectAttributeAccesses;
    };
    /**
     * Sets the organizationdatasyncsubscription_PrincipalObjectAttributeAccesses property value. 
     * @param value Value to set for the organizationdatasyncsubscription_PrincipalObjectAttributeAccesses property.
     */
    public set organizationdatasyncsubscription_PrincipalObjectAttributeAccesses(value: Principalobjectattributeaccess[] | undefined) {
        this._organizationdatasyncsubscription_PrincipalObjectAttributeAccesses = value;
    };
    /**
     * Gets the organizationdatasyncsubscription_ProcessSession property value. 
     * @returns a processsession
     */
    public get organizationdatasyncsubscription_ProcessSession() {
        return this._organizationdatasyncsubscription_ProcessSession;
    };
    /**
     * Sets the organizationdatasyncsubscription_ProcessSession property value. 
     * @param value Value to set for the organizationdatasyncsubscription_ProcessSession property.
     */
    public set organizationdatasyncsubscription_ProcessSession(value: Processsession[] | undefined) {
        this._organizationdatasyncsubscription_ProcessSession = value;
    };
    /**
     * Gets the organizationdatasyncsubscription_SyncErrors property value. 
     * @returns a syncerror
     */
    public get organizationdatasyncsubscription_SyncErrors() {
        return this._organizationdatasyncsubscription_SyncErrors;
    };
    /**
     * Sets the organizationdatasyncsubscription_SyncErrors property value. 
     * @param value Value to set for the organizationdatasyncsubscription_SyncErrors property.
     */
    public set organizationdatasyncsubscription_SyncErrors(value: Syncerror[] | undefined) {
        this._organizationdatasyncsubscription_SyncErrors = value;
    };
    /**
     * Gets the organizationdatasyncsubscriptionid property value. 
     * @returns a string
     */
    public get organizationdatasyncsubscriptionid() {
        return this._organizationdatasyncsubscriptionid;
    };
    /**
     * Sets the organizationdatasyncsubscriptionid property value. 
     * @param value Value to set for the organizationdatasyncsubscriptionid property.
     */
    public set organizationdatasyncsubscriptionid(value: string | undefined) {
        this._organizationdatasyncsubscriptionid = value;
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
     * Gets the partnerprefix property value. 
     * @returns a string
     */
    public get partnerprefix() {
        return this._partnerprefix;
    };
    /**
     * Sets the partnerprefix property value. 
     * @param value Value to set for the partnerprefix property.
     */
    public set partnerprefix(value: string | undefined) {
        this._partnerprefix = value;
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
        writer.writeStringValue("aadapplicationid", this.aadapplicationid);
        writer.writeNumberValue("blobpartitionby", this.blobpartitionby);
        writer.writeBooleanValue("cansyncallmetadata", this.cansyncallmetadata);
        writer.writeObjectValue<Systemuser>("createdby", this.createdby);
        writer.writeDateValue("createdon", this.createdon);
        writer.writeObjectValue<Systemuser>("createdonbehalfby", this.createdonbehalfby);
        writer.writeNumberValue("dataendpointpostingtype", this.dataendpointpostingtype);
        writer.writeNumberValue("dataprocessingtype", this.dataprocessingtype);
        writer.writeStringValue("endpointsettings", this.endpointsettings);
        writer.writeStringValue("entityfilters", this.entityfilters);
        writer.writeStringValue("entitysettings", this.entitysettings);
        writer.writeBooleanValue("fullsynconly", this.fullsynconly);
        writer.writeNumberValue("importsequencenumber", this.importsequencenumber);
        writer.writeBooleanValue("isoutofboxsubscription", this.isoutofboxsubscription);
        writer.writeNumberValue("migrationstate", this.migrationstate);
        writer.writeObjectValue<Systemuser>("modifiedby", this.modifiedby);
        writer.writeDateValue("modifiedon", this.modifiedon);
        writer.writeObjectValue<Systemuser>("modifiedonbehalfby", this.modifiedonbehalfby);
        writer.writeStringValue("name", this.name);
        writer.writeBooleanValue("needcopyattachmentstoblob", this.needcopyattachmentstoblob);
        writer.writeBooleanValue("needtocopyfilestoblob", this.needtocopyfilestoblob);
        writer.writeStringValue("newentities", this.newentities);
        writer.writeCollectionOfObjectValues<Asyncoperation>("organizationdatasyncsubscription_AsyncOperations", this.organizationdatasyncsubscription_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("organizationdatasyncsubscription_BulkDeleteFailures", this.organizationdatasyncsubscription_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("organizationdatasyncsubscription_DuplicateBaseRecord", this.organizationdatasyncsubscription_DuplicateBaseRecord);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("organizationdatasyncsubscription_DuplicateMatchingRecord", this.organizationdatasyncsubscription_DuplicateMatchingRecord);
        writer.writeCollectionOfObjectValues<Mailboxtrackingfolder>("organizationdatasyncsubscription_MailboxTrackingFolders", this.organizationdatasyncsubscription_MailboxTrackingFolders);
        writer.writeCollectionOfObjectValues<Principalobjectattributeaccess>("organizationdatasyncsubscription_PrincipalObjectAttributeAccesses", this.organizationdatasyncsubscription_PrincipalObjectAttributeAccesses);
        writer.writeCollectionOfObjectValues<Processsession>("organizationdatasyncsubscription_ProcessSession", this.organizationdatasyncsubscription_ProcessSession);
        writer.writeCollectionOfObjectValues<Syncerror>("organizationdatasyncsubscription_SyncErrors", this.organizationdatasyncsubscription_SyncErrors);
        writer.writeStringValue("organizationdatasyncsubscriptionid", this.organizationdatasyncsubscriptionid);
        writer.writeObjectValue<Organization>("organizationid", this.organizationid);
        writer.writeDateValue("overriddencreatedon", this.overriddencreatedon);
        writer.writeStringValue("partnerprefix", this.partnerprefix);
        writer.writeNumberValue("statecode", this.statecode);
        writer.writeNumberValue("statuscode", this.statuscode);
        writer.writeCollectionOfObjectValues<Organizationdatasyncsubscriptionentity>("subscription_subscriptionentity", this.subscription_subscriptionentity);
        writer.writeCollectionOfObjectValues<Organizationdatasyncsubscriptionentity>("subscription_subscriptionentity_duplicate", this.subscription_subscriptionentity_duplicate);
        writer.writeNumberValue("subscriptionendpointstatus", this.subscriptionendpointstatus);
        writer.writeStringValue("subscriptionentities", this.subscriptionentities);
        writer.writeNumberValue("timezoneruleversionnumber", this.timezoneruleversionnumber);
        writer.writeStringValue("unsubscribedentities", this.unsubscribedentities);
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
     * Gets the subscription_subscriptionentity property value. 
     * @returns a organizationdatasyncsubscriptionentity
     */
    public get subscription_subscriptionentity() {
        return this._subscription_subscriptionentity;
    };
    /**
     * Sets the subscription_subscriptionentity property value. 
     * @param value Value to set for the subscription_subscriptionentity property.
     */
    public set subscription_subscriptionentity(value: Organizationdatasyncsubscriptionentity[] | undefined) {
        this._subscription_subscriptionentity = value;
    };
    /**
     * Gets the subscription_subscriptionentity_duplicate property value. 
     * @returns a organizationdatasyncsubscriptionentity
     */
    public get subscription_subscriptionentity_duplicate() {
        return this._subscription_subscriptionentity_duplicate;
    };
    /**
     * Sets the subscription_subscriptionentity_duplicate property value. 
     * @param value Value to set for the subscription_subscriptionentity_duplicate property.
     */
    public set subscription_subscriptionentity_duplicate(value: Organizationdatasyncsubscriptionentity[] | undefined) {
        this._subscription_subscriptionentity_duplicate = value;
    };
    /**
     * Gets the subscriptionendpointstatus property value. 
     * @returns a integer
     */
    public get subscriptionendpointstatus() {
        return this._subscriptionendpointstatus;
    };
    /**
     * Sets the subscriptionendpointstatus property value. 
     * @param value Value to set for the subscriptionendpointstatus property.
     */
    public set subscriptionendpointstatus(value: number | undefined) {
        this._subscriptionendpointstatus = value;
    };
    /**
     * Gets the subscriptionentities property value. 
     * @returns a string
     */
    public get subscriptionentities() {
        return this._subscriptionentities;
    };
    /**
     * Sets the subscriptionentities property value. 
     * @param value Value to set for the subscriptionentities property.
     */
    public set subscriptionentities(value: string | undefined) {
        this._subscriptionentities = value;
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
     * Gets the unsubscribedentities property value. 
     * @returns a string
     */
    public get unsubscribedentities() {
        return this._unsubscribedentities;
    };
    /**
     * Sets the unsubscribedentities property value. 
     * @param value Value to set for the unsubscribedentities property.
     */
    public set unsubscribedentities(value: string | undefined) {
        this._unsubscribedentities = value;
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
