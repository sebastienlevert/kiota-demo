import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createBulkdeletefailureFromDiscriminatorValue} from './createBulkdeletefailureFromDiscriminatorValue';
import {createMailboxtrackingfolderFromDiscriminatorValue} from './createMailboxtrackingfolderFromDiscriminatorValue';
import {createPrincipalobjectattributeaccessFromDiscriminatorValue} from './createPrincipalobjectattributeaccessFromDiscriminatorValue';
import {Asyncoperation, Bulkdeletefailure, Crmbaseentity, Mailboxtrackingfolder, Principalobjectattributeaccess} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Opportunitycompetitors extends Crmbaseentity implements Parsable {
    private _competitorid?: string | undefined;
    private _importsequencenumber?: number | undefined;
    private _name?: string | undefined;
    private _opportunitycompetitorid?: string | undefined;
    private _opportunitycompetitors_AsyncOperations?: Asyncoperation[] | undefined;
    private _opportunitycompetitors_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _opportunitycompetitors_MailboxTrackingFolders?: Mailboxtrackingfolder[] | undefined;
    private _opportunitycompetitors_PrincipalObjectAttributeAccesses?: Principalobjectattributeaccess[] | undefined;
    private _opportunityid?: string | undefined;
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
     * Instantiates a new opportunitycompetitors and sets the default values.
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
            "competitorid": (o, n) => { (o as unknown as Opportunitycompetitors).competitorid = n.getStringValue(); },
            "importsequencenumber": (o, n) => { (o as unknown as Opportunitycompetitors).importsequencenumber = n.getNumberValue(); },
            "name": (o, n) => { (o as unknown as Opportunitycompetitors).name = n.getStringValue(); },
            "opportunitycompetitorid": (o, n) => { (o as unknown as Opportunitycompetitors).opportunitycompetitorid = n.getStringValue(); },
            "opportunitycompetitors_AsyncOperations": (o, n) => { (o as unknown as Opportunitycompetitors).opportunitycompetitors_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "opportunitycompetitors_BulkDeleteFailures": (o, n) => { (o as unknown as Opportunitycompetitors).opportunitycompetitors_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "opportunitycompetitors_MailboxTrackingFolders": (o, n) => { (o as unknown as Opportunitycompetitors).opportunitycompetitors_MailboxTrackingFolders = n.getCollectionOfObjectValues<Mailboxtrackingfolder>(createMailboxtrackingfolderFromDiscriminatorValue); },
            "opportunitycompetitors_PrincipalObjectAttributeAccesses": (o, n) => { (o as unknown as Opportunitycompetitors).opportunitycompetitors_PrincipalObjectAttributeAccesses = n.getCollectionOfObjectValues<Principalobjectattributeaccess>(createPrincipalobjectattributeaccessFromDiscriminatorValue); },
            "opportunityid": (o, n) => { (o as unknown as Opportunitycompetitors).opportunityid = n.getStringValue(); },
            "overriddencreatedon": (o, n) => { (o as unknown as Opportunitycompetitors).overriddencreatedon = n.getDateValue(); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Opportunitycompetitors).timezoneruleversionnumber = n.getNumberValue(); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Opportunitycompetitors).utcconversiontimezonecode = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as Opportunitycompetitors).versionnumber = n.getNumberValue(); },
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
     * Gets the opportunitycompetitorid property value. 
     * @returns a string
     */
    public get opportunitycompetitorid() {
        return this._opportunitycompetitorid;
    };
    /**
     * Sets the opportunitycompetitorid property value. 
     * @param value Value to set for the opportunitycompetitorid property.
     */
    public set opportunitycompetitorid(value: string | undefined) {
        this._opportunitycompetitorid = value;
    };
    /**
     * Gets the opportunitycompetitors_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get opportunitycompetitors_AsyncOperations() {
        return this._opportunitycompetitors_AsyncOperations;
    };
    /**
     * Sets the opportunitycompetitors_AsyncOperations property value. 
     * @param value Value to set for the opportunitycompetitors_AsyncOperations property.
     */
    public set opportunitycompetitors_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._opportunitycompetitors_AsyncOperations = value;
    };
    /**
     * Gets the opportunitycompetitors_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get opportunitycompetitors_BulkDeleteFailures() {
        return this._opportunitycompetitors_BulkDeleteFailures;
    };
    /**
     * Sets the opportunitycompetitors_BulkDeleteFailures property value. 
     * @param value Value to set for the opportunitycompetitors_BulkDeleteFailures property.
     */
    public set opportunitycompetitors_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._opportunitycompetitors_BulkDeleteFailures = value;
    };
    /**
     * Gets the opportunitycompetitors_MailboxTrackingFolders property value. 
     * @returns a mailboxtrackingfolder
     */
    public get opportunitycompetitors_MailboxTrackingFolders() {
        return this._opportunitycompetitors_MailboxTrackingFolders;
    };
    /**
     * Sets the opportunitycompetitors_MailboxTrackingFolders property value. 
     * @param value Value to set for the opportunitycompetitors_MailboxTrackingFolders property.
     */
    public set opportunitycompetitors_MailboxTrackingFolders(value: Mailboxtrackingfolder[] | undefined) {
        this._opportunitycompetitors_MailboxTrackingFolders = value;
    };
    /**
     * Gets the opportunitycompetitors_PrincipalObjectAttributeAccesses property value. 
     * @returns a principalobjectattributeaccess
     */
    public get opportunitycompetitors_PrincipalObjectAttributeAccesses() {
        return this._opportunitycompetitors_PrincipalObjectAttributeAccesses;
    };
    /**
     * Sets the opportunitycompetitors_PrincipalObjectAttributeAccesses property value. 
     * @param value Value to set for the opportunitycompetitors_PrincipalObjectAttributeAccesses property.
     */
    public set opportunitycompetitors_PrincipalObjectAttributeAccesses(value: Principalobjectattributeaccess[] | undefined) {
        this._opportunitycompetitors_PrincipalObjectAttributeAccesses = value;
    };
    /**
     * Gets the opportunityid property value. 
     * @returns a string
     */
    public get opportunityid() {
        return this._opportunityid;
    };
    /**
     * Sets the opportunityid property value. 
     * @param value Value to set for the opportunityid property.
     */
    public set opportunityid(value: string | undefined) {
        this._opportunityid = value;
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
        writer.writeStringValue("name", this.name);
        writer.writeStringValue("opportunitycompetitorid", this.opportunitycompetitorid);
        writer.writeCollectionOfObjectValues<Asyncoperation>("opportunitycompetitors_AsyncOperations", this.opportunitycompetitors_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("opportunitycompetitors_BulkDeleteFailures", this.opportunitycompetitors_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Mailboxtrackingfolder>("opportunitycompetitors_MailboxTrackingFolders", this.opportunitycompetitors_MailboxTrackingFolders);
        writer.writeCollectionOfObjectValues<Principalobjectattributeaccess>("opportunitycompetitors_PrincipalObjectAttributeAccesses", this.opportunitycompetitors_PrincipalObjectAttributeAccesses);
        writer.writeStringValue("opportunityid", this.opportunityid);
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
