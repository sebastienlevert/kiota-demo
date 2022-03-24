import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createBooleanManagedPropertyFromDiscriminatorValue} from './createBooleanManagedPropertyFromDiscriminatorValue';
import {createBulkdeletefailureFromDiscriminatorValue} from './createBulkdeletefailureFromDiscriminatorValue';
import {createBusinessunitFromDiscriminatorValue} from './createBusinessunitFromDiscriminatorValue';
import {createDuplicaterecordFromDiscriminatorValue} from './createDuplicaterecordFromDiscriminatorValue';
import {createEntityFromDiscriminatorValue} from './createEntityFromDiscriminatorValue';
import {createMailboxtrackingfolderFromDiscriminatorValue} from './createMailboxtrackingfolderFromDiscriminatorValue';
import {createPrincipalFromDiscriminatorValue} from './createPrincipalFromDiscriminatorValue';
import {createPrincipalobjectattributeaccessFromDiscriminatorValue} from './createPrincipalobjectattributeaccessFromDiscriminatorValue';
import {createProcesssessionFromDiscriminatorValue} from './createProcesssessionFromDiscriminatorValue';
import {createSyncerrorFromDiscriminatorValue} from './createSyncerrorFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {createTeamFromDiscriminatorValue} from './createTeamFromDiscriminatorValue';
import {Asyncoperation, BooleanManagedProperty, Bulkdeletefailure, Businessunit, Crmbaseentity, Duplicaterecord, Entity, Mailboxtrackingfolder, Principal, Principalobjectattributeaccess, Processsession, Syncerror, Systemuser, Team} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Solutioncomponentbatchconfiguration extends Crmbaseentity implements Parsable {
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private __ownerid_value?: string | undefined;
    private __owningbusinessunit_value?: string | undefined;
    private __owningteam_value?: string | undefined;
    private __owninguser_value?: string | undefined;
    private __primaryentity_value?: string | undefined;
    private __relatedentity_value?: string | undefined;
    private _componentidunique?: string | undefined;
    private _componentstate?: number | undefined;
    private _createdby?: Systemuser | undefined;
    private _createdon?: Date | undefined;
    private _createdonbehalfby?: Systemuser | undefined;
    private _importsequencenumber?: number | undefined;
    private _iscustomizable?: BooleanManagedProperty | undefined;
    private _ismanaged?: boolean | undefined;
    private _modifiedby?: Systemuser | undefined;
    private _modifiedon?: Date | undefined;
    private _modifiedonbehalfby?: Systemuser | undefined;
    private _name?: string | undefined;
    private _operation?: number | undefined;
    private _overriddencreatedon?: Date | undefined;
    private _overwritetime?: Date | undefined;
    private _ownerid?: Principal | undefined;
    private _owningbusinessunit?: Businessunit | undefined;
    private _owningteam?: Team | undefined;
    private _owninguser?: Systemuser | undefined;
    private _primaryEntity?: Entity | undefined;
    private _relatedEntity?: Entity | undefined;
    private _solutioncomponentbatchconfiguration_AsyncOperations?: Asyncoperation[] | undefined;
    private _solutioncomponentbatchconfiguration_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _solutioncomponentbatchconfiguration_DuplicateBaseRecord?: Duplicaterecord[] | undefined;
    private _solutioncomponentbatchconfiguration_DuplicateMatchingRecord?: Duplicaterecord[] | undefined;
    private _solutioncomponentbatchconfiguration_MailboxTrackingFolders?: Mailboxtrackingfolder[] | undefined;
    private _solutioncomponentbatchconfiguration_PrincipalObjectAttributeAccesses?: Principalobjectattributeaccess[] | undefined;
    private _solutioncomponentbatchconfiguration_ProcessSession?: Processsession[] | undefined;
    private _solutioncomponentbatchconfiguration_SyncErrors?: Syncerror[] | undefined;
    private _solutioncomponentbatchconfigurationid?: string | undefined;
    private _solutionid?: string | undefined;
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
     * Gets the _ownerid_value property value. 
     * @returns a string
     */
    public get _ownerid_value() {
        return this.__ownerid_value;
    };
    /**
     * Sets the _ownerid_value property value. 
     * @param value Value to set for the _ownerid_value property.
     */
    public set _ownerid_value(value: string | undefined) {
        this.__ownerid_value = value;
    };
    /**
     * Gets the _owningbusinessunit_value property value. 
     * @returns a string
     */
    public get _owningbusinessunit_value() {
        return this.__owningbusinessunit_value;
    };
    /**
     * Sets the _owningbusinessunit_value property value. 
     * @param value Value to set for the _owningbusinessunit_value property.
     */
    public set _owningbusinessunit_value(value: string | undefined) {
        this.__owningbusinessunit_value = value;
    };
    /**
     * Gets the _owningteam_value property value. 
     * @returns a string
     */
    public get _owningteam_value() {
        return this.__owningteam_value;
    };
    /**
     * Sets the _owningteam_value property value. 
     * @param value Value to set for the _owningteam_value property.
     */
    public set _owningteam_value(value: string | undefined) {
        this.__owningteam_value = value;
    };
    /**
     * Gets the _owninguser_value property value. 
     * @returns a string
     */
    public get _owninguser_value() {
        return this.__owninguser_value;
    };
    /**
     * Sets the _owninguser_value property value. 
     * @param value Value to set for the _owninguser_value property.
     */
    public set _owninguser_value(value: string | undefined) {
        this.__owninguser_value = value;
    };
    /**
     * Gets the _primaryentity_value property value. 
     * @returns a string
     */
    public get _primaryentity_value() {
        return this.__primaryentity_value;
    };
    /**
     * Sets the _primaryentity_value property value. 
     * @param value Value to set for the _primaryentity_value property.
     */
    public set _primaryentity_value(value: string | undefined) {
        this.__primaryentity_value = value;
    };
    /**
     * Gets the _relatedentity_value property value. 
     * @returns a string
     */
    public get _relatedentity_value() {
        return this.__relatedentity_value;
    };
    /**
     * Sets the _relatedentity_value property value. 
     * @param value Value to set for the _relatedentity_value property.
     */
    public set _relatedentity_value(value: string | undefined) {
        this.__relatedentity_value = value;
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
     * Instantiates a new solutioncomponentbatchconfiguration and sets the default values.
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
            "_createdby_value": (o, n) => { (o as unknown as Solutioncomponentbatchconfiguration)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Solutioncomponentbatchconfiguration)._createdonbehalfby_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Solutioncomponentbatchconfiguration)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Solutioncomponentbatchconfiguration)._modifiedonbehalfby_value = n.getStringValue(); },
            "_ownerid_value": (o, n) => { (o as unknown as Solutioncomponentbatchconfiguration)._ownerid_value = n.getStringValue(); },
            "_owningbusinessunit_value": (o, n) => { (o as unknown as Solutioncomponentbatchconfiguration)._owningbusinessunit_value = n.getStringValue(); },
            "_owningteam_value": (o, n) => { (o as unknown as Solutioncomponentbatchconfiguration)._owningteam_value = n.getStringValue(); },
            "_owninguser_value": (o, n) => { (o as unknown as Solutioncomponentbatchconfiguration)._owninguser_value = n.getStringValue(); },
            "_primaryentity_value": (o, n) => { (o as unknown as Solutioncomponentbatchconfiguration)._primaryentity_value = n.getStringValue(); },
            "_relatedentity_value": (o, n) => { (o as unknown as Solutioncomponentbatchconfiguration)._relatedentity_value = n.getStringValue(); },
            "componentidunique": (o, n) => { (o as unknown as Solutioncomponentbatchconfiguration).componentidunique = n.getStringValue(); },
            "componentstate": (o, n) => { (o as unknown as Solutioncomponentbatchconfiguration).componentstate = n.getNumberValue(); },
            "createdby": (o, n) => { (o as unknown as Solutioncomponentbatchconfiguration).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Solutioncomponentbatchconfiguration).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Solutioncomponentbatchconfiguration).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "importsequencenumber": (o, n) => { (o as unknown as Solutioncomponentbatchconfiguration).importsequencenumber = n.getNumberValue(); },
            "iscustomizable": (o, n) => { (o as unknown as Solutioncomponentbatchconfiguration).iscustomizable = n.getObjectValue<BooleanManagedProperty>(createBooleanManagedPropertyFromDiscriminatorValue); },
            "ismanaged": (o, n) => { (o as unknown as Solutioncomponentbatchconfiguration).ismanaged = n.getBooleanValue(); },
            "modifiedby": (o, n) => { (o as unknown as Solutioncomponentbatchconfiguration).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Solutioncomponentbatchconfiguration).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Solutioncomponentbatchconfiguration).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "name": (o, n) => { (o as unknown as Solutioncomponentbatchconfiguration).name = n.getStringValue(); },
            "operation": (o, n) => { (o as unknown as Solutioncomponentbatchconfiguration).operation = n.getNumberValue(); },
            "overriddencreatedon": (o, n) => { (o as unknown as Solutioncomponentbatchconfiguration).overriddencreatedon = n.getDateValue(); },
            "overwritetime": (o, n) => { (o as unknown as Solutioncomponentbatchconfiguration).overwritetime = n.getDateValue(); },
            "ownerid": (o, n) => { (o as unknown as Solutioncomponentbatchconfiguration).ownerid = n.getObjectValue<Principal>(createPrincipalFromDiscriminatorValue); },
            "owningbusinessunit": (o, n) => { (o as unknown as Solutioncomponentbatchconfiguration).owningbusinessunit = n.getObjectValue<Businessunit>(createBusinessunitFromDiscriminatorValue); },
            "owningteam": (o, n) => { (o as unknown as Solutioncomponentbatchconfiguration).owningteam = n.getObjectValue<Team>(createTeamFromDiscriminatorValue); },
            "owninguser": (o, n) => { (o as unknown as Solutioncomponentbatchconfiguration).owninguser = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "primaryEntity": (o, n) => { (o as unknown as Solutioncomponentbatchconfiguration).primaryEntity = n.getObjectValue<Entity>(createEntityFromDiscriminatorValue); },
            "relatedEntity": (o, n) => { (o as unknown as Solutioncomponentbatchconfiguration).relatedEntity = n.getObjectValue<Entity>(createEntityFromDiscriminatorValue); },
            "solutioncomponentbatchconfiguration_AsyncOperations": (o, n) => { (o as unknown as Solutioncomponentbatchconfiguration).solutioncomponentbatchconfiguration_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "solutioncomponentbatchconfiguration_BulkDeleteFailures": (o, n) => { (o as unknown as Solutioncomponentbatchconfiguration).solutioncomponentbatchconfiguration_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "solutioncomponentbatchconfiguration_DuplicateBaseRecord": (o, n) => { (o as unknown as Solutioncomponentbatchconfiguration).solutioncomponentbatchconfiguration_DuplicateBaseRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "solutioncomponentbatchconfiguration_DuplicateMatchingRecord": (o, n) => { (o as unknown as Solutioncomponentbatchconfiguration).solutioncomponentbatchconfiguration_DuplicateMatchingRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "solutioncomponentbatchconfiguration_MailboxTrackingFolders": (o, n) => { (o as unknown as Solutioncomponentbatchconfiguration).solutioncomponentbatchconfiguration_MailboxTrackingFolders = n.getCollectionOfObjectValues<Mailboxtrackingfolder>(createMailboxtrackingfolderFromDiscriminatorValue); },
            "solutioncomponentbatchconfiguration_PrincipalObjectAttributeAccesses": (o, n) => { (o as unknown as Solutioncomponentbatchconfiguration).solutioncomponentbatchconfiguration_PrincipalObjectAttributeAccesses = n.getCollectionOfObjectValues<Principalobjectattributeaccess>(createPrincipalobjectattributeaccessFromDiscriminatorValue); },
            "solutioncomponentbatchconfiguration_ProcessSession": (o, n) => { (o as unknown as Solutioncomponentbatchconfiguration).solutioncomponentbatchconfiguration_ProcessSession = n.getCollectionOfObjectValues<Processsession>(createProcesssessionFromDiscriminatorValue); },
            "solutioncomponentbatchconfiguration_SyncErrors": (o, n) => { (o as unknown as Solutioncomponentbatchconfiguration).solutioncomponentbatchconfiguration_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "solutioncomponentbatchconfigurationid": (o, n) => { (o as unknown as Solutioncomponentbatchconfiguration).solutioncomponentbatchconfigurationid = n.getStringValue(); },
            "solutionid": (o, n) => { (o as unknown as Solutioncomponentbatchconfiguration).solutionid = n.getStringValue(); },
            "statecode": (o, n) => { (o as unknown as Solutioncomponentbatchconfiguration).statecode = n.getNumberValue(); },
            "statuscode": (o, n) => { (o as unknown as Solutioncomponentbatchconfiguration).statuscode = n.getNumberValue(); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Solutioncomponentbatchconfiguration).timezoneruleversionnumber = n.getNumberValue(); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Solutioncomponentbatchconfiguration).utcconversiontimezonecode = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as Solutioncomponentbatchconfiguration).versionnumber = n.getNumberValue(); },
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
     * Gets the operation property value. 
     * @returns a integer
     */
    public get operation() {
        return this._operation;
    };
    /**
     * Sets the operation property value. 
     * @param value Value to set for the operation property.
     */
    public set operation(value: number | undefined) {
        this._operation = value;
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
     * Gets the ownerid property value. 
     * @returns a principal
     */
    public get ownerid() {
        return this._ownerid;
    };
    /**
     * Sets the ownerid property value. 
     * @param value Value to set for the ownerid property.
     */
    public set ownerid(value: Principal | undefined) {
        this._ownerid = value;
    };
    /**
     * Gets the owningbusinessunit property value. 
     * @returns a businessunit
     */
    public get owningbusinessunit() {
        return this._owningbusinessunit;
    };
    /**
     * Sets the owningbusinessunit property value. 
     * @param value Value to set for the owningbusinessunit property.
     */
    public set owningbusinessunit(value: Businessunit | undefined) {
        this._owningbusinessunit = value;
    };
    /**
     * Gets the owningteam property value. 
     * @returns a team
     */
    public get owningteam() {
        return this._owningteam;
    };
    /**
     * Sets the owningteam property value. 
     * @param value Value to set for the owningteam property.
     */
    public set owningteam(value: Team | undefined) {
        this._owningteam = value;
    };
    /**
     * Gets the owninguser property value. 
     * @returns a systemuser
     */
    public get owninguser() {
        return this._owninguser;
    };
    /**
     * Sets the owninguser property value. 
     * @param value Value to set for the owninguser property.
     */
    public set owninguser(value: Systemuser | undefined) {
        this._owninguser = value;
    };
    /**
     * Gets the primaryEntity property value. 
     * @returns a entity
     */
    public get primaryEntity() {
        return this._primaryEntity;
    };
    /**
     * Sets the primaryEntity property value. 
     * @param value Value to set for the PrimaryEntity property.
     */
    public set primaryEntity(value: Entity | undefined) {
        this._primaryEntity = value;
    };
    /**
     * Gets the relatedEntity property value. 
     * @returns a entity
     */
    public get relatedEntity() {
        return this._relatedEntity;
    };
    /**
     * Sets the relatedEntity property value. 
     * @param value Value to set for the RelatedEntity property.
     */
    public set relatedEntity(value: Entity | undefined) {
        this._relatedEntity = value;
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
        writer.writeStringValue("_ownerid_value", this._ownerid_value);
        writer.writeStringValue("_owningbusinessunit_value", this._owningbusinessunit_value);
        writer.writeStringValue("_owningteam_value", this._owningteam_value);
        writer.writeStringValue("_owninguser_value", this._owninguser_value);
        writer.writeStringValue("_primaryentity_value", this._primaryentity_value);
        writer.writeStringValue("_relatedentity_value", this._relatedentity_value);
        writer.writeStringValue("componentidunique", this.componentidunique);
        writer.writeNumberValue("componentstate", this.componentstate);
        writer.writeObjectValue<Systemuser>("createdby", this.createdby);
        writer.writeDateValue("createdon", this.createdon);
        writer.writeObjectValue<Systemuser>("createdonbehalfby", this.createdonbehalfby);
        writer.writeNumberValue("importsequencenumber", this.importsequencenumber);
        writer.writeObjectValue<BooleanManagedProperty>("iscustomizable", this.iscustomizable);
        writer.writeBooleanValue("ismanaged", this.ismanaged);
        writer.writeObjectValue<Systemuser>("modifiedby", this.modifiedby);
        writer.writeDateValue("modifiedon", this.modifiedon);
        writer.writeObjectValue<Systemuser>("modifiedonbehalfby", this.modifiedonbehalfby);
        writer.writeStringValue("name", this.name);
        writer.writeNumberValue("operation", this.operation);
        writer.writeDateValue("overriddencreatedon", this.overriddencreatedon);
        writer.writeDateValue("overwritetime", this.overwritetime);
        writer.writeObjectValue<Principal>("ownerid", this.ownerid);
        writer.writeObjectValue<Businessunit>("owningbusinessunit", this.owningbusinessunit);
        writer.writeObjectValue<Team>("owningteam", this.owningteam);
        writer.writeObjectValue<Systemuser>("owninguser", this.owninguser);
        writer.writeObjectValue<Entity>("primaryEntity", this.primaryEntity);
        writer.writeObjectValue<Entity>("relatedEntity", this.relatedEntity);
        writer.writeCollectionOfObjectValues<Asyncoperation>("solutioncomponentbatchconfiguration_AsyncOperations", this.solutioncomponentbatchconfiguration_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("solutioncomponentbatchconfiguration_BulkDeleteFailures", this.solutioncomponentbatchconfiguration_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("solutioncomponentbatchconfiguration_DuplicateBaseRecord", this.solutioncomponentbatchconfiguration_DuplicateBaseRecord);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("solutioncomponentbatchconfiguration_DuplicateMatchingRecord", this.solutioncomponentbatchconfiguration_DuplicateMatchingRecord);
        writer.writeCollectionOfObjectValues<Mailboxtrackingfolder>("solutioncomponentbatchconfiguration_MailboxTrackingFolders", this.solutioncomponentbatchconfiguration_MailboxTrackingFolders);
        writer.writeCollectionOfObjectValues<Principalobjectattributeaccess>("solutioncomponentbatchconfiguration_PrincipalObjectAttributeAccesses", this.solutioncomponentbatchconfiguration_PrincipalObjectAttributeAccesses);
        writer.writeCollectionOfObjectValues<Processsession>("solutioncomponentbatchconfiguration_ProcessSession", this.solutioncomponentbatchconfiguration_ProcessSession);
        writer.writeCollectionOfObjectValues<Syncerror>("solutioncomponentbatchconfiguration_SyncErrors", this.solutioncomponentbatchconfiguration_SyncErrors);
        writer.writeStringValue("solutioncomponentbatchconfigurationid", this.solutioncomponentbatchconfigurationid);
        writer.writeStringValue("solutionid", this.solutionid);
        writer.writeNumberValue("statecode", this.statecode);
        writer.writeNumberValue("statuscode", this.statuscode);
        writer.writeNumberValue("timezoneruleversionnumber", this.timezoneruleversionnumber);
        writer.writeNumberValue("utcconversiontimezonecode", this.utcconversiontimezonecode);
        writer.writeNumberValue("versionnumber", this.versionnumber);
    };
    /**
     * Gets the solutioncomponentbatchconfiguration_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get solutioncomponentbatchconfiguration_AsyncOperations() {
        return this._solutioncomponentbatchconfiguration_AsyncOperations;
    };
    /**
     * Sets the solutioncomponentbatchconfiguration_AsyncOperations property value. 
     * @param value Value to set for the solutioncomponentbatchconfiguration_AsyncOperations property.
     */
    public set solutioncomponentbatchconfiguration_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._solutioncomponentbatchconfiguration_AsyncOperations = value;
    };
    /**
     * Gets the solutioncomponentbatchconfiguration_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get solutioncomponentbatchconfiguration_BulkDeleteFailures() {
        return this._solutioncomponentbatchconfiguration_BulkDeleteFailures;
    };
    /**
     * Sets the solutioncomponentbatchconfiguration_BulkDeleteFailures property value. 
     * @param value Value to set for the solutioncomponentbatchconfiguration_BulkDeleteFailures property.
     */
    public set solutioncomponentbatchconfiguration_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._solutioncomponentbatchconfiguration_BulkDeleteFailures = value;
    };
    /**
     * Gets the solutioncomponentbatchconfiguration_DuplicateBaseRecord property value. 
     * @returns a duplicaterecord
     */
    public get solutioncomponentbatchconfiguration_DuplicateBaseRecord() {
        return this._solutioncomponentbatchconfiguration_DuplicateBaseRecord;
    };
    /**
     * Sets the solutioncomponentbatchconfiguration_DuplicateBaseRecord property value. 
     * @param value Value to set for the solutioncomponentbatchconfiguration_DuplicateBaseRecord property.
     */
    public set solutioncomponentbatchconfiguration_DuplicateBaseRecord(value: Duplicaterecord[] | undefined) {
        this._solutioncomponentbatchconfiguration_DuplicateBaseRecord = value;
    };
    /**
     * Gets the solutioncomponentbatchconfiguration_DuplicateMatchingRecord property value. 
     * @returns a duplicaterecord
     */
    public get solutioncomponentbatchconfiguration_DuplicateMatchingRecord() {
        return this._solutioncomponentbatchconfiguration_DuplicateMatchingRecord;
    };
    /**
     * Sets the solutioncomponentbatchconfiguration_DuplicateMatchingRecord property value. 
     * @param value Value to set for the solutioncomponentbatchconfiguration_DuplicateMatchingRecord property.
     */
    public set solutioncomponentbatchconfiguration_DuplicateMatchingRecord(value: Duplicaterecord[] | undefined) {
        this._solutioncomponentbatchconfiguration_DuplicateMatchingRecord = value;
    };
    /**
     * Gets the solutioncomponentbatchconfiguration_MailboxTrackingFolders property value. 
     * @returns a mailboxtrackingfolder
     */
    public get solutioncomponentbatchconfiguration_MailboxTrackingFolders() {
        return this._solutioncomponentbatchconfiguration_MailboxTrackingFolders;
    };
    /**
     * Sets the solutioncomponentbatchconfiguration_MailboxTrackingFolders property value. 
     * @param value Value to set for the solutioncomponentbatchconfiguration_MailboxTrackingFolders property.
     */
    public set solutioncomponentbatchconfiguration_MailboxTrackingFolders(value: Mailboxtrackingfolder[] | undefined) {
        this._solutioncomponentbatchconfiguration_MailboxTrackingFolders = value;
    };
    /**
     * Gets the solutioncomponentbatchconfiguration_PrincipalObjectAttributeAccesses property value. 
     * @returns a principalobjectattributeaccess
     */
    public get solutioncomponentbatchconfiguration_PrincipalObjectAttributeAccesses() {
        return this._solutioncomponentbatchconfiguration_PrincipalObjectAttributeAccesses;
    };
    /**
     * Sets the solutioncomponentbatchconfiguration_PrincipalObjectAttributeAccesses property value. 
     * @param value Value to set for the solutioncomponentbatchconfiguration_PrincipalObjectAttributeAccesses property.
     */
    public set solutioncomponentbatchconfiguration_PrincipalObjectAttributeAccesses(value: Principalobjectattributeaccess[] | undefined) {
        this._solutioncomponentbatchconfiguration_PrincipalObjectAttributeAccesses = value;
    };
    /**
     * Gets the solutioncomponentbatchconfiguration_ProcessSession property value. 
     * @returns a processsession
     */
    public get solutioncomponentbatchconfiguration_ProcessSession() {
        return this._solutioncomponentbatchconfiguration_ProcessSession;
    };
    /**
     * Sets the solutioncomponentbatchconfiguration_ProcessSession property value. 
     * @param value Value to set for the solutioncomponentbatchconfiguration_ProcessSession property.
     */
    public set solutioncomponentbatchconfiguration_ProcessSession(value: Processsession[] | undefined) {
        this._solutioncomponentbatchconfiguration_ProcessSession = value;
    };
    /**
     * Gets the solutioncomponentbatchconfiguration_SyncErrors property value. 
     * @returns a syncerror
     */
    public get solutioncomponentbatchconfiguration_SyncErrors() {
        return this._solutioncomponentbatchconfiguration_SyncErrors;
    };
    /**
     * Sets the solutioncomponentbatchconfiguration_SyncErrors property value. 
     * @param value Value to set for the solutioncomponentbatchconfiguration_SyncErrors property.
     */
    public set solutioncomponentbatchconfiguration_SyncErrors(value: Syncerror[] | undefined) {
        this._solutioncomponentbatchconfiguration_SyncErrors = value;
    };
    /**
     * Gets the solutioncomponentbatchconfigurationid property value. 
     * @returns a string
     */
    public get solutioncomponentbatchconfigurationid() {
        return this._solutioncomponentbatchconfigurationid;
    };
    /**
     * Sets the solutioncomponentbatchconfigurationid property value. 
     * @param value Value to set for the solutioncomponentbatchconfigurationid property.
     */
    public set solutioncomponentbatchconfigurationid(value: string | undefined) {
        this._solutioncomponentbatchconfigurationid = value;
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
