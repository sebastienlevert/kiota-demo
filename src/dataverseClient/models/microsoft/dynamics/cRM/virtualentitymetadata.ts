import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createBooleanManagedPropertyFromDiscriminatorValue} from './createBooleanManagedPropertyFromDiscriminatorValue';
import {createBulkdeletefailureFromDiscriminatorValue} from './createBulkdeletefailureFromDiscriminatorValue';
import {createEntityFromDiscriminatorValue} from './createEntityFromDiscriminatorValue';
import {createMailboxtrackingfolderFromDiscriminatorValue} from './createMailboxtrackingfolderFromDiscriminatorValue';
import {createOrganizationFromDiscriminatorValue} from './createOrganizationFromDiscriminatorValue';
import {createPrincipalobjectattributeaccessFromDiscriminatorValue} from './createPrincipalobjectattributeaccessFromDiscriminatorValue';
import {createProcesssessionFromDiscriminatorValue} from './createProcesssessionFromDiscriminatorValue';
import {createSyncerrorFromDiscriminatorValue} from './createSyncerrorFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {Asyncoperation, BooleanManagedProperty, Bulkdeletefailure, Crmbaseentity, Entity, Mailboxtrackingfolder, Organization, Principalobjectattributeaccess, Processsession, Syncerror, Systemuser} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Virtualentitymetadata extends Crmbaseentity implements Parsable {
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __extensionofrecordid_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private __organizationid_value?: string | undefined;
    private _componentidunique?: string | undefined;
    private _componentstate?: number | undefined;
    private _createdby?: Systemuser | undefined;
    private _createdon?: Date | undefined;
    private _createdonbehalfby?: Systemuser | undefined;
    private _extensionofrecordid?: Entity | undefined;
    private _importsequencenumber?: number | undefined;
    private _ischangedfieldsenabledforupdateevent?: boolean | undefined;
    private _iscustomizable?: BooleanManagedProperty | undefined;
    private _ismanaged?: boolean | undefined;
    private _isonexternalcreatedenabled?: boolean | undefined;
    private _isonexternaldeletedenabled?: boolean | undefined;
    private _isonexternalupdatedenabled?: boolean | undefined;
    private _modifiedby?: Systemuser | undefined;
    private _modifiedon?: Date | undefined;
    private _modifiedonbehalfby?: Systemuser | undefined;
    private _name?: string | undefined;
    private _organizationid?: Organization | undefined;
    private _overriddencreatedon?: Date | undefined;
    private _overwritetime?: Date | undefined;
    private _solutionid?: string | undefined;
    private _statecode?: number | undefined;
    private _statuscode?: number | undefined;
    private _timezoneruleversionnumber?: number | undefined;
    private _utcconversiontimezonecode?: number | undefined;
    private _versionnumber?: number | undefined;
    private _virtualentitymetadata_AsyncOperations?: Asyncoperation[] | undefined;
    private _virtualentitymetadata_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _virtualentitymetadata_MailboxTrackingFolders?: Mailboxtrackingfolder[] | undefined;
    private _virtualentitymetadata_PrincipalObjectAttributeAccesses?: Principalobjectattributeaccess[] | undefined;
    private _virtualentitymetadata_ProcessSession?: Processsession[] | undefined;
    private _virtualentitymetadata_SyncErrors?: Syncerror[] | undefined;
    private _virtualentitymetadataid?: string | undefined;
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
     * Gets the _extensionofrecordid_value property value. 
     * @returns a string
     */
    public get _extensionofrecordid_value() {
        return this.__extensionofrecordid_value;
    };
    /**
     * Sets the _extensionofrecordid_value property value. 
     * @param value Value to set for the _extensionofrecordid_value property.
     */
    public set _extensionofrecordid_value(value: string | undefined) {
        this.__extensionofrecordid_value = value;
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
     * Instantiates a new virtualentitymetadata and sets the default values.
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
     * Gets the extensionofrecordid property value. 
     * @returns a entity
     */
    public get extensionofrecordid() {
        return this._extensionofrecordid;
    };
    /**
     * Sets the extensionofrecordid property value. 
     * @param value Value to set for the extensionofrecordid property.
     */
    public set extensionofrecordid(value: Entity | undefined) {
        this._extensionofrecordid = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Record<string, (item: T, node: ParseNode) => void> {
        return {...super.getFieldDeserializers<T>(),
            "_createdby_value": (o, n) => { (o as unknown as Virtualentitymetadata)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Virtualentitymetadata)._createdonbehalfby_value = n.getStringValue(); },
            "_extensionofrecordid_value": (o, n) => { (o as unknown as Virtualentitymetadata)._extensionofrecordid_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Virtualentitymetadata)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Virtualentitymetadata)._modifiedonbehalfby_value = n.getStringValue(); },
            "_organizationid_value": (o, n) => { (o as unknown as Virtualentitymetadata)._organizationid_value = n.getStringValue(); },
            "componentidunique": (o, n) => { (o as unknown as Virtualentitymetadata).componentidunique = n.getStringValue(); },
            "componentstate": (o, n) => { (o as unknown as Virtualentitymetadata).componentstate = n.getNumberValue(); },
            "createdby": (o, n) => { (o as unknown as Virtualentitymetadata).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Virtualentitymetadata).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Virtualentitymetadata).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "extensionofrecordid": (o, n) => { (o as unknown as Virtualentitymetadata).extensionofrecordid = n.getObjectValue<Entity>(createEntityFromDiscriminatorValue); },
            "importsequencenumber": (o, n) => { (o as unknown as Virtualentitymetadata).importsequencenumber = n.getNumberValue(); },
            "ischangedfieldsenabledforupdateevent": (o, n) => { (o as unknown as Virtualentitymetadata).ischangedfieldsenabledforupdateevent = n.getBooleanValue(); },
            "iscustomizable": (o, n) => { (o as unknown as Virtualentitymetadata).iscustomizable = n.getObjectValue<BooleanManagedProperty>(createBooleanManagedPropertyFromDiscriminatorValue); },
            "ismanaged": (o, n) => { (o as unknown as Virtualentitymetadata).ismanaged = n.getBooleanValue(); },
            "isonexternalcreatedenabled": (o, n) => { (o as unknown as Virtualentitymetadata).isonexternalcreatedenabled = n.getBooleanValue(); },
            "isonexternaldeletedenabled": (o, n) => { (o as unknown as Virtualentitymetadata).isonexternaldeletedenabled = n.getBooleanValue(); },
            "isonexternalupdatedenabled": (o, n) => { (o as unknown as Virtualentitymetadata).isonexternalupdatedenabled = n.getBooleanValue(); },
            "modifiedby": (o, n) => { (o as unknown as Virtualentitymetadata).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Virtualentitymetadata).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Virtualentitymetadata).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "name": (o, n) => { (o as unknown as Virtualentitymetadata).name = n.getStringValue(); },
            "organizationid": (o, n) => { (o as unknown as Virtualentitymetadata).organizationid = n.getObjectValue<Organization>(createOrganizationFromDiscriminatorValue); },
            "overriddencreatedon": (o, n) => { (o as unknown as Virtualentitymetadata).overriddencreatedon = n.getDateValue(); },
            "overwritetime": (o, n) => { (o as unknown as Virtualentitymetadata).overwritetime = n.getDateValue(); },
            "solutionid": (o, n) => { (o as unknown as Virtualentitymetadata).solutionid = n.getStringValue(); },
            "statecode": (o, n) => { (o as unknown as Virtualentitymetadata).statecode = n.getNumberValue(); },
            "statuscode": (o, n) => { (o as unknown as Virtualentitymetadata).statuscode = n.getNumberValue(); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Virtualentitymetadata).timezoneruleversionnumber = n.getNumberValue(); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Virtualentitymetadata).utcconversiontimezonecode = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as Virtualentitymetadata).versionnumber = n.getNumberValue(); },
            "virtualentitymetadata_AsyncOperations": (o, n) => { (o as unknown as Virtualentitymetadata).virtualentitymetadata_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "virtualentitymetadata_BulkDeleteFailures": (o, n) => { (o as unknown as Virtualentitymetadata).virtualentitymetadata_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "virtualentitymetadata_MailboxTrackingFolders": (o, n) => { (o as unknown as Virtualentitymetadata).virtualentitymetadata_MailboxTrackingFolders = n.getCollectionOfObjectValues<Mailboxtrackingfolder>(createMailboxtrackingfolderFromDiscriminatorValue); },
            "virtualentitymetadata_PrincipalObjectAttributeAccesses": (o, n) => { (o as unknown as Virtualentitymetadata).virtualentitymetadata_PrincipalObjectAttributeAccesses = n.getCollectionOfObjectValues<Principalobjectattributeaccess>(createPrincipalobjectattributeaccessFromDiscriminatorValue); },
            "virtualentitymetadata_ProcessSession": (o, n) => { (o as unknown as Virtualentitymetadata).virtualentitymetadata_ProcessSession = n.getCollectionOfObjectValues<Processsession>(createProcesssessionFromDiscriminatorValue); },
            "virtualentitymetadata_SyncErrors": (o, n) => { (o as unknown as Virtualentitymetadata).virtualentitymetadata_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "virtualentitymetadataid": (o, n) => { (o as unknown as Virtualentitymetadata).virtualentitymetadataid = n.getStringValue(); },
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
     * Gets the ischangedfieldsenabledforupdateevent property value. 
     * @returns a boolean
     */
    public get ischangedfieldsenabledforupdateevent() {
        return this._ischangedfieldsenabledforupdateevent;
    };
    /**
     * Sets the ischangedfieldsenabledforupdateevent property value. 
     * @param value Value to set for the ischangedfieldsenabledforupdateevent property.
     */
    public set ischangedfieldsenabledforupdateevent(value: boolean | undefined) {
        this._ischangedfieldsenabledforupdateevent = value;
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
     * Gets the isonexternalcreatedenabled property value. 
     * @returns a boolean
     */
    public get isonexternalcreatedenabled() {
        return this._isonexternalcreatedenabled;
    };
    /**
     * Sets the isonexternalcreatedenabled property value. 
     * @param value Value to set for the isonexternalcreatedenabled property.
     */
    public set isonexternalcreatedenabled(value: boolean | undefined) {
        this._isonexternalcreatedenabled = value;
    };
    /**
     * Gets the isonexternaldeletedenabled property value. 
     * @returns a boolean
     */
    public get isonexternaldeletedenabled() {
        return this._isonexternaldeletedenabled;
    };
    /**
     * Sets the isonexternaldeletedenabled property value. 
     * @param value Value to set for the isonexternaldeletedenabled property.
     */
    public set isonexternaldeletedenabled(value: boolean | undefined) {
        this._isonexternaldeletedenabled = value;
    };
    /**
     * Gets the isonexternalupdatedenabled property value. 
     * @returns a boolean
     */
    public get isonexternalupdatedenabled() {
        return this._isonexternalupdatedenabled;
    };
    /**
     * Sets the isonexternalupdatedenabled property value. 
     * @param value Value to set for the isonexternalupdatedenabled property.
     */
    public set isonexternalupdatedenabled(value: boolean | undefined) {
        this._isonexternalupdatedenabled = value;
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
        writer.writeStringValue("_extensionofrecordid_value", this._extensionofrecordid_value);
        writer.writeStringValue("_modifiedby_value", this._modifiedby_value);
        writer.writeStringValue("_modifiedonbehalfby_value", this._modifiedonbehalfby_value);
        writer.writeStringValue("_organizationid_value", this._organizationid_value);
        writer.writeStringValue("componentidunique", this.componentidunique);
        writer.writeNumberValue("componentstate", this.componentstate);
        writer.writeObjectValue<Systemuser>("createdby", this.createdby);
        writer.writeDateValue("createdon", this.createdon);
        writer.writeObjectValue<Systemuser>("createdonbehalfby", this.createdonbehalfby);
        writer.writeObjectValue<Entity>("extensionofrecordid", this.extensionofrecordid);
        writer.writeNumberValue("importsequencenumber", this.importsequencenumber);
        writer.writeBooleanValue("ischangedfieldsenabledforupdateevent", this.ischangedfieldsenabledforupdateevent);
        writer.writeObjectValue<BooleanManagedProperty>("iscustomizable", this.iscustomizable);
        writer.writeBooleanValue("ismanaged", this.ismanaged);
        writer.writeBooleanValue("isonexternalcreatedenabled", this.isonexternalcreatedenabled);
        writer.writeBooleanValue("isonexternaldeletedenabled", this.isonexternaldeletedenabled);
        writer.writeBooleanValue("isonexternalupdatedenabled", this.isonexternalupdatedenabled);
        writer.writeObjectValue<Systemuser>("modifiedby", this.modifiedby);
        writer.writeDateValue("modifiedon", this.modifiedon);
        writer.writeObjectValue<Systemuser>("modifiedonbehalfby", this.modifiedonbehalfby);
        writer.writeStringValue("name", this.name);
        writer.writeObjectValue<Organization>("organizationid", this.organizationid);
        writer.writeDateValue("overriddencreatedon", this.overriddencreatedon);
        writer.writeDateValue("overwritetime", this.overwritetime);
        writer.writeStringValue("solutionid", this.solutionid);
        writer.writeNumberValue("statecode", this.statecode);
        writer.writeNumberValue("statuscode", this.statuscode);
        writer.writeNumberValue("timezoneruleversionnumber", this.timezoneruleversionnumber);
        writer.writeNumberValue("utcconversiontimezonecode", this.utcconversiontimezonecode);
        writer.writeNumberValue("versionnumber", this.versionnumber);
        writer.writeCollectionOfObjectValues<Asyncoperation>("virtualentitymetadata_AsyncOperations", this.virtualentitymetadata_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("virtualentitymetadata_BulkDeleteFailures", this.virtualentitymetadata_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Mailboxtrackingfolder>("virtualentitymetadata_MailboxTrackingFolders", this.virtualentitymetadata_MailboxTrackingFolders);
        writer.writeCollectionOfObjectValues<Principalobjectattributeaccess>("virtualentitymetadata_PrincipalObjectAttributeAccesses", this.virtualentitymetadata_PrincipalObjectAttributeAccesses);
        writer.writeCollectionOfObjectValues<Processsession>("virtualentitymetadata_ProcessSession", this.virtualentitymetadata_ProcessSession);
        writer.writeCollectionOfObjectValues<Syncerror>("virtualentitymetadata_SyncErrors", this.virtualentitymetadata_SyncErrors);
        writer.writeStringValue("virtualentitymetadataid", this.virtualentitymetadataid);
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
    /**
     * Gets the virtualentitymetadata_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get virtualentitymetadata_AsyncOperations() {
        return this._virtualentitymetadata_AsyncOperations;
    };
    /**
     * Sets the virtualentitymetadata_AsyncOperations property value. 
     * @param value Value to set for the virtualentitymetadata_AsyncOperations property.
     */
    public set virtualentitymetadata_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._virtualentitymetadata_AsyncOperations = value;
    };
    /**
     * Gets the virtualentitymetadata_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get virtualentitymetadata_BulkDeleteFailures() {
        return this._virtualentitymetadata_BulkDeleteFailures;
    };
    /**
     * Sets the virtualentitymetadata_BulkDeleteFailures property value. 
     * @param value Value to set for the virtualentitymetadata_BulkDeleteFailures property.
     */
    public set virtualentitymetadata_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._virtualentitymetadata_BulkDeleteFailures = value;
    };
    /**
     * Gets the virtualentitymetadata_MailboxTrackingFolders property value. 
     * @returns a mailboxtrackingfolder
     */
    public get virtualentitymetadata_MailboxTrackingFolders() {
        return this._virtualentitymetadata_MailboxTrackingFolders;
    };
    /**
     * Sets the virtualentitymetadata_MailboxTrackingFolders property value. 
     * @param value Value to set for the virtualentitymetadata_MailboxTrackingFolders property.
     */
    public set virtualentitymetadata_MailboxTrackingFolders(value: Mailboxtrackingfolder[] | undefined) {
        this._virtualentitymetadata_MailboxTrackingFolders = value;
    };
    /**
     * Gets the virtualentitymetadata_PrincipalObjectAttributeAccesses property value. 
     * @returns a principalobjectattributeaccess
     */
    public get virtualentitymetadata_PrincipalObjectAttributeAccesses() {
        return this._virtualentitymetadata_PrincipalObjectAttributeAccesses;
    };
    /**
     * Sets the virtualentitymetadata_PrincipalObjectAttributeAccesses property value. 
     * @param value Value to set for the virtualentitymetadata_PrincipalObjectAttributeAccesses property.
     */
    public set virtualentitymetadata_PrincipalObjectAttributeAccesses(value: Principalobjectattributeaccess[] | undefined) {
        this._virtualentitymetadata_PrincipalObjectAttributeAccesses = value;
    };
    /**
     * Gets the virtualentitymetadata_ProcessSession property value. 
     * @returns a processsession
     */
    public get virtualentitymetadata_ProcessSession() {
        return this._virtualentitymetadata_ProcessSession;
    };
    /**
     * Sets the virtualentitymetadata_ProcessSession property value. 
     * @param value Value to set for the virtualentitymetadata_ProcessSession property.
     */
    public set virtualentitymetadata_ProcessSession(value: Processsession[] | undefined) {
        this._virtualentitymetadata_ProcessSession = value;
    };
    /**
     * Gets the virtualentitymetadata_SyncErrors property value. 
     * @returns a syncerror
     */
    public get virtualentitymetadata_SyncErrors() {
        return this._virtualentitymetadata_SyncErrors;
    };
    /**
     * Sets the virtualentitymetadata_SyncErrors property value. 
     * @param value Value to set for the virtualentitymetadata_SyncErrors property.
     */
    public set virtualentitymetadata_SyncErrors(value: Syncerror[] | undefined) {
        this._virtualentitymetadata_SyncErrors = value;
    };
    /**
     * Gets the virtualentitymetadataid property value. 
     * @returns a string
     */
    public get virtualentitymetadataid() {
        return this._virtualentitymetadataid;
    };
    /**
     * Sets the virtualentitymetadataid property value. 
     * @param value Value to set for the virtualentitymetadataid property.
     */
    public set virtualentitymetadataid(value: string | undefined) {
        this._virtualentitymetadataid = value;
    };
}
