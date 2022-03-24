import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createBooleanManagedPropertyFromDiscriminatorValue} from './createBooleanManagedPropertyFromDiscriminatorValue';
import {createBulkdeletefailureFromDiscriminatorValue} from './createBulkdeletefailureFromDiscriminatorValue';
import {createDuplicaterecordFromDiscriminatorValue} from './createDuplicaterecordFromDiscriminatorValue';
import {createMailboxtrackingfolderFromDiscriminatorValue} from './createMailboxtrackingfolderFromDiscriminatorValue';
import {createOrganizationFromDiscriminatorValue} from './createOrganizationFromDiscriminatorValue';
import {createPrincipalobjectattributeaccessFromDiscriminatorValue} from './createPrincipalobjectattributeaccessFromDiscriminatorValue';
import {createProcesssessionFromDiscriminatorValue} from './createProcesssessionFromDiscriminatorValue';
import {createSynapselinkprofileFromDiscriminatorValue} from './createSynapselinkprofileFromDiscriminatorValue';
import {createSyncerrorFromDiscriminatorValue} from './createSyncerrorFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {Asyncoperation, BooleanManagedProperty, Bulkdeletefailure, Crmbaseentity, Duplicaterecord, Mailboxtrackingfolder, Organization, Principalobjectattributeaccess, Processsession, Synapselinkprofile, Syncerror, Systemuser} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Synapselinkschedule extends Crmbaseentity implements Parsable {
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private __organizationid_value?: string | undefined;
    private __profile_value?: string | undefined;
    private _componentidunique?: string | undefined;
    private _componentstate?: number | undefined;
    private _createdby?: Systemuser | undefined;
    private _createdon?: Date | undefined;
    private _createdonbehalfby?: Systemuser | undefined;
    private _entityname?: string | undefined;
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
    private _profile?: Synapselinkprofile | undefined;
    private _recurrenceinterval?: number | undefined;
    private _recurrenceunit?: number | undefined;
    private _solutionid?: string | undefined;
    private _starttime?: Date | undefined;
    private _statecode?: number | undefined;
    private _statuscode?: number | undefined;
    private _synapselinkschedule_AsyncOperations?: Asyncoperation[] | undefined;
    private _synapselinkschedule_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _synapselinkschedule_DuplicateBaseRecord?: Duplicaterecord[] | undefined;
    private _synapselinkschedule_DuplicateMatchingRecord?: Duplicaterecord[] | undefined;
    private _synapselinkschedule_MailboxTrackingFolders?: Mailboxtrackingfolder[] | undefined;
    private _synapselinkschedule_PrincipalObjectAttributeAccesses?: Principalobjectattributeaccess[] | undefined;
    private _synapselinkschedule_ProcessSession?: Processsession[] | undefined;
    private _synapselinkschedule_SyncErrors?: Syncerror[] | undefined;
    private _synapselinkscheduleid?: string | undefined;
    private _timezoneruleversionnumber?: number | undefined;
    private _type?: number | undefined;
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
     * Gets the _profile_value property value. 
     * @returns a string
     */
    public get _profile_value() {
        return this.__profile_value;
    };
    /**
     * Sets the _profile_value property value. 
     * @param value Value to set for the _profile_value property.
     */
    public set _profile_value(value: string | undefined) {
        this.__profile_value = value;
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
     * Instantiates a new synapselinkschedule and sets the default values.
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
     * Gets the entityname property value. 
     * @returns a string
     */
    public get entityname() {
        return this._entityname;
    };
    /**
     * Sets the entityname property value. 
     * @param value Value to set for the entityname property.
     */
    public set entityname(value: string | undefined) {
        this._entityname = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Record<string, (item: T, node: ParseNode) => void> {
        return {...super.getFieldDeserializers<T>(),
            "_createdby_value": (o, n) => { (o as unknown as Synapselinkschedule)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Synapselinkschedule)._createdonbehalfby_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Synapselinkschedule)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Synapselinkschedule)._modifiedonbehalfby_value = n.getStringValue(); },
            "_organizationid_value": (o, n) => { (o as unknown as Synapselinkschedule)._organizationid_value = n.getStringValue(); },
            "_profile_value": (o, n) => { (o as unknown as Synapselinkschedule)._profile_value = n.getStringValue(); },
            "componentidunique": (o, n) => { (o as unknown as Synapselinkschedule).componentidunique = n.getStringValue(); },
            "componentstate": (o, n) => { (o as unknown as Synapselinkschedule).componentstate = n.getNumberValue(); },
            "createdby": (o, n) => { (o as unknown as Synapselinkschedule).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Synapselinkschedule).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Synapselinkschedule).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "entityname": (o, n) => { (o as unknown as Synapselinkschedule).entityname = n.getStringValue(); },
            "importsequencenumber": (o, n) => { (o as unknown as Synapselinkschedule).importsequencenumber = n.getNumberValue(); },
            "iscustomizable": (o, n) => { (o as unknown as Synapselinkschedule).iscustomizable = n.getObjectValue<BooleanManagedProperty>(createBooleanManagedPropertyFromDiscriminatorValue); },
            "ismanaged": (o, n) => { (o as unknown as Synapselinkschedule).ismanaged = n.getBooleanValue(); },
            "modifiedby": (o, n) => { (o as unknown as Synapselinkschedule).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Synapselinkschedule).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Synapselinkschedule).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "name": (o, n) => { (o as unknown as Synapselinkschedule).name = n.getStringValue(); },
            "organizationid": (o, n) => { (o as unknown as Synapselinkschedule).organizationid = n.getObjectValue<Organization>(createOrganizationFromDiscriminatorValue); },
            "overriddencreatedon": (o, n) => { (o as unknown as Synapselinkschedule).overriddencreatedon = n.getDateValue(); },
            "overwritetime": (o, n) => { (o as unknown as Synapselinkschedule).overwritetime = n.getDateValue(); },
            "profile": (o, n) => { (o as unknown as Synapselinkschedule).profile = n.getObjectValue<Synapselinkprofile>(createSynapselinkprofileFromDiscriminatorValue); },
            "recurrenceinterval": (o, n) => { (o as unknown as Synapselinkschedule).recurrenceinterval = n.getNumberValue(); },
            "recurrenceunit": (o, n) => { (o as unknown as Synapselinkschedule).recurrenceunit = n.getNumberValue(); },
            "solutionid": (o, n) => { (o as unknown as Synapselinkschedule).solutionid = n.getStringValue(); },
            "starttime": (o, n) => { (o as unknown as Synapselinkschedule).starttime = n.getDateValue(); },
            "statecode": (o, n) => { (o as unknown as Synapselinkschedule).statecode = n.getNumberValue(); },
            "statuscode": (o, n) => { (o as unknown as Synapselinkschedule).statuscode = n.getNumberValue(); },
            "synapselinkschedule_AsyncOperations": (o, n) => { (o as unknown as Synapselinkschedule).synapselinkschedule_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "synapselinkschedule_BulkDeleteFailures": (o, n) => { (o as unknown as Synapselinkschedule).synapselinkschedule_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "synapselinkschedule_DuplicateBaseRecord": (o, n) => { (o as unknown as Synapselinkschedule).synapselinkschedule_DuplicateBaseRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "synapselinkschedule_DuplicateMatchingRecord": (o, n) => { (o as unknown as Synapselinkschedule).synapselinkschedule_DuplicateMatchingRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "synapselinkschedule_MailboxTrackingFolders": (o, n) => { (o as unknown as Synapselinkschedule).synapselinkschedule_MailboxTrackingFolders = n.getCollectionOfObjectValues<Mailboxtrackingfolder>(createMailboxtrackingfolderFromDiscriminatorValue); },
            "synapselinkschedule_PrincipalObjectAttributeAccesses": (o, n) => { (o as unknown as Synapselinkschedule).synapselinkschedule_PrincipalObjectAttributeAccesses = n.getCollectionOfObjectValues<Principalobjectattributeaccess>(createPrincipalobjectattributeaccessFromDiscriminatorValue); },
            "synapselinkschedule_ProcessSession": (o, n) => { (o as unknown as Synapselinkschedule).synapselinkschedule_ProcessSession = n.getCollectionOfObjectValues<Processsession>(createProcesssessionFromDiscriminatorValue); },
            "synapselinkschedule_SyncErrors": (o, n) => { (o as unknown as Synapselinkschedule).synapselinkschedule_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "synapselinkscheduleid": (o, n) => { (o as unknown as Synapselinkschedule).synapselinkscheduleid = n.getStringValue(); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Synapselinkschedule).timezoneruleversionnumber = n.getNumberValue(); },
            "type": (o, n) => { (o as unknown as Synapselinkschedule).type = n.getNumberValue(); },
            "uniquename": (o, n) => { (o as unknown as Synapselinkschedule).uniquename = n.getStringValue(); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Synapselinkschedule).utcconversiontimezonecode = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as Synapselinkschedule).versionnumber = n.getNumberValue(); },
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
     * Gets the profile property value. 
     * @returns a synapselinkprofile
     */
    public get profile() {
        return this._profile;
    };
    /**
     * Sets the profile property value. 
     * @param value Value to set for the profile property.
     */
    public set profile(value: Synapselinkprofile | undefined) {
        this._profile = value;
    };
    /**
     * Gets the recurrenceinterval property value. 
     * @returns a integer
     */
    public get recurrenceinterval() {
        return this._recurrenceinterval;
    };
    /**
     * Sets the recurrenceinterval property value. 
     * @param value Value to set for the recurrenceinterval property.
     */
    public set recurrenceinterval(value: number | undefined) {
        this._recurrenceinterval = value;
    };
    /**
     * Gets the recurrenceunit property value. 
     * @returns a integer
     */
    public get recurrenceunit() {
        return this._recurrenceunit;
    };
    /**
     * Sets the recurrenceunit property value. 
     * @param value Value to set for the recurrenceunit property.
     */
    public set recurrenceunit(value: number | undefined) {
        this._recurrenceunit = value;
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
        writer.writeStringValue("_profile_value", this._profile_value);
        writer.writeStringValue("componentidunique", this.componentidunique);
        writer.writeNumberValue("componentstate", this.componentstate);
        writer.writeObjectValue<Systemuser>("createdby", this.createdby);
        writer.writeDateValue("createdon", this.createdon);
        writer.writeObjectValue<Systemuser>("createdonbehalfby", this.createdonbehalfby);
        writer.writeStringValue("entityname", this.entityname);
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
        writer.writeObjectValue<Synapselinkprofile>("profile", this.profile);
        writer.writeNumberValue("recurrenceinterval", this.recurrenceinterval);
        writer.writeNumberValue("recurrenceunit", this.recurrenceunit);
        writer.writeStringValue("solutionid", this.solutionid);
        writer.writeDateValue("starttime", this.starttime);
        writer.writeNumberValue("statecode", this.statecode);
        writer.writeNumberValue("statuscode", this.statuscode);
        writer.writeCollectionOfObjectValues<Asyncoperation>("synapselinkschedule_AsyncOperations", this.synapselinkschedule_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("synapselinkschedule_BulkDeleteFailures", this.synapselinkschedule_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("synapselinkschedule_DuplicateBaseRecord", this.synapselinkschedule_DuplicateBaseRecord);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("synapselinkschedule_DuplicateMatchingRecord", this.synapselinkschedule_DuplicateMatchingRecord);
        writer.writeCollectionOfObjectValues<Mailboxtrackingfolder>("synapselinkschedule_MailboxTrackingFolders", this.synapselinkschedule_MailboxTrackingFolders);
        writer.writeCollectionOfObjectValues<Principalobjectattributeaccess>("synapselinkschedule_PrincipalObjectAttributeAccesses", this.synapselinkschedule_PrincipalObjectAttributeAccesses);
        writer.writeCollectionOfObjectValues<Processsession>("synapselinkschedule_ProcessSession", this.synapselinkschedule_ProcessSession);
        writer.writeCollectionOfObjectValues<Syncerror>("synapselinkschedule_SyncErrors", this.synapselinkschedule_SyncErrors);
        writer.writeStringValue("synapselinkscheduleid", this.synapselinkscheduleid);
        writer.writeNumberValue("timezoneruleversionnumber", this.timezoneruleversionnumber);
        writer.writeNumberValue("type", this.type);
        writer.writeStringValue("uniquename", this.uniquename);
        writer.writeNumberValue("utcconversiontimezonecode", this.utcconversiontimezonecode);
        writer.writeNumberValue("versionnumber", this.versionnumber);
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
     * Gets the starttime property value. 
     * @returns a Date
     */
    public get starttime() {
        return this._starttime;
    };
    /**
     * Sets the starttime property value. 
     * @param value Value to set for the starttime property.
     */
    public set starttime(value: Date | undefined) {
        this._starttime = value;
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
     * Gets the synapselinkschedule_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get synapselinkschedule_AsyncOperations() {
        return this._synapselinkschedule_AsyncOperations;
    };
    /**
     * Sets the synapselinkschedule_AsyncOperations property value. 
     * @param value Value to set for the synapselinkschedule_AsyncOperations property.
     */
    public set synapselinkschedule_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._synapselinkschedule_AsyncOperations = value;
    };
    /**
     * Gets the synapselinkschedule_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get synapselinkschedule_BulkDeleteFailures() {
        return this._synapselinkschedule_BulkDeleteFailures;
    };
    /**
     * Sets the synapselinkschedule_BulkDeleteFailures property value. 
     * @param value Value to set for the synapselinkschedule_BulkDeleteFailures property.
     */
    public set synapselinkschedule_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._synapselinkschedule_BulkDeleteFailures = value;
    };
    /**
     * Gets the synapselinkschedule_DuplicateBaseRecord property value. 
     * @returns a duplicaterecord
     */
    public get synapselinkschedule_DuplicateBaseRecord() {
        return this._synapselinkschedule_DuplicateBaseRecord;
    };
    /**
     * Sets the synapselinkschedule_DuplicateBaseRecord property value. 
     * @param value Value to set for the synapselinkschedule_DuplicateBaseRecord property.
     */
    public set synapselinkschedule_DuplicateBaseRecord(value: Duplicaterecord[] | undefined) {
        this._synapselinkschedule_DuplicateBaseRecord = value;
    };
    /**
     * Gets the synapselinkschedule_DuplicateMatchingRecord property value. 
     * @returns a duplicaterecord
     */
    public get synapselinkschedule_DuplicateMatchingRecord() {
        return this._synapselinkschedule_DuplicateMatchingRecord;
    };
    /**
     * Sets the synapselinkschedule_DuplicateMatchingRecord property value. 
     * @param value Value to set for the synapselinkschedule_DuplicateMatchingRecord property.
     */
    public set synapselinkschedule_DuplicateMatchingRecord(value: Duplicaterecord[] | undefined) {
        this._synapselinkschedule_DuplicateMatchingRecord = value;
    };
    /**
     * Gets the synapselinkschedule_MailboxTrackingFolders property value. 
     * @returns a mailboxtrackingfolder
     */
    public get synapselinkschedule_MailboxTrackingFolders() {
        return this._synapselinkschedule_MailboxTrackingFolders;
    };
    /**
     * Sets the synapselinkschedule_MailboxTrackingFolders property value. 
     * @param value Value to set for the synapselinkschedule_MailboxTrackingFolders property.
     */
    public set synapselinkschedule_MailboxTrackingFolders(value: Mailboxtrackingfolder[] | undefined) {
        this._synapselinkschedule_MailboxTrackingFolders = value;
    };
    /**
     * Gets the synapselinkschedule_PrincipalObjectAttributeAccesses property value. 
     * @returns a principalobjectattributeaccess
     */
    public get synapselinkschedule_PrincipalObjectAttributeAccesses() {
        return this._synapselinkschedule_PrincipalObjectAttributeAccesses;
    };
    /**
     * Sets the synapselinkschedule_PrincipalObjectAttributeAccesses property value. 
     * @param value Value to set for the synapselinkschedule_PrincipalObjectAttributeAccesses property.
     */
    public set synapselinkschedule_PrincipalObjectAttributeAccesses(value: Principalobjectattributeaccess[] | undefined) {
        this._synapselinkschedule_PrincipalObjectAttributeAccesses = value;
    };
    /**
     * Gets the synapselinkschedule_ProcessSession property value. 
     * @returns a processsession
     */
    public get synapselinkschedule_ProcessSession() {
        return this._synapselinkschedule_ProcessSession;
    };
    /**
     * Sets the synapselinkschedule_ProcessSession property value. 
     * @param value Value to set for the synapselinkschedule_ProcessSession property.
     */
    public set synapselinkschedule_ProcessSession(value: Processsession[] | undefined) {
        this._synapselinkschedule_ProcessSession = value;
    };
    /**
     * Gets the synapselinkschedule_SyncErrors property value. 
     * @returns a syncerror
     */
    public get synapselinkschedule_SyncErrors() {
        return this._synapselinkschedule_SyncErrors;
    };
    /**
     * Sets the synapselinkschedule_SyncErrors property value. 
     * @param value Value to set for the synapselinkschedule_SyncErrors property.
     */
    public set synapselinkschedule_SyncErrors(value: Syncerror[] | undefined) {
        this._synapselinkschedule_SyncErrors = value;
    };
    /**
     * Gets the synapselinkscheduleid property value. 
     * @returns a string
     */
    public get synapselinkscheduleid() {
        return this._synapselinkscheduleid;
    };
    /**
     * Sets the synapselinkscheduleid property value. 
     * @param value Value to set for the synapselinkscheduleid property.
     */
    public set synapselinkscheduleid(value: string | undefined) {
        this._synapselinkscheduleid = value;
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
     * Gets the type property value. 
     * @returns a integer
     */
    public get type() {
        return this._type;
    };
    /**
     * Sets the type property value. 
     * @param value Value to set for the type property.
     */
    public set type(value: number | undefined) {
        this._type = value;
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
