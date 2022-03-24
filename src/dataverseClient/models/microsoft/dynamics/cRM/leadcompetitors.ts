import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createBulkdeletefailureFromDiscriminatorValue} from './createBulkdeletefailureFromDiscriminatorValue';
import {createMailboxtrackingfolderFromDiscriminatorValue} from './createMailboxtrackingfolderFromDiscriminatorValue';
import {createPrincipalobjectattributeaccessFromDiscriminatorValue} from './createPrincipalobjectattributeaccessFromDiscriminatorValue';
import {Asyncoperation, Bulkdeletefailure, Crmbaseentity, Mailboxtrackingfolder, Principalobjectattributeaccess} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Leadcompetitors extends Crmbaseentity implements Parsable {
    private _competitorid?: string | undefined;
    private _importsequencenumber?: number | undefined;
    private _leadcompetitorid?: string | undefined;
    private _leadcompetitors_AsyncOperations?: Asyncoperation[] | undefined;
    private _leadcompetitors_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _leadcompetitors_MailboxTrackingFolders?: Mailboxtrackingfolder[] | undefined;
    private _leadcompetitors_PrincipalObjectAttributeAccesses?: Principalobjectattributeaccess[] | undefined;
    private _leadid?: string | undefined;
    private _name?: string | undefined;
    private _overriddencreatedon?: Date | undefined;
    private _timezoneruleversionnumber?: number | undefined;
    private _utcconversiontimezonecode?: number | undefined;
    private _versionnumber?: number | undefined;
    /**
     * Gets the competitorid property value. 
     * @returns a string
     */
    public get competitorid() {
        return this._competitorid;
    };
    /**
     * Sets the competitorid property value. 
     * @param value Value to set for the competitorid property.
     */
    public set competitorid(value: string | undefined) {
        this._competitorid = value;
    };
    /**
     * Instantiates a new leadcompetitors and sets the default values.
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
            "competitorid": (o, n) => { (o as unknown as Leadcompetitors).competitorid = n.getStringValue(); },
            "importsequencenumber": (o, n) => { (o as unknown as Leadcompetitors).importsequencenumber = n.getNumberValue(); },
            "leadcompetitorid": (o, n) => { (o as unknown as Leadcompetitors).leadcompetitorid = n.getStringValue(); },
            "leadcompetitors_AsyncOperations": (o, n) => { (o as unknown as Leadcompetitors).leadcompetitors_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "leadcompetitors_BulkDeleteFailures": (o, n) => { (o as unknown as Leadcompetitors).leadcompetitors_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "leadcompetitors_MailboxTrackingFolders": (o, n) => { (o as unknown as Leadcompetitors).leadcompetitors_MailboxTrackingFolders = n.getCollectionOfObjectValues<Mailboxtrackingfolder>(createMailboxtrackingfolderFromDiscriminatorValue); },
            "leadcompetitors_PrincipalObjectAttributeAccesses": (o, n) => { (o as unknown as Leadcompetitors).leadcompetitors_PrincipalObjectAttributeAccesses = n.getCollectionOfObjectValues<Principalobjectattributeaccess>(createPrincipalobjectattributeaccessFromDiscriminatorValue); },
            "leadid": (o, n) => { (o as unknown as Leadcompetitors).leadid = n.getStringValue(); },
            "name": (o, n) => { (o as unknown as Leadcompetitors).name = n.getStringValue(); },
            "overriddencreatedon": (o, n) => { (o as unknown as Leadcompetitors).overriddencreatedon = n.getDateValue(); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Leadcompetitors).timezoneruleversionnumber = n.getNumberValue(); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Leadcompetitors).utcconversiontimezonecode = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as Leadcompetitors).versionnumber = n.getNumberValue(); },
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
     * Gets the leadcompetitorid property value. 
     * @returns a string
     */
    public get leadcompetitorid() {
        return this._leadcompetitorid;
    };
    /**
     * Sets the leadcompetitorid property value. 
     * @param value Value to set for the leadcompetitorid property.
     */
    public set leadcompetitorid(value: string | undefined) {
        this._leadcompetitorid = value;
    };
    /**
     * Gets the leadcompetitors_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get leadcompetitors_AsyncOperations() {
        return this._leadcompetitors_AsyncOperations;
    };
    /**
     * Sets the leadcompetitors_AsyncOperations property value. 
     * @param value Value to set for the leadcompetitors_AsyncOperations property.
     */
    public set leadcompetitors_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._leadcompetitors_AsyncOperations = value;
    };
    /**
     * Gets the leadcompetitors_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get leadcompetitors_BulkDeleteFailures() {
        return this._leadcompetitors_BulkDeleteFailures;
    };
    /**
     * Sets the leadcompetitors_BulkDeleteFailures property value. 
     * @param value Value to set for the leadcompetitors_BulkDeleteFailures property.
     */
    public set leadcompetitors_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._leadcompetitors_BulkDeleteFailures = value;
    };
    /**
     * Gets the leadcompetitors_MailboxTrackingFolders property value. 
     * @returns a mailboxtrackingfolder
     */
    public get leadcompetitors_MailboxTrackingFolders() {
        return this._leadcompetitors_MailboxTrackingFolders;
    };
    /**
     * Sets the leadcompetitors_MailboxTrackingFolders property value. 
     * @param value Value to set for the leadcompetitors_MailboxTrackingFolders property.
     */
    public set leadcompetitors_MailboxTrackingFolders(value: Mailboxtrackingfolder[] | undefined) {
        this._leadcompetitors_MailboxTrackingFolders = value;
    };
    /**
     * Gets the leadcompetitors_PrincipalObjectAttributeAccesses property value. 
     * @returns a principalobjectattributeaccess
     */
    public get leadcompetitors_PrincipalObjectAttributeAccesses() {
        return this._leadcompetitors_PrincipalObjectAttributeAccesses;
    };
    /**
     * Sets the leadcompetitors_PrincipalObjectAttributeAccesses property value. 
     * @param value Value to set for the leadcompetitors_PrincipalObjectAttributeAccesses property.
     */
    public set leadcompetitors_PrincipalObjectAttributeAccesses(value: Principalobjectattributeaccess[] | undefined) {
        this._leadcompetitors_PrincipalObjectAttributeAccesses = value;
    };
    /**
     * Gets the leadid property value. 
     * @returns a string
     */
    public get leadid() {
        return this._leadid;
    };
    /**
     * Sets the leadid property value. 
     * @param value Value to set for the leadid property.
     */
    public set leadid(value: string | undefined) {
        this._leadid = value;
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
        writer.writeStringValue("competitorid", this.competitorid);
        writer.writeNumberValue("importsequencenumber", this.importsequencenumber);
        writer.writeStringValue("leadcompetitorid", this.leadcompetitorid);
        writer.writeCollectionOfObjectValues<Asyncoperation>("leadcompetitors_AsyncOperations", this.leadcompetitors_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("leadcompetitors_BulkDeleteFailures", this.leadcompetitors_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Mailboxtrackingfolder>("leadcompetitors_MailboxTrackingFolders", this.leadcompetitors_MailboxTrackingFolders);
        writer.writeCollectionOfObjectValues<Principalobjectattributeaccess>("leadcompetitors_PrincipalObjectAttributeAccesses", this.leadcompetitors_PrincipalObjectAttributeAccesses);
        writer.writeStringValue("leadid", this.leadid);
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
