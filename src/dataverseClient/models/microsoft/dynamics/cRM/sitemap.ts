import {createOrganizationFromDiscriminatorValue} from './createOrganizationFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {Crmbaseentity, Organization, Systemuser} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Sitemap extends Crmbaseentity implements Parsable {
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private __organizationid_value?: string | undefined;
    private _componentstate?: number | undefined;
    private _createdon?: Date | undefined;
    private _enablecollapsiblegroups?: boolean | undefined;
    private _isappaware?: boolean | undefined;
    private _ismanaged?: boolean | undefined;
    private _modifiedon?: Date | undefined;
    private _organizationid?: Organization | undefined;
    private _overwritetime?: Date | undefined;
    private _showhome?: boolean | undefined;
    private _showpinned?: boolean | undefined;
    private _showrecents?: boolean | undefined;
    private _siteMap_createdby?: Systemuser | undefined;
    private _siteMap_createdonbehalfby?: Systemuser | undefined;
    private _siteMap_modifiedby?: Systemuser | undefined;
    private _siteMap_modifiedonbehalfby?: Systemuser | undefined;
    private _sitemapid?: string | undefined;
    private _sitemapidunique?: string | undefined;
    private _sitemapname?: string | undefined;
    private _sitemapnameunique?: string | undefined;
    private _sitemapxml?: string | undefined;
    private _sitemapxmlmanaged?: string | undefined;
    private _solutionid?: string | undefined;
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
     * Instantiates a new sitemap and sets the default values.
     */
    public constructor() {
        super();
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
     * Gets the enablecollapsiblegroups property value. 
     * @returns a boolean
     */
    public get enablecollapsiblegroups() {
        return this._enablecollapsiblegroups;
    };
    /**
     * Sets the enablecollapsiblegroups property value. 
     * @param value Value to set for the enablecollapsiblegroups property.
     */
    public set enablecollapsiblegroups(value: boolean | undefined) {
        this._enablecollapsiblegroups = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Record<string, (item: T, node: ParseNode) => void> {
        return {...super.getFieldDeserializers<T>(),
            "_createdby_value": (o, n) => { (o as unknown as Sitemap)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Sitemap)._createdonbehalfby_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Sitemap)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Sitemap)._modifiedonbehalfby_value = n.getStringValue(); },
            "_organizationid_value": (o, n) => { (o as unknown as Sitemap)._organizationid_value = n.getStringValue(); },
            "componentstate": (o, n) => { (o as unknown as Sitemap).componentstate = n.getNumberValue(); },
            "createdon": (o, n) => { (o as unknown as Sitemap).createdon = n.getDateValue(); },
            "enablecollapsiblegroups": (o, n) => { (o as unknown as Sitemap).enablecollapsiblegroups = n.getBooleanValue(); },
            "isappaware": (o, n) => { (o as unknown as Sitemap).isappaware = n.getBooleanValue(); },
            "ismanaged": (o, n) => { (o as unknown as Sitemap).ismanaged = n.getBooleanValue(); },
            "modifiedon": (o, n) => { (o as unknown as Sitemap).modifiedon = n.getDateValue(); },
            "organizationid": (o, n) => { (o as unknown as Sitemap).organizationid = n.getObjectValue<Organization>(createOrganizationFromDiscriminatorValue); },
            "overwritetime": (o, n) => { (o as unknown as Sitemap).overwritetime = n.getDateValue(); },
            "showhome": (o, n) => { (o as unknown as Sitemap).showhome = n.getBooleanValue(); },
            "showpinned": (o, n) => { (o as unknown as Sitemap).showpinned = n.getBooleanValue(); },
            "showrecents": (o, n) => { (o as unknown as Sitemap).showrecents = n.getBooleanValue(); },
            "siteMap_createdby": (o, n) => { (o as unknown as Sitemap).siteMap_createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "siteMap_createdonbehalfby": (o, n) => { (o as unknown as Sitemap).siteMap_createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "siteMap_modifiedby": (o, n) => { (o as unknown as Sitemap).siteMap_modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "siteMap_modifiedonbehalfby": (o, n) => { (o as unknown as Sitemap).siteMap_modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "sitemapid": (o, n) => { (o as unknown as Sitemap).sitemapid = n.getStringValue(); },
            "sitemapidunique": (o, n) => { (o as unknown as Sitemap).sitemapidunique = n.getStringValue(); },
            "sitemapname": (o, n) => { (o as unknown as Sitemap).sitemapname = n.getStringValue(); },
            "sitemapnameunique": (o, n) => { (o as unknown as Sitemap).sitemapnameunique = n.getStringValue(); },
            "sitemapxml": (o, n) => { (o as unknown as Sitemap).sitemapxml = n.getStringValue(); },
            "sitemapxmlmanaged": (o, n) => { (o as unknown as Sitemap).sitemapxmlmanaged = n.getStringValue(); },
            "solutionid": (o, n) => { (o as unknown as Sitemap).solutionid = n.getStringValue(); },
            "versionnumber": (o, n) => { (o as unknown as Sitemap).versionnumber = n.getNumberValue(); },
        };
    };
    /**
     * Gets the isappaware property value. 
     * @returns a boolean
     */
    public get isappaware() {
        return this._isappaware;
    };
    /**
     * Sets the isappaware property value. 
     * @param value Value to set for the isappaware property.
     */
    public set isappaware(value: boolean | undefined) {
        this._isappaware = value;
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
        writer.writeStringValue("_modifiedby_value", this._modifiedby_value);
        writer.writeStringValue("_modifiedonbehalfby_value", this._modifiedonbehalfby_value);
        writer.writeStringValue("_organizationid_value", this._organizationid_value);
        writer.writeNumberValue("componentstate", this.componentstate);
        writer.writeDateValue("createdon", this.createdon);
        writer.writeBooleanValue("enablecollapsiblegroups", this.enablecollapsiblegroups);
        writer.writeBooleanValue("isappaware", this.isappaware);
        writer.writeBooleanValue("ismanaged", this.ismanaged);
        writer.writeDateValue("modifiedon", this.modifiedon);
        writer.writeObjectValue<Organization>("organizationid", this.organizationid);
        writer.writeDateValue("overwritetime", this.overwritetime);
        writer.writeBooleanValue("showhome", this.showhome);
        writer.writeBooleanValue("showpinned", this.showpinned);
        writer.writeBooleanValue("showrecents", this.showrecents);
        writer.writeObjectValue<Systemuser>("siteMap_createdby", this.siteMap_createdby);
        writer.writeObjectValue<Systemuser>("siteMap_createdonbehalfby", this.siteMap_createdonbehalfby);
        writer.writeObjectValue<Systemuser>("siteMap_modifiedby", this.siteMap_modifiedby);
        writer.writeObjectValue<Systemuser>("siteMap_modifiedonbehalfby", this.siteMap_modifiedonbehalfby);
        writer.writeStringValue("sitemapid", this.sitemapid);
        writer.writeStringValue("sitemapidunique", this.sitemapidunique);
        writer.writeStringValue("sitemapname", this.sitemapname);
        writer.writeStringValue("sitemapnameunique", this.sitemapnameunique);
        writer.writeStringValue("sitemapxml", this.sitemapxml);
        writer.writeStringValue("sitemapxmlmanaged", this.sitemapxmlmanaged);
        writer.writeStringValue("solutionid", this.solutionid);
        writer.writeNumberValue("versionnumber", this.versionnumber);
    };
    /**
     * Gets the showhome property value. 
     * @returns a boolean
     */
    public get showhome() {
        return this._showhome;
    };
    /**
     * Sets the showhome property value. 
     * @param value Value to set for the showhome property.
     */
    public set showhome(value: boolean | undefined) {
        this._showhome = value;
    };
    /**
     * Gets the showpinned property value. 
     * @returns a boolean
     */
    public get showpinned() {
        return this._showpinned;
    };
    /**
     * Sets the showpinned property value. 
     * @param value Value to set for the showpinned property.
     */
    public set showpinned(value: boolean | undefined) {
        this._showpinned = value;
    };
    /**
     * Gets the showrecents property value. 
     * @returns a boolean
     */
    public get showrecents() {
        return this._showrecents;
    };
    /**
     * Sets the showrecents property value. 
     * @param value Value to set for the showrecents property.
     */
    public set showrecents(value: boolean | undefined) {
        this._showrecents = value;
    };
    /**
     * Gets the siteMap_createdby property value. 
     * @returns a systemuser
     */
    public get siteMap_createdby() {
        return this._siteMap_createdby;
    };
    /**
     * Sets the siteMap_createdby property value. 
     * @param value Value to set for the SiteMap_createdby property.
     */
    public set siteMap_createdby(value: Systemuser | undefined) {
        this._siteMap_createdby = value;
    };
    /**
     * Gets the siteMap_createdonbehalfby property value. 
     * @returns a systemuser
     */
    public get siteMap_createdonbehalfby() {
        return this._siteMap_createdonbehalfby;
    };
    /**
     * Sets the siteMap_createdonbehalfby property value. 
     * @param value Value to set for the SiteMap_createdonbehalfby property.
     */
    public set siteMap_createdonbehalfby(value: Systemuser | undefined) {
        this._siteMap_createdonbehalfby = value;
    };
    /**
     * Gets the siteMap_modifiedby property value. 
     * @returns a systemuser
     */
    public get siteMap_modifiedby() {
        return this._siteMap_modifiedby;
    };
    /**
     * Sets the siteMap_modifiedby property value. 
     * @param value Value to set for the SiteMap_modifiedby property.
     */
    public set siteMap_modifiedby(value: Systemuser | undefined) {
        this._siteMap_modifiedby = value;
    };
    /**
     * Gets the siteMap_modifiedonbehalfby property value. 
     * @returns a systemuser
     */
    public get siteMap_modifiedonbehalfby() {
        return this._siteMap_modifiedonbehalfby;
    };
    /**
     * Sets the siteMap_modifiedonbehalfby property value. 
     * @param value Value to set for the SiteMap_modifiedonbehalfby property.
     */
    public set siteMap_modifiedonbehalfby(value: Systemuser | undefined) {
        this._siteMap_modifiedonbehalfby = value;
    };
    /**
     * Gets the sitemapid property value. 
     * @returns a string
     */
    public get sitemapid() {
        return this._sitemapid;
    };
    /**
     * Sets the sitemapid property value. 
     * @param value Value to set for the sitemapid property.
     */
    public set sitemapid(value: string | undefined) {
        this._sitemapid = value;
    };
    /**
     * Gets the sitemapidunique property value. 
     * @returns a string
     */
    public get sitemapidunique() {
        return this._sitemapidunique;
    };
    /**
     * Sets the sitemapidunique property value. 
     * @param value Value to set for the sitemapidunique property.
     */
    public set sitemapidunique(value: string | undefined) {
        this._sitemapidunique = value;
    };
    /**
     * Gets the sitemapname property value. 
     * @returns a string
     */
    public get sitemapname() {
        return this._sitemapname;
    };
    /**
     * Sets the sitemapname property value. 
     * @param value Value to set for the sitemapname property.
     */
    public set sitemapname(value: string | undefined) {
        this._sitemapname = value;
    };
    /**
     * Gets the sitemapnameunique property value. 
     * @returns a string
     */
    public get sitemapnameunique() {
        return this._sitemapnameunique;
    };
    /**
     * Sets the sitemapnameunique property value. 
     * @param value Value to set for the sitemapnameunique property.
     */
    public set sitemapnameunique(value: string | undefined) {
        this._sitemapnameunique = value;
    };
    /**
     * Gets the sitemapxml property value. 
     * @returns a string
     */
    public get sitemapxml() {
        return this._sitemapxml;
    };
    /**
     * Sets the sitemapxml property value. 
     * @param value Value to set for the sitemapxml property.
     */
    public set sitemapxml(value: string | undefined) {
        this._sitemapxml = value;
    };
    /**
     * Gets the sitemapxmlmanaged property value. 
     * @returns a string
     */
    public get sitemapxmlmanaged() {
        return this._sitemapxmlmanaged;
    };
    /**
     * Sets the sitemapxmlmanaged property value. 
     * @param value Value to set for the sitemapxmlmanaged property.
     */
    public set sitemapxmlmanaged(value: string | undefined) {
        this._sitemapxmlmanaged = value;
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
