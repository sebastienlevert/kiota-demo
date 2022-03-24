import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createBulkdeletefailureFromDiscriminatorValue} from './createBulkdeletefailureFromDiscriminatorValue';
import {createDuplicaterecordFromDiscriminatorValue} from './createDuplicaterecordFromDiscriminatorValue';
import {createMailboxtrackingfolderFromDiscriminatorValue} from './createMailboxtrackingfolderFromDiscriminatorValue';
import {createMsdyn_channelFromDiscriminatorValue} from './createMsdyn_channelFromDiscriminatorValue';
import {createOrganizationFromDiscriminatorValue} from './createOrganizationFromDiscriminatorValue';
import {createPrincipalobjectattributeaccessFromDiscriminatorValue} from './createPrincipalobjectattributeaccessFromDiscriminatorValue';
import {createProcesssessionFromDiscriminatorValue} from './createProcesssessionFromDiscriminatorValue';
import {createSyncerrorFromDiscriminatorValue} from './createSyncerrorFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {Asyncoperation, Bulkdeletefailure, Crmbaseentity, Duplicaterecord, Mailboxtrackingfolder, Msdyn_channel, Organization, Principalobjectattributeaccess, Processsession, Syncerror, Systemuser} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Msdyn_ciprovider extends Crmbaseentity implements Parsable {
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
    private _msdyn_appselector?: string | undefined;
    private _msdyn_cifsolversion?: string | undefined;
    private _msdyn_ciprovider_AsyncOperations?: Asyncoperation[] | undefined;
    private _msdyn_ciprovider_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _msdyn_ciprovider_DuplicateBaseRecord?: Duplicaterecord[] | undefined;
    private _msdyn_ciprovider_DuplicateMatchingRecord?: Duplicaterecord[] | undefined;
    private _msdyn_ciprovider_MailboxTrackingFolders?: Mailboxtrackingfolder[] | undefined;
    private _msdyn_ciprovider_PrincipalObjectAttributeAccesses?: Principalobjectattributeaccess[] | undefined;
    private _msdyn_ciprovider_ProcessSession?: Processsession[] | undefined;
    private _msdyn_ciprovider_SyncErrors?: Syncerror[] | undefined;
    private _msdyn_ciprovider_systemuser_membership?: Systemuser[] | undefined;
    private _msdyn_ciproviderapiversion?: number | undefined;
    private _msdyn_ciproviderid?: string | undefined;
    private _msdyn_clicktoact?: boolean | undefined;
    private _msdyn_customparams?: string | undefined;
    private _msdyn_enableanalytics?: boolean | undefined;
    private _msdyn_label?: string | undefined;
    private _msdyn_landingurl?: string | undefined;
    private _msdyn_msdyn_ciprovider_msdyn_channel?: Msdyn_channel[] | undefined;
    private _msdyn_name?: string | undefined;
    private _msdyn_roleselector?: string | undefined;
    private _msdyn_sortorder?: number | undefined;
    private _msdyn_trusteddomain?: string | undefined;
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
     * Instantiates a new msdyn_ciprovider and sets the default values.
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
            "_createdby_value": (o, n) => { (o as unknown as Msdyn_ciprovider)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Msdyn_ciprovider)._createdonbehalfby_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Msdyn_ciprovider)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Msdyn_ciprovider)._modifiedonbehalfby_value = n.getStringValue(); },
            "_organizationid_value": (o, n) => { (o as unknown as Msdyn_ciprovider)._organizationid_value = n.getStringValue(); },
            "createdby": (o, n) => { (o as unknown as Msdyn_ciprovider).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Msdyn_ciprovider).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Msdyn_ciprovider).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "importsequencenumber": (o, n) => { (o as unknown as Msdyn_ciprovider).importsequencenumber = n.getNumberValue(); },
            "modifiedby": (o, n) => { (o as unknown as Msdyn_ciprovider).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Msdyn_ciprovider).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Msdyn_ciprovider).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "msdyn_appselector": (o, n) => { (o as unknown as Msdyn_ciprovider).msdyn_appselector = n.getStringValue(); },
            "msdyn_cifsolversion": (o, n) => { (o as unknown as Msdyn_ciprovider).msdyn_cifsolversion = n.getStringValue(); },
            "msdyn_ciprovider_AsyncOperations": (o, n) => { (o as unknown as Msdyn_ciprovider).msdyn_ciprovider_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "msdyn_ciprovider_BulkDeleteFailures": (o, n) => { (o as unknown as Msdyn_ciprovider).msdyn_ciprovider_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "msdyn_ciprovider_DuplicateBaseRecord": (o, n) => { (o as unknown as Msdyn_ciprovider).msdyn_ciprovider_DuplicateBaseRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "msdyn_ciprovider_DuplicateMatchingRecord": (o, n) => { (o as unknown as Msdyn_ciprovider).msdyn_ciprovider_DuplicateMatchingRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "msdyn_ciprovider_MailboxTrackingFolders": (o, n) => { (o as unknown as Msdyn_ciprovider).msdyn_ciprovider_MailboxTrackingFolders = n.getCollectionOfObjectValues<Mailboxtrackingfolder>(createMailboxtrackingfolderFromDiscriminatorValue); },
            "msdyn_ciprovider_PrincipalObjectAttributeAccesses": (o, n) => { (o as unknown as Msdyn_ciprovider).msdyn_ciprovider_PrincipalObjectAttributeAccesses = n.getCollectionOfObjectValues<Principalobjectattributeaccess>(createPrincipalobjectattributeaccessFromDiscriminatorValue); },
            "msdyn_ciprovider_ProcessSession": (o, n) => { (o as unknown as Msdyn_ciprovider).msdyn_ciprovider_ProcessSession = n.getCollectionOfObjectValues<Processsession>(createProcesssessionFromDiscriminatorValue); },
            "msdyn_ciprovider_SyncErrors": (o, n) => { (o as unknown as Msdyn_ciprovider).msdyn_ciprovider_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "msdyn_ciprovider_systemuser_membership": (o, n) => { (o as unknown as Msdyn_ciprovider).msdyn_ciprovider_systemuser_membership = n.getCollectionOfObjectValues<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "msdyn_ciproviderapiversion": (o, n) => { (o as unknown as Msdyn_ciprovider).msdyn_ciproviderapiversion = n.getNumberValue(); },
            "msdyn_ciproviderid": (o, n) => { (o as unknown as Msdyn_ciprovider).msdyn_ciproviderid = n.getStringValue(); },
            "msdyn_clicktoact": (o, n) => { (o as unknown as Msdyn_ciprovider).msdyn_clicktoact = n.getBooleanValue(); },
            "msdyn_customparams": (o, n) => { (o as unknown as Msdyn_ciprovider).msdyn_customparams = n.getStringValue(); },
            "msdyn_enableanalytics": (o, n) => { (o as unknown as Msdyn_ciprovider).msdyn_enableanalytics = n.getBooleanValue(); },
            "msdyn_label": (o, n) => { (o as unknown as Msdyn_ciprovider).msdyn_label = n.getStringValue(); },
            "msdyn_landingurl": (o, n) => { (o as unknown as Msdyn_ciprovider).msdyn_landingurl = n.getStringValue(); },
            "msdyn_msdyn_ciprovider_msdyn_channel": (o, n) => { (o as unknown as Msdyn_ciprovider).msdyn_msdyn_ciprovider_msdyn_channel = n.getCollectionOfObjectValues<Msdyn_channel>(createMsdyn_channelFromDiscriminatorValue); },
            "msdyn_name": (o, n) => { (o as unknown as Msdyn_ciprovider).msdyn_name = n.getStringValue(); },
            "msdyn_roleselector": (o, n) => { (o as unknown as Msdyn_ciprovider).msdyn_roleselector = n.getStringValue(); },
            "msdyn_sortorder": (o, n) => { (o as unknown as Msdyn_ciprovider).msdyn_sortorder = n.getNumberValue(); },
            "msdyn_trusteddomain": (o, n) => { (o as unknown as Msdyn_ciprovider).msdyn_trusteddomain = n.getStringValue(); },
            "organizationid": (o, n) => { (o as unknown as Msdyn_ciprovider).organizationid = n.getObjectValue<Organization>(createOrganizationFromDiscriminatorValue); },
            "overriddencreatedon": (o, n) => { (o as unknown as Msdyn_ciprovider).overriddencreatedon = n.getDateValue(); },
            "statecode": (o, n) => { (o as unknown as Msdyn_ciprovider).statecode = n.getNumberValue(); },
            "statuscode": (o, n) => { (o as unknown as Msdyn_ciprovider).statuscode = n.getNumberValue(); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Msdyn_ciprovider).timezoneruleversionnumber = n.getNumberValue(); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Msdyn_ciprovider).utcconversiontimezonecode = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as Msdyn_ciprovider).versionnumber = n.getNumberValue(); },
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
     * Gets the msdyn_appselector property value. 
     * @returns a string
     */
    public get msdyn_appselector() {
        return this._msdyn_appselector;
    };
    /**
     * Sets the msdyn_appselector property value. 
     * @param value Value to set for the msdyn_appselector property.
     */
    public set msdyn_appselector(value: string | undefined) {
        this._msdyn_appselector = value;
    };
    /**
     * Gets the msdyn_cifsolversion property value. 
     * @returns a string
     */
    public get msdyn_cifsolversion() {
        return this._msdyn_cifsolversion;
    };
    /**
     * Sets the msdyn_cifsolversion property value. 
     * @param value Value to set for the msdyn_cifsolversion property.
     */
    public set msdyn_cifsolversion(value: string | undefined) {
        this._msdyn_cifsolversion = value;
    };
    /**
     * Gets the msdyn_ciprovider_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get msdyn_ciprovider_AsyncOperations() {
        return this._msdyn_ciprovider_AsyncOperations;
    };
    /**
     * Sets the msdyn_ciprovider_AsyncOperations property value. 
     * @param value Value to set for the msdyn_ciprovider_AsyncOperations property.
     */
    public set msdyn_ciprovider_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._msdyn_ciprovider_AsyncOperations = value;
    };
    /**
     * Gets the msdyn_ciprovider_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get msdyn_ciprovider_BulkDeleteFailures() {
        return this._msdyn_ciprovider_BulkDeleteFailures;
    };
    /**
     * Sets the msdyn_ciprovider_BulkDeleteFailures property value. 
     * @param value Value to set for the msdyn_ciprovider_BulkDeleteFailures property.
     */
    public set msdyn_ciprovider_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._msdyn_ciprovider_BulkDeleteFailures = value;
    };
    /**
     * Gets the msdyn_ciprovider_DuplicateBaseRecord property value. 
     * @returns a duplicaterecord
     */
    public get msdyn_ciprovider_DuplicateBaseRecord() {
        return this._msdyn_ciprovider_DuplicateBaseRecord;
    };
    /**
     * Sets the msdyn_ciprovider_DuplicateBaseRecord property value. 
     * @param value Value to set for the msdyn_ciprovider_DuplicateBaseRecord property.
     */
    public set msdyn_ciprovider_DuplicateBaseRecord(value: Duplicaterecord[] | undefined) {
        this._msdyn_ciprovider_DuplicateBaseRecord = value;
    };
    /**
     * Gets the msdyn_ciprovider_DuplicateMatchingRecord property value. 
     * @returns a duplicaterecord
     */
    public get msdyn_ciprovider_DuplicateMatchingRecord() {
        return this._msdyn_ciprovider_DuplicateMatchingRecord;
    };
    /**
     * Sets the msdyn_ciprovider_DuplicateMatchingRecord property value. 
     * @param value Value to set for the msdyn_ciprovider_DuplicateMatchingRecord property.
     */
    public set msdyn_ciprovider_DuplicateMatchingRecord(value: Duplicaterecord[] | undefined) {
        this._msdyn_ciprovider_DuplicateMatchingRecord = value;
    };
    /**
     * Gets the msdyn_ciprovider_MailboxTrackingFolders property value. 
     * @returns a mailboxtrackingfolder
     */
    public get msdyn_ciprovider_MailboxTrackingFolders() {
        return this._msdyn_ciprovider_MailboxTrackingFolders;
    };
    /**
     * Sets the msdyn_ciprovider_MailboxTrackingFolders property value. 
     * @param value Value to set for the msdyn_ciprovider_MailboxTrackingFolders property.
     */
    public set msdyn_ciprovider_MailboxTrackingFolders(value: Mailboxtrackingfolder[] | undefined) {
        this._msdyn_ciprovider_MailboxTrackingFolders = value;
    };
    /**
     * Gets the msdyn_ciprovider_PrincipalObjectAttributeAccesses property value. 
     * @returns a principalobjectattributeaccess
     */
    public get msdyn_ciprovider_PrincipalObjectAttributeAccesses() {
        return this._msdyn_ciprovider_PrincipalObjectAttributeAccesses;
    };
    /**
     * Sets the msdyn_ciprovider_PrincipalObjectAttributeAccesses property value. 
     * @param value Value to set for the msdyn_ciprovider_PrincipalObjectAttributeAccesses property.
     */
    public set msdyn_ciprovider_PrincipalObjectAttributeAccesses(value: Principalobjectattributeaccess[] | undefined) {
        this._msdyn_ciprovider_PrincipalObjectAttributeAccesses = value;
    };
    /**
     * Gets the msdyn_ciprovider_ProcessSession property value. 
     * @returns a processsession
     */
    public get msdyn_ciprovider_ProcessSession() {
        return this._msdyn_ciprovider_ProcessSession;
    };
    /**
     * Sets the msdyn_ciprovider_ProcessSession property value. 
     * @param value Value to set for the msdyn_ciprovider_ProcessSession property.
     */
    public set msdyn_ciprovider_ProcessSession(value: Processsession[] | undefined) {
        this._msdyn_ciprovider_ProcessSession = value;
    };
    /**
     * Gets the msdyn_ciprovider_SyncErrors property value. 
     * @returns a syncerror
     */
    public get msdyn_ciprovider_SyncErrors() {
        return this._msdyn_ciprovider_SyncErrors;
    };
    /**
     * Sets the msdyn_ciprovider_SyncErrors property value. 
     * @param value Value to set for the msdyn_ciprovider_SyncErrors property.
     */
    public set msdyn_ciprovider_SyncErrors(value: Syncerror[] | undefined) {
        this._msdyn_ciprovider_SyncErrors = value;
    };
    /**
     * Gets the msdyn_ciprovider_systemuser_membership property value. 
     * @returns a systemuser
     */
    public get msdyn_ciprovider_systemuser_membership() {
        return this._msdyn_ciprovider_systemuser_membership;
    };
    /**
     * Sets the msdyn_ciprovider_systemuser_membership property value. 
     * @param value Value to set for the msdyn_ciprovider_systemuser_membership property.
     */
    public set msdyn_ciprovider_systemuser_membership(value: Systemuser[] | undefined) {
        this._msdyn_ciprovider_systemuser_membership = value;
    };
    /**
     * Gets the msdyn_ciproviderapiversion property value. 
     * @returns a integer
     */
    public get msdyn_ciproviderapiversion() {
        return this._msdyn_ciproviderapiversion;
    };
    /**
     * Sets the msdyn_ciproviderapiversion property value. 
     * @param value Value to set for the msdyn_ciproviderapiversion property.
     */
    public set msdyn_ciproviderapiversion(value: number | undefined) {
        this._msdyn_ciproviderapiversion = value;
    };
    /**
     * Gets the msdyn_ciproviderid property value. 
     * @returns a string
     */
    public get msdyn_ciproviderid() {
        return this._msdyn_ciproviderid;
    };
    /**
     * Sets the msdyn_ciproviderid property value. 
     * @param value Value to set for the msdyn_ciproviderid property.
     */
    public set msdyn_ciproviderid(value: string | undefined) {
        this._msdyn_ciproviderid = value;
    };
    /**
     * Gets the msdyn_clicktoact property value. 
     * @returns a boolean
     */
    public get msdyn_clicktoact() {
        return this._msdyn_clicktoact;
    };
    /**
     * Sets the msdyn_clicktoact property value. 
     * @param value Value to set for the msdyn_clicktoact property.
     */
    public set msdyn_clicktoact(value: boolean | undefined) {
        this._msdyn_clicktoact = value;
    };
    /**
     * Gets the msdyn_customparams property value. 
     * @returns a string
     */
    public get msdyn_customparams() {
        return this._msdyn_customparams;
    };
    /**
     * Sets the msdyn_customparams property value. 
     * @param value Value to set for the msdyn_customparams property.
     */
    public set msdyn_customparams(value: string | undefined) {
        this._msdyn_customparams = value;
    };
    /**
     * Gets the msdyn_enableanalytics property value. 
     * @returns a boolean
     */
    public get msdyn_enableanalytics() {
        return this._msdyn_enableanalytics;
    };
    /**
     * Sets the msdyn_enableanalytics property value. 
     * @param value Value to set for the msdyn_enableanalytics property.
     */
    public set msdyn_enableanalytics(value: boolean | undefined) {
        this._msdyn_enableanalytics = value;
    };
    /**
     * Gets the msdyn_label property value. 
     * @returns a string
     */
    public get msdyn_label() {
        return this._msdyn_label;
    };
    /**
     * Sets the msdyn_label property value. 
     * @param value Value to set for the msdyn_label property.
     */
    public set msdyn_label(value: string | undefined) {
        this._msdyn_label = value;
    };
    /**
     * Gets the msdyn_landingurl property value. 
     * @returns a string
     */
    public get msdyn_landingurl() {
        return this._msdyn_landingurl;
    };
    /**
     * Sets the msdyn_landingurl property value. 
     * @param value Value to set for the msdyn_landingurl property.
     */
    public set msdyn_landingurl(value: string | undefined) {
        this._msdyn_landingurl = value;
    };
    /**
     * Gets the msdyn_msdyn_ciprovider_msdyn_channel property value. 
     * @returns a msdyn_channel
     */
    public get msdyn_msdyn_ciprovider_msdyn_channel() {
        return this._msdyn_msdyn_ciprovider_msdyn_channel;
    };
    /**
     * Sets the msdyn_msdyn_ciprovider_msdyn_channel property value. 
     * @param value Value to set for the msdyn_msdyn_ciprovider_msdyn_channel property.
     */
    public set msdyn_msdyn_ciprovider_msdyn_channel(value: Msdyn_channel[] | undefined) {
        this._msdyn_msdyn_ciprovider_msdyn_channel = value;
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
     * Gets the msdyn_roleselector property value. 
     * @returns a string
     */
    public get msdyn_roleselector() {
        return this._msdyn_roleselector;
    };
    /**
     * Sets the msdyn_roleselector property value. 
     * @param value Value to set for the msdyn_roleselector property.
     */
    public set msdyn_roleselector(value: string | undefined) {
        this._msdyn_roleselector = value;
    };
    /**
     * Gets the msdyn_sortorder property value. 
     * @returns a integer
     */
    public get msdyn_sortorder() {
        return this._msdyn_sortorder;
    };
    /**
     * Sets the msdyn_sortorder property value. 
     * @param value Value to set for the msdyn_sortorder property.
     */
    public set msdyn_sortorder(value: number | undefined) {
        this._msdyn_sortorder = value;
    };
    /**
     * Gets the msdyn_trusteddomain property value. 
     * @returns a string
     */
    public get msdyn_trusteddomain() {
        return this._msdyn_trusteddomain;
    };
    /**
     * Sets the msdyn_trusteddomain property value. 
     * @param value Value to set for the msdyn_trusteddomain property.
     */
    public set msdyn_trusteddomain(value: string | undefined) {
        this._msdyn_trusteddomain = value;
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
        writer.writeStringValue("msdyn_appselector", this.msdyn_appselector);
        writer.writeStringValue("msdyn_cifsolversion", this.msdyn_cifsolversion);
        writer.writeCollectionOfObjectValues<Asyncoperation>("msdyn_ciprovider_AsyncOperations", this.msdyn_ciprovider_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("msdyn_ciprovider_BulkDeleteFailures", this.msdyn_ciprovider_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("msdyn_ciprovider_DuplicateBaseRecord", this.msdyn_ciprovider_DuplicateBaseRecord);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("msdyn_ciprovider_DuplicateMatchingRecord", this.msdyn_ciprovider_DuplicateMatchingRecord);
        writer.writeCollectionOfObjectValues<Mailboxtrackingfolder>("msdyn_ciprovider_MailboxTrackingFolders", this.msdyn_ciprovider_MailboxTrackingFolders);
        writer.writeCollectionOfObjectValues<Principalobjectattributeaccess>("msdyn_ciprovider_PrincipalObjectAttributeAccesses", this.msdyn_ciprovider_PrincipalObjectAttributeAccesses);
        writer.writeCollectionOfObjectValues<Processsession>("msdyn_ciprovider_ProcessSession", this.msdyn_ciprovider_ProcessSession);
        writer.writeCollectionOfObjectValues<Syncerror>("msdyn_ciprovider_SyncErrors", this.msdyn_ciprovider_SyncErrors);
        writer.writeCollectionOfObjectValues<Systemuser>("msdyn_ciprovider_systemuser_membership", this.msdyn_ciprovider_systemuser_membership);
        writer.writeNumberValue("msdyn_ciproviderapiversion", this.msdyn_ciproviderapiversion);
        writer.writeStringValue("msdyn_ciproviderid", this.msdyn_ciproviderid);
        writer.writeBooleanValue("msdyn_clicktoact", this.msdyn_clicktoact);
        writer.writeStringValue("msdyn_customparams", this.msdyn_customparams);
        writer.writeBooleanValue("msdyn_enableanalytics", this.msdyn_enableanalytics);
        writer.writeStringValue("msdyn_label", this.msdyn_label);
        writer.writeStringValue("msdyn_landingurl", this.msdyn_landingurl);
        writer.writeCollectionOfObjectValues<Msdyn_channel>("msdyn_msdyn_ciprovider_msdyn_channel", this.msdyn_msdyn_ciprovider_msdyn_channel);
        writer.writeStringValue("msdyn_name", this.msdyn_name);
        writer.writeStringValue("msdyn_roleselector", this.msdyn_roleselector);
        writer.writeNumberValue("msdyn_sortorder", this.msdyn_sortorder);
        writer.writeStringValue("msdyn_trusteddomain", this.msdyn_trusteddomain);
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
