import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createBooleanManagedPropertyFromDiscriminatorValue} from './createBooleanManagedPropertyFromDiscriminatorValue';
import {createBulkdeletefailureFromDiscriminatorValue} from './createBulkdeletefailureFromDiscriminatorValue';
import {createDatalakefolderFromDiscriminatorValue} from './createDatalakefolderFromDiscriminatorValue';
import {createDuplicaterecordFromDiscriminatorValue} from './createDuplicaterecordFromDiscriminatorValue';
import {createMailboxtrackingfolderFromDiscriminatorValue} from './createMailboxtrackingfolderFromDiscriminatorValue';
import {createOrganizationFromDiscriminatorValue} from './createOrganizationFromDiscriminatorValue';
import {createPrincipalobjectattributeaccessFromDiscriminatorValue} from './createPrincipalobjectattributeaccessFromDiscriminatorValue';
import {createProcesssessionFromDiscriminatorValue} from './createProcesssessionFromDiscriminatorValue';
import {createSynapselinkprofileentityFromDiscriminatorValue} from './createSynapselinkprofileentityFromDiscriminatorValue';
import {createSynapselinkprofileentitystateFromDiscriminatorValue} from './createSynapselinkprofileentitystateFromDiscriminatorValue';
import {createSynapselinkscheduleFromDiscriminatorValue} from './createSynapselinkscheduleFromDiscriminatorValue';
import {createSyncerrorFromDiscriminatorValue} from './createSyncerrorFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {Asyncoperation, BooleanManagedProperty, Bulkdeletefailure, Crmbaseentity, Datalakefolder, Duplicaterecord, Mailboxtrackingfolder, Organization, Principalobjectattributeaccess, Processsession, Synapselinkprofileentity, Synapselinkprofileentitystate, Synapselinkschedule, Syncerror, Systemuser} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Synapselinkprofile extends Crmbaseentity implements Parsable {
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __datalakefolder_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private __organizationid_value?: string | undefined;
    private _activationtime?: Date | undefined;
    private _componentidunique?: string | undefined;
    private _componentstate?: number | undefined;
    private _copyattachments?: boolean | undefined;
    private _copyfiles?: boolean | undefined;
    private _createdby?: Systemuser | undefined;
    private _createdon?: Date | undefined;
    private _createdonbehalfby?: Systemuser | undefined;
    private _datalakefolder?: Datalakefolder | undefined;
    private _extendedproperties?: string | undefined;
    private _importsequencenumber?: number | undefined;
    private _iscustomizable?: BooleanManagedProperty | undefined;
    private _ismanaged?: boolean | undefined;
    private _modifiedby?: Systemuser | undefined;
    private _modifiedon?: Date | undefined;
    private _modifiedonbehalfby?: Systemuser | undefined;
    private _name?: string | undefined;
    private _organizationid?: Organization | undefined;
    private _overriddencreatedon?: Date | undefined;
    private _overwritetime?: Date | undefined;
    private _profileentities?: Synapselinkprofileentity[] | undefined;
    private _profileentitystates?: Synapselinkprofileentitystate[] | undefined;
    private _profileschedules?: Synapselinkschedule[] | undefined;
    private _profilestate?: number | undefined;
    private _profiletype?: number | undefined;
    private _profileupdatedtime?: Date | undefined;
    private _profileversion?: string | undefined;
    private _snapshotstopersist?: number | undefined;
    private _solutionid?: string | undefined;
    private _statecode?: number | undefined;
    private _statuscode?: number | undefined;
    private _synapselinkprofile_AsyncOperations?: Asyncoperation[] | undefined;
    private _synapselinkprofile_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _synapselinkprofile_DuplicateBaseRecord?: Duplicaterecord[] | undefined;
    private _synapselinkprofile_DuplicateMatchingRecord?: Duplicaterecord[] | undefined;
    private _synapselinkprofile_MailboxTrackingFolders?: Mailboxtrackingfolder[] | undefined;
    private _synapselinkprofile_PrincipalObjectAttributeAccesses?: Principalobjectattributeaccess[] | undefined;
    private _synapselinkprofile_ProcessSession?: Processsession[] | undefined;
    private _synapselinkprofile_SyncErrors?: Syncerror[] | undefined;
    private _synapselinkprofileid?: string | undefined;
    private _timezoneruleversionnumber?: number | undefined;
    private _uniquename?: string | undefined;
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
     * Gets the _datalakefolder_value property value. 
     * @returns a string
     */
    public get _datalakefolder_value() {
        return this.__datalakefolder_value;
    };
    /**
     * Sets the _datalakefolder_value property value. 
     * @param value Value to set for the _datalakefolder_value property.
     */
    public set _datalakefolder_value(value: string | undefined) {
        this.__datalakefolder_value = value;
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
     * Gets the activationtime property value. 
     * @returns a Date
     */
    public get activationtime() {
        return this._activationtime;
    };
    /**
     * Sets the activationtime property value. 
     * @param value Value to set for the activationtime property.
     */
    public set activationtime(value: Date | undefined) {
        this._activationtime = value;
    };
    /**
     * Gets the componentidunique property value. 
     * @returns a string
     */
    public get componentidunique() {
        return this._componentidunique;
    };
    /**
     * Sets the componentidunique property value. 
     * @param value Value to set for the componentidunique property.
     */
    public set componentidunique(value: string | undefined) {
        this._componentidunique = value;
    };
    /**
     * Gets the componentstate property value. 
     * @returns a integer
     */
    public get componentstate() {
        return this._componentstate;
    };
    /**
     * Sets the componentstate property value. 
     * @param value Value to set for the componentstate property.
     */
    public set componentstate(value: number | undefined) {
        this._componentstate = value;
    };
    /**
     * Instantiates a new synapselinkprofile and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the copyattachments property value. 
     * @returns a boolean
     */
    public get copyattachments() {
        return this._copyattachments;
    };
    /**
     * Sets the copyattachments property value. 
     * @param value Value to set for the copyattachments property.
     */
    public set copyattachments(value: boolean | undefined) {
        this._copyattachments = value;
    };
    /**
     * Gets the copyfiles property value. 
     * @returns a boolean
     */
    public get copyfiles() {
        return this._copyfiles;
    };
    /**
     * Sets the copyfiles property value. 
     * @param value Value to set for the copyfiles property.
     */
    public set copyfiles(value: boolean | undefined) {
        this._copyfiles = value;
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
     * Gets the datalakefolder property value. 
     * @returns a datalakefolder
     */
    public get datalakefolder() {
        return this._datalakefolder;
    };
    /**
     * Sets the datalakefolder property value. 
     * @param value Value to set for the datalakefolder property.
     */
    public set datalakefolder(value: Datalakefolder | undefined) {
        this._datalakefolder = value;
    };
    /**
     * Gets the extendedproperties property value. 
     * @returns a string
     */
    public get extendedproperties() {
        return this._extendedproperties;
    };
    /**
     * Sets the extendedproperties property value. 
     * @param value Value to set for the extendedproperties property.
     */
    public set extendedproperties(value: string | undefined) {
        this._extendedproperties = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Record<string, (item: T, node: ParseNode) => void> {
        return {...super.getFieldDeserializers<T>(),
            "_createdby_value": (o, n) => { (o as unknown as Synapselinkprofile)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Synapselinkprofile)._createdonbehalfby_value = n.getStringValue(); },
            "_datalakefolder_value": (o, n) => { (o as unknown as Synapselinkprofile)._datalakefolder_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Synapselinkprofile)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Synapselinkprofile)._modifiedonbehalfby_value = n.getStringValue(); },
            "_organizationid_value": (o, n) => { (o as unknown as Synapselinkprofile)._organizationid_value = n.getStringValue(); },
            "activationtime": (o, n) => { (o as unknown as Synapselinkprofile).activationtime = n.getDateValue(); },
            "componentidunique": (o, n) => { (o as unknown as Synapselinkprofile).componentidunique = n.getStringValue(); },
            "componentstate": (o, n) => { (o as unknown as Synapselinkprofile).componentstate = n.getNumberValue(); },
            "copyattachments": (o, n) => { (o as unknown as Synapselinkprofile).copyattachments = n.getBooleanValue(); },
            "copyfiles": (o, n) => { (o as unknown as Synapselinkprofile).copyfiles = n.getBooleanValue(); },
            "createdby": (o, n) => { (o as unknown as Synapselinkprofile).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Synapselinkprofile).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Synapselinkprofile).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "datalakefolder": (o, n) => { (o as unknown as Synapselinkprofile).datalakefolder = n.getObjectValue<Datalakefolder>(createDatalakefolderFromDiscriminatorValue); },
            "extendedproperties": (o, n) => { (o as unknown as Synapselinkprofile).extendedproperties = n.getStringValue(); },
            "importsequencenumber": (o, n) => { (o as unknown as Synapselinkprofile).importsequencenumber = n.getNumberValue(); },
            "iscustomizable": (o, n) => { (o as unknown as Synapselinkprofile).iscustomizable = n.getObjectValue<BooleanManagedProperty>(createBooleanManagedPropertyFromDiscriminatorValue); },
            "ismanaged": (o, n) => { (o as unknown as Synapselinkprofile).ismanaged = n.getBooleanValue(); },
            "modifiedby": (o, n) => { (o as unknown as Synapselinkprofile).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Synapselinkprofile).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Synapselinkprofile).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "name": (o, n) => { (o as unknown as Synapselinkprofile).name = n.getStringValue(); },
            "organizationid": (o, n) => { (o as unknown as Synapselinkprofile).organizationid = n.getObjectValue<Organization>(createOrganizationFromDiscriminatorValue); },
            "overriddencreatedon": (o, n) => { (o as unknown as Synapselinkprofile).overriddencreatedon = n.getDateValue(); },
            "overwritetime": (o, n) => { (o as unknown as Synapselinkprofile).overwritetime = n.getDateValue(); },
            "profileentities": (o, n) => { (o as unknown as Synapselinkprofile).profileentities = n.getCollectionOfObjectValues<Synapselinkprofileentity>(createSynapselinkprofileentityFromDiscriminatorValue); },
            "profileentitystates": (o, n) => { (o as unknown as Synapselinkprofile).profileentitystates = n.getCollectionOfObjectValues<Synapselinkprofileentitystate>(createSynapselinkprofileentitystateFromDiscriminatorValue); },
            "profileschedules": (o, n) => { (o as unknown as Synapselinkprofile).profileschedules = n.getCollectionOfObjectValues<Synapselinkschedule>(createSynapselinkscheduleFromDiscriminatorValue); },
            "profilestate": (o, n) => { (o as unknown as Synapselinkprofile).profilestate = n.getNumberValue(); },
            "profiletype": (o, n) => { (o as unknown as Synapselinkprofile).profiletype = n.getNumberValue(); },
            "profileupdatedtime": (o, n) => { (o as unknown as Synapselinkprofile).profileupdatedtime = n.getDateValue(); },
            "profileversion": (o, n) => { (o as unknown as Synapselinkprofile).profileversion = n.getStringValue(); },
            "snapshotstopersist": (o, n) => { (o as unknown as Synapselinkprofile).snapshotstopersist = n.getNumberValue(); },
            "solutionid": (o, n) => { (o as unknown as Synapselinkprofile).solutionid = n.getStringValue(); },
            "statecode": (o, n) => { (o as unknown as Synapselinkprofile).statecode = n.getNumberValue(); },
            "statuscode": (o, n) => { (o as unknown as Synapselinkprofile).statuscode = n.getNumberValue(); },
            "synapselinkprofile_AsyncOperations": (o, n) => { (o as unknown as Synapselinkprofile).synapselinkprofile_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "synapselinkprofile_BulkDeleteFailures": (o, n) => { (o as unknown as Synapselinkprofile).synapselinkprofile_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "synapselinkprofile_DuplicateBaseRecord": (o, n) => { (o as unknown as Synapselinkprofile).synapselinkprofile_DuplicateBaseRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "synapselinkprofile_DuplicateMatchingRecord": (o, n) => { (o as unknown as Synapselinkprofile).synapselinkprofile_DuplicateMatchingRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "synapselinkprofile_MailboxTrackingFolders": (o, n) => { (o as unknown as Synapselinkprofile).synapselinkprofile_MailboxTrackingFolders = n.getCollectionOfObjectValues<Mailboxtrackingfolder>(createMailboxtrackingfolderFromDiscriminatorValue); },
            "synapselinkprofile_PrincipalObjectAttributeAccesses": (o, n) => { (o as unknown as Synapselinkprofile).synapselinkprofile_PrincipalObjectAttributeAccesses = n.getCollectionOfObjectValues<Principalobjectattributeaccess>(createPrincipalobjectattributeaccessFromDiscriminatorValue); },
            "synapselinkprofile_ProcessSession": (o, n) => { (o as unknown as Synapselinkprofile).synapselinkprofile_ProcessSession = n.getCollectionOfObjectValues<Processsession>(createProcesssessionFromDiscriminatorValue); },
            "synapselinkprofile_SyncErrors": (o, n) => { (o as unknown as Synapselinkprofile).synapselinkprofile_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "synapselinkprofileid": (o, n) => { (o as unknown as Synapselinkprofile).synapselinkprofileid = n.getStringValue(); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Synapselinkprofile).timezoneruleversionnumber = n.getNumberValue(); },
            "uniquename": (o, n) => { (o as unknown as Synapselinkprofile).uniquename = n.getStringValue(); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Synapselinkprofile).utcconversiontimezonecode = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as Synapselinkprofile).versionnumber = n.getNumberValue(); },
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
     * Gets the iscustomizable property value. 
     * @returns a BooleanManagedProperty
     */
    public get iscustomizable() {
        return this._iscustomizable;
    };
    /**
     * Sets the iscustomizable property value. 
     * @param value Value to set for the iscustomizable property.
     */
    public set iscustomizable(value: BooleanManagedProperty | undefined) {
        this._iscustomizable = value;
    };
    /**
     * Gets the ismanaged property value. 
     * @returns a boolean
     */
    public get ismanaged() {
        return this._ismanaged;
    };
    /**
     * Sets the ismanaged property value. 
     * @param value Value to set for the ismanaged property.
     */
    public set ismanaged(value: boolean | undefined) {
        this._ismanaged = value;
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
     * Gets the overwritetime property value. 
     * @returns a Date
     */
    public get overwritetime() {
        return this._overwritetime;
    };
    /**
     * Sets the overwritetime property value. 
     * @param value Value to set for the overwritetime property.
     */
    public set overwritetime(value: Date | undefined) {
        this._overwritetime = value;
    };
    /**
     * Gets the profileentities property value. 
     * @returns a synapselinkprofileentity
     */
    public get profileentities() {
        return this._profileentities;
    };
    /**
     * Sets the profileentities property value. 
     * @param value Value to set for the profileentities property.
     */
    public set profileentities(value: Synapselinkprofileentity[] | undefined) {
        this._profileentities = value;
    };
    /**
     * Gets the profileentitystates property value. 
     * @returns a synapselinkprofileentitystate
     */
    public get profileentitystates() {
        return this._profileentitystates;
    };
    /**
     * Sets the profileentitystates property value. 
     * @param value Value to set for the profileentitystates property.
     */
    public set profileentitystates(value: Synapselinkprofileentitystate[] | undefined) {
        this._profileentitystates = value;
    };
    /**
     * Gets the profileschedules property value. 
     * @returns a synapselinkschedule
     */
    public get profileschedules() {
        return this._profileschedules;
    };
    /**
     * Sets the profileschedules property value. 
     * @param value Value to set for the profileschedules property.
     */
    public set profileschedules(value: Synapselinkschedule[] | undefined) {
        this._profileschedules = value;
    };
    /**
     * Gets the profilestate property value. 
     * @returns a integer
     */
    public get profilestate() {
        return this._profilestate;
    };
    /**
     * Sets the profilestate property value. 
     * @param value Value to set for the profilestate property.
     */
    public set profilestate(value: number | undefined) {
        this._profilestate = value;
    };
    /**
     * Gets the profiletype property value. 
     * @returns a integer
     */
    public get profiletype() {
        return this._profiletype;
    };
    /**
     * Sets the profiletype property value. 
     * @param value Value to set for the profiletype property.
     */
    public set profiletype(value: number | undefined) {
        this._profiletype = value;
    };
    /**
     * Gets the profileupdatedtime property value. 
     * @returns a Date
     */
    public get profileupdatedtime() {
        return this._profileupdatedtime;
    };
    /**
     * Sets the profileupdatedtime property value. 
     * @param value Value to set for the profileupdatedtime property.
     */
    public set profileupdatedtime(value: Date | undefined) {
        this._profileupdatedtime = value;
    };
    /**
     * Gets the profileversion property value. 
     * @returns a string
     */
    public get profileversion() {
        return this._profileversion;
    };
    /**
     * Sets the profileversion property value. 
     * @param value Value to set for the profileversion property.
     */
    public set profileversion(value: string | undefined) {
        this._profileversion = value;
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
        writer.writeStringValue("_datalakefolder_value", this._datalakefolder_value);
        writer.writeStringValue("_modifiedby_value", this._modifiedby_value);
        writer.writeStringValue("_modifiedonbehalfby_value", this._modifiedonbehalfby_value);
        writer.writeStringValue("_organizationid_value", this._organizationid_value);
        writer.writeDateValue("activationtime", this.activationtime);
        writer.writeStringValue("componentidunique", this.componentidunique);
        writer.writeNumberValue("componentstate", this.componentstate);
        writer.writeBooleanValue("copyattachments", this.copyattachments);
        writer.writeBooleanValue("copyfiles", this.copyfiles);
        writer.writeObjectValue<Systemuser>("createdby", this.createdby);
        writer.writeDateValue("createdon", this.createdon);
        writer.writeObjectValue<Systemuser>("createdonbehalfby", this.createdonbehalfby);
        writer.writeObjectValue<Datalakefolder>("datalakefolder", this.datalakefolder);
        writer.writeStringValue("extendedproperties", this.extendedproperties);
        writer.writeNumberValue("importsequencenumber", this.importsequencenumber);
        writer.writeObjectValue<BooleanManagedProperty>("iscustomizable", this.iscustomizable);
        writer.writeBooleanValue("ismanaged", this.ismanaged);
        writer.writeObjectValue<Systemuser>("modifiedby", this.modifiedby);
        writer.writeDateValue("modifiedon", this.modifiedon);
        writer.writeObjectValue<Systemuser>("modifiedonbehalfby", this.modifiedonbehalfby);
        writer.writeStringValue("name", this.name);
        writer.writeObjectValue<Organization>("organizationid", this.organizationid);
        writer.writeDateValue("overriddencreatedon", this.overriddencreatedon);
        writer.writeDateValue("overwritetime", this.overwritetime);
        writer.writeCollectionOfObjectValues<Synapselinkprofileentity>("profileentities", this.profileentities);
        writer.writeCollectionOfObjectValues<Synapselinkprofileentitystate>("profileentitystates", this.profileentitystates);
        writer.writeCollectionOfObjectValues<Synapselinkschedule>("profileschedules", this.profileschedules);
        writer.writeNumberValue("profilestate", this.profilestate);
        writer.writeNumberValue("profiletype", this.profiletype);
        writer.writeDateValue("profileupdatedtime", this.profileupdatedtime);
        writer.writeStringValue("profileversion", this.profileversion);
        writer.writeNumberValue("snapshotstopersist", this.snapshotstopersist);
        writer.writeStringValue("solutionid", this.solutionid);
        writer.writeNumberValue("statecode", this.statecode);
        writer.writeNumberValue("statuscode", this.statuscode);
        writer.writeCollectionOfObjectValues<Asyncoperation>("synapselinkprofile_AsyncOperations", this.synapselinkprofile_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("synapselinkprofile_BulkDeleteFailures", this.synapselinkprofile_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("synapselinkprofile_DuplicateBaseRecord", this.synapselinkprofile_DuplicateBaseRecord);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("synapselinkprofile_DuplicateMatchingRecord", this.synapselinkprofile_DuplicateMatchingRecord);
        writer.writeCollectionOfObjectValues<Mailboxtrackingfolder>("synapselinkprofile_MailboxTrackingFolders", this.synapselinkprofile_MailboxTrackingFolders);
        writer.writeCollectionOfObjectValues<Principalobjectattributeaccess>("synapselinkprofile_PrincipalObjectAttributeAccesses", this.synapselinkprofile_PrincipalObjectAttributeAccesses);
        writer.writeCollectionOfObjectValues<Processsession>("synapselinkprofile_ProcessSession", this.synapselinkprofile_ProcessSession);
        writer.writeCollectionOfObjectValues<Syncerror>("synapselinkprofile_SyncErrors", this.synapselinkprofile_SyncErrors);
        writer.writeStringValue("synapselinkprofileid", this.synapselinkprofileid);
        writer.writeNumberValue("timezoneruleversionnumber", this.timezoneruleversionnumber);
        writer.writeStringValue("uniquename", this.uniquename);
        writer.writeNumberValue("utcconversiontimezonecode", this.utcconversiontimezonecode);
        writer.writeNumberValue("versionnumber", this.versionnumber);
    };
    /**
     * Gets the snapshotstopersist property value. 
     * @returns a integer
     */
    public get snapshotstopersist() {
        return this._snapshotstopersist;
    };
    /**
     * Sets the snapshotstopersist property value. 
     * @param value Value to set for the snapshotstopersist property.
     */
    public set snapshotstopersist(value: number | undefined) {
        this._snapshotstopersist = value;
    };
    /**
     * Gets the solutionid property value. 
     * @returns a string
     */
    public get solutionid() {
        return this._solutionid;
    };
    /**
     * Sets the solutionid property value. 
     * @param value Value to set for the solutionid property.
     */
    public set solutionid(value: string | undefined) {
        this._solutionid = value;
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
     * Gets the synapselinkprofile_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get synapselinkprofile_AsyncOperations() {
        return this._synapselinkprofile_AsyncOperations;
    };
    /**
     * Sets the synapselinkprofile_AsyncOperations property value. 
     * @param value Value to set for the synapselinkprofile_AsyncOperations property.
     */
    public set synapselinkprofile_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._synapselinkprofile_AsyncOperations = value;
    };
    /**
     * Gets the synapselinkprofile_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get synapselinkprofile_BulkDeleteFailures() {
        return this._synapselinkprofile_BulkDeleteFailures;
    };
    /**
     * Sets the synapselinkprofile_BulkDeleteFailures property value. 
     * @param value Value to set for the synapselinkprofile_BulkDeleteFailures property.
     */
    public set synapselinkprofile_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._synapselinkprofile_BulkDeleteFailures = value;
    };
    /**
     * Gets the synapselinkprofile_DuplicateBaseRecord property value. 
     * @returns a duplicaterecord
     */
    public get synapselinkprofile_DuplicateBaseRecord() {
        return this._synapselinkprofile_DuplicateBaseRecord;
    };
    /**
     * Sets the synapselinkprofile_DuplicateBaseRecord property value. 
     * @param value Value to set for the synapselinkprofile_DuplicateBaseRecord property.
     */
    public set synapselinkprofile_DuplicateBaseRecord(value: Duplicaterecord[] | undefined) {
        this._synapselinkprofile_DuplicateBaseRecord = value;
    };
    /**
     * Gets the synapselinkprofile_DuplicateMatchingRecord property value. 
     * @returns a duplicaterecord
     */
    public get synapselinkprofile_DuplicateMatchingRecord() {
        return this._synapselinkprofile_DuplicateMatchingRecord;
    };
    /**
     * Sets the synapselinkprofile_DuplicateMatchingRecord property value. 
     * @param value Value to set for the synapselinkprofile_DuplicateMatchingRecord property.
     */
    public set synapselinkprofile_DuplicateMatchingRecord(value: Duplicaterecord[] | undefined) {
        this._synapselinkprofile_DuplicateMatchingRecord = value;
    };
    /**
     * Gets the synapselinkprofile_MailboxTrackingFolders property value. 
     * @returns a mailboxtrackingfolder
     */
    public get synapselinkprofile_MailboxTrackingFolders() {
        return this._synapselinkprofile_MailboxTrackingFolders;
    };
    /**
     * Sets the synapselinkprofile_MailboxTrackingFolders property value. 
     * @param value Value to set for the synapselinkprofile_MailboxTrackingFolders property.
     */
    public set synapselinkprofile_MailboxTrackingFolders(value: Mailboxtrackingfolder[] | undefined) {
        this._synapselinkprofile_MailboxTrackingFolders = value;
    };
    /**
     * Gets the synapselinkprofile_PrincipalObjectAttributeAccesses property value. 
     * @returns a principalobjectattributeaccess
     */
    public get synapselinkprofile_PrincipalObjectAttributeAccesses() {
        return this._synapselinkprofile_PrincipalObjectAttributeAccesses;
    };
    /**
     * Sets the synapselinkprofile_PrincipalObjectAttributeAccesses property value. 
     * @param value Value to set for the synapselinkprofile_PrincipalObjectAttributeAccesses property.
     */
    public set synapselinkprofile_PrincipalObjectAttributeAccesses(value: Principalobjectattributeaccess[] | undefined) {
        this._synapselinkprofile_PrincipalObjectAttributeAccesses = value;
    };
    /**
     * Gets the synapselinkprofile_ProcessSession property value. 
     * @returns a processsession
     */
    public get synapselinkprofile_ProcessSession() {
        return this._synapselinkprofile_ProcessSession;
    };
    /**
     * Sets the synapselinkprofile_ProcessSession property value. 
     * @param value Value to set for the synapselinkprofile_ProcessSession property.
     */
    public set synapselinkprofile_ProcessSession(value: Processsession[] | undefined) {
        this._synapselinkprofile_ProcessSession = value;
    };
    /**
     * Gets the synapselinkprofile_SyncErrors property value. 
     * @returns a syncerror
     */
    public get synapselinkprofile_SyncErrors() {
        return this._synapselinkprofile_SyncErrors;
    };
    /**
     * Sets the synapselinkprofile_SyncErrors property value. 
     * @param value Value to set for the synapselinkprofile_SyncErrors property.
     */
    public set synapselinkprofile_SyncErrors(value: Syncerror[] | undefined) {
        this._synapselinkprofile_SyncErrors = value;
    };
    /**
     * Gets the synapselinkprofileid property value. 
     * @returns a string
     */
    public get synapselinkprofileid() {
        return this._synapselinkprofileid;
    };
    /**
     * Sets the synapselinkprofileid property value. 
     * @param value Value to set for the synapselinkprofileid property.
     */
    public set synapselinkprofileid(value: string | undefined) {
        this._synapselinkprofileid = value;
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
     * Gets the uniquename property value. 
     * @returns a string
     */
    public get uniquename() {
        return this._uniquename;
    };
    /**
     * Sets the uniquename property value. 
     * @param value Value to set for the uniquename property.
     */
    public set uniquename(value: string | undefined) {
        this._uniquename = value;
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
