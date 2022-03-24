import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createBulkdeletefailureFromDiscriminatorValue} from './createBulkdeletefailureFromDiscriminatorValue';
import {createDuplicaterecordFromDiscriminatorValue} from './createDuplicaterecordFromDiscriminatorValue';
import {createMailboxtrackingfolderFromDiscriminatorValue} from './createMailboxtrackingfolderFromDiscriminatorValue';
import {createOrganizationFromDiscriminatorValue} from './createOrganizationFromDiscriminatorValue';
import {createPrincipalobjectattributeaccessFromDiscriminatorValue} from './createPrincipalobjectattributeaccessFromDiscriminatorValue';
import {createProcesssessionFromDiscriminatorValue} from './createProcesssessionFromDiscriminatorValue';
import {createSynapselinkprofileentityFromDiscriminatorValue} from './createSynapselinkprofileentityFromDiscriminatorValue';
import {createSynapselinkprofileFromDiscriminatorValue} from './createSynapselinkprofileFromDiscriminatorValue';
import {createSyncerrorFromDiscriminatorValue} from './createSyncerrorFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {Asyncoperation, Bulkdeletefailure, Crmbaseentity, Duplicaterecord, Mailboxtrackingfolder, Organization, Principalobjectattributeaccess, Processsession, Synapselinkprofile, Synapselinkprofileentity, Syncerror, Systemuser} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Synapselinkprofileentitystate extends Crmbaseentity implements Parsable {
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private __organizationid_value?: string | undefined;
    private __profile_value?: string | undefined;
    private __profileentity_value?: string | undefined;
    private _createdby?: Systemuser | undefined;
    private _createdon?: Date | undefined;
    private _createdonbehalfby?: Systemuser | undefined;
    private _entityname?: string | undefined;
    private _entitytype?: number | undefined;
    private _importsequencenumber?: number | undefined;
    private _initialsyncdatacompletedtime?: Date | undefined;
    private _initialsyncmetadatacreatedtime?: Date | undefined;
    private _initialsyncprocesscompletedtime?: Date | undefined;
    private _initialsyncstate?: number | undefined;
    private _lastsynceddatatime?: Date | undefined;
    private _lastsynceddataversion?: string | undefined;
    private _lastsyncedmetadatatime?: Date | undefined;
    private _lastsyncedmetadataversion?: string | undefined;
    private _metadatastate?: number | undefined;
    private _modifiedby?: Systemuser | undefined;
    private _modifiedon?: Date | undefined;
    private _modifiedonbehalfby?: Systemuser | undefined;
    private _name?: string | undefined;
    private _organizationid?: Organization | undefined;
    private _overriddencreatedon?: Date | undefined;
    private _profile?: Synapselinkprofile | undefined;
    private _profileentity?: Synapselinkprofileentity | undefined;
    private _statecode?: number | undefined;
    private _statuscode?: number | undefined;
    private _synapselinkprofileentitystate_AsyncOperations?: Asyncoperation[] | undefined;
    private _synapselinkprofileentitystate_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _synapselinkprofileentitystate_DuplicateBaseRecord?: Duplicaterecord[] | undefined;
    private _synapselinkprofileentitystate_DuplicateMatchingRecord?: Duplicaterecord[] | undefined;
    private _synapselinkprofileentitystate_MailboxTrackingFolders?: Mailboxtrackingfolder[] | undefined;
    private _synapselinkprofileentitystate_PrincipalObjectAttributeAccesses?: Principalobjectattributeaccess[] | undefined;
    private _synapselinkprofileentitystate_ProcessSession?: Processsession[] | undefined;
    private _synapselinkprofileentitystate_SyncErrors?: Syncerror[] | undefined;
    private _synapselinkprofileentitystateid?: string | undefined;
    private _synapsetablecreationstate?: number | undefined;
    private _syncstate?: number | undefined;
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
     * Gets the _profileentity_value property value. 
     * @returns a string
     */
    public get _profileentity_value() {
        return this.__profileentity_value;
    };
    /**
     * Sets the _profileentity_value property value. 
     * @param value Value to set for the _profileentity_value property.
     */
    public set _profileentity_value(value: string | undefined) {
        this.__profileentity_value = value;
    };
    /**
     * Instantiates a new synapselinkprofileentitystate and sets the default values.
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
     * Gets the entitytype property value. 
     * @returns a integer
     */
    public get entitytype() {
        return this._entitytype;
    };
    /**
     * Sets the entitytype property value. 
     * @param value Value to set for the entitytype property.
     */
    public set entitytype(value: number | undefined) {
        this._entitytype = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Record<string, (item: T, node: ParseNode) => void> {
        return {...super.getFieldDeserializers<T>(),
            "_createdby_value": (o, n) => { (o as unknown as Synapselinkprofileentitystate)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Synapselinkprofileentitystate)._createdonbehalfby_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Synapselinkprofileentitystate)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Synapselinkprofileentitystate)._modifiedonbehalfby_value = n.getStringValue(); },
            "_organizationid_value": (o, n) => { (o as unknown as Synapselinkprofileentitystate)._organizationid_value = n.getStringValue(); },
            "_profile_value": (o, n) => { (o as unknown as Synapselinkprofileentitystate)._profile_value = n.getStringValue(); },
            "_profileentity_value": (o, n) => { (o as unknown as Synapselinkprofileentitystate)._profileentity_value = n.getStringValue(); },
            "createdby": (o, n) => { (o as unknown as Synapselinkprofileentitystate).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Synapselinkprofileentitystate).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Synapselinkprofileentitystate).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "entityname": (o, n) => { (o as unknown as Synapselinkprofileentitystate).entityname = n.getStringValue(); },
            "entitytype": (o, n) => { (o as unknown as Synapselinkprofileentitystate).entitytype = n.getNumberValue(); },
            "importsequencenumber": (o, n) => { (o as unknown as Synapselinkprofileentitystate).importsequencenumber = n.getNumberValue(); },
            "initialsyncdatacompletedtime": (o, n) => { (o as unknown as Synapselinkprofileentitystate).initialsyncdatacompletedtime = n.getDateValue(); },
            "initialsyncmetadatacreatedtime": (o, n) => { (o as unknown as Synapselinkprofileentitystate).initialsyncmetadatacreatedtime = n.getDateValue(); },
            "initialsyncprocesscompletedtime": (o, n) => { (o as unknown as Synapselinkprofileentitystate).initialsyncprocesscompletedtime = n.getDateValue(); },
            "initialsyncstate": (o, n) => { (o as unknown as Synapselinkprofileentitystate).initialsyncstate = n.getNumberValue(); },
            "lastsynceddatatime": (o, n) => { (o as unknown as Synapselinkprofileentitystate).lastsynceddatatime = n.getDateValue(); },
            "lastsynceddataversion": (o, n) => { (o as unknown as Synapselinkprofileentitystate).lastsynceddataversion = n.getStringValue(); },
            "lastsyncedmetadatatime": (o, n) => { (o as unknown as Synapselinkprofileentitystate).lastsyncedmetadatatime = n.getDateValue(); },
            "lastsyncedmetadataversion": (o, n) => { (o as unknown as Synapselinkprofileentitystate).lastsyncedmetadataversion = n.getStringValue(); },
            "metadatastate": (o, n) => { (o as unknown as Synapselinkprofileentitystate).metadatastate = n.getNumberValue(); },
            "modifiedby": (o, n) => { (o as unknown as Synapselinkprofileentitystate).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Synapselinkprofileentitystate).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Synapselinkprofileentitystate).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "name": (o, n) => { (o as unknown as Synapselinkprofileentitystate).name = n.getStringValue(); },
            "organizationid": (o, n) => { (o as unknown as Synapselinkprofileentitystate).organizationid = n.getObjectValue<Organization>(createOrganizationFromDiscriminatorValue); },
            "overriddencreatedon": (o, n) => { (o as unknown as Synapselinkprofileentitystate).overriddencreatedon = n.getDateValue(); },
            "profile": (o, n) => { (o as unknown as Synapselinkprofileentitystate).profile = n.getObjectValue<Synapselinkprofile>(createSynapselinkprofileFromDiscriminatorValue); },
            "profileentity": (o, n) => { (o as unknown as Synapselinkprofileentitystate).profileentity = n.getObjectValue<Synapselinkprofileentity>(createSynapselinkprofileentityFromDiscriminatorValue); },
            "statecode": (o, n) => { (o as unknown as Synapselinkprofileentitystate).statecode = n.getNumberValue(); },
            "statuscode": (o, n) => { (o as unknown as Synapselinkprofileentitystate).statuscode = n.getNumberValue(); },
            "synapselinkprofileentitystate_AsyncOperations": (o, n) => { (o as unknown as Synapselinkprofileentitystate).synapselinkprofileentitystate_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "synapselinkprofileentitystate_BulkDeleteFailures": (o, n) => { (o as unknown as Synapselinkprofileentitystate).synapselinkprofileentitystate_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "synapselinkprofileentitystate_DuplicateBaseRecord": (o, n) => { (o as unknown as Synapselinkprofileentitystate).synapselinkprofileentitystate_DuplicateBaseRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "synapselinkprofileentitystate_DuplicateMatchingRecord": (o, n) => { (o as unknown as Synapselinkprofileentitystate).synapselinkprofileentitystate_DuplicateMatchingRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "synapselinkprofileentitystate_MailboxTrackingFolders": (o, n) => { (o as unknown as Synapselinkprofileentitystate).synapselinkprofileentitystate_MailboxTrackingFolders = n.getCollectionOfObjectValues<Mailboxtrackingfolder>(createMailboxtrackingfolderFromDiscriminatorValue); },
            "synapselinkprofileentitystate_PrincipalObjectAttributeAccesses": (o, n) => { (o as unknown as Synapselinkprofileentitystate).synapselinkprofileentitystate_PrincipalObjectAttributeAccesses = n.getCollectionOfObjectValues<Principalobjectattributeaccess>(createPrincipalobjectattributeaccessFromDiscriminatorValue); },
            "synapselinkprofileentitystate_ProcessSession": (o, n) => { (o as unknown as Synapselinkprofileentitystate).synapselinkprofileentitystate_ProcessSession = n.getCollectionOfObjectValues<Processsession>(createProcesssessionFromDiscriminatorValue); },
            "synapselinkprofileentitystate_SyncErrors": (o, n) => { (o as unknown as Synapselinkprofileentitystate).synapselinkprofileentitystate_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "synapselinkprofileentitystateid": (o, n) => { (o as unknown as Synapselinkprofileentitystate).synapselinkprofileentitystateid = n.getStringValue(); },
            "synapsetablecreationstate": (o, n) => { (o as unknown as Synapselinkprofileentitystate).synapsetablecreationstate = n.getNumberValue(); },
            "syncstate": (o, n) => { (o as unknown as Synapselinkprofileentitystate).syncstate = n.getNumberValue(); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Synapselinkprofileentitystate).timezoneruleversionnumber = n.getNumberValue(); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Synapselinkprofileentitystate).utcconversiontimezonecode = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as Synapselinkprofileentitystate).versionnumber = n.getNumberValue(); },
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
     * Gets the initialsyncdatacompletedtime property value. 
     * @returns a Date
     */
    public get initialsyncdatacompletedtime() {
        return this._initialsyncdatacompletedtime;
    };
    /**
     * Sets the initialsyncdatacompletedtime property value. 
     * @param value Value to set for the initialsyncdatacompletedtime property.
     */
    public set initialsyncdatacompletedtime(value: Date | undefined) {
        this._initialsyncdatacompletedtime = value;
    };
    /**
     * Gets the initialsyncmetadatacreatedtime property value. 
     * @returns a Date
     */
    public get initialsyncmetadatacreatedtime() {
        return this._initialsyncmetadatacreatedtime;
    };
    /**
     * Sets the initialsyncmetadatacreatedtime property value. 
     * @param value Value to set for the initialsyncmetadatacreatedtime property.
     */
    public set initialsyncmetadatacreatedtime(value: Date | undefined) {
        this._initialsyncmetadatacreatedtime = value;
    };
    /**
     * Gets the initialsyncprocesscompletedtime property value. 
     * @returns a Date
     */
    public get initialsyncprocesscompletedtime() {
        return this._initialsyncprocesscompletedtime;
    };
    /**
     * Sets the initialsyncprocesscompletedtime property value. 
     * @param value Value to set for the initialsyncprocesscompletedtime property.
     */
    public set initialsyncprocesscompletedtime(value: Date | undefined) {
        this._initialsyncprocesscompletedtime = value;
    };
    /**
     * Gets the initialsyncstate property value. 
     * @returns a integer
     */
    public get initialsyncstate() {
        return this._initialsyncstate;
    };
    /**
     * Sets the initialsyncstate property value. 
     * @param value Value to set for the initialsyncstate property.
     */
    public set initialsyncstate(value: number | undefined) {
        this._initialsyncstate = value;
    };
    /**
     * Gets the lastsynceddatatime property value. 
     * @returns a Date
     */
    public get lastsynceddatatime() {
        return this._lastsynceddatatime;
    };
    /**
     * Sets the lastsynceddatatime property value. 
     * @param value Value to set for the lastsynceddatatime property.
     */
    public set lastsynceddatatime(value: Date | undefined) {
        this._lastsynceddatatime = value;
    };
    /**
     * Gets the lastsynceddataversion property value. 
     * @returns a string
     */
    public get lastsynceddataversion() {
        return this._lastsynceddataversion;
    };
    /**
     * Sets the lastsynceddataversion property value. 
     * @param value Value to set for the lastsynceddataversion property.
     */
    public set lastsynceddataversion(value: string | undefined) {
        this._lastsynceddataversion = value;
    };
    /**
     * Gets the lastsyncedmetadatatime property value. 
     * @returns a Date
     */
    public get lastsyncedmetadatatime() {
        return this._lastsyncedmetadatatime;
    };
    /**
     * Sets the lastsyncedmetadatatime property value. 
     * @param value Value to set for the lastsyncedmetadatatime property.
     */
    public set lastsyncedmetadatatime(value: Date | undefined) {
        this._lastsyncedmetadatatime = value;
    };
    /**
     * Gets the lastsyncedmetadataversion property value. 
     * @returns a string
     */
    public get lastsyncedmetadataversion() {
        return this._lastsyncedmetadataversion;
    };
    /**
     * Sets the lastsyncedmetadataversion property value. 
     * @param value Value to set for the lastsyncedmetadataversion property.
     */
    public set lastsyncedmetadataversion(value: string | undefined) {
        this._lastsyncedmetadataversion = value;
    };
    /**
     * Gets the metadatastate property value. 
     * @returns a integer
     */
    public get metadatastate() {
        return this._metadatastate;
    };
    /**
     * Sets the metadatastate property value. 
     * @param value Value to set for the metadatastate property.
     */
    public set metadatastate(value: number | undefined) {
        this._metadatastate = value;
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
     * Gets the profileentity property value. 
     * @returns a synapselinkprofileentity
     */
    public get profileentity() {
        return this._profileentity;
    };
    /**
     * Sets the profileentity property value. 
     * @param value Value to set for the profileentity property.
     */
    public set profileentity(value: Synapselinkprofileentity | undefined) {
        this._profileentity = value;
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
        writer.writeStringValue("_profileentity_value", this._profileentity_value);
        writer.writeObjectValue<Systemuser>("createdby", this.createdby);
        writer.writeDateValue("createdon", this.createdon);
        writer.writeObjectValue<Systemuser>("createdonbehalfby", this.createdonbehalfby);
        writer.writeStringValue("entityname", this.entityname);
        writer.writeNumberValue("entitytype", this.entitytype);
        writer.writeNumberValue("importsequencenumber", this.importsequencenumber);
        writer.writeDateValue("initialsyncdatacompletedtime", this.initialsyncdatacompletedtime);
        writer.writeDateValue("initialsyncmetadatacreatedtime", this.initialsyncmetadatacreatedtime);
        writer.writeDateValue("initialsyncprocesscompletedtime", this.initialsyncprocesscompletedtime);
        writer.writeNumberValue("initialsyncstate", this.initialsyncstate);
        writer.writeDateValue("lastsynceddatatime", this.lastsynceddatatime);
        writer.writeStringValue("lastsynceddataversion", this.lastsynceddataversion);
        writer.writeDateValue("lastsyncedmetadatatime", this.lastsyncedmetadatatime);
        writer.writeStringValue("lastsyncedmetadataversion", this.lastsyncedmetadataversion);
        writer.writeNumberValue("metadatastate", this.metadatastate);
        writer.writeObjectValue<Systemuser>("modifiedby", this.modifiedby);
        writer.writeDateValue("modifiedon", this.modifiedon);
        writer.writeObjectValue<Systemuser>("modifiedonbehalfby", this.modifiedonbehalfby);
        writer.writeStringValue("name", this.name);
        writer.writeObjectValue<Organization>("organizationid", this.organizationid);
        writer.writeDateValue("overriddencreatedon", this.overriddencreatedon);
        writer.writeObjectValue<Synapselinkprofile>("profile", this.profile);
        writer.writeObjectValue<Synapselinkprofileentity>("profileentity", this.profileentity);
        writer.writeNumberValue("statecode", this.statecode);
        writer.writeNumberValue("statuscode", this.statuscode);
        writer.writeCollectionOfObjectValues<Asyncoperation>("synapselinkprofileentitystate_AsyncOperations", this.synapselinkprofileentitystate_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("synapselinkprofileentitystate_BulkDeleteFailures", this.synapselinkprofileentitystate_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("synapselinkprofileentitystate_DuplicateBaseRecord", this.synapselinkprofileentitystate_DuplicateBaseRecord);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("synapselinkprofileentitystate_DuplicateMatchingRecord", this.synapselinkprofileentitystate_DuplicateMatchingRecord);
        writer.writeCollectionOfObjectValues<Mailboxtrackingfolder>("synapselinkprofileentitystate_MailboxTrackingFolders", this.synapselinkprofileentitystate_MailboxTrackingFolders);
        writer.writeCollectionOfObjectValues<Principalobjectattributeaccess>("synapselinkprofileentitystate_PrincipalObjectAttributeAccesses", this.synapselinkprofileentitystate_PrincipalObjectAttributeAccesses);
        writer.writeCollectionOfObjectValues<Processsession>("synapselinkprofileentitystate_ProcessSession", this.synapselinkprofileentitystate_ProcessSession);
        writer.writeCollectionOfObjectValues<Syncerror>("synapselinkprofileentitystate_SyncErrors", this.synapselinkprofileentitystate_SyncErrors);
        writer.writeStringValue("synapselinkprofileentitystateid", this.synapselinkprofileentitystateid);
        writer.writeNumberValue("synapsetablecreationstate", this.synapsetablecreationstate);
        writer.writeNumberValue("syncstate", this.syncstate);
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
     * Gets the synapselinkprofileentitystate_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get synapselinkprofileentitystate_AsyncOperations() {
        return this._synapselinkprofileentitystate_AsyncOperations;
    };
    /**
     * Sets the synapselinkprofileentitystate_AsyncOperations property value. 
     * @param value Value to set for the synapselinkprofileentitystate_AsyncOperations property.
     */
    public set synapselinkprofileentitystate_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._synapselinkprofileentitystate_AsyncOperations = value;
    };
    /**
     * Gets the synapselinkprofileentitystate_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get synapselinkprofileentitystate_BulkDeleteFailures() {
        return this._synapselinkprofileentitystate_BulkDeleteFailures;
    };
    /**
     * Sets the synapselinkprofileentitystate_BulkDeleteFailures property value. 
     * @param value Value to set for the synapselinkprofileentitystate_BulkDeleteFailures property.
     */
    public set synapselinkprofileentitystate_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._synapselinkprofileentitystate_BulkDeleteFailures = value;
    };
    /**
     * Gets the synapselinkprofileentitystate_DuplicateBaseRecord property value. 
     * @returns a duplicaterecord
     */
    public get synapselinkprofileentitystate_DuplicateBaseRecord() {
        return this._synapselinkprofileentitystate_DuplicateBaseRecord;
    };
    /**
     * Sets the synapselinkprofileentitystate_DuplicateBaseRecord property value. 
     * @param value Value to set for the synapselinkprofileentitystate_DuplicateBaseRecord property.
     */
    public set synapselinkprofileentitystate_DuplicateBaseRecord(value: Duplicaterecord[] | undefined) {
        this._synapselinkprofileentitystate_DuplicateBaseRecord = value;
    };
    /**
     * Gets the synapselinkprofileentitystate_DuplicateMatchingRecord property value. 
     * @returns a duplicaterecord
     */
    public get synapselinkprofileentitystate_DuplicateMatchingRecord() {
        return this._synapselinkprofileentitystate_DuplicateMatchingRecord;
    };
    /**
     * Sets the synapselinkprofileentitystate_DuplicateMatchingRecord property value. 
     * @param value Value to set for the synapselinkprofileentitystate_DuplicateMatchingRecord property.
     */
    public set synapselinkprofileentitystate_DuplicateMatchingRecord(value: Duplicaterecord[] | undefined) {
        this._synapselinkprofileentitystate_DuplicateMatchingRecord = value;
    };
    /**
     * Gets the synapselinkprofileentitystate_MailboxTrackingFolders property value. 
     * @returns a mailboxtrackingfolder
     */
    public get synapselinkprofileentitystate_MailboxTrackingFolders() {
        return this._synapselinkprofileentitystate_MailboxTrackingFolders;
    };
    /**
     * Sets the synapselinkprofileentitystate_MailboxTrackingFolders property value. 
     * @param value Value to set for the synapselinkprofileentitystate_MailboxTrackingFolders property.
     */
    public set synapselinkprofileentitystate_MailboxTrackingFolders(value: Mailboxtrackingfolder[] | undefined) {
        this._synapselinkprofileentitystate_MailboxTrackingFolders = value;
    };
    /**
     * Gets the synapselinkprofileentitystate_PrincipalObjectAttributeAccesses property value. 
     * @returns a principalobjectattributeaccess
     */
    public get synapselinkprofileentitystate_PrincipalObjectAttributeAccesses() {
        return this._synapselinkprofileentitystate_PrincipalObjectAttributeAccesses;
    };
    /**
     * Sets the synapselinkprofileentitystate_PrincipalObjectAttributeAccesses property value. 
     * @param value Value to set for the synapselinkprofileentitystate_PrincipalObjectAttributeAccesses property.
     */
    public set synapselinkprofileentitystate_PrincipalObjectAttributeAccesses(value: Principalobjectattributeaccess[] | undefined) {
        this._synapselinkprofileentitystate_PrincipalObjectAttributeAccesses = value;
    };
    /**
     * Gets the synapselinkprofileentitystate_ProcessSession property value. 
     * @returns a processsession
     */
    public get synapselinkprofileentitystate_ProcessSession() {
        return this._synapselinkprofileentitystate_ProcessSession;
    };
    /**
     * Sets the synapselinkprofileentitystate_ProcessSession property value. 
     * @param value Value to set for the synapselinkprofileentitystate_ProcessSession property.
     */
    public set synapselinkprofileentitystate_ProcessSession(value: Processsession[] | undefined) {
        this._synapselinkprofileentitystate_ProcessSession = value;
    };
    /**
     * Gets the synapselinkprofileentitystate_SyncErrors property value. 
     * @returns a syncerror
     */
    public get synapselinkprofileentitystate_SyncErrors() {
        return this._synapselinkprofileentitystate_SyncErrors;
    };
    /**
     * Sets the synapselinkprofileentitystate_SyncErrors property value. 
     * @param value Value to set for the synapselinkprofileentitystate_SyncErrors property.
     */
    public set synapselinkprofileentitystate_SyncErrors(value: Syncerror[] | undefined) {
        this._synapselinkprofileentitystate_SyncErrors = value;
    };
    /**
     * Gets the synapselinkprofileentitystateid property value. 
     * @returns a string
     */
    public get synapselinkprofileentitystateid() {
        return this._synapselinkprofileentitystateid;
    };
    /**
     * Sets the synapselinkprofileentitystateid property value. 
     * @param value Value to set for the synapselinkprofileentitystateid property.
     */
    public set synapselinkprofileentitystateid(value: string | undefined) {
        this._synapselinkprofileentitystateid = value;
    };
    /**
     * Gets the synapsetablecreationstate property value. 
     * @returns a integer
     */
    public get synapsetablecreationstate() {
        return this._synapsetablecreationstate;
    };
    /**
     * Sets the synapsetablecreationstate property value. 
     * @param value Value to set for the synapsetablecreationstate property.
     */
    public set synapsetablecreationstate(value: number | undefined) {
        this._synapsetablecreationstate = value;
    };
    /**
     * Gets the syncstate property value. 
     * @returns a integer
     */
    public get syncstate() {
        return this._syncstate;
    };
    /**
     * Sets the syncstate property value. 
     * @param value Value to set for the syncstate property.
     */
    public set syncstate(value: number | undefined) {
        this._syncstate = value;
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
