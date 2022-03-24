import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createBooleanManagedPropertyFromDiscriminatorValue} from './createBooleanManagedPropertyFromDiscriminatorValue';
import {createBulkdeletefailureFromDiscriminatorValue} from './createBulkdeletefailureFromDiscriminatorValue';
import {createDuplicaterecordFromDiscriminatorValue} from './createDuplicaterecordFromDiscriminatorValue';
import {createEntityFromDiscriminatorValue} from './createEntityFromDiscriminatorValue';
import {createMailboxtrackingfolderFromDiscriminatorValue} from './createMailboxtrackingfolderFromDiscriminatorValue';
import {createOrganizationFromDiscriminatorValue} from './createOrganizationFromDiscriminatorValue';
import {createPrincipalobjectattributeaccessFromDiscriminatorValue} from './createPrincipalobjectattributeaccessFromDiscriminatorValue';
import {createProcesssessionFromDiscriminatorValue} from './createProcesssessionFromDiscriminatorValue';
import {createSolutioncomponentattributeconfigurationFromDiscriminatorValue} from './createSolutioncomponentattributeconfigurationFromDiscriminatorValue';
import {createSyncerrorFromDiscriminatorValue} from './createSyncerrorFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {Asyncoperation, BooleanManagedProperty, Bulkdeletefailure, Crmbaseentity, Duplicaterecord, Entity, Mailboxtrackingfolder, Organization, Principalobjectattributeaccess, Processsession, Solutioncomponentattributeconfiguration, Syncerror, Systemuser} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Solutioncomponentconfiguration extends Crmbaseentity implements Parsable {
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __entityid_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private __organizationid_value?: string | undefined;
    private _componentidunique?: string | undefined;
    private _componentstate?: number | undefined;
    private _createdby?: Systemuser | undefined;
    private _createdon?: Date | undefined;
    private _createdonbehalfby?: Systemuser | undefined;
    private _entityId?: Entity | undefined;
    private _fileformat?: number | undefined;
    private _filescope?: number | undefined;
    private _importsequencenumber?: number | undefined;
    private _iscustomizable?: BooleanManagedProperty | undefined;
    private _isdisplayable?: boolean | undefined;
    private _ismanaged?: boolean | undefined;
    private _issoftdeleteenabled?: boolean | undefined;
    private _keepactivecustomizationafterconversion?: boolean | undefined;
    private _modifiedby?: Systemuser | undefined;
    private _modifiedon?: Date | undefined;
    private _modifiedonbehalfby?: Systemuser | undefined;
    private _name?: string | undefined;
    private _organizationid?: Organization | undefined;
    private _overriddencreatedon?: Date | undefined;
    private _overwritetime?: Date | undefined;
    private _solutioncomponentconfig_solutioncomponentattrconfig?: Solutioncomponentattributeconfiguration[] | undefined;
    private _solutioncomponentconfiguration_AsyncOperations?: Asyncoperation[] | undefined;
    private _solutioncomponentconfiguration_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _solutioncomponentconfiguration_DuplicateBaseRecord?: Duplicaterecord[] | undefined;
    private _solutioncomponentconfiguration_DuplicateMatchingRecord?: Duplicaterecord[] | undefined;
    private _solutioncomponentconfiguration_MailboxTrackingFolders?: Mailboxtrackingfolder[] | undefined;
    private _solutioncomponentconfiguration_PrincipalObjectAttributeAccesses?: Principalobjectattributeaccess[] | undefined;
    private _solutioncomponentconfiguration_ProcessSession?: Processsession[] | undefined;
    private _solutioncomponentconfiguration_SyncErrors?: Syncerror[] | undefined;
    private _solutioncomponentconfigurationid?: string | undefined;
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
     * Gets the _entityid_value property value. 
     * @returns a string
     */
    public get _entityid_value() {
        return this.__entityid_value;
    };
    /**
     * Sets the _entityid_value property value. 
     * @param value Value to set for the _entityid_value property.
     */
    public set _entityid_value(value: string | undefined) {
        this.__entityid_value = value;
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
     * Instantiates a new solutioncomponentconfiguration and sets the default values.
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
     * Gets the entityId property value. 
     * @returns a entity
     */
    public get entityId() {
        return this._entityId;
    };
    /**
     * Sets the entityId property value. 
     * @param value Value to set for the EntityId property.
     */
    public set entityId(value: Entity | undefined) {
        this._entityId = value;
    };
    /**
     * Gets the fileformat property value. 
     * @returns a integer
     */
    public get fileformat() {
        return this._fileformat;
    };
    /**
     * Sets the fileformat property value. 
     * @param value Value to set for the fileformat property.
     */
    public set fileformat(value: number | undefined) {
        this._fileformat = value;
    };
    /**
     * Gets the filescope property value. 
     * @returns a integer
     */
    public get filescope() {
        return this._filescope;
    };
    /**
     * Sets the filescope property value. 
     * @param value Value to set for the filescope property.
     */
    public set filescope(value: number | undefined) {
        this._filescope = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Record<string, (item: T, node: ParseNode) => void> {
        return {...super.getFieldDeserializers<T>(),
            "_createdby_value": (o, n) => { (o as unknown as Solutioncomponentconfiguration)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Solutioncomponentconfiguration)._createdonbehalfby_value = n.getStringValue(); },
            "_entityid_value": (o, n) => { (o as unknown as Solutioncomponentconfiguration)._entityid_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Solutioncomponentconfiguration)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Solutioncomponentconfiguration)._modifiedonbehalfby_value = n.getStringValue(); },
            "_organizationid_value": (o, n) => { (o as unknown as Solutioncomponentconfiguration)._organizationid_value = n.getStringValue(); },
            "componentidunique": (o, n) => { (o as unknown as Solutioncomponentconfiguration).componentidunique = n.getStringValue(); },
            "componentstate": (o, n) => { (o as unknown as Solutioncomponentconfiguration).componentstate = n.getNumberValue(); },
            "createdby": (o, n) => { (o as unknown as Solutioncomponentconfiguration).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Solutioncomponentconfiguration).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Solutioncomponentconfiguration).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "entityId": (o, n) => { (o as unknown as Solutioncomponentconfiguration).entityId = n.getObjectValue<Entity>(createEntityFromDiscriminatorValue); },
            "fileformat": (o, n) => { (o as unknown as Solutioncomponentconfiguration).fileformat = n.getNumberValue(); },
            "filescope": (o, n) => { (o as unknown as Solutioncomponentconfiguration).filescope = n.getNumberValue(); },
            "importsequencenumber": (o, n) => { (o as unknown as Solutioncomponentconfiguration).importsequencenumber = n.getNumberValue(); },
            "iscustomizable": (o, n) => { (o as unknown as Solutioncomponentconfiguration).iscustomizable = n.getObjectValue<BooleanManagedProperty>(createBooleanManagedPropertyFromDiscriminatorValue); },
            "isdisplayable": (o, n) => { (o as unknown as Solutioncomponentconfiguration).isdisplayable = n.getBooleanValue(); },
            "ismanaged": (o, n) => { (o as unknown as Solutioncomponentconfiguration).ismanaged = n.getBooleanValue(); },
            "issoftdeleteenabled": (o, n) => { (o as unknown as Solutioncomponentconfiguration).issoftdeleteenabled = n.getBooleanValue(); },
            "keepactivecustomizationafterconversion": (o, n) => { (o as unknown as Solutioncomponentconfiguration).keepactivecustomizationafterconversion = n.getBooleanValue(); },
            "modifiedby": (o, n) => { (o as unknown as Solutioncomponentconfiguration).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Solutioncomponentconfiguration).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Solutioncomponentconfiguration).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "name": (o, n) => { (o as unknown as Solutioncomponentconfiguration).name = n.getStringValue(); },
            "organizationid": (o, n) => { (o as unknown as Solutioncomponentconfiguration).organizationid = n.getObjectValue<Organization>(createOrganizationFromDiscriminatorValue); },
            "overriddencreatedon": (o, n) => { (o as unknown as Solutioncomponentconfiguration).overriddencreatedon = n.getDateValue(); },
            "overwritetime": (o, n) => { (o as unknown as Solutioncomponentconfiguration).overwritetime = n.getDateValue(); },
            "solutioncomponentconfig_solutioncomponentattrconfig": (o, n) => { (o as unknown as Solutioncomponentconfiguration).solutioncomponentconfig_solutioncomponentattrconfig = n.getCollectionOfObjectValues<Solutioncomponentattributeconfiguration>(createSolutioncomponentattributeconfigurationFromDiscriminatorValue); },
            "solutioncomponentconfiguration_AsyncOperations": (o, n) => { (o as unknown as Solutioncomponentconfiguration).solutioncomponentconfiguration_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "solutioncomponentconfiguration_BulkDeleteFailures": (o, n) => { (o as unknown as Solutioncomponentconfiguration).solutioncomponentconfiguration_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "solutioncomponentconfiguration_DuplicateBaseRecord": (o, n) => { (o as unknown as Solutioncomponentconfiguration).solutioncomponentconfiguration_DuplicateBaseRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "solutioncomponentconfiguration_DuplicateMatchingRecord": (o, n) => { (o as unknown as Solutioncomponentconfiguration).solutioncomponentconfiguration_DuplicateMatchingRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "solutioncomponentconfiguration_MailboxTrackingFolders": (o, n) => { (o as unknown as Solutioncomponentconfiguration).solutioncomponentconfiguration_MailboxTrackingFolders = n.getCollectionOfObjectValues<Mailboxtrackingfolder>(createMailboxtrackingfolderFromDiscriminatorValue); },
            "solutioncomponentconfiguration_PrincipalObjectAttributeAccesses": (o, n) => { (o as unknown as Solutioncomponentconfiguration).solutioncomponentconfiguration_PrincipalObjectAttributeAccesses = n.getCollectionOfObjectValues<Principalobjectattributeaccess>(createPrincipalobjectattributeaccessFromDiscriminatorValue); },
            "solutioncomponentconfiguration_ProcessSession": (o, n) => { (o as unknown as Solutioncomponentconfiguration).solutioncomponentconfiguration_ProcessSession = n.getCollectionOfObjectValues<Processsession>(createProcesssessionFromDiscriminatorValue); },
            "solutioncomponentconfiguration_SyncErrors": (o, n) => { (o as unknown as Solutioncomponentconfiguration).solutioncomponentconfiguration_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "solutioncomponentconfigurationid": (o, n) => { (o as unknown as Solutioncomponentconfiguration).solutioncomponentconfigurationid = n.getStringValue(); },
            "solutionid": (o, n) => { (o as unknown as Solutioncomponentconfiguration).solutionid = n.getStringValue(); },
            "statecode": (o, n) => { (o as unknown as Solutioncomponentconfiguration).statecode = n.getNumberValue(); },
            "statuscode": (o, n) => { (o as unknown as Solutioncomponentconfiguration).statuscode = n.getNumberValue(); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Solutioncomponentconfiguration).timezoneruleversionnumber = n.getNumberValue(); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Solutioncomponentconfiguration).utcconversiontimezonecode = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as Solutioncomponentconfiguration).versionnumber = n.getNumberValue(); },
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
     * Gets the isdisplayable property value. 
     * @returns a boolean
     */
    public get isdisplayable() {
        return this._isdisplayable;
    };
    /**
     * Sets the isdisplayable property value. 
     * @param value Value to set for the isdisplayable property.
     */
    public set isdisplayable(value: boolean | undefined) {
        this._isdisplayable = value;
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
     * Gets the issoftdeleteenabled property value. 
     * @returns a boolean
     */
    public get issoftdeleteenabled() {
        return this._issoftdeleteenabled;
    };
    /**
     * Sets the issoftdeleteenabled property value. 
     * @param value Value to set for the issoftdeleteenabled property.
     */
    public set issoftdeleteenabled(value: boolean | undefined) {
        this._issoftdeleteenabled = value;
    };
    /**
     * Gets the keepactivecustomizationafterconversion property value. 
     * @returns a boolean
     */
    public get keepactivecustomizationafterconversion() {
        return this._keepactivecustomizationafterconversion;
    };
    /**
     * Sets the keepactivecustomizationafterconversion property value. 
     * @param value Value to set for the keepactivecustomizationafterconversion property.
     */
    public set keepactivecustomizationafterconversion(value: boolean | undefined) {
        this._keepactivecustomizationafterconversion = value;
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
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeStringValue("_createdby_value", this._createdby_value);
        writer.writeStringValue("_createdonbehalfby_value", this._createdonbehalfby_value);
        writer.writeStringValue("_entityid_value", this._entityid_value);
        writer.writeStringValue("_modifiedby_value", this._modifiedby_value);
        writer.writeStringValue("_modifiedonbehalfby_value", this._modifiedonbehalfby_value);
        writer.writeStringValue("_organizationid_value", this._organizationid_value);
        writer.writeStringValue("componentidunique", this.componentidunique);
        writer.writeNumberValue("componentstate", this.componentstate);
        writer.writeObjectValue<Systemuser>("createdby", this.createdby);
        writer.writeDateValue("createdon", this.createdon);
        writer.writeObjectValue<Systemuser>("createdonbehalfby", this.createdonbehalfby);
        writer.writeObjectValue<Entity>("entityId", this.entityId);
        writer.writeNumberValue("fileformat", this.fileformat);
        writer.writeNumberValue("filescope", this.filescope);
        writer.writeNumberValue("importsequencenumber", this.importsequencenumber);
        writer.writeObjectValue<BooleanManagedProperty>("iscustomizable", this.iscustomizable);
        writer.writeBooleanValue("isdisplayable", this.isdisplayable);
        writer.writeBooleanValue("ismanaged", this.ismanaged);
        writer.writeBooleanValue("issoftdeleteenabled", this.issoftdeleteenabled);
        writer.writeBooleanValue("keepactivecustomizationafterconversion", this.keepactivecustomizationafterconversion);
        writer.writeObjectValue<Systemuser>("modifiedby", this.modifiedby);
        writer.writeDateValue("modifiedon", this.modifiedon);
        writer.writeObjectValue<Systemuser>("modifiedonbehalfby", this.modifiedonbehalfby);
        writer.writeStringValue("name", this.name);
        writer.writeObjectValue<Organization>("organizationid", this.organizationid);
        writer.writeDateValue("overriddencreatedon", this.overriddencreatedon);
        writer.writeDateValue("overwritetime", this.overwritetime);
        writer.writeCollectionOfObjectValues<Solutioncomponentattributeconfiguration>("solutioncomponentconfig_solutioncomponentattrconfig", this.solutioncomponentconfig_solutioncomponentattrconfig);
        writer.writeCollectionOfObjectValues<Asyncoperation>("solutioncomponentconfiguration_AsyncOperations", this.solutioncomponentconfiguration_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("solutioncomponentconfiguration_BulkDeleteFailures", this.solutioncomponentconfiguration_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("solutioncomponentconfiguration_DuplicateBaseRecord", this.solutioncomponentconfiguration_DuplicateBaseRecord);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("solutioncomponentconfiguration_DuplicateMatchingRecord", this.solutioncomponentconfiguration_DuplicateMatchingRecord);
        writer.writeCollectionOfObjectValues<Mailboxtrackingfolder>("solutioncomponentconfiguration_MailboxTrackingFolders", this.solutioncomponentconfiguration_MailboxTrackingFolders);
        writer.writeCollectionOfObjectValues<Principalobjectattributeaccess>("solutioncomponentconfiguration_PrincipalObjectAttributeAccesses", this.solutioncomponentconfiguration_PrincipalObjectAttributeAccesses);
        writer.writeCollectionOfObjectValues<Processsession>("solutioncomponentconfiguration_ProcessSession", this.solutioncomponentconfiguration_ProcessSession);
        writer.writeCollectionOfObjectValues<Syncerror>("solutioncomponentconfiguration_SyncErrors", this.solutioncomponentconfiguration_SyncErrors);
        writer.writeStringValue("solutioncomponentconfigurationid", this.solutioncomponentconfigurationid);
        writer.writeStringValue("solutionid", this.solutionid);
        writer.writeNumberValue("statecode", this.statecode);
        writer.writeNumberValue("statuscode", this.statuscode);
        writer.writeNumberValue("timezoneruleversionnumber", this.timezoneruleversionnumber);
        writer.writeNumberValue("utcconversiontimezonecode", this.utcconversiontimezonecode);
        writer.writeNumberValue("versionnumber", this.versionnumber);
    };
    /**
     * Gets the solutioncomponentconfig_solutioncomponentattrconfig property value. 
     * @returns a solutioncomponentattributeconfiguration
     */
    public get solutioncomponentconfig_solutioncomponentattrconfig() {
        return this._solutioncomponentconfig_solutioncomponentattrconfig;
    };
    /**
     * Sets the solutioncomponentconfig_solutioncomponentattrconfig property value. 
     * @param value Value to set for the solutioncomponentconfig_solutioncomponentattrconfig property.
     */
    public set solutioncomponentconfig_solutioncomponentattrconfig(value: Solutioncomponentattributeconfiguration[] | undefined) {
        this._solutioncomponentconfig_solutioncomponentattrconfig = value;
    };
    /**
     * Gets the solutioncomponentconfiguration_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get solutioncomponentconfiguration_AsyncOperations() {
        return this._solutioncomponentconfiguration_AsyncOperations;
    };
    /**
     * Sets the solutioncomponentconfiguration_AsyncOperations property value. 
     * @param value Value to set for the solutioncomponentconfiguration_AsyncOperations property.
     */
    public set solutioncomponentconfiguration_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._solutioncomponentconfiguration_AsyncOperations = value;
    };
    /**
     * Gets the solutioncomponentconfiguration_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get solutioncomponentconfiguration_BulkDeleteFailures() {
        return this._solutioncomponentconfiguration_BulkDeleteFailures;
    };
    /**
     * Sets the solutioncomponentconfiguration_BulkDeleteFailures property value. 
     * @param value Value to set for the solutioncomponentconfiguration_BulkDeleteFailures property.
     */
    public set solutioncomponentconfiguration_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._solutioncomponentconfiguration_BulkDeleteFailures = value;
    };
    /**
     * Gets the solutioncomponentconfiguration_DuplicateBaseRecord property value. 
     * @returns a duplicaterecord
     */
    public get solutioncomponentconfiguration_DuplicateBaseRecord() {
        return this._solutioncomponentconfiguration_DuplicateBaseRecord;
    };
    /**
     * Sets the solutioncomponentconfiguration_DuplicateBaseRecord property value. 
     * @param value Value to set for the solutioncomponentconfiguration_DuplicateBaseRecord property.
     */
    public set solutioncomponentconfiguration_DuplicateBaseRecord(value: Duplicaterecord[] | undefined) {
        this._solutioncomponentconfiguration_DuplicateBaseRecord = value;
    };
    /**
     * Gets the solutioncomponentconfiguration_DuplicateMatchingRecord property value. 
     * @returns a duplicaterecord
     */
    public get solutioncomponentconfiguration_DuplicateMatchingRecord() {
        return this._solutioncomponentconfiguration_DuplicateMatchingRecord;
    };
    /**
     * Sets the solutioncomponentconfiguration_DuplicateMatchingRecord property value. 
     * @param value Value to set for the solutioncomponentconfiguration_DuplicateMatchingRecord property.
     */
    public set solutioncomponentconfiguration_DuplicateMatchingRecord(value: Duplicaterecord[] | undefined) {
        this._solutioncomponentconfiguration_DuplicateMatchingRecord = value;
    };
    /**
     * Gets the solutioncomponentconfiguration_MailboxTrackingFolders property value. 
     * @returns a mailboxtrackingfolder
     */
    public get solutioncomponentconfiguration_MailboxTrackingFolders() {
        return this._solutioncomponentconfiguration_MailboxTrackingFolders;
    };
    /**
     * Sets the solutioncomponentconfiguration_MailboxTrackingFolders property value. 
     * @param value Value to set for the solutioncomponentconfiguration_MailboxTrackingFolders property.
     */
    public set solutioncomponentconfiguration_MailboxTrackingFolders(value: Mailboxtrackingfolder[] | undefined) {
        this._solutioncomponentconfiguration_MailboxTrackingFolders = value;
    };
    /**
     * Gets the solutioncomponentconfiguration_PrincipalObjectAttributeAccesses property value. 
     * @returns a principalobjectattributeaccess
     */
    public get solutioncomponentconfiguration_PrincipalObjectAttributeAccesses() {
        return this._solutioncomponentconfiguration_PrincipalObjectAttributeAccesses;
    };
    /**
     * Sets the solutioncomponentconfiguration_PrincipalObjectAttributeAccesses property value. 
     * @param value Value to set for the solutioncomponentconfiguration_PrincipalObjectAttributeAccesses property.
     */
    public set solutioncomponentconfiguration_PrincipalObjectAttributeAccesses(value: Principalobjectattributeaccess[] | undefined) {
        this._solutioncomponentconfiguration_PrincipalObjectAttributeAccesses = value;
    };
    /**
     * Gets the solutioncomponentconfiguration_ProcessSession property value. 
     * @returns a processsession
     */
    public get solutioncomponentconfiguration_ProcessSession() {
        return this._solutioncomponentconfiguration_ProcessSession;
    };
    /**
     * Sets the solutioncomponentconfiguration_ProcessSession property value. 
     * @param value Value to set for the solutioncomponentconfiguration_ProcessSession property.
     */
    public set solutioncomponentconfiguration_ProcessSession(value: Processsession[] | undefined) {
        this._solutioncomponentconfiguration_ProcessSession = value;
    };
    /**
     * Gets the solutioncomponentconfiguration_SyncErrors property value. 
     * @returns a syncerror
     */
    public get solutioncomponentconfiguration_SyncErrors() {
        return this._solutioncomponentconfiguration_SyncErrors;
    };
    /**
     * Sets the solutioncomponentconfiguration_SyncErrors property value. 
     * @param value Value to set for the solutioncomponentconfiguration_SyncErrors property.
     */
    public set solutioncomponentconfiguration_SyncErrors(value: Syncerror[] | undefined) {
        this._solutioncomponentconfiguration_SyncErrors = value;
    };
    /**
     * Gets the solutioncomponentconfigurationid property value. 
     * @returns a string
     */
    public get solutioncomponentconfigurationid() {
        return this._solutioncomponentconfigurationid;
    };
    /**
     * Sets the solutioncomponentconfigurationid property value. 
     * @param value Value to set for the solutioncomponentconfigurationid property.
     */
    public set solutioncomponentconfigurationid(value: string | undefined) {
        this._solutioncomponentconfigurationid = value;
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
