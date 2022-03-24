import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createBulkdeletefailureFromDiscriminatorValue} from './createBulkdeletefailureFromDiscriminatorValue';
import {createMailboxtrackingfolderFromDiscriminatorValue} from './createMailboxtrackingfolderFromDiscriminatorValue';
import {createPrincipalobjectattributeaccessFromDiscriminatorValue} from './createPrincipalobjectattributeaccessFromDiscriminatorValue';
import {createProcesssessionFromDiscriminatorValue} from './createProcesssessionFromDiscriminatorValue';
import {createSyncerrorFromDiscriminatorValue} from './createSyncerrorFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {Asyncoperation, Bulkdeletefailure, Crmbaseentity, Mailboxtrackingfolder, Principalobjectattributeaccess, Processsession, Syncerror, Systemuser} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Msdyn_teamschatassociation extends Crmbaseentity implements Parsable {
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private _createdby?: Systemuser | undefined;
    private _createdon?: Date | undefined;
    private _createdonbehalfby?: Systemuser | undefined;
    private _importsequencenumber?: number | undefined;
    private _modifiedby?: Systemuser | undefined;
    private _modifiedon?: Date | undefined;
    private _modifiedonbehalfby?: Systemuser | undefined;
    private _msdyn_entityrecordstate?: number | undefined;
    private _msdyn_regardingobjectid?: string | undefined;
    private _msdyn_regardingobjectname?: string | undefined;
    private _msdyn_teamschatassociation_AsyncOperations?: Asyncoperation[] | undefined;
    private _msdyn_teamschatassociation_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _msdyn_teamschatassociation_MailboxTrackingFolders?: Mailboxtrackingfolder[] | undefined;
    private _msdyn_teamschatassociation_PrincipalObjectAttributeAccesses?: Principalobjectattributeaccess[] | undefined;
    private _msdyn_teamschatassociation_ProcessSession?: Processsession[] | undefined;
    private _msdyn_teamschatassociation_SyncErrors?: Syncerror[] | undefined;
    private _msdyn_teamschatassociationid?: string | undefined;
    private _msdyn_teamschatassociationname?: string | undefined;
    private _msdyn_teamschatid?: string | undefined;
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
     * Instantiates a new msdyn_teamschatassociation and sets the default values.
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
            "_createdby_value": (o, n) => { (o as unknown as Msdyn_teamschatassociation)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Msdyn_teamschatassociation)._createdonbehalfby_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Msdyn_teamschatassociation)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Msdyn_teamschatassociation)._modifiedonbehalfby_value = n.getStringValue(); },
            "createdby": (o, n) => { (o as unknown as Msdyn_teamschatassociation).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Msdyn_teamschatassociation).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Msdyn_teamschatassociation).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "importsequencenumber": (o, n) => { (o as unknown as Msdyn_teamschatassociation).importsequencenumber = n.getNumberValue(); },
            "modifiedby": (o, n) => { (o as unknown as Msdyn_teamschatassociation).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Msdyn_teamschatassociation).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Msdyn_teamschatassociation).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "msdyn_entityrecordstate": (o, n) => { (o as unknown as Msdyn_teamschatassociation).msdyn_entityrecordstate = n.getNumberValue(); },
            "msdyn_regardingobjectid": (o, n) => { (o as unknown as Msdyn_teamschatassociation).msdyn_regardingobjectid = n.getStringValue(); },
            "msdyn_regardingobjectname": (o, n) => { (o as unknown as Msdyn_teamschatassociation).msdyn_regardingobjectname = n.getStringValue(); },
            "msdyn_teamschatassociation_AsyncOperations": (o, n) => { (o as unknown as Msdyn_teamschatassociation).msdyn_teamschatassociation_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "msdyn_teamschatassociation_BulkDeleteFailures": (o, n) => { (o as unknown as Msdyn_teamschatassociation).msdyn_teamschatassociation_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "msdyn_teamschatassociation_MailboxTrackingFolders": (o, n) => { (o as unknown as Msdyn_teamschatassociation).msdyn_teamschatassociation_MailboxTrackingFolders = n.getCollectionOfObjectValues<Mailboxtrackingfolder>(createMailboxtrackingfolderFromDiscriminatorValue); },
            "msdyn_teamschatassociation_PrincipalObjectAttributeAccesses": (o, n) => { (o as unknown as Msdyn_teamschatassociation).msdyn_teamschatassociation_PrincipalObjectAttributeAccesses = n.getCollectionOfObjectValues<Principalobjectattributeaccess>(createPrincipalobjectattributeaccessFromDiscriminatorValue); },
            "msdyn_teamschatassociation_ProcessSession": (o, n) => { (o as unknown as Msdyn_teamschatassociation).msdyn_teamschatassociation_ProcessSession = n.getCollectionOfObjectValues<Processsession>(createProcesssessionFromDiscriminatorValue); },
            "msdyn_teamschatassociation_SyncErrors": (o, n) => { (o as unknown as Msdyn_teamschatassociation).msdyn_teamschatassociation_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "msdyn_teamschatassociationid": (o, n) => { (o as unknown as Msdyn_teamschatassociation).msdyn_teamschatassociationid = n.getStringValue(); },
            "msdyn_teamschatassociationname": (o, n) => { (o as unknown as Msdyn_teamschatassociation).msdyn_teamschatassociationname = n.getStringValue(); },
            "msdyn_teamschatid": (o, n) => { (o as unknown as Msdyn_teamschatassociation).msdyn_teamschatid = n.getStringValue(); },
            "overriddencreatedon": (o, n) => { (o as unknown as Msdyn_teamschatassociation).overriddencreatedon = n.getDateValue(); },
            "statecode": (o, n) => { (o as unknown as Msdyn_teamschatassociation).statecode = n.getNumberValue(); },
            "statuscode": (o, n) => { (o as unknown as Msdyn_teamschatassociation).statuscode = n.getNumberValue(); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Msdyn_teamschatassociation).timezoneruleversionnumber = n.getNumberValue(); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Msdyn_teamschatassociation).utcconversiontimezonecode = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as Msdyn_teamschatassociation).versionnumber = n.getNumberValue(); },
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
     * Gets the msdyn_entityrecordstate property value. 
     * @returns a integer
     */
    public get msdyn_entityrecordstate() {
        return this._msdyn_entityrecordstate;
    };
    /**
     * Sets the msdyn_entityrecordstate property value. 
     * @param value Value to set for the msdyn_entityrecordstate property.
     */
    public set msdyn_entityrecordstate(value: number | undefined) {
        this._msdyn_entityrecordstate = value;
    };
    /**
     * Gets the msdyn_regardingobjectid property value. 
     * @returns a string
     */
    public get msdyn_regardingobjectid() {
        return this._msdyn_regardingobjectid;
    };
    /**
     * Sets the msdyn_regardingobjectid property value. 
     * @param value Value to set for the msdyn_regardingobjectid property.
     */
    public set msdyn_regardingobjectid(value: string | undefined) {
        this._msdyn_regardingobjectid = value;
    };
    /**
     * Gets the msdyn_regardingobjectname property value. 
     * @returns a string
     */
    public get msdyn_regardingobjectname() {
        return this._msdyn_regardingobjectname;
    };
    /**
     * Sets the msdyn_regardingobjectname property value. 
     * @param value Value to set for the msdyn_regardingobjectname property.
     */
    public set msdyn_regardingobjectname(value: string | undefined) {
        this._msdyn_regardingobjectname = value;
    };
    /**
     * Gets the msdyn_teamschatassociation_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get msdyn_teamschatassociation_AsyncOperations() {
        return this._msdyn_teamschatassociation_AsyncOperations;
    };
    /**
     * Sets the msdyn_teamschatassociation_AsyncOperations property value. 
     * @param value Value to set for the msdyn_teamschatassociation_AsyncOperations property.
     */
    public set msdyn_teamschatassociation_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._msdyn_teamschatassociation_AsyncOperations = value;
    };
    /**
     * Gets the msdyn_teamschatassociation_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get msdyn_teamschatassociation_BulkDeleteFailures() {
        return this._msdyn_teamschatassociation_BulkDeleteFailures;
    };
    /**
     * Sets the msdyn_teamschatassociation_BulkDeleteFailures property value. 
     * @param value Value to set for the msdyn_teamschatassociation_BulkDeleteFailures property.
     */
    public set msdyn_teamschatassociation_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._msdyn_teamschatassociation_BulkDeleteFailures = value;
    };
    /**
     * Gets the msdyn_teamschatassociation_MailboxTrackingFolders property value. 
     * @returns a mailboxtrackingfolder
     */
    public get msdyn_teamschatassociation_MailboxTrackingFolders() {
        return this._msdyn_teamschatassociation_MailboxTrackingFolders;
    };
    /**
     * Sets the msdyn_teamschatassociation_MailboxTrackingFolders property value. 
     * @param value Value to set for the msdyn_teamschatassociation_MailboxTrackingFolders property.
     */
    public set msdyn_teamschatassociation_MailboxTrackingFolders(value: Mailboxtrackingfolder[] | undefined) {
        this._msdyn_teamschatassociation_MailboxTrackingFolders = value;
    };
    /**
     * Gets the msdyn_teamschatassociation_PrincipalObjectAttributeAccesses property value. 
     * @returns a principalobjectattributeaccess
     */
    public get msdyn_teamschatassociation_PrincipalObjectAttributeAccesses() {
        return this._msdyn_teamschatassociation_PrincipalObjectAttributeAccesses;
    };
    /**
     * Sets the msdyn_teamschatassociation_PrincipalObjectAttributeAccesses property value. 
     * @param value Value to set for the msdyn_teamschatassociation_PrincipalObjectAttributeAccesses property.
     */
    public set msdyn_teamschatassociation_PrincipalObjectAttributeAccesses(value: Principalobjectattributeaccess[] | undefined) {
        this._msdyn_teamschatassociation_PrincipalObjectAttributeAccesses = value;
    };
    /**
     * Gets the msdyn_teamschatassociation_ProcessSession property value. 
     * @returns a processsession
     */
    public get msdyn_teamschatassociation_ProcessSession() {
        return this._msdyn_teamschatassociation_ProcessSession;
    };
    /**
     * Sets the msdyn_teamschatassociation_ProcessSession property value. 
     * @param value Value to set for the msdyn_teamschatassociation_ProcessSession property.
     */
    public set msdyn_teamschatassociation_ProcessSession(value: Processsession[] | undefined) {
        this._msdyn_teamschatassociation_ProcessSession = value;
    };
    /**
     * Gets the msdyn_teamschatassociation_SyncErrors property value. 
     * @returns a syncerror
     */
    public get msdyn_teamschatassociation_SyncErrors() {
        return this._msdyn_teamschatassociation_SyncErrors;
    };
    /**
     * Sets the msdyn_teamschatassociation_SyncErrors property value. 
     * @param value Value to set for the msdyn_teamschatassociation_SyncErrors property.
     */
    public set msdyn_teamschatassociation_SyncErrors(value: Syncerror[] | undefined) {
        this._msdyn_teamschatassociation_SyncErrors = value;
    };
    /**
     * Gets the msdyn_teamschatassociationid property value. 
     * @returns a string
     */
    public get msdyn_teamschatassociationid() {
        return this._msdyn_teamschatassociationid;
    };
    /**
     * Sets the msdyn_teamschatassociationid property value. 
     * @param value Value to set for the msdyn_teamschatassociationid property.
     */
    public set msdyn_teamschatassociationid(value: string | undefined) {
        this._msdyn_teamschatassociationid = value;
    };
    /**
     * Gets the msdyn_teamschatassociationname property value. 
     * @returns a string
     */
    public get msdyn_teamschatassociationname() {
        return this._msdyn_teamschatassociationname;
    };
    /**
     * Sets the msdyn_teamschatassociationname property value. 
     * @param value Value to set for the msdyn_teamschatassociationname property.
     */
    public set msdyn_teamschatassociationname(value: string | undefined) {
        this._msdyn_teamschatassociationname = value;
    };
    /**
     * Gets the msdyn_teamschatid property value. 
     * @returns a string
     */
    public get msdyn_teamschatid() {
        return this._msdyn_teamschatid;
    };
    /**
     * Sets the msdyn_teamschatid property value. 
     * @param value Value to set for the msdyn_teamschatid property.
     */
    public set msdyn_teamschatid(value: string | undefined) {
        this._msdyn_teamschatid = value;
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
        writer.writeObjectValue<Systemuser>("createdby", this.createdby);
        writer.writeDateValue("createdon", this.createdon);
        writer.writeObjectValue<Systemuser>("createdonbehalfby", this.createdonbehalfby);
        writer.writeNumberValue("importsequencenumber", this.importsequencenumber);
        writer.writeObjectValue<Systemuser>("modifiedby", this.modifiedby);
        writer.writeDateValue("modifiedon", this.modifiedon);
        writer.writeObjectValue<Systemuser>("modifiedonbehalfby", this.modifiedonbehalfby);
        writer.writeNumberValue("msdyn_entityrecordstate", this.msdyn_entityrecordstate);
        writer.writeStringValue("msdyn_regardingobjectid", this.msdyn_regardingobjectid);
        writer.writeStringValue("msdyn_regardingobjectname", this.msdyn_regardingobjectname);
        writer.writeCollectionOfObjectValues<Asyncoperation>("msdyn_teamschatassociation_AsyncOperations", this.msdyn_teamschatassociation_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("msdyn_teamschatassociation_BulkDeleteFailures", this.msdyn_teamschatassociation_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Mailboxtrackingfolder>("msdyn_teamschatassociation_MailboxTrackingFolders", this.msdyn_teamschatassociation_MailboxTrackingFolders);
        writer.writeCollectionOfObjectValues<Principalobjectattributeaccess>("msdyn_teamschatassociation_PrincipalObjectAttributeAccesses", this.msdyn_teamschatassociation_PrincipalObjectAttributeAccesses);
        writer.writeCollectionOfObjectValues<Processsession>("msdyn_teamschatassociation_ProcessSession", this.msdyn_teamschatassociation_ProcessSession);
        writer.writeCollectionOfObjectValues<Syncerror>("msdyn_teamschatassociation_SyncErrors", this.msdyn_teamschatassociation_SyncErrors);
        writer.writeStringValue("msdyn_teamschatassociationid", this.msdyn_teamschatassociationid);
        writer.writeStringValue("msdyn_teamschatassociationname", this.msdyn_teamschatassociationname);
        writer.writeStringValue("msdyn_teamschatid", this.msdyn_teamschatid);
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
