import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createBooleanManagedPropertyFromDiscriminatorValue} from './createBooleanManagedPropertyFromDiscriminatorValue';
import {createBulkdeletefailureFromDiscriminatorValue} from './createBulkdeletefailureFromDiscriminatorValue';
import {createDuplicaterecordFromDiscriminatorValue} from './createDuplicaterecordFromDiscriminatorValue';
import {createMailboxtrackingfolderFromDiscriminatorValue} from './createMailboxtrackingfolderFromDiscriminatorValue';
import {createOrganizationFromDiscriminatorValue} from './createOrganizationFromDiscriminatorValue';
import {createPrincipalobjectattributeaccessFromDiscriminatorValue} from './createPrincipalobjectattributeaccessFromDiscriminatorValue';
import {createProcesssessionFromDiscriminatorValue} from './createProcesssessionFromDiscriminatorValue';
import {createSynapselinkprofileentitystateFromDiscriminatorValue} from './createSynapselinkprofileentitystateFromDiscriminatorValue';
import {createSynapselinkprofileFromDiscriminatorValue} from './createSynapselinkprofileFromDiscriminatorValue';
import {createSyncerrorFromDiscriminatorValue} from './createSyncerrorFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {Asyncoperation, BooleanManagedProperty, Bulkdeletefailure, Crmbaseentity, Duplicaterecord, Mailboxtrackingfolder, Organization, Principalobjectattributeaccess, Processsession, Synapselinkprofile, Synapselinkprofileentitystate, Syncerror, Systemuser} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Synapselinkprofileentity extends Crmbaseentity implements Parsable {
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private __organizationid_value?: string | undefined;
    private __profile_value?: string | undefined;
    private _appendonlymode?: boolean | undefined;
    private _componentidunique?: string | undefined;
    private _componentstate?: number | undefined;
    private _createdby?: Systemuser | undefined;
    private _createdon?: Date | undefined;
    private _createdonbehalfby?: Systemuser | undefined;
    private _enabled?: boolean | undefined;
    private _entityname?: string | undefined;
    private _entitystate?: Synapselinkprofileentitystate[] | undefined;
    private _entitytype?: number | undefined;
    private _extendedproperties?: string | undefined;
    private _generateparquet?: boolean | undefined;
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
    private _partitionstrategy?: number | undefined;
    private _profile?: Synapselinkprofile | undefined;
    private _recordcountperblock?: number | undefined;
    private _solutionid?: string | undefined;
    private _statecode?: number | undefined;
    private _statuscode?: number | undefined;
    private _synapselinkprofileentity_AsyncOperations?: Asyncoperation[] | undefined;
    private _synapselinkprofileentity_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _synapselinkprofileentity_DuplicateBaseRecord?: Duplicaterecord[] | undefined;
    private _synapselinkprofileentity_DuplicateMatchingRecord?: Duplicaterecord[] | undefined;
    private _synapselinkprofileentity_MailboxTrackingFolders?: Mailboxtrackingfolder[] | undefined;
    private _synapselinkprofileentity_PrincipalObjectAttributeAccesses?: Principalobjectattributeaccess[] | undefined;
    private _synapselinkprofileentity_ProcessSession?: Processsession[] | undefined;
    private _synapselinkprofileentity_SyncErrors?: Syncerror[] | undefined;
    private _synapselinkprofileentityid?: string | undefined;
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
     * Gets the appendonlymode property value. 
     * @returns a boolean
     */
    public get appendonlymode() {
        return this._appendonlymode;
    };
    /**
     * Sets the appendonlymode property value. 
     * @param value Value to set for the appendonlymode property.
     */
    public set appendonlymode(value: boolean | undefined) {
        this._appendonlymode = value;
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
     * Instantiates a new synapselinkprofileentity and sets the default values.
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
     * Gets the enabled property value. 
     * @returns a boolean
     */
    public get enabled() {
        return this._enabled;
    };
    /**
     * Sets the enabled property value. 
     * @param value Value to set for the enabled property.
     */
    public set enabled(value: boolean | undefined) {
        this._enabled = value;
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
     * Gets the entitystate property value. 
     * @returns a synapselinkprofileentitystate
     */
    public get entitystate() {
        return this._entitystate;
    };
    /**
     * Sets the entitystate property value. 
     * @param value Value to set for the entitystate property.
     */
    public set entitystate(value: Synapselinkprofileentitystate[] | undefined) {
        this._entitystate = value;
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
     * Gets the generateparquet property value. 
     * @returns a boolean
     */
    public get generateparquet() {
        return this._generateparquet;
    };
    /**
     * Sets the generateparquet property value. 
     * @param value Value to set for the generateparquet property.
     */
    public set generateparquet(value: boolean | undefined) {
        this._generateparquet = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Record<string, (item: T, node: ParseNode) => void> {
        return {...super.getFieldDeserializers<T>(),
            "_createdby_value": (o, n) => { (o as unknown as Synapselinkprofileentity)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Synapselinkprofileentity)._createdonbehalfby_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Synapselinkprofileentity)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Synapselinkprofileentity)._modifiedonbehalfby_value = n.getStringValue(); },
            "_organizationid_value": (o, n) => { (o as unknown as Synapselinkprofileentity)._organizationid_value = n.getStringValue(); },
            "_profile_value": (o, n) => { (o as unknown as Synapselinkprofileentity)._profile_value = n.getStringValue(); },
            "appendonlymode": (o, n) => { (o as unknown as Synapselinkprofileentity).appendonlymode = n.getBooleanValue(); },
            "componentidunique": (o, n) => { (o as unknown as Synapselinkprofileentity).componentidunique = n.getStringValue(); },
            "componentstate": (o, n) => { (o as unknown as Synapselinkprofileentity).componentstate = n.getNumberValue(); },
            "createdby": (o, n) => { (o as unknown as Synapselinkprofileentity).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Synapselinkprofileentity).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Synapselinkprofileentity).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "enabled": (o, n) => { (o as unknown as Synapselinkprofileentity).enabled = n.getBooleanValue(); },
            "entityname": (o, n) => { (o as unknown as Synapselinkprofileentity).entityname = n.getStringValue(); },
            "entitystate": (o, n) => { (o as unknown as Synapselinkprofileentity).entitystate = n.getCollectionOfObjectValues<Synapselinkprofileentitystate>(createSynapselinkprofileentitystateFromDiscriminatorValue); },
            "entitytype": (o, n) => { (o as unknown as Synapselinkprofileentity).entitytype = n.getNumberValue(); },
            "extendedproperties": (o, n) => { (o as unknown as Synapselinkprofileentity).extendedproperties = n.getStringValue(); },
            "generateparquet": (o, n) => { (o as unknown as Synapselinkprofileentity).generateparquet = n.getBooleanValue(); },
            "importsequencenumber": (o, n) => { (o as unknown as Synapselinkprofileentity).importsequencenumber = n.getNumberValue(); },
            "iscustomizable": (o, n) => { (o as unknown as Synapselinkprofileentity).iscustomizable = n.getObjectValue<BooleanManagedProperty>(createBooleanManagedPropertyFromDiscriminatorValue); },
            "ismanaged": (o, n) => { (o as unknown as Synapselinkprofileentity).ismanaged = n.getBooleanValue(); },
            "modifiedby": (o, n) => { (o as unknown as Synapselinkprofileentity).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Synapselinkprofileentity).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Synapselinkprofileentity).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "name": (o, n) => { (o as unknown as Synapselinkprofileentity).name = n.getStringValue(); },
            "organizationid": (o, n) => { (o as unknown as Synapselinkprofileentity).organizationid = n.getObjectValue<Organization>(createOrganizationFromDiscriminatorValue); },
            "overriddencreatedon": (o, n) => { (o as unknown as Synapselinkprofileentity).overriddencreatedon = n.getDateValue(); },
            "overwritetime": (o, n) => { (o as unknown as Synapselinkprofileentity).overwritetime = n.getDateValue(); },
            "partitionstrategy": (o, n) => { (o as unknown as Synapselinkprofileentity).partitionstrategy = n.getNumberValue(); },
            "profile": (o, n) => { (o as unknown as Synapselinkprofileentity).profile = n.getObjectValue<Synapselinkprofile>(createSynapselinkprofileFromDiscriminatorValue); },
            "recordcountperblock": (o, n) => { (o as unknown as Synapselinkprofileentity).recordcountperblock = n.getNumberValue(); },
            "solutionid": (o, n) => { (o as unknown as Synapselinkprofileentity).solutionid = n.getStringValue(); },
            "statecode": (o, n) => { (o as unknown as Synapselinkprofileentity).statecode = n.getNumberValue(); },
            "statuscode": (o, n) => { (o as unknown as Synapselinkprofileentity).statuscode = n.getNumberValue(); },
            "synapselinkprofileentity_AsyncOperations": (o, n) => { (o as unknown as Synapselinkprofileentity).synapselinkprofileentity_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "synapselinkprofileentity_BulkDeleteFailures": (o, n) => { (o as unknown as Synapselinkprofileentity).synapselinkprofileentity_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "synapselinkprofileentity_DuplicateBaseRecord": (o, n) => { (o as unknown as Synapselinkprofileentity).synapselinkprofileentity_DuplicateBaseRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "synapselinkprofileentity_DuplicateMatchingRecord": (o, n) => { (o as unknown as Synapselinkprofileentity).synapselinkprofileentity_DuplicateMatchingRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "synapselinkprofileentity_MailboxTrackingFolders": (o, n) => { (o as unknown as Synapselinkprofileentity).synapselinkprofileentity_MailboxTrackingFolders = n.getCollectionOfObjectValues<Mailboxtrackingfolder>(createMailboxtrackingfolderFromDiscriminatorValue); },
            "synapselinkprofileentity_PrincipalObjectAttributeAccesses": (o, n) => { (o as unknown as Synapselinkprofileentity).synapselinkprofileentity_PrincipalObjectAttributeAccesses = n.getCollectionOfObjectValues<Principalobjectattributeaccess>(createPrincipalobjectattributeaccessFromDiscriminatorValue); },
            "synapselinkprofileentity_ProcessSession": (o, n) => { (o as unknown as Synapselinkprofileentity).synapselinkprofileentity_ProcessSession = n.getCollectionOfObjectValues<Processsession>(createProcesssessionFromDiscriminatorValue); },
            "synapselinkprofileentity_SyncErrors": (o, n) => { (o as unknown as Synapselinkprofileentity).synapselinkprofileentity_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "synapselinkprofileentityid": (o, n) => { (o as unknown as Synapselinkprofileentity).synapselinkprofileentityid = n.getStringValue(); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Synapselinkprofileentity).timezoneruleversionnumber = n.getNumberValue(); },
            "uniquename": (o, n) => { (o as unknown as Synapselinkprofileentity).uniquename = n.getStringValue(); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Synapselinkprofileentity).utcconversiontimezonecode = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as Synapselinkprofileentity).versionnumber = n.getNumberValue(); },
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
     * Gets the partitionstrategy property value. 
     * @returns a integer
     */
    public get partitionstrategy() {
        return this._partitionstrategy;
    };
    /**
     * Sets the partitionstrategy property value. 
     * @param value Value to set for the partitionstrategy property.
     */
    public set partitionstrategy(value: number | undefined) {
        this._partitionstrategy = value;
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
     * Gets the recordcountperblock property value. 
     * @returns a integer
     */
    public get recordcountperblock() {
        return this._recordcountperblock;
    };
    /**
     * Sets the recordcountperblock property value. 
     * @param value Value to set for the recordcountperblock property.
     */
    public set recordcountperblock(value: number | undefined) {
        this._recordcountperblock = value;
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
        writer.writeBooleanValue("appendonlymode", this.appendonlymode);
        writer.writeStringValue("componentidunique", this.componentidunique);
        writer.writeNumberValue("componentstate", this.componentstate);
        writer.writeObjectValue<Systemuser>("createdby", this.createdby);
        writer.writeDateValue("createdon", this.createdon);
        writer.writeObjectValue<Systemuser>("createdonbehalfby", this.createdonbehalfby);
        writer.writeBooleanValue("enabled", this.enabled);
        writer.writeStringValue("entityname", this.entityname);
        writer.writeCollectionOfObjectValues<Synapselinkprofileentitystate>("entitystate", this.entitystate);
        writer.writeNumberValue("entitytype", this.entitytype);
        writer.writeStringValue("extendedproperties", this.extendedproperties);
        writer.writeBooleanValue("generateparquet", this.generateparquet);
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
        writer.writeNumberValue("partitionstrategy", this.partitionstrategy);
        writer.writeObjectValue<Synapselinkprofile>("profile", this.profile);
        writer.writeNumberValue("recordcountperblock", this.recordcountperblock);
        writer.writeStringValue("solutionid", this.solutionid);
        writer.writeNumberValue("statecode", this.statecode);
        writer.writeNumberValue("statuscode", this.statuscode);
        writer.writeCollectionOfObjectValues<Asyncoperation>("synapselinkprofileentity_AsyncOperations", this.synapselinkprofileentity_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("synapselinkprofileentity_BulkDeleteFailures", this.synapselinkprofileentity_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("synapselinkprofileentity_DuplicateBaseRecord", this.synapselinkprofileentity_DuplicateBaseRecord);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("synapselinkprofileentity_DuplicateMatchingRecord", this.synapselinkprofileentity_DuplicateMatchingRecord);
        writer.writeCollectionOfObjectValues<Mailboxtrackingfolder>("synapselinkprofileentity_MailboxTrackingFolders", this.synapselinkprofileentity_MailboxTrackingFolders);
        writer.writeCollectionOfObjectValues<Principalobjectattributeaccess>("synapselinkprofileentity_PrincipalObjectAttributeAccesses", this.synapselinkprofileentity_PrincipalObjectAttributeAccesses);
        writer.writeCollectionOfObjectValues<Processsession>("synapselinkprofileentity_ProcessSession", this.synapselinkprofileentity_ProcessSession);
        writer.writeCollectionOfObjectValues<Syncerror>("synapselinkprofileentity_SyncErrors", this.synapselinkprofileentity_SyncErrors);
        writer.writeStringValue("synapselinkprofileentityid", this.synapselinkprofileentityid);
        writer.writeNumberValue("timezoneruleversionnumber", this.timezoneruleversionnumber);
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
     * Gets the synapselinkprofileentity_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get synapselinkprofileentity_AsyncOperations() {
        return this._synapselinkprofileentity_AsyncOperations;
    };
    /**
     * Sets the synapselinkprofileentity_AsyncOperations property value. 
     * @param value Value to set for the synapselinkprofileentity_AsyncOperations property.
     */
    public set synapselinkprofileentity_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._synapselinkprofileentity_AsyncOperations = value;
    };
    /**
     * Gets the synapselinkprofileentity_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get synapselinkprofileentity_BulkDeleteFailures() {
        return this._synapselinkprofileentity_BulkDeleteFailures;
    };
    /**
     * Sets the synapselinkprofileentity_BulkDeleteFailures property value. 
     * @param value Value to set for the synapselinkprofileentity_BulkDeleteFailures property.
     */
    public set synapselinkprofileentity_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._synapselinkprofileentity_BulkDeleteFailures = value;
    };
    /**
     * Gets the synapselinkprofileentity_DuplicateBaseRecord property value. 
     * @returns a duplicaterecord
     */
    public get synapselinkprofileentity_DuplicateBaseRecord() {
        return this._synapselinkprofileentity_DuplicateBaseRecord;
    };
    /**
     * Sets the synapselinkprofileentity_DuplicateBaseRecord property value. 
     * @param value Value to set for the synapselinkprofileentity_DuplicateBaseRecord property.
     */
    public set synapselinkprofileentity_DuplicateBaseRecord(value: Duplicaterecord[] | undefined) {
        this._synapselinkprofileentity_DuplicateBaseRecord = value;
    };
    /**
     * Gets the synapselinkprofileentity_DuplicateMatchingRecord property value. 
     * @returns a duplicaterecord
     */
    public get synapselinkprofileentity_DuplicateMatchingRecord() {
        return this._synapselinkprofileentity_DuplicateMatchingRecord;
    };
    /**
     * Sets the synapselinkprofileentity_DuplicateMatchingRecord property value. 
     * @param value Value to set for the synapselinkprofileentity_DuplicateMatchingRecord property.
     */
    public set synapselinkprofileentity_DuplicateMatchingRecord(value: Duplicaterecord[] | undefined) {
        this._synapselinkprofileentity_DuplicateMatchingRecord = value;
    };
    /**
     * Gets the synapselinkprofileentity_MailboxTrackingFolders property value. 
     * @returns a mailboxtrackingfolder
     */
    public get synapselinkprofileentity_MailboxTrackingFolders() {
        return this._synapselinkprofileentity_MailboxTrackingFolders;
    };
    /**
     * Sets the synapselinkprofileentity_MailboxTrackingFolders property value. 
     * @param value Value to set for the synapselinkprofileentity_MailboxTrackingFolders property.
     */
    public set synapselinkprofileentity_MailboxTrackingFolders(value: Mailboxtrackingfolder[] | undefined) {
        this._synapselinkprofileentity_MailboxTrackingFolders = value;
    };
    /**
     * Gets the synapselinkprofileentity_PrincipalObjectAttributeAccesses property value. 
     * @returns a principalobjectattributeaccess
     */
    public get synapselinkprofileentity_PrincipalObjectAttributeAccesses() {
        return this._synapselinkprofileentity_PrincipalObjectAttributeAccesses;
    };
    /**
     * Sets the synapselinkprofileentity_PrincipalObjectAttributeAccesses property value. 
     * @param value Value to set for the synapselinkprofileentity_PrincipalObjectAttributeAccesses property.
     */
    public set synapselinkprofileentity_PrincipalObjectAttributeAccesses(value: Principalobjectattributeaccess[] | undefined) {
        this._synapselinkprofileentity_PrincipalObjectAttributeAccesses = value;
    };
    /**
     * Gets the synapselinkprofileentity_ProcessSession property value. 
     * @returns a processsession
     */
    public get synapselinkprofileentity_ProcessSession() {
        return this._synapselinkprofileentity_ProcessSession;
    };
    /**
     * Sets the synapselinkprofileentity_ProcessSession property value. 
     * @param value Value to set for the synapselinkprofileentity_ProcessSession property.
     */
    public set synapselinkprofileentity_ProcessSession(value: Processsession[] | undefined) {
        this._synapselinkprofileentity_ProcessSession = value;
    };
    /**
     * Gets the synapselinkprofileentity_SyncErrors property value. 
     * @returns a syncerror
     */
    public get synapselinkprofileentity_SyncErrors() {
        return this._synapselinkprofileentity_SyncErrors;
    };
    /**
     * Sets the synapselinkprofileentity_SyncErrors property value. 
     * @param value Value to set for the synapselinkprofileentity_SyncErrors property.
     */
    public set synapselinkprofileentity_SyncErrors(value: Syncerror[] | undefined) {
        this._synapselinkprofileentity_SyncErrors = value;
    };
    /**
     * Gets the synapselinkprofileentityid property value. 
     * @returns a string
     */
    public get synapselinkprofileentityid() {
        return this._synapselinkprofileentityid;
    };
    /**
     * Sets the synapselinkprofileentityid property value. 
     * @param value Value to set for the synapselinkprofileentityid property.
     */
    public set synapselinkprofileentityid(value: string | undefined) {
        this._synapselinkprofileentityid = value;
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
