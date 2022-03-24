import {createAnnotationFromDiscriminatorValue} from './createAnnotationFromDiscriminatorValue';
import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createBulkdeletefailureFromDiscriminatorValue} from './createBulkdeletefailureFromDiscriminatorValue';
import {createMailboxtrackingfolderFromDiscriminatorValue} from './createMailboxtrackingfolderFromDiscriminatorValue';
import {createMsdyn_customerassetFromDiscriminatorValue} from './createMsdyn_customerassetFromDiscriminatorValue';
import {createOrganizationFromDiscriminatorValue} from './createOrganizationFromDiscriminatorValue';
import {createPrincipalobjectattributeaccessFromDiscriminatorValue} from './createPrincipalobjectattributeaccessFromDiscriminatorValue';
import {createProcesssessionFromDiscriminatorValue} from './createProcesssessionFromDiscriminatorValue';
import {createSyncerrorFromDiscriminatorValue} from './createSyncerrorFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {Annotation, Asyncoperation, Bulkdeletefailure, Crmbaseentity, Mailboxtrackingfolder, Msdyn_customerasset, Organization, Principalobjectattributeaccess, Processsession, Syncerror, Systemuser} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Msdyn_3dmodel extends Crmbaseentity implements Parsable {
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private __organizationid_value?: string | undefined;
    private _createdby?: Systemuser | undefined;
    private _createdon?: Date | undefined;
    private _createdonbehalfby?: Systemuser | undefined;
    private _entityimage?: string | undefined;
    private _entityimage_timestamp?: number | undefined;
    private _entityimage_url?: string | undefined;
    private _entityimageid?: string | undefined;
    private _importsequencenumber?: number | undefined;
    private _modifiedby?: Systemuser | undefined;
    private _modifiedon?: Date | undefined;
    private _modifiedonbehalfby?: Systemuser | undefined;
    private _msdyn_3dmodel_Annotations?: Annotation[] | undefined;
    private _msdyn_3dmodel_AsyncOperations?: Asyncoperation[] | undefined;
    private _msdyn_3dmodel_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _msdyn_3dmodel_MailboxTrackingFolders?: Mailboxtrackingfolder[] | undefined;
    private _msdyn_3dmodel_PrincipalObjectAttributeAccesses?: Principalobjectattributeaccess[] | undefined;
    private _msdyn_3dmodel_ProcessSession?: Processsession[] | undefined;
    private _msdyn_3dmodel_SyncErrors?: Syncerror[] | undefined;
    private _msdyn_3dmodelid?: string | undefined;
    private _msdyn_filetype?: number | undefined;
    private _msdyn_fileurl?: string | undefined;
    private _msdyn_msdyn_customerasset_msdyn_3dmodel?: Msdyn_customerasset[] | undefined;
    private _msdyn_name?: string | undefined;
    private _msdyn_storagetype?: number | undefined;
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
     * Instantiates a new msdyn_3dmodel and sets the default values.
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
     * Gets the entityimage property value. 
     * @returns a binary
     */
    public get entityimage() {
        return this._entityimage;
    };
    /**
     * Sets the entityimage property value. 
     * @param value Value to set for the entityimage property.
     */
    public set entityimage(value: string | undefined) {
        this._entityimage = value;
    };
    /**
     * Gets the entityimage_timestamp property value. 
     * @returns a int64
     */
    public get entityimage_timestamp() {
        return this._entityimage_timestamp;
    };
    /**
     * Sets the entityimage_timestamp property value. 
     * @param value Value to set for the entityimage_timestamp property.
     */
    public set entityimage_timestamp(value: number | undefined) {
        this._entityimage_timestamp = value;
    };
    /**
     * Gets the entityimage_url property value. 
     * @returns a string
     */
    public get entityimage_url() {
        return this._entityimage_url;
    };
    /**
     * Sets the entityimage_url property value. 
     * @param value Value to set for the entityimage_url property.
     */
    public set entityimage_url(value: string | undefined) {
        this._entityimage_url = value;
    };
    /**
     * Gets the entityimageid property value. 
     * @returns a string
     */
    public get entityimageid() {
        return this._entityimageid;
    };
    /**
     * Sets the entityimageid property value. 
     * @param value Value to set for the entityimageid property.
     */
    public set entityimageid(value: string | undefined) {
        this._entityimageid = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Record<string, (item: T, node: ParseNode) => void> {
        return {...super.getFieldDeserializers<T>(),
            "_createdby_value": (o, n) => { (o as unknown as Msdyn_3dmodel)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Msdyn_3dmodel)._createdonbehalfby_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Msdyn_3dmodel)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Msdyn_3dmodel)._modifiedonbehalfby_value = n.getStringValue(); },
            "_organizationid_value": (o, n) => { (o as unknown as Msdyn_3dmodel)._organizationid_value = n.getStringValue(); },
            "createdby": (o, n) => { (o as unknown as Msdyn_3dmodel).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Msdyn_3dmodel).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Msdyn_3dmodel).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "entityimage": (o, n) => { (o as unknown as Msdyn_3dmodel).entityimage = n.getStringValue(); },
            "entityimage_timestamp": (o, n) => { (o as unknown as Msdyn_3dmodel).entityimage_timestamp = n.getNumberValue(); },
            "entityimage_url": (o, n) => { (o as unknown as Msdyn_3dmodel).entityimage_url = n.getStringValue(); },
            "entityimageid": (o, n) => { (o as unknown as Msdyn_3dmodel).entityimageid = n.getStringValue(); },
            "importsequencenumber": (o, n) => { (o as unknown as Msdyn_3dmodel).importsequencenumber = n.getNumberValue(); },
            "modifiedby": (o, n) => { (o as unknown as Msdyn_3dmodel).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Msdyn_3dmodel).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Msdyn_3dmodel).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "msdyn_3dmodel_Annotations": (o, n) => { (o as unknown as Msdyn_3dmodel).msdyn_3dmodel_Annotations = n.getCollectionOfObjectValues<Annotation>(createAnnotationFromDiscriminatorValue); },
            "msdyn_3dmodel_AsyncOperations": (o, n) => { (o as unknown as Msdyn_3dmodel).msdyn_3dmodel_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "msdyn_3dmodel_BulkDeleteFailures": (o, n) => { (o as unknown as Msdyn_3dmodel).msdyn_3dmodel_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "msdyn_3dmodel_MailboxTrackingFolders": (o, n) => { (o as unknown as Msdyn_3dmodel).msdyn_3dmodel_MailboxTrackingFolders = n.getCollectionOfObjectValues<Mailboxtrackingfolder>(createMailboxtrackingfolderFromDiscriminatorValue); },
            "msdyn_3dmodel_PrincipalObjectAttributeAccesses": (o, n) => { (o as unknown as Msdyn_3dmodel).msdyn_3dmodel_PrincipalObjectAttributeAccesses = n.getCollectionOfObjectValues<Principalobjectattributeaccess>(createPrincipalobjectattributeaccessFromDiscriminatorValue); },
            "msdyn_3dmodel_ProcessSession": (o, n) => { (o as unknown as Msdyn_3dmodel).msdyn_3dmodel_ProcessSession = n.getCollectionOfObjectValues<Processsession>(createProcesssessionFromDiscriminatorValue); },
            "msdyn_3dmodel_SyncErrors": (o, n) => { (o as unknown as Msdyn_3dmodel).msdyn_3dmodel_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "msdyn_3dmodelid": (o, n) => { (o as unknown as Msdyn_3dmodel).msdyn_3dmodelid = n.getStringValue(); },
            "msdyn_filetype": (o, n) => { (o as unknown as Msdyn_3dmodel).msdyn_filetype = n.getNumberValue(); },
            "msdyn_fileurl": (o, n) => { (o as unknown as Msdyn_3dmodel).msdyn_fileurl = n.getStringValue(); },
            "msdyn_msdyn_customerasset_msdyn_3dmodel": (o, n) => { (o as unknown as Msdyn_3dmodel).msdyn_msdyn_customerasset_msdyn_3dmodel = n.getCollectionOfObjectValues<Msdyn_customerasset>(createMsdyn_customerassetFromDiscriminatorValue); },
            "msdyn_name": (o, n) => { (o as unknown as Msdyn_3dmodel).msdyn_name = n.getStringValue(); },
            "msdyn_storagetype": (o, n) => { (o as unknown as Msdyn_3dmodel).msdyn_storagetype = n.getNumberValue(); },
            "organizationid": (o, n) => { (o as unknown as Msdyn_3dmodel).organizationid = n.getObjectValue<Organization>(createOrganizationFromDiscriminatorValue); },
            "overriddencreatedon": (o, n) => { (o as unknown as Msdyn_3dmodel).overriddencreatedon = n.getDateValue(); },
            "statecode": (o, n) => { (o as unknown as Msdyn_3dmodel).statecode = n.getNumberValue(); },
            "statuscode": (o, n) => { (o as unknown as Msdyn_3dmodel).statuscode = n.getNumberValue(); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Msdyn_3dmodel).timezoneruleversionnumber = n.getNumberValue(); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Msdyn_3dmodel).utcconversiontimezonecode = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as Msdyn_3dmodel).versionnumber = n.getNumberValue(); },
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
     * Gets the msdyn_3dmodel_Annotations property value. 
     * @returns a annotation
     */
    public get msdyn_3dmodel_Annotations() {
        return this._msdyn_3dmodel_Annotations;
    };
    /**
     * Sets the msdyn_3dmodel_Annotations property value. 
     * @param value Value to set for the msdyn_3dmodel_Annotations property.
     */
    public set msdyn_3dmodel_Annotations(value: Annotation[] | undefined) {
        this._msdyn_3dmodel_Annotations = value;
    };
    /**
     * Gets the msdyn_3dmodel_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get msdyn_3dmodel_AsyncOperations() {
        return this._msdyn_3dmodel_AsyncOperations;
    };
    /**
     * Sets the msdyn_3dmodel_AsyncOperations property value. 
     * @param value Value to set for the msdyn_3dmodel_AsyncOperations property.
     */
    public set msdyn_3dmodel_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._msdyn_3dmodel_AsyncOperations = value;
    };
    /**
     * Gets the msdyn_3dmodel_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get msdyn_3dmodel_BulkDeleteFailures() {
        return this._msdyn_3dmodel_BulkDeleteFailures;
    };
    /**
     * Sets the msdyn_3dmodel_BulkDeleteFailures property value. 
     * @param value Value to set for the msdyn_3dmodel_BulkDeleteFailures property.
     */
    public set msdyn_3dmodel_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._msdyn_3dmodel_BulkDeleteFailures = value;
    };
    /**
     * Gets the msdyn_3dmodel_MailboxTrackingFolders property value. 
     * @returns a mailboxtrackingfolder
     */
    public get msdyn_3dmodel_MailboxTrackingFolders() {
        return this._msdyn_3dmodel_MailboxTrackingFolders;
    };
    /**
     * Sets the msdyn_3dmodel_MailboxTrackingFolders property value. 
     * @param value Value to set for the msdyn_3dmodel_MailboxTrackingFolders property.
     */
    public set msdyn_3dmodel_MailboxTrackingFolders(value: Mailboxtrackingfolder[] | undefined) {
        this._msdyn_3dmodel_MailboxTrackingFolders = value;
    };
    /**
     * Gets the msdyn_3dmodel_PrincipalObjectAttributeAccesses property value. 
     * @returns a principalobjectattributeaccess
     */
    public get msdyn_3dmodel_PrincipalObjectAttributeAccesses() {
        return this._msdyn_3dmodel_PrincipalObjectAttributeAccesses;
    };
    /**
     * Sets the msdyn_3dmodel_PrincipalObjectAttributeAccesses property value. 
     * @param value Value to set for the msdyn_3dmodel_PrincipalObjectAttributeAccesses property.
     */
    public set msdyn_3dmodel_PrincipalObjectAttributeAccesses(value: Principalobjectattributeaccess[] | undefined) {
        this._msdyn_3dmodel_PrincipalObjectAttributeAccesses = value;
    };
    /**
     * Gets the msdyn_3dmodel_ProcessSession property value. 
     * @returns a processsession
     */
    public get msdyn_3dmodel_ProcessSession() {
        return this._msdyn_3dmodel_ProcessSession;
    };
    /**
     * Sets the msdyn_3dmodel_ProcessSession property value. 
     * @param value Value to set for the msdyn_3dmodel_ProcessSession property.
     */
    public set msdyn_3dmodel_ProcessSession(value: Processsession[] | undefined) {
        this._msdyn_3dmodel_ProcessSession = value;
    };
    /**
     * Gets the msdyn_3dmodel_SyncErrors property value. 
     * @returns a syncerror
     */
    public get msdyn_3dmodel_SyncErrors() {
        return this._msdyn_3dmodel_SyncErrors;
    };
    /**
     * Sets the msdyn_3dmodel_SyncErrors property value. 
     * @param value Value to set for the msdyn_3dmodel_SyncErrors property.
     */
    public set msdyn_3dmodel_SyncErrors(value: Syncerror[] | undefined) {
        this._msdyn_3dmodel_SyncErrors = value;
    };
    /**
     * Gets the msdyn_3dmodelid property value. 
     * @returns a string
     */
    public get msdyn_3dmodelid() {
        return this._msdyn_3dmodelid;
    };
    /**
     * Sets the msdyn_3dmodelid property value. 
     * @param value Value to set for the msdyn_3dmodelid property.
     */
    public set msdyn_3dmodelid(value: string | undefined) {
        this._msdyn_3dmodelid = value;
    };
    /**
     * Gets the msdyn_filetype property value. 
     * @returns a integer
     */
    public get msdyn_filetype() {
        return this._msdyn_filetype;
    };
    /**
     * Sets the msdyn_filetype property value. 
     * @param value Value to set for the msdyn_filetype property.
     */
    public set msdyn_filetype(value: number | undefined) {
        this._msdyn_filetype = value;
    };
    /**
     * Gets the msdyn_fileurl property value. 
     * @returns a string
     */
    public get msdyn_fileurl() {
        return this._msdyn_fileurl;
    };
    /**
     * Sets the msdyn_fileurl property value. 
     * @param value Value to set for the msdyn_fileurl property.
     */
    public set msdyn_fileurl(value: string | undefined) {
        this._msdyn_fileurl = value;
    };
    /**
     * Gets the msdyn_msdyn_customerasset_msdyn_3dmodel property value. 
     * @returns a msdyn_customerasset
     */
    public get msdyn_msdyn_customerasset_msdyn_3dmodel() {
        return this._msdyn_msdyn_customerasset_msdyn_3dmodel;
    };
    /**
     * Sets the msdyn_msdyn_customerasset_msdyn_3dmodel property value. 
     * @param value Value to set for the msdyn_msdyn_customerasset_msdyn_3dmodel property.
     */
    public set msdyn_msdyn_customerasset_msdyn_3dmodel(value: Msdyn_customerasset[] | undefined) {
        this._msdyn_msdyn_customerasset_msdyn_3dmodel = value;
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
     * Gets the msdyn_storagetype property value. 
     * @returns a integer
     */
    public get msdyn_storagetype() {
        return this._msdyn_storagetype;
    };
    /**
     * Sets the msdyn_storagetype property value. 
     * @param value Value to set for the msdyn_storagetype property.
     */
    public set msdyn_storagetype(value: number | undefined) {
        this._msdyn_storagetype = value;
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
        writer.writeStringValue("entityimage", this.entityimage);
        writer.writeNumberValue("entityimage_timestamp", this.entityimage_timestamp);
        writer.writeStringValue("entityimage_url", this.entityimage_url);
        writer.writeStringValue("entityimageid", this.entityimageid);
        writer.writeNumberValue("importsequencenumber", this.importsequencenumber);
        writer.writeObjectValue<Systemuser>("modifiedby", this.modifiedby);
        writer.writeDateValue("modifiedon", this.modifiedon);
        writer.writeObjectValue<Systemuser>("modifiedonbehalfby", this.modifiedonbehalfby);
        writer.writeCollectionOfObjectValues<Annotation>("msdyn_3dmodel_Annotations", this.msdyn_3dmodel_Annotations);
        writer.writeCollectionOfObjectValues<Asyncoperation>("msdyn_3dmodel_AsyncOperations", this.msdyn_3dmodel_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("msdyn_3dmodel_BulkDeleteFailures", this.msdyn_3dmodel_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Mailboxtrackingfolder>("msdyn_3dmodel_MailboxTrackingFolders", this.msdyn_3dmodel_MailboxTrackingFolders);
        writer.writeCollectionOfObjectValues<Principalobjectattributeaccess>("msdyn_3dmodel_PrincipalObjectAttributeAccesses", this.msdyn_3dmodel_PrincipalObjectAttributeAccesses);
        writer.writeCollectionOfObjectValues<Processsession>("msdyn_3dmodel_ProcessSession", this.msdyn_3dmodel_ProcessSession);
        writer.writeCollectionOfObjectValues<Syncerror>("msdyn_3dmodel_SyncErrors", this.msdyn_3dmodel_SyncErrors);
        writer.writeStringValue("msdyn_3dmodelid", this.msdyn_3dmodelid);
        writer.writeNumberValue("msdyn_filetype", this.msdyn_filetype);
        writer.writeStringValue("msdyn_fileurl", this.msdyn_fileurl);
        writer.writeCollectionOfObjectValues<Msdyn_customerasset>("msdyn_msdyn_customerasset_msdyn_3dmodel", this.msdyn_msdyn_customerasset_msdyn_3dmodel);
        writer.writeStringValue("msdyn_name", this.msdyn_name);
        writer.writeNumberValue("msdyn_storagetype", this.msdyn_storagetype);
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
