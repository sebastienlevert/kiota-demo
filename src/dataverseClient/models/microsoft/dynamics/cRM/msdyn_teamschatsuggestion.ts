import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createBulkdeletefailureFromDiscriminatorValue} from './createBulkdeletefailureFromDiscriminatorValue';
import {createMailboxtrackingfolderFromDiscriminatorValue} from './createMailboxtrackingfolderFromDiscriminatorValue';
import {createPrincipalobjectattributeaccessFromDiscriminatorValue} from './createPrincipalobjectattributeaccessFromDiscriminatorValue';
import {createProcesssessionFromDiscriminatorValue} from './createProcesssessionFromDiscriminatorValue';
import {createSyncerrorFromDiscriminatorValue} from './createSyncerrorFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {Asyncoperation, Bulkdeletefailure, Crmbaseentity, Mailboxtrackingfolder, Principalobjectattributeaccess, Processsession, Syncerror, Systemuser} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Msdyn_teamschatsuggestion extends Crmbaseentity implements Parsable {
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
    private _msdyn_computationstate?: number | undefined;
    private _msdyn_computedon?: Date | undefined;
    private _msdyn_regardingobjectid?: string | undefined;
    private _msdyn_regardingobjectname?: string | undefined;
    private _msdyn_suggestions?: string | undefined;
    private _msdyn_teamschatsuggestion_AsyncOperations?: Asyncoperation[] | undefined;
    private _msdyn_teamschatsuggestion_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _msdyn_teamschatsuggestion_MailboxTrackingFolders?: Mailboxtrackingfolder[] | undefined;
    private _msdyn_teamschatsuggestion_PrincipalObjectAttributeAccesses?: Principalobjectattributeaccess[] | undefined;
    private _msdyn_teamschatsuggestion_ProcessSession?: Processsession[] | undefined;
    private _msdyn_teamschatsuggestion_SyncErrors?: Syncerror[] | undefined;
    private _msdyn_teamschatsuggestionid?: string | undefined;
    private _msdyn_teamschatsuggestionname?: string | undefined;
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
     * Instantiates a new msdyn_teamschatsuggestion and sets the default values.
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
            "_createdby_value": (o, n) => { (o as unknown as Msdyn_teamschatsuggestion)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Msdyn_teamschatsuggestion)._createdonbehalfby_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Msdyn_teamschatsuggestion)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Msdyn_teamschatsuggestion)._modifiedonbehalfby_value = n.getStringValue(); },
            "createdby": (o, n) => { (o as unknown as Msdyn_teamschatsuggestion).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Msdyn_teamschatsuggestion).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Msdyn_teamschatsuggestion).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "importsequencenumber": (o, n) => { (o as unknown as Msdyn_teamschatsuggestion).importsequencenumber = n.getNumberValue(); },
            "modifiedby": (o, n) => { (o as unknown as Msdyn_teamschatsuggestion).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Msdyn_teamschatsuggestion).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Msdyn_teamschatsuggestion).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "msdyn_computationstate": (o, n) => { (o as unknown as Msdyn_teamschatsuggestion).msdyn_computationstate = n.getNumberValue(); },
            "msdyn_computedon": (o, n) => { (o as unknown as Msdyn_teamschatsuggestion).msdyn_computedon = n.getDateValue(); },
            "msdyn_regardingobjectid": (o, n) => { (o as unknown as Msdyn_teamschatsuggestion).msdyn_regardingobjectid = n.getStringValue(); },
            "msdyn_regardingobjectname": (o, n) => { (o as unknown as Msdyn_teamschatsuggestion).msdyn_regardingobjectname = n.getStringValue(); },
            "msdyn_suggestions": (o, n) => { (o as unknown as Msdyn_teamschatsuggestion).msdyn_suggestions = n.getStringValue(); },
            "msdyn_teamschatsuggestion_AsyncOperations": (o, n) => { (o as unknown as Msdyn_teamschatsuggestion).msdyn_teamschatsuggestion_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "msdyn_teamschatsuggestion_BulkDeleteFailures": (o, n) => { (o as unknown as Msdyn_teamschatsuggestion).msdyn_teamschatsuggestion_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "msdyn_teamschatsuggestion_MailboxTrackingFolders": (o, n) => { (o as unknown as Msdyn_teamschatsuggestion).msdyn_teamschatsuggestion_MailboxTrackingFolders = n.getCollectionOfObjectValues<Mailboxtrackingfolder>(createMailboxtrackingfolderFromDiscriminatorValue); },
            "msdyn_teamschatsuggestion_PrincipalObjectAttributeAccesses": (o, n) => { (o as unknown as Msdyn_teamschatsuggestion).msdyn_teamschatsuggestion_PrincipalObjectAttributeAccesses = n.getCollectionOfObjectValues<Principalobjectattributeaccess>(createPrincipalobjectattributeaccessFromDiscriminatorValue); },
            "msdyn_teamschatsuggestion_ProcessSession": (o, n) => { (o as unknown as Msdyn_teamschatsuggestion).msdyn_teamschatsuggestion_ProcessSession = n.getCollectionOfObjectValues<Processsession>(createProcesssessionFromDiscriminatorValue); },
            "msdyn_teamschatsuggestion_SyncErrors": (o, n) => { (o as unknown as Msdyn_teamschatsuggestion).msdyn_teamschatsuggestion_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "msdyn_teamschatsuggestionid": (o, n) => { (o as unknown as Msdyn_teamschatsuggestion).msdyn_teamschatsuggestionid = n.getStringValue(); },
            "msdyn_teamschatsuggestionname": (o, n) => { (o as unknown as Msdyn_teamschatsuggestion).msdyn_teamschatsuggestionname = n.getStringValue(); },
            "overriddencreatedon": (o, n) => { (o as unknown as Msdyn_teamschatsuggestion).overriddencreatedon = n.getDateValue(); },
            "statecode": (o, n) => { (o as unknown as Msdyn_teamschatsuggestion).statecode = n.getNumberValue(); },
            "statuscode": (o, n) => { (o as unknown as Msdyn_teamschatsuggestion).statuscode = n.getNumberValue(); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Msdyn_teamschatsuggestion).timezoneruleversionnumber = n.getNumberValue(); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Msdyn_teamschatsuggestion).utcconversiontimezonecode = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as Msdyn_teamschatsuggestion).versionnumber = n.getNumberValue(); },
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
     * Gets the msdyn_computationstate property value. 
     * @returns a integer
     */
    public get msdyn_computationstate() {
        return this._msdyn_computationstate;
    };
    /**
     * Sets the msdyn_computationstate property value. 
     * @param value Value to set for the msdyn_computationstate property.
     */
    public set msdyn_computationstate(value: number | undefined) {
        this._msdyn_computationstate = value;
    };
    /**
     * Gets the msdyn_computedon property value. 
     * @returns a Date
     */
    public get msdyn_computedon() {
        return this._msdyn_computedon;
    };
    /**
     * Sets the msdyn_computedon property value. 
     * @param value Value to set for the msdyn_computedon property.
     */
    public set msdyn_computedon(value: Date | undefined) {
        this._msdyn_computedon = value;
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
     * Gets the msdyn_suggestions property value. 
     * @returns a string
     */
    public get msdyn_suggestions() {
        return this._msdyn_suggestions;
    };
    /**
     * Sets the msdyn_suggestions property value. 
     * @param value Value to set for the msdyn_suggestions property.
     */
    public set msdyn_suggestions(value: string | undefined) {
        this._msdyn_suggestions = value;
    };
    /**
     * Gets the msdyn_teamschatsuggestion_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get msdyn_teamschatsuggestion_AsyncOperations() {
        return this._msdyn_teamschatsuggestion_AsyncOperations;
    };
    /**
     * Sets the msdyn_teamschatsuggestion_AsyncOperations property value. 
     * @param value Value to set for the msdyn_teamschatsuggestion_AsyncOperations property.
     */
    public set msdyn_teamschatsuggestion_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._msdyn_teamschatsuggestion_AsyncOperations = value;
    };
    /**
     * Gets the msdyn_teamschatsuggestion_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get msdyn_teamschatsuggestion_BulkDeleteFailures() {
        return this._msdyn_teamschatsuggestion_BulkDeleteFailures;
    };
    /**
     * Sets the msdyn_teamschatsuggestion_BulkDeleteFailures property value. 
     * @param value Value to set for the msdyn_teamschatsuggestion_BulkDeleteFailures property.
     */
    public set msdyn_teamschatsuggestion_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._msdyn_teamschatsuggestion_BulkDeleteFailures = value;
    };
    /**
     * Gets the msdyn_teamschatsuggestion_MailboxTrackingFolders property value. 
     * @returns a mailboxtrackingfolder
     */
    public get msdyn_teamschatsuggestion_MailboxTrackingFolders() {
        return this._msdyn_teamschatsuggestion_MailboxTrackingFolders;
    };
    /**
     * Sets the msdyn_teamschatsuggestion_MailboxTrackingFolders property value. 
     * @param value Value to set for the msdyn_teamschatsuggestion_MailboxTrackingFolders property.
     */
    public set msdyn_teamschatsuggestion_MailboxTrackingFolders(value: Mailboxtrackingfolder[] | undefined) {
        this._msdyn_teamschatsuggestion_MailboxTrackingFolders = value;
    };
    /**
     * Gets the msdyn_teamschatsuggestion_PrincipalObjectAttributeAccesses property value. 
     * @returns a principalobjectattributeaccess
     */
    public get msdyn_teamschatsuggestion_PrincipalObjectAttributeAccesses() {
        return this._msdyn_teamschatsuggestion_PrincipalObjectAttributeAccesses;
    };
    /**
     * Sets the msdyn_teamschatsuggestion_PrincipalObjectAttributeAccesses property value. 
     * @param value Value to set for the msdyn_teamschatsuggestion_PrincipalObjectAttributeAccesses property.
     */
    public set msdyn_teamschatsuggestion_PrincipalObjectAttributeAccesses(value: Principalobjectattributeaccess[] | undefined) {
        this._msdyn_teamschatsuggestion_PrincipalObjectAttributeAccesses = value;
    };
    /**
     * Gets the msdyn_teamschatsuggestion_ProcessSession property value. 
     * @returns a processsession
     */
    public get msdyn_teamschatsuggestion_ProcessSession() {
        return this._msdyn_teamschatsuggestion_ProcessSession;
    };
    /**
     * Sets the msdyn_teamschatsuggestion_ProcessSession property value. 
     * @param value Value to set for the msdyn_teamschatsuggestion_ProcessSession property.
     */
    public set msdyn_teamschatsuggestion_ProcessSession(value: Processsession[] | undefined) {
        this._msdyn_teamschatsuggestion_ProcessSession = value;
    };
    /**
     * Gets the msdyn_teamschatsuggestion_SyncErrors property value. 
     * @returns a syncerror
     */
    public get msdyn_teamschatsuggestion_SyncErrors() {
        return this._msdyn_teamschatsuggestion_SyncErrors;
    };
    /**
     * Sets the msdyn_teamschatsuggestion_SyncErrors property value. 
     * @param value Value to set for the msdyn_teamschatsuggestion_SyncErrors property.
     */
    public set msdyn_teamschatsuggestion_SyncErrors(value: Syncerror[] | undefined) {
        this._msdyn_teamschatsuggestion_SyncErrors = value;
    };
    /**
     * Gets the msdyn_teamschatsuggestionid property value. 
     * @returns a string
     */
    public get msdyn_teamschatsuggestionid() {
        return this._msdyn_teamschatsuggestionid;
    };
    /**
     * Sets the msdyn_teamschatsuggestionid property value. 
     * @param value Value to set for the msdyn_teamschatsuggestionid property.
     */
    public set msdyn_teamschatsuggestionid(value: string | undefined) {
        this._msdyn_teamschatsuggestionid = value;
    };
    /**
     * Gets the msdyn_teamschatsuggestionname property value. 
     * @returns a string
     */
    public get msdyn_teamschatsuggestionname() {
        return this._msdyn_teamschatsuggestionname;
    };
    /**
     * Sets the msdyn_teamschatsuggestionname property value. 
     * @param value Value to set for the msdyn_teamschatsuggestionname property.
     */
    public set msdyn_teamschatsuggestionname(value: string | undefined) {
        this._msdyn_teamschatsuggestionname = value;
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
        writer.writeNumberValue("msdyn_computationstate", this.msdyn_computationstate);
        writer.writeDateValue("msdyn_computedon", this.msdyn_computedon);
        writer.writeStringValue("msdyn_regardingobjectid", this.msdyn_regardingobjectid);
        writer.writeStringValue("msdyn_regardingobjectname", this.msdyn_regardingobjectname);
        writer.writeStringValue("msdyn_suggestions", this.msdyn_suggestions);
        writer.writeCollectionOfObjectValues<Asyncoperation>("msdyn_teamschatsuggestion_AsyncOperations", this.msdyn_teamschatsuggestion_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("msdyn_teamschatsuggestion_BulkDeleteFailures", this.msdyn_teamschatsuggestion_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Mailboxtrackingfolder>("msdyn_teamschatsuggestion_MailboxTrackingFolders", this.msdyn_teamschatsuggestion_MailboxTrackingFolders);
        writer.writeCollectionOfObjectValues<Principalobjectattributeaccess>("msdyn_teamschatsuggestion_PrincipalObjectAttributeAccesses", this.msdyn_teamschatsuggestion_PrincipalObjectAttributeAccesses);
        writer.writeCollectionOfObjectValues<Processsession>("msdyn_teamschatsuggestion_ProcessSession", this.msdyn_teamschatsuggestion_ProcessSession);
        writer.writeCollectionOfObjectValues<Syncerror>("msdyn_teamschatsuggestion_SyncErrors", this.msdyn_teamschatsuggestion_SyncErrors);
        writer.writeStringValue("msdyn_teamschatsuggestionid", this.msdyn_teamschatsuggestionid);
        writer.writeStringValue("msdyn_teamschatsuggestionname", this.msdyn_teamschatsuggestionname);
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
