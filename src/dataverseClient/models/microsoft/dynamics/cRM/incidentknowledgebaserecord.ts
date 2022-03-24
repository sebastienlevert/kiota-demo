import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createBulkdeletefailureFromDiscriminatorValue} from './createBulkdeletefailureFromDiscriminatorValue';
import {createMailboxtrackingfolderFromDiscriminatorValue} from './createMailboxtrackingfolderFromDiscriminatorValue';
import {createPrincipalobjectattributeaccessFromDiscriminatorValue} from './createPrincipalobjectattributeaccessFromDiscriminatorValue';
import {Asyncoperation, Bulkdeletefailure, Crmbaseentity, Mailboxtrackingfolder, Principalobjectattributeaccess} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Incidentknowledgebaserecord extends Crmbaseentity implements Parsable {
    private _importsequencenumber?: number | undefined;
    private _incidentid?: string | undefined;
    private _incidentknowledgebaserecord_AsyncOperations?: Asyncoperation[] | undefined;
    private _incidentknowledgebaserecord_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _incidentknowledgebaserecord_MailboxTrackingFolders?: Mailboxtrackingfolder[] | undefined;
    private _incidentknowledgebaserecord_PrincipalObjectAttributeAccesses?: Principalobjectattributeaccess[] | undefined;
    private _incidentknowledgebaserecordid?: string | undefined;
    private _knowledgebaserecordid?: string | undefined;
    private _name?: string | undefined;
    private _overriddencreatedon?: Date | undefined;
    private _timezoneruleversionnumber?: number | undefined;
    private _utcconversiontimezonecode?: number | undefined;
    private _versionnumber?: number | undefined;
    /**
     * Instantiates a new incidentknowledgebaserecord and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Record<string, (item: T, node: ParseNode) => void> {
        return {...super.getFieldDeserializers<T>(),
            "importsequencenumber": (o, n) => { (o as unknown as Incidentknowledgebaserecord).importsequencenumber = n.getNumberValue(); },
            "incidentid": (o, n) => { (o as unknown as Incidentknowledgebaserecord).incidentid = n.getStringValue(); },
            "incidentknowledgebaserecord_AsyncOperations": (o, n) => { (o as unknown as Incidentknowledgebaserecord).incidentknowledgebaserecord_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "incidentknowledgebaserecord_BulkDeleteFailures": (o, n) => { (o as unknown as Incidentknowledgebaserecord).incidentknowledgebaserecord_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "incidentknowledgebaserecord_MailboxTrackingFolders": (o, n) => { (o as unknown as Incidentknowledgebaserecord).incidentknowledgebaserecord_MailboxTrackingFolders = n.getCollectionOfObjectValues<Mailboxtrackingfolder>(createMailboxtrackingfolderFromDiscriminatorValue); },
            "incidentknowledgebaserecord_PrincipalObjectAttributeAccesses": (o, n) => { (o as unknown as Incidentknowledgebaserecord).incidentknowledgebaserecord_PrincipalObjectAttributeAccesses = n.getCollectionOfObjectValues<Principalobjectattributeaccess>(createPrincipalobjectattributeaccessFromDiscriminatorValue); },
            "incidentknowledgebaserecordid": (o, n) => { (o as unknown as Incidentknowledgebaserecord).incidentknowledgebaserecordid = n.getStringValue(); },
            "knowledgebaserecordid": (o, n) => { (o as unknown as Incidentknowledgebaserecord).knowledgebaserecordid = n.getStringValue(); },
            "name": (o, n) => { (o as unknown as Incidentknowledgebaserecord).name = n.getStringValue(); },
            "overriddencreatedon": (o, n) => { (o as unknown as Incidentknowledgebaserecord).overriddencreatedon = n.getDateValue(); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Incidentknowledgebaserecord).timezoneruleversionnumber = n.getNumberValue(); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Incidentknowledgebaserecord).utcconversiontimezonecode = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as Incidentknowledgebaserecord).versionnumber = n.getNumberValue(); },
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
     * Gets the incidentid property value. 
     * @returns a string
     */
    public get incidentid() {
        return this._incidentid;
    };
    /**
     * Sets the incidentid property value. 
     * @param value Value to set for the incidentid property.
     */
    public set incidentid(value: string | undefined) {
        this._incidentid = value;
    };
    /**
     * Gets the incidentknowledgebaserecord_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get incidentknowledgebaserecord_AsyncOperations() {
        return this._incidentknowledgebaserecord_AsyncOperations;
    };
    /**
     * Sets the incidentknowledgebaserecord_AsyncOperations property value. 
     * @param value Value to set for the incidentknowledgebaserecord_AsyncOperations property.
     */
    public set incidentknowledgebaserecord_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._incidentknowledgebaserecord_AsyncOperations = value;
    };
    /**
     * Gets the incidentknowledgebaserecord_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get incidentknowledgebaserecord_BulkDeleteFailures() {
        return this._incidentknowledgebaserecord_BulkDeleteFailures;
    };
    /**
     * Sets the incidentknowledgebaserecord_BulkDeleteFailures property value. 
     * @param value Value to set for the incidentknowledgebaserecord_BulkDeleteFailures property.
     */
    public set incidentknowledgebaserecord_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._incidentknowledgebaserecord_BulkDeleteFailures = value;
    };
    /**
     * Gets the incidentknowledgebaserecord_MailboxTrackingFolders property value. 
     * @returns a mailboxtrackingfolder
     */
    public get incidentknowledgebaserecord_MailboxTrackingFolders() {
        return this._incidentknowledgebaserecord_MailboxTrackingFolders;
    };
    /**
     * Sets the incidentknowledgebaserecord_MailboxTrackingFolders property value. 
     * @param value Value to set for the incidentknowledgebaserecord_MailboxTrackingFolders property.
     */
    public set incidentknowledgebaserecord_MailboxTrackingFolders(value: Mailboxtrackingfolder[] | undefined) {
        this._incidentknowledgebaserecord_MailboxTrackingFolders = value;
    };
    /**
     * Gets the incidentknowledgebaserecord_PrincipalObjectAttributeAccesses property value. 
     * @returns a principalobjectattributeaccess
     */
    public get incidentknowledgebaserecord_PrincipalObjectAttributeAccesses() {
        return this._incidentknowledgebaserecord_PrincipalObjectAttributeAccesses;
    };
    /**
     * Sets the incidentknowledgebaserecord_PrincipalObjectAttributeAccesses property value. 
     * @param value Value to set for the incidentknowledgebaserecord_PrincipalObjectAttributeAccesses property.
     */
    public set incidentknowledgebaserecord_PrincipalObjectAttributeAccesses(value: Principalobjectattributeaccess[] | undefined) {
        this._incidentknowledgebaserecord_PrincipalObjectAttributeAccesses = value;
    };
    /**
     * Gets the incidentknowledgebaserecordid property value. 
     * @returns a string
     */
    public get incidentknowledgebaserecordid() {
        return this._incidentknowledgebaserecordid;
    };
    /**
     * Sets the incidentknowledgebaserecordid property value. 
     * @param value Value to set for the incidentknowledgebaserecordid property.
     */
    public set incidentknowledgebaserecordid(value: string | undefined) {
        this._incidentknowledgebaserecordid = value;
    };
    /**
     * Gets the knowledgebaserecordid property value. 
     * @returns a string
     */
    public get knowledgebaserecordid() {
        return this._knowledgebaserecordid;
    };
    /**
     * Sets the knowledgebaserecordid property value. 
     * @param value Value to set for the knowledgebaserecordid property.
     */
    public set knowledgebaserecordid(value: string | undefined) {
        this._knowledgebaserecordid = value;
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
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeNumberValue("importsequencenumber", this.importsequencenumber);
        writer.writeStringValue("incidentid", this.incidentid);
        writer.writeCollectionOfObjectValues<Asyncoperation>("incidentknowledgebaserecord_AsyncOperations", this.incidentknowledgebaserecord_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("incidentknowledgebaserecord_BulkDeleteFailures", this.incidentknowledgebaserecord_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Mailboxtrackingfolder>("incidentknowledgebaserecord_MailboxTrackingFolders", this.incidentknowledgebaserecord_MailboxTrackingFolders);
        writer.writeCollectionOfObjectValues<Principalobjectattributeaccess>("incidentknowledgebaserecord_PrincipalObjectAttributeAccesses", this.incidentknowledgebaserecord_PrincipalObjectAttributeAccesses);
        writer.writeStringValue("incidentknowledgebaserecordid", this.incidentknowledgebaserecordid);
        writer.writeStringValue("knowledgebaserecordid", this.knowledgebaserecordid);
        writer.writeStringValue("name", this.name);
        writer.writeDateValue("overriddencreatedon", this.overriddencreatedon);
        writer.writeNumberValue("timezoneruleversionnumber", this.timezoneruleversionnumber);
        writer.writeNumberValue("utcconversiontimezonecode", this.utcconversiontimezonecode);
        writer.writeNumberValue("versionnumber", this.versionnumber);
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
