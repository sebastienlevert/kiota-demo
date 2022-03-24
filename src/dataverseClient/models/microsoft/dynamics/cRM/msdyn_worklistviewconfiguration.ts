import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createBulkdeletefailureFromDiscriminatorValue} from './createBulkdeletefailureFromDiscriminatorValue';
import {createDuplicaterecordFromDiscriminatorValue} from './createDuplicaterecordFromDiscriminatorValue';
import {createMailboxtrackingfolderFromDiscriminatorValue} from './createMailboxtrackingfolderFromDiscriminatorValue';
import {createMsdyn_salesaccelerationsettingsFromDiscriminatorValue} from './createMsdyn_salesaccelerationsettingsFromDiscriminatorValue';
import {createOrganizationFromDiscriminatorValue} from './createOrganizationFromDiscriminatorValue';
import {createPrincipalobjectattributeaccessFromDiscriminatorValue} from './createPrincipalobjectattributeaccessFromDiscriminatorValue';
import {createProcesssessionFromDiscriminatorValue} from './createProcesssessionFromDiscriminatorValue';
import {createSyncerrorFromDiscriminatorValue} from './createSyncerrorFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {Asyncoperation, Bulkdeletefailure, Crmbaseentity, Duplicaterecord, Mailboxtrackingfolder, Msdyn_salesaccelerationsettings, Organization, Principalobjectattributeaccess, Processsession, Syncerror, Systemuser} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Msdyn_worklistviewconfiguration extends Crmbaseentity implements Parsable {
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private __msdyn_salesaccelerationsettingsid_value?: string | undefined;
    private __organizationid_value?: string | undefined;
    private _createdby?: Systemuser | undefined;
    private _createdon?: Date | undefined;
    private _createdonbehalfby?: Systemuser | undefined;
    private _importsequencenumber?: number | undefined;
    private _modifiedby?: Systemuser | undefined;
    private _modifiedon?: Date | undefined;
    private _modifiedonbehalfby?: Systemuser | undefined;
    private _msdyn_defaultsortconfiguration?: string | undefined;
    private _msdyn_entityconfiguration?: string | undefined;
    private _msdyn_filterconfiguration?: string | undefined;
    private _msdyn_name?: string | undefined;
    private _msdyn_salesaccelerationsettingsid?: Msdyn_salesaccelerationsettings | undefined;
    private _msdyn_securityrolelist?: string | undefined;
    private _msdyn_tagsconfiguration?: string | undefined;
    private _msdyn_viewtype?: number | undefined;
    private _msdyn_worklistviewconfiguration_AsyncOperations?: Asyncoperation[] | undefined;
    private _msdyn_worklistviewconfiguration_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _msdyn_worklistviewconfiguration_DuplicateBaseRecord?: Duplicaterecord[] | undefined;
    private _msdyn_worklistviewconfiguration_DuplicateMatchingRecord?: Duplicaterecord[] | undefined;
    private _msdyn_worklistviewconfiguration_MailboxTrackingFolders?: Mailboxtrackingfolder[] | undefined;
    private _msdyn_worklistviewconfiguration_PrincipalObjectAttributeAccesses?: Principalobjectattributeaccess[] | undefined;
    private _msdyn_worklistviewconfiguration_ProcessSession?: Processsession[] | undefined;
    private _msdyn_worklistviewconfiguration_SyncErrors?: Syncerror[] | undefined;
    private _msdyn_worklistviewconfigurationid?: string | undefined;
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
     * Gets the _msdyn_salesaccelerationsettingsid_value property value. 
     * @returns a string
     */
    public get _msdyn_salesaccelerationsettingsid_value() {
        return this.__msdyn_salesaccelerationsettingsid_value;
    };
    /**
     * Sets the _msdyn_salesaccelerationsettingsid_value property value. 
     * @param value Value to set for the _msdyn_salesaccelerationsettingsid_value property.
     */
    public set _msdyn_salesaccelerationsettingsid_value(value: string | undefined) {
        this.__msdyn_salesaccelerationsettingsid_value = value;
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
     * Instantiates a new msdyn_worklistviewconfiguration and sets the default values.
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
            "_createdby_value": (o, n) => { (o as unknown as Msdyn_worklistviewconfiguration)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Msdyn_worklistviewconfiguration)._createdonbehalfby_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Msdyn_worklistviewconfiguration)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Msdyn_worklistviewconfiguration)._modifiedonbehalfby_value = n.getStringValue(); },
            "_msdyn_salesaccelerationsettingsid_value": (o, n) => { (o as unknown as Msdyn_worklistviewconfiguration)._msdyn_salesaccelerationsettingsid_value = n.getStringValue(); },
            "_organizationid_value": (o, n) => { (o as unknown as Msdyn_worklistviewconfiguration)._organizationid_value = n.getStringValue(); },
            "createdby": (o, n) => { (o as unknown as Msdyn_worklistviewconfiguration).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Msdyn_worklistviewconfiguration).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Msdyn_worklistviewconfiguration).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "importsequencenumber": (o, n) => { (o as unknown as Msdyn_worklistviewconfiguration).importsequencenumber = n.getNumberValue(); },
            "modifiedby": (o, n) => { (o as unknown as Msdyn_worklistviewconfiguration).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Msdyn_worklistviewconfiguration).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Msdyn_worklistviewconfiguration).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "msdyn_defaultsortconfiguration": (o, n) => { (o as unknown as Msdyn_worklistviewconfiguration).msdyn_defaultsortconfiguration = n.getStringValue(); },
            "msdyn_entityconfiguration": (o, n) => { (o as unknown as Msdyn_worklistviewconfiguration).msdyn_entityconfiguration = n.getStringValue(); },
            "msdyn_filterconfiguration": (o, n) => { (o as unknown as Msdyn_worklistviewconfiguration).msdyn_filterconfiguration = n.getStringValue(); },
            "msdyn_name": (o, n) => { (o as unknown as Msdyn_worklistviewconfiguration).msdyn_name = n.getStringValue(); },
            "msdyn_salesaccelerationsettingsid": (o, n) => { (o as unknown as Msdyn_worklistviewconfiguration).msdyn_salesaccelerationsettingsid = n.getObjectValue<Msdyn_salesaccelerationsettings>(createMsdyn_salesaccelerationsettingsFromDiscriminatorValue); },
            "msdyn_securityrolelist": (o, n) => { (o as unknown as Msdyn_worklistviewconfiguration).msdyn_securityrolelist = n.getStringValue(); },
            "msdyn_tagsconfiguration": (o, n) => { (o as unknown as Msdyn_worklistviewconfiguration).msdyn_tagsconfiguration = n.getStringValue(); },
            "msdyn_viewtype": (o, n) => { (o as unknown as Msdyn_worklistviewconfiguration).msdyn_viewtype = n.getNumberValue(); },
            "msdyn_worklistviewconfiguration_AsyncOperations": (o, n) => { (o as unknown as Msdyn_worklistviewconfiguration).msdyn_worklistviewconfiguration_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "msdyn_worklistviewconfiguration_BulkDeleteFailures": (o, n) => { (o as unknown as Msdyn_worklistviewconfiguration).msdyn_worklistviewconfiguration_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "msdyn_worklistviewconfiguration_DuplicateBaseRecord": (o, n) => { (o as unknown as Msdyn_worklistviewconfiguration).msdyn_worklistviewconfiguration_DuplicateBaseRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "msdyn_worklistviewconfiguration_DuplicateMatchingRecord": (o, n) => { (o as unknown as Msdyn_worklistviewconfiguration).msdyn_worklistviewconfiguration_DuplicateMatchingRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "msdyn_worklistviewconfiguration_MailboxTrackingFolders": (o, n) => { (o as unknown as Msdyn_worklistviewconfiguration).msdyn_worklistviewconfiguration_MailboxTrackingFolders = n.getCollectionOfObjectValues<Mailboxtrackingfolder>(createMailboxtrackingfolderFromDiscriminatorValue); },
            "msdyn_worklistviewconfiguration_PrincipalObjectAttributeAccesses": (o, n) => { (o as unknown as Msdyn_worklistviewconfiguration).msdyn_worklistviewconfiguration_PrincipalObjectAttributeAccesses = n.getCollectionOfObjectValues<Principalobjectattributeaccess>(createPrincipalobjectattributeaccessFromDiscriminatorValue); },
            "msdyn_worklistviewconfiguration_ProcessSession": (o, n) => { (o as unknown as Msdyn_worklistviewconfiguration).msdyn_worklistviewconfiguration_ProcessSession = n.getCollectionOfObjectValues<Processsession>(createProcesssessionFromDiscriminatorValue); },
            "msdyn_worklistviewconfiguration_SyncErrors": (o, n) => { (o as unknown as Msdyn_worklistviewconfiguration).msdyn_worklistviewconfiguration_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "msdyn_worklistviewconfigurationid": (o, n) => { (o as unknown as Msdyn_worklistviewconfiguration).msdyn_worklistviewconfigurationid = n.getStringValue(); },
            "organizationid": (o, n) => { (o as unknown as Msdyn_worklistviewconfiguration).organizationid = n.getObjectValue<Organization>(createOrganizationFromDiscriminatorValue); },
            "overriddencreatedon": (o, n) => { (o as unknown as Msdyn_worklistviewconfiguration).overriddencreatedon = n.getDateValue(); },
            "statecode": (o, n) => { (o as unknown as Msdyn_worklistviewconfiguration).statecode = n.getNumberValue(); },
            "statuscode": (o, n) => { (o as unknown as Msdyn_worklistviewconfiguration).statuscode = n.getNumberValue(); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Msdyn_worklistviewconfiguration).timezoneruleversionnumber = n.getNumberValue(); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Msdyn_worklistviewconfiguration).utcconversiontimezonecode = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as Msdyn_worklistviewconfiguration).versionnumber = n.getNumberValue(); },
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
     * Gets the msdyn_defaultsortconfiguration property value. 
     * @returns a string
     */
    public get msdyn_defaultsortconfiguration() {
        return this._msdyn_defaultsortconfiguration;
    };
    /**
     * Sets the msdyn_defaultsortconfiguration property value. 
     * @param value Value to set for the msdyn_defaultsortconfiguration property.
     */
    public set msdyn_defaultsortconfiguration(value: string | undefined) {
        this._msdyn_defaultsortconfiguration = value;
    };
    /**
     * Gets the msdyn_entityconfiguration property value. 
     * @returns a string
     */
    public get msdyn_entityconfiguration() {
        return this._msdyn_entityconfiguration;
    };
    /**
     * Sets the msdyn_entityconfiguration property value. 
     * @param value Value to set for the msdyn_entityconfiguration property.
     */
    public set msdyn_entityconfiguration(value: string | undefined) {
        this._msdyn_entityconfiguration = value;
    };
    /**
     * Gets the msdyn_filterconfiguration property value. 
     * @returns a string
     */
    public get msdyn_filterconfiguration() {
        return this._msdyn_filterconfiguration;
    };
    /**
     * Sets the msdyn_filterconfiguration property value. 
     * @param value Value to set for the msdyn_filterconfiguration property.
     */
    public set msdyn_filterconfiguration(value: string | undefined) {
        this._msdyn_filterconfiguration = value;
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
     * Gets the msdyn_salesaccelerationsettingsid property value. 
     * @returns a msdyn_salesaccelerationsettings
     */
    public get msdyn_salesaccelerationsettingsid() {
        return this._msdyn_salesaccelerationsettingsid;
    };
    /**
     * Sets the msdyn_salesaccelerationsettingsid property value. 
     * @param value Value to set for the msdyn_salesaccelerationsettingsid property.
     */
    public set msdyn_salesaccelerationsettingsid(value: Msdyn_salesaccelerationsettings | undefined) {
        this._msdyn_salesaccelerationsettingsid = value;
    };
    /**
     * Gets the msdyn_securityrolelist property value. 
     * @returns a string
     */
    public get msdyn_securityrolelist() {
        return this._msdyn_securityrolelist;
    };
    /**
     * Sets the msdyn_securityrolelist property value. 
     * @param value Value to set for the msdyn_securityrolelist property.
     */
    public set msdyn_securityrolelist(value: string | undefined) {
        this._msdyn_securityrolelist = value;
    };
    /**
     * Gets the msdyn_tagsconfiguration property value. 
     * @returns a string
     */
    public get msdyn_tagsconfiguration() {
        return this._msdyn_tagsconfiguration;
    };
    /**
     * Sets the msdyn_tagsconfiguration property value. 
     * @param value Value to set for the msdyn_tagsconfiguration property.
     */
    public set msdyn_tagsconfiguration(value: string | undefined) {
        this._msdyn_tagsconfiguration = value;
    };
    /**
     * Gets the msdyn_viewtype property value. 
     * @returns a integer
     */
    public get msdyn_viewtype() {
        return this._msdyn_viewtype;
    };
    /**
     * Sets the msdyn_viewtype property value. 
     * @param value Value to set for the msdyn_viewtype property.
     */
    public set msdyn_viewtype(value: number | undefined) {
        this._msdyn_viewtype = value;
    };
    /**
     * Gets the msdyn_worklistviewconfiguration_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get msdyn_worklistviewconfiguration_AsyncOperations() {
        return this._msdyn_worklistviewconfiguration_AsyncOperations;
    };
    /**
     * Sets the msdyn_worklistviewconfiguration_AsyncOperations property value. 
     * @param value Value to set for the msdyn_worklistviewconfiguration_AsyncOperations property.
     */
    public set msdyn_worklistviewconfiguration_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._msdyn_worklistviewconfiguration_AsyncOperations = value;
    };
    /**
     * Gets the msdyn_worklistviewconfiguration_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get msdyn_worklistviewconfiguration_BulkDeleteFailures() {
        return this._msdyn_worklistviewconfiguration_BulkDeleteFailures;
    };
    /**
     * Sets the msdyn_worklistviewconfiguration_BulkDeleteFailures property value. 
     * @param value Value to set for the msdyn_worklistviewconfiguration_BulkDeleteFailures property.
     */
    public set msdyn_worklistviewconfiguration_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._msdyn_worklistviewconfiguration_BulkDeleteFailures = value;
    };
    /**
     * Gets the msdyn_worklistviewconfiguration_DuplicateBaseRecord property value. 
     * @returns a duplicaterecord
     */
    public get msdyn_worklistviewconfiguration_DuplicateBaseRecord() {
        return this._msdyn_worklistviewconfiguration_DuplicateBaseRecord;
    };
    /**
     * Sets the msdyn_worklistviewconfiguration_DuplicateBaseRecord property value. 
     * @param value Value to set for the msdyn_worklistviewconfiguration_DuplicateBaseRecord property.
     */
    public set msdyn_worklistviewconfiguration_DuplicateBaseRecord(value: Duplicaterecord[] | undefined) {
        this._msdyn_worklistviewconfiguration_DuplicateBaseRecord = value;
    };
    /**
     * Gets the msdyn_worklistviewconfiguration_DuplicateMatchingRecord property value. 
     * @returns a duplicaterecord
     */
    public get msdyn_worklistviewconfiguration_DuplicateMatchingRecord() {
        return this._msdyn_worklistviewconfiguration_DuplicateMatchingRecord;
    };
    /**
     * Sets the msdyn_worklistviewconfiguration_DuplicateMatchingRecord property value. 
     * @param value Value to set for the msdyn_worklistviewconfiguration_DuplicateMatchingRecord property.
     */
    public set msdyn_worklistviewconfiguration_DuplicateMatchingRecord(value: Duplicaterecord[] | undefined) {
        this._msdyn_worklistviewconfiguration_DuplicateMatchingRecord = value;
    };
    /**
     * Gets the msdyn_worklistviewconfiguration_MailboxTrackingFolders property value. 
     * @returns a mailboxtrackingfolder
     */
    public get msdyn_worklistviewconfiguration_MailboxTrackingFolders() {
        return this._msdyn_worklistviewconfiguration_MailboxTrackingFolders;
    };
    /**
     * Sets the msdyn_worklistviewconfiguration_MailboxTrackingFolders property value. 
     * @param value Value to set for the msdyn_worklistviewconfiguration_MailboxTrackingFolders property.
     */
    public set msdyn_worklistviewconfiguration_MailboxTrackingFolders(value: Mailboxtrackingfolder[] | undefined) {
        this._msdyn_worklistviewconfiguration_MailboxTrackingFolders = value;
    };
    /**
     * Gets the msdyn_worklistviewconfiguration_PrincipalObjectAttributeAccesses property value. 
     * @returns a principalobjectattributeaccess
     */
    public get msdyn_worklistviewconfiguration_PrincipalObjectAttributeAccesses() {
        return this._msdyn_worklistviewconfiguration_PrincipalObjectAttributeAccesses;
    };
    /**
     * Sets the msdyn_worklistviewconfiguration_PrincipalObjectAttributeAccesses property value. 
     * @param value Value to set for the msdyn_worklistviewconfiguration_PrincipalObjectAttributeAccesses property.
     */
    public set msdyn_worklistviewconfiguration_PrincipalObjectAttributeAccesses(value: Principalobjectattributeaccess[] | undefined) {
        this._msdyn_worklistviewconfiguration_PrincipalObjectAttributeAccesses = value;
    };
    /**
     * Gets the msdyn_worklistviewconfiguration_ProcessSession property value. 
     * @returns a processsession
     */
    public get msdyn_worklistviewconfiguration_ProcessSession() {
        return this._msdyn_worklistviewconfiguration_ProcessSession;
    };
    /**
     * Sets the msdyn_worklistviewconfiguration_ProcessSession property value. 
     * @param value Value to set for the msdyn_worklistviewconfiguration_ProcessSession property.
     */
    public set msdyn_worklistviewconfiguration_ProcessSession(value: Processsession[] | undefined) {
        this._msdyn_worklistviewconfiguration_ProcessSession = value;
    };
    /**
     * Gets the msdyn_worklistviewconfiguration_SyncErrors property value. 
     * @returns a syncerror
     */
    public get msdyn_worklistviewconfiguration_SyncErrors() {
        return this._msdyn_worklistviewconfiguration_SyncErrors;
    };
    /**
     * Sets the msdyn_worklistviewconfiguration_SyncErrors property value. 
     * @param value Value to set for the msdyn_worklistviewconfiguration_SyncErrors property.
     */
    public set msdyn_worklistviewconfiguration_SyncErrors(value: Syncerror[] | undefined) {
        this._msdyn_worklistviewconfiguration_SyncErrors = value;
    };
    /**
     * Gets the msdyn_worklistviewconfigurationid property value. 
     * @returns a string
     */
    public get msdyn_worklistviewconfigurationid() {
        return this._msdyn_worklistviewconfigurationid;
    };
    /**
     * Sets the msdyn_worklistviewconfigurationid property value. 
     * @param value Value to set for the msdyn_worklistviewconfigurationid property.
     */
    public set msdyn_worklistviewconfigurationid(value: string | undefined) {
        this._msdyn_worklistviewconfigurationid = value;
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
        writer.writeStringValue("_msdyn_salesaccelerationsettingsid_value", this._msdyn_salesaccelerationsettingsid_value);
        writer.writeStringValue("_organizationid_value", this._organizationid_value);
        writer.writeObjectValue<Systemuser>("createdby", this.createdby);
        writer.writeDateValue("createdon", this.createdon);
        writer.writeObjectValue<Systemuser>("createdonbehalfby", this.createdonbehalfby);
        writer.writeNumberValue("importsequencenumber", this.importsequencenumber);
        writer.writeObjectValue<Systemuser>("modifiedby", this.modifiedby);
        writer.writeDateValue("modifiedon", this.modifiedon);
        writer.writeObjectValue<Systemuser>("modifiedonbehalfby", this.modifiedonbehalfby);
        writer.writeStringValue("msdyn_defaultsortconfiguration", this.msdyn_defaultsortconfiguration);
        writer.writeStringValue("msdyn_entityconfiguration", this.msdyn_entityconfiguration);
        writer.writeStringValue("msdyn_filterconfiguration", this.msdyn_filterconfiguration);
        writer.writeStringValue("msdyn_name", this.msdyn_name);
        writer.writeObjectValue<Msdyn_salesaccelerationsettings>("msdyn_salesaccelerationsettingsid", this.msdyn_salesaccelerationsettingsid);
        writer.writeStringValue("msdyn_securityrolelist", this.msdyn_securityrolelist);
        writer.writeStringValue("msdyn_tagsconfiguration", this.msdyn_tagsconfiguration);
        writer.writeNumberValue("msdyn_viewtype", this.msdyn_viewtype);
        writer.writeCollectionOfObjectValues<Asyncoperation>("msdyn_worklistviewconfiguration_AsyncOperations", this.msdyn_worklistviewconfiguration_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("msdyn_worklistviewconfiguration_BulkDeleteFailures", this.msdyn_worklistviewconfiguration_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("msdyn_worklistviewconfiguration_DuplicateBaseRecord", this.msdyn_worklistviewconfiguration_DuplicateBaseRecord);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("msdyn_worklistviewconfiguration_DuplicateMatchingRecord", this.msdyn_worklistviewconfiguration_DuplicateMatchingRecord);
        writer.writeCollectionOfObjectValues<Mailboxtrackingfolder>("msdyn_worklistviewconfiguration_MailboxTrackingFolders", this.msdyn_worklistviewconfiguration_MailboxTrackingFolders);
        writer.writeCollectionOfObjectValues<Principalobjectattributeaccess>("msdyn_worklistviewconfiguration_PrincipalObjectAttributeAccesses", this.msdyn_worklistviewconfiguration_PrincipalObjectAttributeAccesses);
        writer.writeCollectionOfObjectValues<Processsession>("msdyn_worklistviewconfiguration_ProcessSession", this.msdyn_worklistviewconfiguration_ProcessSession);
        writer.writeCollectionOfObjectValues<Syncerror>("msdyn_worklistviewconfiguration_SyncErrors", this.msdyn_worklistviewconfiguration_SyncErrors);
        writer.writeStringValue("msdyn_worklistviewconfigurationid", this.msdyn_worklistviewconfigurationid);
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
