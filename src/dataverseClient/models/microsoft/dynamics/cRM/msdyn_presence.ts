import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createBulkdeletefailureFromDiscriminatorValue} from './createBulkdeletefailureFromDiscriminatorValue';
import {createDuplicaterecordFromDiscriminatorValue} from './createDuplicaterecordFromDiscriminatorValue';
import {createMailboxtrackingfolderFromDiscriminatorValue} from './createMailboxtrackingfolderFromDiscriminatorValue';
import {createMsdyn_agentstatushistoryFromDiscriminatorValue} from './createMsdyn_agentstatushistoryFromDiscriminatorValue';
import {createMsdyn_omnichannelconfigurationFromDiscriminatorValue} from './createMsdyn_omnichannelconfigurationFromDiscriminatorValue';
import {createOrganizationFromDiscriminatorValue} from './createOrganizationFromDiscriminatorValue';
import {createPrincipalobjectattributeaccessFromDiscriminatorValue} from './createPrincipalobjectattributeaccessFromDiscriminatorValue';
import {createProcesssessionFromDiscriminatorValue} from './createProcesssessionFromDiscriminatorValue';
import {createSyncerrorFromDiscriminatorValue} from './createSyncerrorFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {Asyncoperation, Bulkdeletefailure, Crmbaseentity, Duplicaterecord, Mailboxtrackingfolder, Msdyn_agentstatushistory, Msdyn_omnichannelconfiguration, Organization, Principalobjectattributeaccess, Processsession, Syncerror, Systemuser} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Msdyn_presence extends Crmbaseentity implements Parsable {
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
    private _msdyn_basepresencestatus?: number | undefined;
    private _msdyn_canuserset?: boolean | undefined;
    private _msdyn_description?: string | undefined;
    private _msdyn_msdyn_presence_msdyn_agentstatushistory_presenceid?: Msdyn_agentstatushistory[] | undefined;
    private _msdyn_msdyn_presence_systemuser?: Systemuser[] | undefined;
    private _msdyn_name?: string | undefined;
    private _msdyn_presence_AsyncOperations?: Asyncoperation[] | undefined;
    private _msdyn_presence_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _msdyn_presence_DuplicateBaseRecord?: Duplicaterecord[] | undefined;
    private _msdyn_presence_DuplicateMatchingRecord?: Duplicaterecord[] | undefined;
    private _msdyn_presence_MailboxTrackingFolders?: Mailboxtrackingfolder[] | undefined;
    private _msdyn_presence_msdyn_omnichannelconfiguration_msdyn_dnd_presence_lookup?: Msdyn_omnichannelconfiguration[] | undefined;
    private _msdyn_presence_msdyn_omnichannelconfiguration_msdyn_inactive_presence_lookup?: Msdyn_omnichannelconfiguration[] | undefined;
    private _msdyn_presence_PrincipalObjectAttributeAccesses?: Principalobjectattributeaccess[] | undefined;
    private _msdyn_presence_ProcessSession?: Processsession[] | undefined;
    private _msdyn_presence_SyncErrors?: Syncerror[] | undefined;
    private _msdyn_presenceid?: string | undefined;
    private _msdyn_presencestatustext?: string | undefined;
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
     * Instantiates a new msdyn_presence and sets the default values.
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
            "_createdby_value": (o, n) => { (o as unknown as Msdyn_presence)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Msdyn_presence)._createdonbehalfby_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Msdyn_presence)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Msdyn_presence)._modifiedonbehalfby_value = n.getStringValue(); },
            "_organizationid_value": (o, n) => { (o as unknown as Msdyn_presence)._organizationid_value = n.getStringValue(); },
            "createdby": (o, n) => { (o as unknown as Msdyn_presence).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Msdyn_presence).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Msdyn_presence).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "importsequencenumber": (o, n) => { (o as unknown as Msdyn_presence).importsequencenumber = n.getNumberValue(); },
            "modifiedby": (o, n) => { (o as unknown as Msdyn_presence).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Msdyn_presence).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Msdyn_presence).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "msdyn_basepresencestatus": (o, n) => { (o as unknown as Msdyn_presence).msdyn_basepresencestatus = n.getNumberValue(); },
            "msdyn_canuserset": (o, n) => { (o as unknown as Msdyn_presence).msdyn_canuserset = n.getBooleanValue(); },
            "msdyn_description": (o, n) => { (o as unknown as Msdyn_presence).msdyn_description = n.getStringValue(); },
            "msdyn_msdyn_presence_msdyn_agentstatushistory_presenceid": (o, n) => { (o as unknown as Msdyn_presence).msdyn_msdyn_presence_msdyn_agentstatushistory_presenceid = n.getCollectionOfObjectValues<Msdyn_agentstatushistory>(createMsdyn_agentstatushistoryFromDiscriminatorValue); },
            "msdyn_msdyn_presence_systemuser": (o, n) => { (o as unknown as Msdyn_presence).msdyn_msdyn_presence_systemuser = n.getCollectionOfObjectValues<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "msdyn_name": (o, n) => { (o as unknown as Msdyn_presence).msdyn_name = n.getStringValue(); },
            "msdyn_presence_AsyncOperations": (o, n) => { (o as unknown as Msdyn_presence).msdyn_presence_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "msdyn_presence_BulkDeleteFailures": (o, n) => { (o as unknown as Msdyn_presence).msdyn_presence_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "msdyn_presence_DuplicateBaseRecord": (o, n) => { (o as unknown as Msdyn_presence).msdyn_presence_DuplicateBaseRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "msdyn_presence_DuplicateMatchingRecord": (o, n) => { (o as unknown as Msdyn_presence).msdyn_presence_DuplicateMatchingRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "msdyn_presence_MailboxTrackingFolders": (o, n) => { (o as unknown as Msdyn_presence).msdyn_presence_MailboxTrackingFolders = n.getCollectionOfObjectValues<Mailboxtrackingfolder>(createMailboxtrackingfolderFromDiscriminatorValue); },
            "msdyn_presence_msdyn_omnichannelconfiguration_msdyn_dnd_presence_lookup": (o, n) => { (o as unknown as Msdyn_presence).msdyn_presence_msdyn_omnichannelconfiguration_msdyn_dnd_presence_lookup = n.getCollectionOfObjectValues<Msdyn_omnichannelconfiguration>(createMsdyn_omnichannelconfigurationFromDiscriminatorValue); },
            "msdyn_presence_msdyn_omnichannelconfiguration_msdyn_inactive_presence_lookup": (o, n) => { (o as unknown as Msdyn_presence).msdyn_presence_msdyn_omnichannelconfiguration_msdyn_inactive_presence_lookup = n.getCollectionOfObjectValues<Msdyn_omnichannelconfiguration>(createMsdyn_omnichannelconfigurationFromDiscriminatorValue); },
            "msdyn_presence_PrincipalObjectAttributeAccesses": (o, n) => { (o as unknown as Msdyn_presence).msdyn_presence_PrincipalObjectAttributeAccesses = n.getCollectionOfObjectValues<Principalobjectattributeaccess>(createPrincipalobjectattributeaccessFromDiscriminatorValue); },
            "msdyn_presence_ProcessSession": (o, n) => { (o as unknown as Msdyn_presence).msdyn_presence_ProcessSession = n.getCollectionOfObjectValues<Processsession>(createProcesssessionFromDiscriminatorValue); },
            "msdyn_presence_SyncErrors": (o, n) => { (o as unknown as Msdyn_presence).msdyn_presence_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "msdyn_presenceid": (o, n) => { (o as unknown as Msdyn_presence).msdyn_presenceid = n.getStringValue(); },
            "msdyn_presencestatustext": (o, n) => { (o as unknown as Msdyn_presence).msdyn_presencestatustext = n.getStringValue(); },
            "organizationid": (o, n) => { (o as unknown as Msdyn_presence).organizationid = n.getObjectValue<Organization>(createOrganizationFromDiscriminatorValue); },
            "overriddencreatedon": (o, n) => { (o as unknown as Msdyn_presence).overriddencreatedon = n.getDateValue(); },
            "statecode": (o, n) => { (o as unknown as Msdyn_presence).statecode = n.getNumberValue(); },
            "statuscode": (o, n) => { (o as unknown as Msdyn_presence).statuscode = n.getNumberValue(); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Msdyn_presence).timezoneruleversionnumber = n.getNumberValue(); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Msdyn_presence).utcconversiontimezonecode = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as Msdyn_presence).versionnumber = n.getNumberValue(); },
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
     * Gets the msdyn_basepresencestatus property value. 
     * @returns a integer
     */
    public get msdyn_basepresencestatus() {
        return this._msdyn_basepresencestatus;
    };
    /**
     * Sets the msdyn_basepresencestatus property value. 
     * @param value Value to set for the msdyn_basepresencestatus property.
     */
    public set msdyn_basepresencestatus(value: number | undefined) {
        this._msdyn_basepresencestatus = value;
    };
    /**
     * Gets the msdyn_canuserset property value. 
     * @returns a boolean
     */
    public get msdyn_canuserset() {
        return this._msdyn_canuserset;
    };
    /**
     * Sets the msdyn_canuserset property value. 
     * @param value Value to set for the msdyn_canuserset property.
     */
    public set msdyn_canuserset(value: boolean | undefined) {
        this._msdyn_canuserset = value;
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
     * Gets the msdyn_msdyn_presence_msdyn_agentstatushistory_presenceid property value. 
     * @returns a msdyn_agentstatushistory
     */
    public get msdyn_msdyn_presence_msdyn_agentstatushistory_presenceid() {
        return this._msdyn_msdyn_presence_msdyn_agentstatushistory_presenceid;
    };
    /**
     * Sets the msdyn_msdyn_presence_msdyn_agentstatushistory_presenceid property value. 
     * @param value Value to set for the msdyn_msdyn_presence_msdyn_agentstatushistory_presenceid property.
     */
    public set msdyn_msdyn_presence_msdyn_agentstatushistory_presenceid(value: Msdyn_agentstatushistory[] | undefined) {
        this._msdyn_msdyn_presence_msdyn_agentstatushistory_presenceid = value;
    };
    /**
     * Gets the msdyn_msdyn_presence_systemuser property value. 
     * @returns a systemuser
     */
    public get msdyn_msdyn_presence_systemuser() {
        return this._msdyn_msdyn_presence_systemuser;
    };
    /**
     * Sets the msdyn_msdyn_presence_systemuser property value. 
     * @param value Value to set for the msdyn_msdyn_presence_systemuser property.
     */
    public set msdyn_msdyn_presence_systemuser(value: Systemuser[] | undefined) {
        this._msdyn_msdyn_presence_systemuser = value;
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
     * Gets the msdyn_presence_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get msdyn_presence_AsyncOperations() {
        return this._msdyn_presence_AsyncOperations;
    };
    /**
     * Sets the msdyn_presence_AsyncOperations property value. 
     * @param value Value to set for the msdyn_presence_AsyncOperations property.
     */
    public set msdyn_presence_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._msdyn_presence_AsyncOperations = value;
    };
    /**
     * Gets the msdyn_presence_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get msdyn_presence_BulkDeleteFailures() {
        return this._msdyn_presence_BulkDeleteFailures;
    };
    /**
     * Sets the msdyn_presence_BulkDeleteFailures property value. 
     * @param value Value to set for the msdyn_presence_BulkDeleteFailures property.
     */
    public set msdyn_presence_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._msdyn_presence_BulkDeleteFailures = value;
    };
    /**
     * Gets the msdyn_presence_DuplicateBaseRecord property value. 
     * @returns a duplicaterecord
     */
    public get msdyn_presence_DuplicateBaseRecord() {
        return this._msdyn_presence_DuplicateBaseRecord;
    };
    /**
     * Sets the msdyn_presence_DuplicateBaseRecord property value. 
     * @param value Value to set for the msdyn_presence_DuplicateBaseRecord property.
     */
    public set msdyn_presence_DuplicateBaseRecord(value: Duplicaterecord[] | undefined) {
        this._msdyn_presence_DuplicateBaseRecord = value;
    };
    /**
     * Gets the msdyn_presence_DuplicateMatchingRecord property value. 
     * @returns a duplicaterecord
     */
    public get msdyn_presence_DuplicateMatchingRecord() {
        return this._msdyn_presence_DuplicateMatchingRecord;
    };
    /**
     * Sets the msdyn_presence_DuplicateMatchingRecord property value. 
     * @param value Value to set for the msdyn_presence_DuplicateMatchingRecord property.
     */
    public set msdyn_presence_DuplicateMatchingRecord(value: Duplicaterecord[] | undefined) {
        this._msdyn_presence_DuplicateMatchingRecord = value;
    };
    /**
     * Gets the msdyn_presence_MailboxTrackingFolders property value. 
     * @returns a mailboxtrackingfolder
     */
    public get msdyn_presence_MailboxTrackingFolders() {
        return this._msdyn_presence_MailboxTrackingFolders;
    };
    /**
     * Sets the msdyn_presence_MailboxTrackingFolders property value. 
     * @param value Value to set for the msdyn_presence_MailboxTrackingFolders property.
     */
    public set msdyn_presence_MailboxTrackingFolders(value: Mailboxtrackingfolder[] | undefined) {
        this._msdyn_presence_MailboxTrackingFolders = value;
    };
    /**
     * Gets the msdyn_presence_msdyn_omnichannelconfiguration_msdyn_dnd_presence_lookup property value. 
     * @returns a msdyn_omnichannelconfiguration
     */
    public get msdyn_presence_msdyn_omnichannelconfiguration_msdyn_dnd_presence_lookup() {
        return this._msdyn_presence_msdyn_omnichannelconfiguration_msdyn_dnd_presence_lookup;
    };
    /**
     * Sets the msdyn_presence_msdyn_omnichannelconfiguration_msdyn_dnd_presence_lookup property value. 
     * @param value Value to set for the msdyn_presence_msdyn_omnichannelconfiguration_msdyn_dnd_presence_lookup property.
     */
    public set msdyn_presence_msdyn_omnichannelconfiguration_msdyn_dnd_presence_lookup(value: Msdyn_omnichannelconfiguration[] | undefined) {
        this._msdyn_presence_msdyn_omnichannelconfiguration_msdyn_dnd_presence_lookup = value;
    };
    /**
     * Gets the msdyn_presence_msdyn_omnichannelconfiguration_msdyn_inactive_presence_lookup property value. 
     * @returns a msdyn_omnichannelconfiguration
     */
    public get msdyn_presence_msdyn_omnichannelconfiguration_msdyn_inactive_presence_lookup() {
        return this._msdyn_presence_msdyn_omnichannelconfiguration_msdyn_inactive_presence_lookup;
    };
    /**
     * Sets the msdyn_presence_msdyn_omnichannelconfiguration_msdyn_inactive_presence_lookup property value. 
     * @param value Value to set for the msdyn_presence_msdyn_omnichannelconfiguration_msdyn_inactive_presence_lookup property.
     */
    public set msdyn_presence_msdyn_omnichannelconfiguration_msdyn_inactive_presence_lookup(value: Msdyn_omnichannelconfiguration[] | undefined) {
        this._msdyn_presence_msdyn_omnichannelconfiguration_msdyn_inactive_presence_lookup = value;
    };
    /**
     * Gets the msdyn_presence_PrincipalObjectAttributeAccesses property value. 
     * @returns a principalobjectattributeaccess
     */
    public get msdyn_presence_PrincipalObjectAttributeAccesses() {
        return this._msdyn_presence_PrincipalObjectAttributeAccesses;
    };
    /**
     * Sets the msdyn_presence_PrincipalObjectAttributeAccesses property value. 
     * @param value Value to set for the msdyn_presence_PrincipalObjectAttributeAccesses property.
     */
    public set msdyn_presence_PrincipalObjectAttributeAccesses(value: Principalobjectattributeaccess[] | undefined) {
        this._msdyn_presence_PrincipalObjectAttributeAccesses = value;
    };
    /**
     * Gets the msdyn_presence_ProcessSession property value. 
     * @returns a processsession
     */
    public get msdyn_presence_ProcessSession() {
        return this._msdyn_presence_ProcessSession;
    };
    /**
     * Sets the msdyn_presence_ProcessSession property value. 
     * @param value Value to set for the msdyn_presence_ProcessSession property.
     */
    public set msdyn_presence_ProcessSession(value: Processsession[] | undefined) {
        this._msdyn_presence_ProcessSession = value;
    };
    /**
     * Gets the msdyn_presence_SyncErrors property value. 
     * @returns a syncerror
     */
    public get msdyn_presence_SyncErrors() {
        return this._msdyn_presence_SyncErrors;
    };
    /**
     * Sets the msdyn_presence_SyncErrors property value. 
     * @param value Value to set for the msdyn_presence_SyncErrors property.
     */
    public set msdyn_presence_SyncErrors(value: Syncerror[] | undefined) {
        this._msdyn_presence_SyncErrors = value;
    };
    /**
     * Gets the msdyn_presenceid property value. 
     * @returns a string
     */
    public get msdyn_presenceid() {
        return this._msdyn_presenceid;
    };
    /**
     * Sets the msdyn_presenceid property value. 
     * @param value Value to set for the msdyn_presenceid property.
     */
    public set msdyn_presenceid(value: string | undefined) {
        this._msdyn_presenceid = value;
    };
    /**
     * Gets the msdyn_presencestatustext property value. 
     * @returns a string
     */
    public get msdyn_presencestatustext() {
        return this._msdyn_presencestatustext;
    };
    /**
     * Sets the msdyn_presencestatustext property value. 
     * @param value Value to set for the msdyn_presencestatustext property.
     */
    public set msdyn_presencestatustext(value: string | undefined) {
        this._msdyn_presencestatustext = value;
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
        writer.writeNumberValue("msdyn_basepresencestatus", this.msdyn_basepresencestatus);
        writer.writeBooleanValue("msdyn_canuserset", this.msdyn_canuserset);
        writer.writeStringValue("msdyn_description", this.msdyn_description);
        writer.writeCollectionOfObjectValues<Msdyn_agentstatushistory>("msdyn_msdyn_presence_msdyn_agentstatushistory_presenceid", this.msdyn_msdyn_presence_msdyn_agentstatushistory_presenceid);
        writer.writeCollectionOfObjectValues<Systemuser>("msdyn_msdyn_presence_systemuser", this.msdyn_msdyn_presence_systemuser);
        writer.writeStringValue("msdyn_name", this.msdyn_name);
        writer.writeCollectionOfObjectValues<Asyncoperation>("msdyn_presence_AsyncOperations", this.msdyn_presence_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("msdyn_presence_BulkDeleteFailures", this.msdyn_presence_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("msdyn_presence_DuplicateBaseRecord", this.msdyn_presence_DuplicateBaseRecord);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("msdyn_presence_DuplicateMatchingRecord", this.msdyn_presence_DuplicateMatchingRecord);
        writer.writeCollectionOfObjectValues<Mailboxtrackingfolder>("msdyn_presence_MailboxTrackingFolders", this.msdyn_presence_MailboxTrackingFolders);
        writer.writeCollectionOfObjectValues<Msdyn_omnichannelconfiguration>("msdyn_presence_msdyn_omnichannelconfiguration_msdyn_dnd_presence_lookup", this.msdyn_presence_msdyn_omnichannelconfiguration_msdyn_dnd_presence_lookup);
        writer.writeCollectionOfObjectValues<Msdyn_omnichannelconfiguration>("msdyn_presence_msdyn_omnichannelconfiguration_msdyn_inactive_presence_lookup", this.msdyn_presence_msdyn_omnichannelconfiguration_msdyn_inactive_presence_lookup);
        writer.writeCollectionOfObjectValues<Principalobjectattributeaccess>("msdyn_presence_PrincipalObjectAttributeAccesses", this.msdyn_presence_PrincipalObjectAttributeAccesses);
        writer.writeCollectionOfObjectValues<Processsession>("msdyn_presence_ProcessSession", this.msdyn_presence_ProcessSession);
        writer.writeCollectionOfObjectValues<Syncerror>("msdyn_presence_SyncErrors", this.msdyn_presence_SyncErrors);
        writer.writeStringValue("msdyn_presenceid", this.msdyn_presenceid);
        writer.writeStringValue("msdyn_presencestatustext", this.msdyn_presencestatustext);
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
