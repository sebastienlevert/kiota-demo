import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createBooleanManagedPropertyFromDiscriminatorValue} from './createBooleanManagedPropertyFromDiscriminatorValue';
import {createBulkdeletefailureFromDiscriminatorValue} from './createBulkdeletefailureFromDiscriminatorValue';
import {createDuplicaterecordFromDiscriminatorValue} from './createDuplicaterecordFromDiscriminatorValue';
import {createEntityFromDiscriminatorValue} from './createEntityFromDiscriminatorValue';
import {createMailboxtrackingfolderFromDiscriminatorValue} from './createMailboxtrackingfolderFromDiscriminatorValue';
import {createPrincipalobjectattributeaccessFromDiscriminatorValue} from './createPrincipalobjectattributeaccessFromDiscriminatorValue';
import {createProcesssessionFromDiscriminatorValue} from './createProcesssessionFromDiscriminatorValue';
import {createSdkmessageFromDiscriminatorValue} from './createSdkmessageFromDiscriminatorValue';
import {createServiceplanFromDiscriminatorValue} from './createServiceplanFromDiscriminatorValue';
import {createSyncerrorFromDiscriminatorValue} from './createSyncerrorFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {Asyncoperation, BooleanManagedProperty, Bulkdeletefailure, Crmbaseentity, Duplicaterecord, Entity, Mailboxtrackingfolder, Principalobjectattributeaccess, Processsession, Sdkmessage, Serviceplan, Syncerror, Systemuser} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Serviceplanmapping extends Crmbaseentity implements Parsable {
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __entity_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private __sdkmessage_value?: string | undefined;
    private __serviceplan_value?: string | undefined;
    private _componentidunique?: string | undefined;
    private _componentstate?: number | undefined;
    private _createdby?: Systemuser | undefined;
    private _createdon?: Date | undefined;
    private _createdonbehalfby?: Systemuser | undefined;
    private _entity?: Entity | undefined;
    private _featurecontrol?: string | undefined;
    private _importsequencenumber?: number | undefined;
    private _iscustomizable?: BooleanManagedProperty | undefined;
    private _ismanaged?: boolean | undefined;
    private _modifiedby?: Systemuser | undefined;
    private _modifiedon?: Date | undefined;
    private _modifiedonbehalfby?: Systemuser | undefined;
    private _name?: string | undefined;
    private _overriddencreatedon?: Date | undefined;
    private _overwritetime?: Date | undefined;
    private _sdkMessage?: Sdkmessage | undefined;
    private _servicePlan?: Serviceplan | undefined;
    private _serviceplanmapping_AsyncOperations?: Asyncoperation[] | undefined;
    private _serviceplanmapping_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _serviceplanmapping_DuplicateBaseRecord?: Duplicaterecord[] | undefined;
    private _serviceplanmapping_DuplicateMatchingRecord?: Duplicaterecord[] | undefined;
    private _serviceplanmapping_MailboxTrackingFolders?: Mailboxtrackingfolder[] | undefined;
    private _serviceplanmapping_PrincipalObjectAttributeAccesses?: Principalobjectattributeaccess[] | undefined;
    private _serviceplanmapping_ProcessSession?: Processsession[] | undefined;
    private _serviceplanmapping_SyncErrors?: Syncerror[] | undefined;
    private _serviceplanmappingid?: string | undefined;
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
     * Gets the _entity_value property value. 
     * @returns a string
     */
    public get _entity_value() {
        return this.__entity_value;
    };
    /**
     * Sets the _entity_value property value. 
     * @param value Value to set for the _entity_value property.
     */
    public set _entity_value(value: string | undefined) {
        this.__entity_value = value;
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
     * Gets the _sdkmessage_value property value. 
     * @returns a string
     */
    public get _sdkmessage_value() {
        return this.__sdkmessage_value;
    };
    /**
     * Sets the _sdkmessage_value property value. 
     * @param value Value to set for the _sdkmessage_value property.
     */
    public set _sdkmessage_value(value: string | undefined) {
        this.__sdkmessage_value = value;
    };
    /**
     * Gets the _serviceplan_value property value. 
     * @returns a string
     */
    public get _serviceplan_value() {
        return this.__serviceplan_value;
    };
    /**
     * Sets the _serviceplan_value property value. 
     * @param value Value to set for the _serviceplan_value property.
     */
    public set _serviceplan_value(value: string | undefined) {
        this.__serviceplan_value = value;
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
     * Instantiates a new serviceplanmapping and sets the default values.
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
     * Gets the entity property value. 
     * @returns a entity
     */
    public get entity() {
        return this._entity;
    };
    /**
     * Sets the entity property value. 
     * @param value Value to set for the Entity property.
     */
    public set entity(value: Entity | undefined) {
        this._entity = value;
    };
    /**
     * Gets the featurecontrol property value. 
     * @returns a string
     */
    public get featurecontrol() {
        return this._featurecontrol;
    };
    /**
     * Sets the featurecontrol property value. 
     * @param value Value to set for the featurecontrol property.
     */
    public set featurecontrol(value: string | undefined) {
        this._featurecontrol = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Record<string, (item: T, node: ParseNode) => void> {
        return {...super.getFieldDeserializers<T>(),
            "_createdby_value": (o, n) => { (o as unknown as Serviceplanmapping)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Serviceplanmapping)._createdonbehalfby_value = n.getStringValue(); },
            "_entity_value": (o, n) => { (o as unknown as Serviceplanmapping)._entity_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Serviceplanmapping)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Serviceplanmapping)._modifiedonbehalfby_value = n.getStringValue(); },
            "_sdkmessage_value": (o, n) => { (o as unknown as Serviceplanmapping)._sdkmessage_value = n.getStringValue(); },
            "_serviceplan_value": (o, n) => { (o as unknown as Serviceplanmapping)._serviceplan_value = n.getStringValue(); },
            "componentidunique": (o, n) => { (o as unknown as Serviceplanmapping).componentidunique = n.getStringValue(); },
            "componentstate": (o, n) => { (o as unknown as Serviceplanmapping).componentstate = n.getNumberValue(); },
            "createdby": (o, n) => { (o as unknown as Serviceplanmapping).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Serviceplanmapping).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Serviceplanmapping).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "entity": (o, n) => { (o as unknown as Serviceplanmapping).entity = n.getObjectValue<Entity>(createEntityFromDiscriminatorValue); },
            "featurecontrol": (o, n) => { (o as unknown as Serviceplanmapping).featurecontrol = n.getStringValue(); },
            "importsequencenumber": (o, n) => { (o as unknown as Serviceplanmapping).importsequencenumber = n.getNumberValue(); },
            "iscustomizable": (o, n) => { (o as unknown as Serviceplanmapping).iscustomizable = n.getObjectValue<BooleanManagedProperty>(createBooleanManagedPropertyFromDiscriminatorValue); },
            "ismanaged": (o, n) => { (o as unknown as Serviceplanmapping).ismanaged = n.getBooleanValue(); },
            "modifiedby": (o, n) => { (o as unknown as Serviceplanmapping).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Serviceplanmapping).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Serviceplanmapping).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "name": (o, n) => { (o as unknown as Serviceplanmapping).name = n.getStringValue(); },
            "overriddencreatedon": (o, n) => { (o as unknown as Serviceplanmapping).overriddencreatedon = n.getDateValue(); },
            "overwritetime": (o, n) => { (o as unknown as Serviceplanmapping).overwritetime = n.getDateValue(); },
            "sdkMessage": (o, n) => { (o as unknown as Serviceplanmapping).sdkMessage = n.getObjectValue<Sdkmessage>(createSdkmessageFromDiscriminatorValue); },
            "servicePlan": (o, n) => { (o as unknown as Serviceplanmapping).servicePlan = n.getObjectValue<Serviceplan>(createServiceplanFromDiscriminatorValue); },
            "serviceplanmapping_AsyncOperations": (o, n) => { (o as unknown as Serviceplanmapping).serviceplanmapping_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "serviceplanmapping_BulkDeleteFailures": (o, n) => { (o as unknown as Serviceplanmapping).serviceplanmapping_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "serviceplanmapping_DuplicateBaseRecord": (o, n) => { (o as unknown as Serviceplanmapping).serviceplanmapping_DuplicateBaseRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "serviceplanmapping_DuplicateMatchingRecord": (o, n) => { (o as unknown as Serviceplanmapping).serviceplanmapping_DuplicateMatchingRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "serviceplanmapping_MailboxTrackingFolders": (o, n) => { (o as unknown as Serviceplanmapping).serviceplanmapping_MailboxTrackingFolders = n.getCollectionOfObjectValues<Mailboxtrackingfolder>(createMailboxtrackingfolderFromDiscriminatorValue); },
            "serviceplanmapping_PrincipalObjectAttributeAccesses": (o, n) => { (o as unknown as Serviceplanmapping).serviceplanmapping_PrincipalObjectAttributeAccesses = n.getCollectionOfObjectValues<Principalobjectattributeaccess>(createPrincipalobjectattributeaccessFromDiscriminatorValue); },
            "serviceplanmapping_ProcessSession": (o, n) => { (o as unknown as Serviceplanmapping).serviceplanmapping_ProcessSession = n.getCollectionOfObjectValues<Processsession>(createProcesssessionFromDiscriminatorValue); },
            "serviceplanmapping_SyncErrors": (o, n) => { (o as unknown as Serviceplanmapping).serviceplanmapping_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "serviceplanmappingid": (o, n) => { (o as unknown as Serviceplanmapping).serviceplanmappingid = n.getStringValue(); },
            "solutionid": (o, n) => { (o as unknown as Serviceplanmapping).solutionid = n.getStringValue(); },
            "statecode": (o, n) => { (o as unknown as Serviceplanmapping).statecode = n.getNumberValue(); },
            "statuscode": (o, n) => { (o as unknown as Serviceplanmapping).statuscode = n.getNumberValue(); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Serviceplanmapping).timezoneruleversionnumber = n.getNumberValue(); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Serviceplanmapping).utcconversiontimezonecode = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as Serviceplanmapping).versionnumber = n.getNumberValue(); },
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
     * Gets the sdkMessage property value. 
     * @returns a sdkmessage
     */
    public get sdkMessage() {
        return this._sdkMessage;
    };
    /**
     * Sets the sdkMessage property value. 
     * @param value Value to set for the SdkMessage property.
     */
    public set sdkMessage(value: Sdkmessage | undefined) {
        this._sdkMessage = value;
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
        writer.writeStringValue("_entity_value", this._entity_value);
        writer.writeStringValue("_modifiedby_value", this._modifiedby_value);
        writer.writeStringValue("_modifiedonbehalfby_value", this._modifiedonbehalfby_value);
        writer.writeStringValue("_sdkmessage_value", this._sdkmessage_value);
        writer.writeStringValue("_serviceplan_value", this._serviceplan_value);
        writer.writeStringValue("componentidunique", this.componentidunique);
        writer.writeNumberValue("componentstate", this.componentstate);
        writer.writeObjectValue<Systemuser>("createdby", this.createdby);
        writer.writeDateValue("createdon", this.createdon);
        writer.writeObjectValue<Systemuser>("createdonbehalfby", this.createdonbehalfby);
        writer.writeObjectValue<Entity>("entity", this.entity);
        writer.writeStringValue("featurecontrol", this.featurecontrol);
        writer.writeNumberValue("importsequencenumber", this.importsequencenumber);
        writer.writeObjectValue<BooleanManagedProperty>("iscustomizable", this.iscustomizable);
        writer.writeBooleanValue("ismanaged", this.ismanaged);
        writer.writeObjectValue<Systemuser>("modifiedby", this.modifiedby);
        writer.writeDateValue("modifiedon", this.modifiedon);
        writer.writeObjectValue<Systemuser>("modifiedonbehalfby", this.modifiedonbehalfby);
        writer.writeStringValue("name", this.name);
        writer.writeDateValue("overriddencreatedon", this.overriddencreatedon);
        writer.writeDateValue("overwritetime", this.overwritetime);
        writer.writeObjectValue<Sdkmessage>("sdkMessage", this.sdkMessage);
        writer.writeObjectValue<Serviceplan>("servicePlan", this.servicePlan);
        writer.writeCollectionOfObjectValues<Asyncoperation>("serviceplanmapping_AsyncOperations", this.serviceplanmapping_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("serviceplanmapping_BulkDeleteFailures", this.serviceplanmapping_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("serviceplanmapping_DuplicateBaseRecord", this.serviceplanmapping_DuplicateBaseRecord);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("serviceplanmapping_DuplicateMatchingRecord", this.serviceplanmapping_DuplicateMatchingRecord);
        writer.writeCollectionOfObjectValues<Mailboxtrackingfolder>("serviceplanmapping_MailboxTrackingFolders", this.serviceplanmapping_MailboxTrackingFolders);
        writer.writeCollectionOfObjectValues<Principalobjectattributeaccess>("serviceplanmapping_PrincipalObjectAttributeAccesses", this.serviceplanmapping_PrincipalObjectAttributeAccesses);
        writer.writeCollectionOfObjectValues<Processsession>("serviceplanmapping_ProcessSession", this.serviceplanmapping_ProcessSession);
        writer.writeCollectionOfObjectValues<Syncerror>("serviceplanmapping_SyncErrors", this.serviceplanmapping_SyncErrors);
        writer.writeStringValue("serviceplanmappingid", this.serviceplanmappingid);
        writer.writeStringValue("solutionid", this.solutionid);
        writer.writeNumberValue("statecode", this.statecode);
        writer.writeNumberValue("statuscode", this.statuscode);
        writer.writeNumberValue("timezoneruleversionnumber", this.timezoneruleversionnumber);
        writer.writeNumberValue("utcconversiontimezonecode", this.utcconversiontimezonecode);
        writer.writeNumberValue("versionnumber", this.versionnumber);
    };
    /**
     * Gets the servicePlan property value. 
     * @returns a serviceplan
     */
    public get servicePlan() {
        return this._servicePlan;
    };
    /**
     * Sets the servicePlan property value. 
     * @param value Value to set for the ServicePlan property.
     */
    public set servicePlan(value: Serviceplan | undefined) {
        this._servicePlan = value;
    };
    /**
     * Gets the serviceplanmapping_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get serviceplanmapping_AsyncOperations() {
        return this._serviceplanmapping_AsyncOperations;
    };
    /**
     * Sets the serviceplanmapping_AsyncOperations property value. 
     * @param value Value to set for the serviceplanmapping_AsyncOperations property.
     */
    public set serviceplanmapping_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._serviceplanmapping_AsyncOperations = value;
    };
    /**
     * Gets the serviceplanmapping_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get serviceplanmapping_BulkDeleteFailures() {
        return this._serviceplanmapping_BulkDeleteFailures;
    };
    /**
     * Sets the serviceplanmapping_BulkDeleteFailures property value. 
     * @param value Value to set for the serviceplanmapping_BulkDeleteFailures property.
     */
    public set serviceplanmapping_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._serviceplanmapping_BulkDeleteFailures = value;
    };
    /**
     * Gets the serviceplanmapping_DuplicateBaseRecord property value. 
     * @returns a duplicaterecord
     */
    public get serviceplanmapping_DuplicateBaseRecord() {
        return this._serviceplanmapping_DuplicateBaseRecord;
    };
    /**
     * Sets the serviceplanmapping_DuplicateBaseRecord property value. 
     * @param value Value to set for the serviceplanmapping_DuplicateBaseRecord property.
     */
    public set serviceplanmapping_DuplicateBaseRecord(value: Duplicaterecord[] | undefined) {
        this._serviceplanmapping_DuplicateBaseRecord = value;
    };
    /**
     * Gets the serviceplanmapping_DuplicateMatchingRecord property value. 
     * @returns a duplicaterecord
     */
    public get serviceplanmapping_DuplicateMatchingRecord() {
        return this._serviceplanmapping_DuplicateMatchingRecord;
    };
    /**
     * Sets the serviceplanmapping_DuplicateMatchingRecord property value. 
     * @param value Value to set for the serviceplanmapping_DuplicateMatchingRecord property.
     */
    public set serviceplanmapping_DuplicateMatchingRecord(value: Duplicaterecord[] | undefined) {
        this._serviceplanmapping_DuplicateMatchingRecord = value;
    };
    /**
     * Gets the serviceplanmapping_MailboxTrackingFolders property value. 
     * @returns a mailboxtrackingfolder
     */
    public get serviceplanmapping_MailboxTrackingFolders() {
        return this._serviceplanmapping_MailboxTrackingFolders;
    };
    /**
     * Sets the serviceplanmapping_MailboxTrackingFolders property value. 
     * @param value Value to set for the serviceplanmapping_MailboxTrackingFolders property.
     */
    public set serviceplanmapping_MailboxTrackingFolders(value: Mailboxtrackingfolder[] | undefined) {
        this._serviceplanmapping_MailboxTrackingFolders = value;
    };
    /**
     * Gets the serviceplanmapping_PrincipalObjectAttributeAccesses property value. 
     * @returns a principalobjectattributeaccess
     */
    public get serviceplanmapping_PrincipalObjectAttributeAccesses() {
        return this._serviceplanmapping_PrincipalObjectAttributeAccesses;
    };
    /**
     * Sets the serviceplanmapping_PrincipalObjectAttributeAccesses property value. 
     * @param value Value to set for the serviceplanmapping_PrincipalObjectAttributeAccesses property.
     */
    public set serviceplanmapping_PrincipalObjectAttributeAccesses(value: Principalobjectattributeaccess[] | undefined) {
        this._serviceplanmapping_PrincipalObjectAttributeAccesses = value;
    };
    /**
     * Gets the serviceplanmapping_ProcessSession property value. 
     * @returns a processsession
     */
    public get serviceplanmapping_ProcessSession() {
        return this._serviceplanmapping_ProcessSession;
    };
    /**
     * Sets the serviceplanmapping_ProcessSession property value. 
     * @param value Value to set for the serviceplanmapping_ProcessSession property.
     */
    public set serviceplanmapping_ProcessSession(value: Processsession[] | undefined) {
        this._serviceplanmapping_ProcessSession = value;
    };
    /**
     * Gets the serviceplanmapping_SyncErrors property value. 
     * @returns a syncerror
     */
    public get serviceplanmapping_SyncErrors() {
        return this._serviceplanmapping_SyncErrors;
    };
    /**
     * Sets the serviceplanmapping_SyncErrors property value. 
     * @param value Value to set for the serviceplanmapping_SyncErrors property.
     */
    public set serviceplanmapping_SyncErrors(value: Syncerror[] | undefined) {
        this._serviceplanmapping_SyncErrors = value;
    };
    /**
     * Gets the serviceplanmappingid property value. 
     * @returns a string
     */
    public get serviceplanmappingid() {
        return this._serviceplanmappingid;
    };
    /**
     * Sets the serviceplanmappingid property value. 
     * @param value Value to set for the serviceplanmappingid property.
     */
    public set serviceplanmappingid(value: string | undefined) {
        this._serviceplanmappingid = value;
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
