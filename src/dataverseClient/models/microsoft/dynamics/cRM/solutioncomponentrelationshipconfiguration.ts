import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createBooleanManagedPropertyFromDiscriminatorValue} from './createBooleanManagedPropertyFromDiscriminatorValue';
import {createBulkdeletefailureFromDiscriminatorValue} from './createBulkdeletefailureFromDiscriminatorValue';
import {createDuplicaterecordFromDiscriminatorValue} from './createDuplicaterecordFromDiscriminatorValue';
import {createEntityrelationshipFromDiscriminatorValue} from './createEntityrelationshipFromDiscriminatorValue';
import {createMailboxtrackingfolderFromDiscriminatorValue} from './createMailboxtrackingfolderFromDiscriminatorValue';
import {createOrganizationFromDiscriminatorValue} from './createOrganizationFromDiscriminatorValue';
import {createPrincipalobjectattributeaccessFromDiscriminatorValue} from './createPrincipalobjectattributeaccessFromDiscriminatorValue';
import {createProcesssessionFromDiscriminatorValue} from './createProcesssessionFromDiscriminatorValue';
import {createSyncerrorFromDiscriminatorValue} from './createSyncerrorFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {Asyncoperation, BooleanManagedProperty, Bulkdeletefailure, Crmbaseentity, Duplicaterecord, Entityrelationship, Mailboxtrackingfolder, Organization, Principalobjectattributeaccess, Processsession, Syncerror, Systemuser} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Solutioncomponentrelationshipconfiguration extends Crmbaseentity implements Parsable {
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __entityrelationshipid_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private __organizationid_value?: string | undefined;
    private _addrelatedcomponents?: boolean | undefined;
    private _cascaderemovecomponents?: boolean | undefined;
    private _componentidunique?: string | undefined;
    private _componentstate?: number | undefined;
    private _createdby?: Systemuser | undefined;
    private _createdon?: Date | undefined;
    private _createdonbehalfby?: Systemuser | undefined;
    private _entityRelationshipId?: Entityrelationship | undefined;
    private _forceaddingmanagedrelatedcomponents?: boolean | undefined;
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
    private _primaryentitydependencytype?: number | undefined;
    private _respectparentrootcomponentbehavior?: boolean | undefined;
    private _secondaryentitydependencytype?: number | undefined;
    private _solutioncomponentrelationshipconfiguration_AsyncOperations?: Asyncoperation[] | undefined;
    private _solutioncomponentrelationshipconfiguration_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _solutioncomponentrelationshipconfiguration_DuplicateBaseRecord?: Duplicaterecord[] | undefined;
    private _solutioncomponentrelationshipconfiguration_DuplicateMatchingRecord?: Duplicaterecord[] | undefined;
    private _solutioncomponentrelationshipconfiguration_MailboxTrackingFolders?: Mailboxtrackingfolder[] | undefined;
    private _solutioncomponentrelationshipconfiguration_PrincipalObjectAttributeAccesses?: Principalobjectattributeaccess[] | undefined;
    private _solutioncomponentrelationshipconfiguration_ProcessSession?: Processsession[] | undefined;
    private _solutioncomponentrelationshipconfiguration_SyncErrors?: Syncerror[] | undefined;
    private _solutioncomponentrelationshipconfigurationid?: string | undefined;
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
     * Gets the _entityrelationshipid_value property value. 
     * @returns a string
     */
    public get _entityrelationshipid_value() {
        return this.__entityrelationshipid_value;
    };
    /**
     * Sets the _entityrelationshipid_value property value. 
     * @param value Value to set for the _entityrelationshipid_value property.
     */
    public set _entityrelationshipid_value(value: string | undefined) {
        this.__entityrelationshipid_value = value;
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
     * Gets the addrelatedcomponents property value. 
     * @returns a boolean
     */
    public get addrelatedcomponents() {
        return this._addrelatedcomponents;
    };
    /**
     * Sets the addrelatedcomponents property value. 
     * @param value Value to set for the addrelatedcomponents property.
     */
    public set addrelatedcomponents(value: boolean | undefined) {
        this._addrelatedcomponents = value;
    };
    /**
     * Gets the cascaderemovecomponents property value. 
     * @returns a boolean
     */
    public get cascaderemovecomponents() {
        return this._cascaderemovecomponents;
    };
    /**
     * Sets the cascaderemovecomponents property value. 
     * @param value Value to set for the cascaderemovecomponents property.
     */
    public set cascaderemovecomponents(value: boolean | undefined) {
        this._cascaderemovecomponents = value;
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
     * Instantiates a new solutioncomponentrelationshipconfiguration and sets the default values.
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
     * Gets the entityRelationshipId property value. 
     * @returns a entityrelationship
     */
    public get entityRelationshipId() {
        return this._entityRelationshipId;
    };
    /**
     * Sets the entityRelationshipId property value. 
     * @param value Value to set for the EntityRelationshipId property.
     */
    public set entityRelationshipId(value: Entityrelationship | undefined) {
        this._entityRelationshipId = value;
    };
    /**
     * Gets the forceaddingmanagedrelatedcomponents property value. 
     * @returns a boolean
     */
    public get forceaddingmanagedrelatedcomponents() {
        return this._forceaddingmanagedrelatedcomponents;
    };
    /**
     * Sets the forceaddingmanagedrelatedcomponents property value. 
     * @param value Value to set for the forceaddingmanagedrelatedcomponents property.
     */
    public set forceaddingmanagedrelatedcomponents(value: boolean | undefined) {
        this._forceaddingmanagedrelatedcomponents = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Record<string, (item: T, node: ParseNode) => void> {
        return {...super.getFieldDeserializers<T>(),
            "_createdby_value": (o, n) => { (o as unknown as Solutioncomponentrelationshipconfiguration)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Solutioncomponentrelationshipconfiguration)._createdonbehalfby_value = n.getStringValue(); },
            "_entityrelationshipid_value": (o, n) => { (o as unknown as Solutioncomponentrelationshipconfiguration)._entityrelationshipid_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Solutioncomponentrelationshipconfiguration)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Solutioncomponentrelationshipconfiguration)._modifiedonbehalfby_value = n.getStringValue(); },
            "_organizationid_value": (o, n) => { (o as unknown as Solutioncomponentrelationshipconfiguration)._organizationid_value = n.getStringValue(); },
            "addrelatedcomponents": (o, n) => { (o as unknown as Solutioncomponentrelationshipconfiguration).addrelatedcomponents = n.getBooleanValue(); },
            "cascaderemovecomponents": (o, n) => { (o as unknown as Solutioncomponentrelationshipconfiguration).cascaderemovecomponents = n.getBooleanValue(); },
            "componentidunique": (o, n) => { (o as unknown as Solutioncomponentrelationshipconfiguration).componentidunique = n.getStringValue(); },
            "componentstate": (o, n) => { (o as unknown as Solutioncomponentrelationshipconfiguration).componentstate = n.getNumberValue(); },
            "createdby": (o, n) => { (o as unknown as Solutioncomponentrelationshipconfiguration).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Solutioncomponentrelationshipconfiguration).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Solutioncomponentrelationshipconfiguration).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "entityRelationshipId": (o, n) => { (o as unknown as Solutioncomponentrelationshipconfiguration).entityRelationshipId = n.getObjectValue<Entityrelationship>(createEntityrelationshipFromDiscriminatorValue); },
            "forceaddingmanagedrelatedcomponents": (o, n) => { (o as unknown as Solutioncomponentrelationshipconfiguration).forceaddingmanagedrelatedcomponents = n.getBooleanValue(); },
            "importsequencenumber": (o, n) => { (o as unknown as Solutioncomponentrelationshipconfiguration).importsequencenumber = n.getNumberValue(); },
            "iscustomizable": (o, n) => { (o as unknown as Solutioncomponentrelationshipconfiguration).iscustomizable = n.getObjectValue<BooleanManagedProperty>(createBooleanManagedPropertyFromDiscriminatorValue); },
            "ismanaged": (o, n) => { (o as unknown as Solutioncomponentrelationshipconfiguration).ismanaged = n.getBooleanValue(); },
            "modifiedby": (o, n) => { (o as unknown as Solutioncomponentrelationshipconfiguration).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Solutioncomponentrelationshipconfiguration).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Solutioncomponentrelationshipconfiguration).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "name": (o, n) => { (o as unknown as Solutioncomponentrelationshipconfiguration).name = n.getStringValue(); },
            "organizationid": (o, n) => { (o as unknown as Solutioncomponentrelationshipconfiguration).organizationid = n.getObjectValue<Organization>(createOrganizationFromDiscriminatorValue); },
            "overriddencreatedon": (o, n) => { (o as unknown as Solutioncomponentrelationshipconfiguration).overriddencreatedon = n.getDateValue(); },
            "overwritetime": (o, n) => { (o as unknown as Solutioncomponentrelationshipconfiguration).overwritetime = n.getDateValue(); },
            "primaryentitydependencytype": (o, n) => { (o as unknown as Solutioncomponentrelationshipconfiguration).primaryentitydependencytype = n.getNumberValue(); },
            "respectparentrootcomponentbehavior": (o, n) => { (o as unknown as Solutioncomponentrelationshipconfiguration).respectparentrootcomponentbehavior = n.getBooleanValue(); },
            "secondaryentitydependencytype": (o, n) => { (o as unknown as Solutioncomponentrelationshipconfiguration).secondaryentitydependencytype = n.getNumberValue(); },
            "solutioncomponentrelationshipconfiguration_AsyncOperations": (o, n) => { (o as unknown as Solutioncomponentrelationshipconfiguration).solutioncomponentrelationshipconfiguration_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "solutioncomponentrelationshipconfiguration_BulkDeleteFailures": (o, n) => { (o as unknown as Solutioncomponentrelationshipconfiguration).solutioncomponentrelationshipconfiguration_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "solutioncomponentrelationshipconfiguration_DuplicateBaseRecord": (o, n) => { (o as unknown as Solutioncomponentrelationshipconfiguration).solutioncomponentrelationshipconfiguration_DuplicateBaseRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "solutioncomponentrelationshipconfiguration_DuplicateMatchingRecord": (o, n) => { (o as unknown as Solutioncomponentrelationshipconfiguration).solutioncomponentrelationshipconfiguration_DuplicateMatchingRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "solutioncomponentrelationshipconfiguration_MailboxTrackingFolders": (o, n) => { (o as unknown as Solutioncomponentrelationshipconfiguration).solutioncomponentrelationshipconfiguration_MailboxTrackingFolders = n.getCollectionOfObjectValues<Mailboxtrackingfolder>(createMailboxtrackingfolderFromDiscriminatorValue); },
            "solutioncomponentrelationshipconfiguration_PrincipalObjectAttributeAccesses": (o, n) => { (o as unknown as Solutioncomponentrelationshipconfiguration).solutioncomponentrelationshipconfiguration_PrincipalObjectAttributeAccesses = n.getCollectionOfObjectValues<Principalobjectattributeaccess>(createPrincipalobjectattributeaccessFromDiscriminatorValue); },
            "solutioncomponentrelationshipconfiguration_ProcessSession": (o, n) => { (o as unknown as Solutioncomponentrelationshipconfiguration).solutioncomponentrelationshipconfiguration_ProcessSession = n.getCollectionOfObjectValues<Processsession>(createProcesssessionFromDiscriminatorValue); },
            "solutioncomponentrelationshipconfiguration_SyncErrors": (o, n) => { (o as unknown as Solutioncomponentrelationshipconfiguration).solutioncomponentrelationshipconfiguration_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "solutioncomponentrelationshipconfigurationid": (o, n) => { (o as unknown as Solutioncomponentrelationshipconfiguration).solutioncomponentrelationshipconfigurationid = n.getStringValue(); },
            "solutionid": (o, n) => { (o as unknown as Solutioncomponentrelationshipconfiguration).solutionid = n.getStringValue(); },
            "statecode": (o, n) => { (o as unknown as Solutioncomponentrelationshipconfiguration).statecode = n.getNumberValue(); },
            "statuscode": (o, n) => { (o as unknown as Solutioncomponentrelationshipconfiguration).statuscode = n.getNumberValue(); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Solutioncomponentrelationshipconfiguration).timezoneruleversionnumber = n.getNumberValue(); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Solutioncomponentrelationshipconfiguration).utcconversiontimezonecode = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as Solutioncomponentrelationshipconfiguration).versionnumber = n.getNumberValue(); },
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
     * Gets the primaryentitydependencytype property value. 
     * @returns a integer
     */
    public get primaryentitydependencytype() {
        return this._primaryentitydependencytype;
    };
    /**
     * Sets the primaryentitydependencytype property value. 
     * @param value Value to set for the primaryentitydependencytype property.
     */
    public set primaryentitydependencytype(value: number | undefined) {
        this._primaryentitydependencytype = value;
    };
    /**
     * Gets the respectparentrootcomponentbehavior property value. 
     * @returns a boolean
     */
    public get respectparentrootcomponentbehavior() {
        return this._respectparentrootcomponentbehavior;
    };
    /**
     * Sets the respectparentrootcomponentbehavior property value. 
     * @param value Value to set for the respectparentrootcomponentbehavior property.
     */
    public set respectparentrootcomponentbehavior(value: boolean | undefined) {
        this._respectparentrootcomponentbehavior = value;
    };
    /**
     * Gets the secondaryentitydependencytype property value. 
     * @returns a integer
     */
    public get secondaryentitydependencytype() {
        return this._secondaryentitydependencytype;
    };
    /**
     * Sets the secondaryentitydependencytype property value. 
     * @param value Value to set for the secondaryentitydependencytype property.
     */
    public set secondaryentitydependencytype(value: number | undefined) {
        this._secondaryentitydependencytype = value;
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
        writer.writeStringValue("_entityrelationshipid_value", this._entityrelationshipid_value);
        writer.writeStringValue("_modifiedby_value", this._modifiedby_value);
        writer.writeStringValue("_modifiedonbehalfby_value", this._modifiedonbehalfby_value);
        writer.writeStringValue("_organizationid_value", this._organizationid_value);
        writer.writeBooleanValue("addrelatedcomponents", this.addrelatedcomponents);
        writer.writeBooleanValue("cascaderemovecomponents", this.cascaderemovecomponents);
        writer.writeStringValue("componentidunique", this.componentidunique);
        writer.writeNumberValue("componentstate", this.componentstate);
        writer.writeObjectValue<Systemuser>("createdby", this.createdby);
        writer.writeDateValue("createdon", this.createdon);
        writer.writeObjectValue<Systemuser>("createdonbehalfby", this.createdonbehalfby);
        writer.writeObjectValue<Entityrelationship>("entityRelationshipId", this.entityRelationshipId);
        writer.writeBooleanValue("forceaddingmanagedrelatedcomponents", this.forceaddingmanagedrelatedcomponents);
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
        writer.writeNumberValue("primaryentitydependencytype", this.primaryentitydependencytype);
        writer.writeBooleanValue("respectparentrootcomponentbehavior", this.respectparentrootcomponentbehavior);
        writer.writeNumberValue("secondaryentitydependencytype", this.secondaryentitydependencytype);
        writer.writeCollectionOfObjectValues<Asyncoperation>("solutioncomponentrelationshipconfiguration_AsyncOperations", this.solutioncomponentrelationshipconfiguration_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("solutioncomponentrelationshipconfiguration_BulkDeleteFailures", this.solutioncomponentrelationshipconfiguration_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("solutioncomponentrelationshipconfiguration_DuplicateBaseRecord", this.solutioncomponentrelationshipconfiguration_DuplicateBaseRecord);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("solutioncomponentrelationshipconfiguration_DuplicateMatchingRecord", this.solutioncomponentrelationshipconfiguration_DuplicateMatchingRecord);
        writer.writeCollectionOfObjectValues<Mailboxtrackingfolder>("solutioncomponentrelationshipconfiguration_MailboxTrackingFolders", this.solutioncomponentrelationshipconfiguration_MailboxTrackingFolders);
        writer.writeCollectionOfObjectValues<Principalobjectattributeaccess>("solutioncomponentrelationshipconfiguration_PrincipalObjectAttributeAccesses", this.solutioncomponentrelationshipconfiguration_PrincipalObjectAttributeAccesses);
        writer.writeCollectionOfObjectValues<Processsession>("solutioncomponentrelationshipconfiguration_ProcessSession", this.solutioncomponentrelationshipconfiguration_ProcessSession);
        writer.writeCollectionOfObjectValues<Syncerror>("solutioncomponentrelationshipconfiguration_SyncErrors", this.solutioncomponentrelationshipconfiguration_SyncErrors);
        writer.writeStringValue("solutioncomponentrelationshipconfigurationid", this.solutioncomponentrelationshipconfigurationid);
        writer.writeStringValue("solutionid", this.solutionid);
        writer.writeNumberValue("statecode", this.statecode);
        writer.writeNumberValue("statuscode", this.statuscode);
        writer.writeNumberValue("timezoneruleversionnumber", this.timezoneruleversionnumber);
        writer.writeNumberValue("utcconversiontimezonecode", this.utcconversiontimezonecode);
        writer.writeNumberValue("versionnumber", this.versionnumber);
    };
    /**
     * Gets the solutioncomponentrelationshipconfiguration_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get solutioncomponentrelationshipconfiguration_AsyncOperations() {
        return this._solutioncomponentrelationshipconfiguration_AsyncOperations;
    };
    /**
     * Sets the solutioncomponentrelationshipconfiguration_AsyncOperations property value. 
     * @param value Value to set for the solutioncomponentrelationshipconfiguration_AsyncOperations property.
     */
    public set solutioncomponentrelationshipconfiguration_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._solutioncomponentrelationshipconfiguration_AsyncOperations = value;
    };
    /**
     * Gets the solutioncomponentrelationshipconfiguration_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get solutioncomponentrelationshipconfiguration_BulkDeleteFailures() {
        return this._solutioncomponentrelationshipconfiguration_BulkDeleteFailures;
    };
    /**
     * Sets the solutioncomponentrelationshipconfiguration_BulkDeleteFailures property value. 
     * @param value Value to set for the solutioncomponentrelationshipconfiguration_BulkDeleteFailures property.
     */
    public set solutioncomponentrelationshipconfiguration_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._solutioncomponentrelationshipconfiguration_BulkDeleteFailures = value;
    };
    /**
     * Gets the solutioncomponentrelationshipconfiguration_DuplicateBaseRecord property value. 
     * @returns a duplicaterecord
     */
    public get solutioncomponentrelationshipconfiguration_DuplicateBaseRecord() {
        return this._solutioncomponentrelationshipconfiguration_DuplicateBaseRecord;
    };
    /**
     * Sets the solutioncomponentrelationshipconfiguration_DuplicateBaseRecord property value. 
     * @param value Value to set for the solutioncomponentrelationshipconfiguration_DuplicateBaseRecord property.
     */
    public set solutioncomponentrelationshipconfiguration_DuplicateBaseRecord(value: Duplicaterecord[] | undefined) {
        this._solutioncomponentrelationshipconfiguration_DuplicateBaseRecord = value;
    };
    /**
     * Gets the solutioncomponentrelationshipconfiguration_DuplicateMatchingRecord property value. 
     * @returns a duplicaterecord
     */
    public get solutioncomponentrelationshipconfiguration_DuplicateMatchingRecord() {
        return this._solutioncomponentrelationshipconfiguration_DuplicateMatchingRecord;
    };
    /**
     * Sets the solutioncomponentrelationshipconfiguration_DuplicateMatchingRecord property value. 
     * @param value Value to set for the solutioncomponentrelationshipconfiguration_DuplicateMatchingRecord property.
     */
    public set solutioncomponentrelationshipconfiguration_DuplicateMatchingRecord(value: Duplicaterecord[] | undefined) {
        this._solutioncomponentrelationshipconfiguration_DuplicateMatchingRecord = value;
    };
    /**
     * Gets the solutioncomponentrelationshipconfiguration_MailboxTrackingFolders property value. 
     * @returns a mailboxtrackingfolder
     */
    public get solutioncomponentrelationshipconfiguration_MailboxTrackingFolders() {
        return this._solutioncomponentrelationshipconfiguration_MailboxTrackingFolders;
    };
    /**
     * Sets the solutioncomponentrelationshipconfiguration_MailboxTrackingFolders property value. 
     * @param value Value to set for the solutioncomponentrelationshipconfiguration_MailboxTrackingFolders property.
     */
    public set solutioncomponentrelationshipconfiguration_MailboxTrackingFolders(value: Mailboxtrackingfolder[] | undefined) {
        this._solutioncomponentrelationshipconfiguration_MailboxTrackingFolders = value;
    };
    /**
     * Gets the solutioncomponentrelationshipconfiguration_PrincipalObjectAttributeAccesses property value. 
     * @returns a principalobjectattributeaccess
     */
    public get solutioncomponentrelationshipconfiguration_PrincipalObjectAttributeAccesses() {
        return this._solutioncomponentrelationshipconfiguration_PrincipalObjectAttributeAccesses;
    };
    /**
     * Sets the solutioncomponentrelationshipconfiguration_PrincipalObjectAttributeAccesses property value. 
     * @param value Value to set for the solutioncomponentrelationshipconfiguration_PrincipalObjectAttributeAccesses property.
     */
    public set solutioncomponentrelationshipconfiguration_PrincipalObjectAttributeAccesses(value: Principalobjectattributeaccess[] | undefined) {
        this._solutioncomponentrelationshipconfiguration_PrincipalObjectAttributeAccesses = value;
    };
    /**
     * Gets the solutioncomponentrelationshipconfiguration_ProcessSession property value. 
     * @returns a processsession
     */
    public get solutioncomponentrelationshipconfiguration_ProcessSession() {
        return this._solutioncomponentrelationshipconfiguration_ProcessSession;
    };
    /**
     * Sets the solutioncomponentrelationshipconfiguration_ProcessSession property value. 
     * @param value Value to set for the solutioncomponentrelationshipconfiguration_ProcessSession property.
     */
    public set solutioncomponentrelationshipconfiguration_ProcessSession(value: Processsession[] | undefined) {
        this._solutioncomponentrelationshipconfiguration_ProcessSession = value;
    };
    /**
     * Gets the solutioncomponentrelationshipconfiguration_SyncErrors property value. 
     * @returns a syncerror
     */
    public get solutioncomponentrelationshipconfiguration_SyncErrors() {
        return this._solutioncomponentrelationshipconfiguration_SyncErrors;
    };
    /**
     * Sets the solutioncomponentrelationshipconfiguration_SyncErrors property value. 
     * @param value Value to set for the solutioncomponentrelationshipconfiguration_SyncErrors property.
     */
    public set solutioncomponentrelationshipconfiguration_SyncErrors(value: Syncerror[] | undefined) {
        this._solutioncomponentrelationshipconfiguration_SyncErrors = value;
    };
    /**
     * Gets the solutioncomponentrelationshipconfigurationid property value. 
     * @returns a string
     */
    public get solutioncomponentrelationshipconfigurationid() {
        return this._solutioncomponentrelationshipconfigurationid;
    };
    /**
     * Sets the solutioncomponentrelationshipconfigurationid property value. 
     * @param value Value to set for the solutioncomponentrelationshipconfigurationid property.
     */
    public set solutioncomponentrelationshipconfigurationid(value: string | undefined) {
        this._solutioncomponentrelationshipconfigurationid = value;
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
